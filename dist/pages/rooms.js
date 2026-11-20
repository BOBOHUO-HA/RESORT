import { themes, roomTypes, roomOffers, views, formatPrice } from '../data/rooms.js';

const themeByKey = key => themes.find(theme => theme.key === key);
const roomByKey = key => roomTypes.find(room => room.key === key);

function setupViewExplorer(root) {
  if (!root) return;
  root.innerHTML = `
    <div class="view-explorer__choices" aria-label="Choose a view preview">
      ${views.map((view, index) => `<button type="button" data-view="${view.key}" aria-pressed="${index === 0}"><span>0${index + 1}</span><strong>${view.name}</strong><small>${view.description}</small></button>`).join('')}
      <p>Views are subject to room availability and orientation. Exact availability is confirmed during booking.</p>
    </div>
    <figure class="view-explorer__visual">
      <img src="${views[0].image}" alt="Watercolour Window A study showing timber shutters opening toward Coloane streets and hills" data-view-image fetchpriority="high" decoding="async">
      <figcaption data-view-caption>${views[0].name}</figcaption>
    </figure>`;

  const image = root.querySelector('[data-view-image]');
  const caption = root.querySelector('[data-view-caption]');
  root.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
    const view = views.find(item => item.key === button.dataset.view);
    root.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    image.classList.add('is-changing');
    window.setTimeout(() => {
      image.src = view.image;
      image.alt = `Watercolour window study: ${view.name}. ${view.description}`;
      caption.textContent = view.name;
      image.classList.remove('is-changing');
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180);
  }));
}

function renderRoomsIndex(root) {
  let selectedTheme = '';
  const atmosphereList = root.querySelector('[data-atmosphere-list]');
  const roomList = root.querySelector('[data-room-list]');
  const status = root.querySelector('[data-atmosphere-status]');

  atmosphereList.innerHTML = themes.map((theme, index) => `
    <article class="theme-editorial theme-editorial--${theme.key}">
      <div class="theme-editorial__image"><img src="${theme.image}" alt="Official watercolour illustration of the ${theme.name} room atmosphere" loading="lazy" decoding="async"></div>
      <div class="theme-editorial__body">
        <p class="eyebrow">Atmosphere 0${index + 1}</p>
        <h3>${theme.name}</h3>
        <p class="theme-editorial__mood">${theme.mood}</p>
        <p>${theme.description}</p>
        <p class="theme-editorial__scent"><span>Optional scent direction</span>${theme.scent}</p>
        <button class="text-link" type="button" data-theme-choice="${theme.key}" aria-pressed="false">Explore ${theme.name} <span>↘</span></button>
      </div>
    </article>`).join('');

  roomList.innerHTML = roomOffers.map((room, index) => {
    const slug = room.fragranceFree ? 'king' : room.slug;
    const feature = room.fragranceFree ? '<span class="room-offer__label">No added fragrance products</span>' : '';
    const cta = room.fragranceFree ? 'Explore Fragrance-Free King' : `Explore ${room.shortName} Room`;
    return `
      <article class="room-offer room-offer--${room.tone}" style="--offer-index:${index}">
        <div class="room-offer__image"><img src="${room.image}" alt="Official watercolour axonometric illustration of the ${room.name}" loading="lazy" decoding="async"></div>
        <div class="room-offer__body">
          <p class="eyebrow">Room type ${String(index + 1).padStart(2, '0')}</p>
          ${feature}<h3>${room.name}</h3><p>${room.description}</p>
          <dl><div><dt>Area</dt><dd>${room.size}</dd></div><div><dt>Guests</dt><dd>${room.guests}</dd></div><div><dt>Bed</dt><dd>${room.bed}</dd></div><div><dt>From</dt><dd>${formatPrice(room.price)}</dd></div></dl>
          <a class="button button--outline" href="/rooms/${slug}/${room.fragranceFree ? '?fragrance=free' : ''}" data-room-link data-base-href="/rooms/${slug}/${room.fragranceFree ? '?fragrance=free' : ''}">${cta}</a>
        </div>
      </article>`;
  }).join('');

  root.querySelectorAll('[data-theme-choice]').forEach(button => button.addEventListener('click', () => {
    selectedTheme = button.dataset.themeChoice;
    const theme = themeByKey(selectedTheme);
    root.querySelectorAll('[data-theme-choice]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    root.querySelectorAll('[data-room-link]').forEach(link => {
      const url = new URL(link.dataset.baseHref, window.location.origin);
      url.searchParams.set('theme', selectedTheme);
      link.href = `${url.pathname}${url.search}`;
    });
    status.textContent = `${theme.name} atmosphere selected. Now choose the room type that suits your stay.`;
    root.querySelector('#find-your-room')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }));

  root.querySelector('[data-comparison]').innerHTML = roomTypes.map(room => `
    <div class="comparison-row"><strong>${room.shortName}</strong><span data-label="Area">${room.size}</span><span data-label="Bed">${room.bed}</span><span data-label="Guests">${room.guests}</span><span data-label="Room-only rate">From ${formatPrice(room.price)}</span><a href="/rooms/${room.slug}/">View room <span>→</span></a></div>`).join('');
  setupViewExplorer(root.querySelector('[data-view-explorer]'));
}

function renderRoomDetail(root) {
  const room = roomByKey(document.body.dataset.room);
  if (!room) return;
  const params = new URLSearchParams(window.location.search);
  let selectedTheme = themeByKey(params.get('theme'))?.key || 'sea-breeze';
  let selectedFragrance = params.get('fragrance') === 'free' && room.key === 'king' ? 'fragrance-free' : 'recommended';
  const fragranceFree = selectedFragrance === 'fragrance-free';
  const displayName = fragranceFree ? 'Fragrance-Free King' : room.name;
  const displayPrice = fragranceFree ? 1000 : room.price;
  document.title = `${displayName} · Pousada do Silêncio`;

  root.innerHTML = `
    <section class="room-detail-hero" id="top" aria-labelledby="room-title">
      <div class="room-detail-hero__copy">
        <p class="eyebrow">Rooms at Pousada do Silêncio</p>
        <h1 id="room-title">${displayName}</h1>
        <p class="room-detail-hero__lead">${room.emotional}</p>
        ${fragranceFree ? '<p class="room-detail-hero__notice"><strong>Fragrance-free treatment</strong>No added fragrance products are placed in this room.</p>' : ''}
        <dl class="room-facts"><div><dt>Area</dt><dd>${room.size}</dd></div><div><dt>Guests</dt><dd>${room.guests}</dd></div><div><dt>Bed</dt><dd>${room.bed}</dd></div><div><dt>From</dt><dd>${formatPrice(displayPrice)}</dd></div></dl>
        <div class="button-row"><a class="button button--solid" href="/book/" data-book-link>Check Availability</a><a class="text-link" href="#room-features">Explore Room Features <span>↘</span></a></div>
      </div>
      <figure class="room-detail-hero__art"><img src="${room.image}" alt="Official watercolour axonometric illustration of the ${room.name}" fetchpriority="high" decoding="async"><figcaption>Room study · ${room.size}</figcaption></figure>
    </section>

    <section class="section room-features-section" id="room-features" aria-labelledby="features-title">
      <div><p class="eyebrow">A closer look</p><h2 id="features-title">Quiet Details,<br>Considered Slowly</h2><p>${room.description}</p></div>
      <ul>${room.features.map((feature, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${feature}</li>`).join('')}</ul>
    </section>

    <section class="theme-preview-section" aria-labelledby="theme-preview-title">
      <div class="section theme-preview-section__head"><div><p class="eyebrow">Visual character, not inventory</p><h2 id="theme-preview-title">Choose an Atmosphere</h2></div><p>Preview how this ${room.shortName} Room might feel. Your room type stays the same.</p></div>
      <div class="section theme-preview">
        <div class="theme-preview__choices" aria-label="Preview a room atmosphere">
          ${themes.map(theme => `<button type="button" data-detail-theme="${theme.key}" aria-pressed="${theme.key === selectedTheme}"><img src="${theme.image}" alt=""><span><strong>${theme.name}</strong><small>${theme.mood}</small></span></button>`).join('')}
        </div>
        <figure class="theme-preview__visual"><img data-theme-image src="${themeByKey(selectedTheme).image}" alt="${themeByKey(selectedTheme).name} atmosphere preview"><figcaption data-theme-caption>Viewing a ${room.shortName} Room with a ${themeByKey(selectedTheme).name} atmosphere.</figcaption></figure>
      </div>
      <p class="section fragrance-note"><strong>Fragrance is always optional.</strong> Room atmosphere and fragrance preference are separate choices.</p>
    </section>

    <section class="section detail-view-section" aria-labelledby="detail-view-title">
      <div class="detail-section-heading"><p class="eyebrow">Subject to orientation</p><h2 id="detail-view-title">Wake Up to Coloane</h2></div>
      <div class="view-explorer" data-view-explorer></div>
    </section>

    <section class="make-yours" aria-labelledby="make-yours-title">
      <div class="section make-yours__inner"><div><p class="eyebrow">Preference preview</p><h2 id="make-yours-title">Make It Yours</h2><p>Fragrance is a separate, optional preference. Final requests are confirmed during booking.</p></div>
      <div class="fragrance-options" aria-label="Preview fragrance preference">
        ${[
          ['recommended', 'Recommended scent', 'The atmosphere’s suggested scent direction.'],
          ['light', 'Light fragrance', 'A softer expression of the selected scent.'],
          ['remove', 'Remove where practical', 'Request removal of added fragrance products.'],
          ['fragrance-free', 'Prefer fragrance-free accommodation', 'Prioritise a designated fragrance-free King Room.']
        ].map(([key, name, detail]) => `<button type="button" data-fragrance="${key}" aria-pressed="${key === selectedFragrance}"><strong>${name}</strong><span>${detail}</span></button>`).join('')}
      </div></div>
    </section>

    <section class="room-detail-cta"><div><p class="eyebrow">Your room, your pace</p><h2>Continue Toward<br>Your Stay</h2><p data-selection-summary>${room.shortName} Room · ${themeByKey(selectedTheme).name} atmosphere · ${selectedFragrance.replaceAll('-', ' ')}</p><a class="button button--solid" href="/book/" data-book-link>Book This Room</a></div><img src="${themeByKey(selectedTheme).image}" alt="" data-cta-image></section>
    <a class="room-mobile-book" href="/book/" data-book-link>Check Availability</a>`;

  const updateBookingLinks = () => {
    const bookingRoom = room.key === 'king' && selectedFragrance === 'fragrance-free' ? 'king-fragrance-free' : room.key;
    const query = new URLSearchParams({ room: bookingRoom, theme: selectedTheme, fragrance: selectedFragrance });
    root.querySelectorAll('[data-book-link]').forEach(link => { link.href = `/book/?${query}`; });
    root.querySelector('[data-selection-summary]').textContent = `${room.shortName} Room · ${themeByKey(selectedTheme).name} atmosphere · ${selectedFragrance.replaceAll('-', ' ')}`;
  };

  const themeImage = root.querySelector('[data-theme-image]');
  const themeCaption = root.querySelector('[data-theme-caption]');
  root.querySelectorAll('[data-detail-theme]').forEach(button => button.addEventListener('click', () => {
    selectedTheme = button.dataset.detailTheme;
    const theme = themeByKey(selectedTheme);
    root.querySelectorAll('[data-detail-theme]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    themeImage.src = theme.image;
    themeImage.alt = `${theme.name} atmosphere preview for the ${room.shortName} Room`;
    themeCaption.textContent = `Viewing a ${room.shortName} Room with a ${theme.name} atmosphere.`;
    root.querySelector('[data-cta-image]').src = theme.image;
    updateBookingLinks();
  }));

  root.querySelectorAll('[data-fragrance]').forEach(button => button.addEventListener('click', () => {
    selectedFragrance = button.dataset.fragrance;
    root.querySelectorAll('[data-fragrance]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    updateBookingLinks();
  }));
  setupViewExplorer(root.querySelector('[data-view-explorer]'));
  updateBookingLinks();
}

const indexRoot = document.querySelector('[data-rooms-index]');
const detailRoot = document.querySelector('[data-room-detail]');
if (indexRoot) renderRoomsIndex(indexRoot);
if (detailRoot) renderRoomDetail(detailRoot);
