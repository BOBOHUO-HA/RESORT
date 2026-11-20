import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(projectRoot, 'dist');
const outputRoot = path.join(projectRoot, 'build', 'github-pages');
const basePath = '/RESORT';
const routeRoots = [
  'public', 'styles', 'components', 'pages', 'data', 'hotel', 'rooms',
  'journeys', 'experiences', 'shop', 'coloane', 'find-your-scent',
  'book', 'reservation', 'gallery', 'contact'
];
const routePattern = routeRoots.join('|');

if (!fs.existsSync(path.join(sourceRoot, 'index.html'))) {
  throw new Error('The finalized dist/index.html production entry is missing.');
}

fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(path.dirname(outputRoot), { recursive: true });
fs.cpSync(sourceRoot, outputRoot, { recursive: true });

const files = [];
const walk = directory => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(filename);
    else files.push(filename);
  }
};
walk(outputRoot);

const prefixPaths = source => {
  let result = source;

  // HTML attributes, including markup embedded inside JavaScript templates.
  result = result.replace(
    /\b(href|src|action)=(["'])\/(?!\/|RESORT(?:\/|["']))/g,
    `$1=$2${basePath}/`
  );

  // Root-level home links such as href="/".
  result = result.replace(
    /\b(href|src|action)=(["'])\/\2/g,
    `$1=$2${basePath}/$2`
  );

  // JavaScript module imports, navigation targets and local asset strings.
  const localPath = new RegExp(`(["'\\x60])\\/(?=(?:${routePattern})(?:\\/|[?#]))`, 'g');
  result = result.replace(localPath, `$1${basePath}/`);

  // Home links passed to the shared button renderer are plain JavaScript
  // strings rather than href attributes.
  result = result.replace(
    /\bbutton\((['"])\/\1(?=\s*,)/g,
    `button($1${basePath}/$1`
  );

  // On a project Pages URL, the repository name is the first pathname
  // segment. Remove it before the header determines the active section.
  result = result.replace(
    "window.location.pathname.split('/').filter(Boolean)[0]",
    `window.location.pathname.replace(/^\\/${basePath.slice(1)}(?:\\/|$)/, '/').split('/').filter(Boolean)[0]`
  );

  // CSS url(...) references, if any are added later.
  result = result.replace(
    /url\((['"]?)\/(?!\/|RESORT(?:\/|['"]?\)))/g,
    `url($1${basePath}/`
  );

  return result;
};

for (const filename of files) {
  if (!/\.(?:html|css|js)$/.test(filename)) continue;
  const source = fs.readFileSync(filename, 'utf8');
  fs.writeFileSync(filename, prefixPaths(source));
}

fs.writeFileSync(path.join(outputRoot, '.nojekyll'), '');

const outputFiles = [];
const walkOutput = directory => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) walkOutput(filename);
    else outputFiles.push(filename);
  }
};
walkOutput(outputRoot);

const missing = [];
const unprefixed = [];
const resolveReference = (filename, reference) => {
  // Template-literal references are assembled from validated data at runtime.
  // Their static prefix is still rewritten above, but they cannot be resolved
  // to a concrete file during this build-time check.
  if (reference.includes('${')) return;

  const clean = reference.split(/[?#]/, 1)[0];
  if (!clean || /^(?:https?:|mailto:|tel:|data:|javascript:)/.test(clean)) return;

  let target;
  if (clean.startsWith(`${basePath}/`)) {
    target = path.join(outputRoot, clean.slice(basePath.length + 1));
  } else if (clean.startsWith('/')) {
    unprefixed.push(`${path.relative(outputRoot, filename)} -> ${reference}`);
    return;
  } else {
    target = path.resolve(path.dirname(filename), clean);
  }

  if (!fs.existsSync(target) && !fs.existsSync(path.join(target, 'index.html'))) {
    missing.push(`${path.relative(outputRoot, filename)} -> ${reference}`);
  }
};

for (const filename of outputFiles) {
  if (!/\.(?:html|css|js)$/.test(filename)) continue;
  const source = fs.readFileSync(filename, 'utf8');
  const references = [];

  if (filename.endsWith('.html') || filename.endsWith('.js')) {
    for (const match of source.matchAll(/\b(?:href|src|action)=(["'])([^"']+)\1/g)) references.push(match[2]);
  }
  if (filename.endsWith('.js')) {
    for (const match of source.matchAll(/(?:from\s+|import\s*)(["'])([^"']+)\1/g)) references.push(match[2]);
    const localPath = new RegExp(`["'\\x60](\\/(?:${routePattern})(?:\\/|[?#])[^"'\\x60]*)`, 'g');
    for (const match of source.matchAll(localPath)) references.push(match[1]);
  }
  if (filename.endsWith('.css')) {
    for (const match of source.matchAll(/url\((?:["'])?([^"')]+)(?:["'])?\)/g)) references.push(match[1]);
  }

  for (const reference of references) resolveReference(filename, reference);
}

const htmlCount = outputFiles.filter(filename => filename.endsWith('.html')).length;
if (htmlCount !== 29) throw new Error(`Expected 29 HTML pages, found ${htmlCount}.`);
if (unprefixed.length) throw new Error(`Unprefixed root paths remain:\n${unprefixed.join('\n')}`);
if (missing.length) throw new Error(`Missing local targets:\n${missing.join('\n')}`);

console.log(`Prepared ${outputFiles.length} files for ${basePath}/ with ${htmlCount} HTML pages.`);
console.log(`Output: ${path.relative(projectRoot, outputRoot)}`);
