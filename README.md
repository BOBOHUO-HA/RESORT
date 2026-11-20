# Pousada do Silêncio · 竹灣隱舍

Production-ready multilingual static website for the Pousada do Silêncio boutique hotel concept in Coloane, Macao.

## Production source

The finalized website is stored in `dist/`. It is a buildless static site containing HTML, CSS, native JavaScript modules and local image assets.

## GitHub Pages preparation

The default project Pages URL is:

`https://bobohuo-ha.github.io/RESORT/`

The finalized `dist/` source uses domain-root paths. The preparation script copies it to a temporary deployment directory and prefixes local URLs with `/RESORT/` without modifying `dist/`:

```bash
node scripts/prepare-github-pages.mjs
```

Prepared output is written to `build/github-pages/` and validated for:

- all 29 HTML pages;
- local CSS, JavaScript and image references;
- GitHub Pages project-path compatibility;
- absence of unprefixed root URLs.

The workflow at `.github/workflows/deploy-pages.yml` deploys that generated directory after changes reach `main`. GitHub Pages must use **GitHub Actions** as its source.

## Local preview

The original production build can be served locally without transformation:

```bash
python3 -m http.server 8080 --directory dist
```

Open `http://localhost:8080/`.

## Prototype limitations

Room availability, reservations, payments, inventory, workshop capacity and fulfillment remain simulated browser-side prototype functionality. No real payment or hotel-management backend is connected.
