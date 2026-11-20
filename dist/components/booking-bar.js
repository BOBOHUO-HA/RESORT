import { L, localize } from '/pages/i18n.js';

const c = (en, zhCN, zhTW = zhCN) => localize(L(en, zhCN, zhTW));

class BookingBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form class="booking-bar" aria-label="${c('Check stay availability','查询住宿房况','查詢住宿房況')}" data-booking-form>
        <label><span>${c('Check-in','入住日期')}</span><input name="checkin" type="date" required></label>
        <label><span>${c('Check-out','退房日期')}</span><input name="checkout" type="date" required></label>
        <label><span>${c('Guests','宾客','賓客')}</span><select name="guests" aria-label="${c('Number of guests','宾客人数','賓客人數')}"><option value="1">${c('1 guest','1 位宾客','1 位賓客')}</option><option value="2" selected>${c('2 guests','2 位宾客','2 位賓客')}</option><option value="3">${c('3 guests','3 位宾客','3 位賓客')}</option><option value="4">${c('4 guests','4 位宾客','4 位賓客')}</option></select></label>
        <button class="button button--solid" type="submit">${c('Check Availability','查询房况','查詢房況')}</button>
        <p class="booking-message" role="status" aria-live="polite"></p>
      </form>`;
    const form = this.querySelector('form');
    const checkin = form.elements.checkin;
    const checkout = form.elements.checkout;
    const today = new Date();
    const iso = date => date.toISOString().split('T')[0];
    checkin.min = iso(today);
    checkin.addEventListener('change', () => {
      const next = new Date(`${checkin.value}T12:00:00`); next.setDate(next.getDate() + 1);
      checkout.min = iso(next); if (!checkout.value || checkout.value <= checkin.value) checkout.value = iso(next);
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const query = new URLSearchParams(new FormData(form));
      window.location.href = `/book/?${query}`;
    });
  }
}
customElements.define('booking-bar', BookingBar);
