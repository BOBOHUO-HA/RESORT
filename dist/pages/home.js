import { atmospheres, rooms, journeys, experiences, products } from '../data/content.js';
import { L, localize } from './i18n.js';

const c = (en, zhCN, zhTW = zhCN) => localize(L(en, zhCN, zhTW));

const diningImage = document.querySelector('[data-dining-alt]');
if (diningImage) diningImage.alt = c(
  'Watercolor view of the second-floor restaurant with arched green windows, Portuguese tiles and Coloane coastal views',
  '二楼餐厅水彩图，绿色拱窗、葡式瓷砖与路环海景相映',
  '二樓餐廳水彩圖，綠色拱窗、葡式瓷磚與路環海景相映'
);

const atmosphereRoot = document.querySelector('[data-atmospheres]');
atmosphereRoot.innerHTML = atmospheres.map((item, index) => `
  <article class="atmosphere-card atmosphere-card--${item.key} reveal" style="--delay:${index * 90}ms">
    <div class="atmosphere-card__image"><img src="${item.image}" alt="Watercolour ${item.name.toLowerCase()} room atmosphere" loading="lazy" decoding="async"></div>
    <div class="atmosphere-card__number">0${index + 1}</div>
    <div class="atmosphere-card__copy"><p>${item.mood}</p><h3>${item.name}</h3><p>${item.description}</p><a class="text-link" href="/rooms/#atmospheres">Discover This Atmosphere <span>↗</span></a></div>
  </article>`).join('');

const roomRoot = document.querySelector('[data-rooms]');
roomRoot.innerHTML = rooms.map((room, index) => `
  <article class="room-card room-card--${room.tone} reveal" style="--delay:${index * 70}ms">
    <div class="room-card__plan"><img src="${room.image}" alt="Watercolour axonometric illustration of the ${room.name}" loading="lazy" decoding="async"><span>Room study / 0${index + 1}</span></div>
    <div class="room-card__body"><h3>${room.name}</h3><p>${room.size}<i></i>For ${room.guests}</p><a href="/rooms/${room.slug}/" aria-label="Explore ${room.name}">Explore Room <span>↗</span></a></div>
  </article>`).join('');

const journeyRoot = document.querySelector('[data-journeys]');
const journeyImageAlt = journey => journey.slug === 'nature-escape'
  ? c(
      'Watercolor coastal journey through shaded Coloane trails to Cheoc Van Beach',
      '从路环林荫步道走向竹湾海滩的水彩自然旅程',
      '從路環林蔭步道走向竹灣海灘的水彩自然旅程'
    )
  : c(
      'Watercolor cultural journey through Coloane Village, heritage shipyards and local craft',
      '穿行路环村落、历史船厂与本地手作的水彩文化旅程',
      '穿行路環村落、歷史船廠與本地手作的水彩文化旅程'
    );
journeyRoot.innerHTML = journeys.map((journey, index) => `
  <article class="journey-card journey-card--${journey.color} reveal" style="--delay:${index * 100}ms">
    <figure class="journey-card__media">
      <img src="${journey.image}" alt="${journeyImageAlt(journey)}" loading="lazy" decoding="async">
      <span aria-hidden="true">${journey.number}</span>
    </figure>
    <div class="journey-card__body">
      <div class="journey-card__route" aria-hidden="true"><svg viewBox="0 0 300 72"><path d="M8 ${52-index*6} C75 ${12+index*12}, 128 ${66-index*8}, 194 ${26+index*10} S270 22, 292 ${10+index*18}"/><circle cx="9" cy="${52-index*6}" r="5"/><circle cx="292" cy="${10+index*18}" r="5"/></svg></div>
      <p>Watercolour route · ${journey.number}</p><h3>${journey.title}</h3><p>${journey.detail}</p><a href="/journeys/${journey.slug}/" aria-label="Explore ${journey.title}">Open the route <span>↗</span></a>
    </div>
  </article>`).join('');

const experienceRoot = document.querySelector('[data-experiences]');
experienceRoot.innerHTML = experiences.map((item, index) => `
  <article class="experience reveal" style="--delay:${index * 80}ms">
    <span>0${index + 1}</span><div><p>${item.time}</p><h3>${item.title}</h3><p>${item.detail}</p></div><a href="/experiences/#${item.slug}" aria-label="Discover ${item.title}">↗</a>
  </article>`).join('');

const productRoot = document.querySelector('[data-products]');
productRoot.innerHTML = products.map((item, index) => `
  <article class="product product--${index + 1} reveal" style="--delay:${index * 65}ms">
    <div class="product__object"><span>${item.symbol}</span></div><p>${item.kind}</p><h3>${item.name}</h3>
  </article>`).join('');

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }) : null;
document.querySelectorAll('.reveal').forEach(element => observer ? observer.observe(element) : element.classList.add('is-visible'));

const scentResult = document.querySelector('[data-scent-result]');
const scentMessages = {
  forest: c('You may feel at home in Forest — quiet, shaded and grounded.','山林氛围也许最适合你——安静、林荫、沉稳。','山林氛圍也許最適合你——安靜、林蔭、沉穩。'),
  'sea-breeze': c('You may feel at home in Sea Breeze — open, coastal and light.','海风氛围也许最适合你——开阔、临海、轻盈。','海風氛圍也許最適合你——開闊、臨海、輕盈。'),
  nostalgia: c('You may feel at home in Nostalgia — warm, familiar and softly storied.','旧时光氛围也许最适合你——温暖、熟悉、充满故事。','舊時光氛圍也許最適合你——溫暖、熟悉、充滿故事。')
};
document.querySelectorAll('[data-scent-choice]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-scent-choice]').forEach(item => item.classList.toggle('is-selected', item === button));
  scentResult.textContent = scentMessages[button.dataset.scentChoice];
}));
