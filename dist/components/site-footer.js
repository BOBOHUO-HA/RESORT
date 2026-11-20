import { t, languages, getLanguage, setLanguage } from '/pages/i18n.js';

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const lang = getLanguage();
    this.innerHTML = `<footer class="footer">
      <div class="footer__brand"><img src="/public/images/brand/logo-lockup.png" alt="竹灣隱舍 · Pousada do Silêncio" width="150" height="100"><div><strong>Pousada do Silêncio</strong><span>竹灣隱舍</span><small>Coloane, Macao</small></div></div>
      <div class="footer__links"><p>${t('footer.explore')}</p><a href="/hotel/">${t('nav.hotel')}</a><a href="/rooms/">${t('nav.rooms')}</a><a href="/journeys/">${t('nav.journeys')}</a><a href="/experiences/">${t('nav.experiences')}</a><a href="/shop/">${t('nav.shop')}</a><a href="/coloane/">${t('nav.coloane')}</a></div>
      <div class="footer__links"><p>${t('footer.practical')}</p><a href="/find-your-scent/">${t('nav.scent')}</a><a href="/book/">${t('nav.book')}</a><a href="/gallery/">${t('footer.gallery')}</a><a href="/contact/">${t('footer.contact')}</a><a href="/contact/#policies">${t('footer.policies')}</a><a href="#">Instagram</a></div>
      <form class="newsletter" data-newsletter><label for="footer-email">${t('footer.letters')}</label><p>${t('footer.note')}</p><div><input id="footer-email" type="email" placeholder="Email" required><button type="submit" aria-label="${lang === 'en' ? 'Join newsletter' : lang === 'zh-CN' ? '订阅酒店来信' : '訂閱酒店來信'}">→</button></div><small role="status"></small></form>
      <div class="footer-language"><span>${t('nav.language')}</span>${languages.map(item => `<button type="button" data-footer-lang="${item.code}" aria-pressed="${item.code === lang}">${item.label}</button>`).join('')}</div>
      <div class="footer__bottom"><span>${t('footer.copyright')}</span><span>${t('footer.line')}</span></div></footer>`;
    const form = this.querySelector('[data-newsletter]'); form.addEventListener('submit', event => { event.preventDefault(); form.querySelector('small').textContent = lang === 'en' ? 'Thank you. Your first letter will arrive quietly.' : lang === 'zh-CN' ? '谢谢。第一封信将安静抵达。' : '謝謝。第一封信將安靜抵達。'; form.reset(); });
    this.querySelectorAll('[data-footer-lang]').forEach(button => button.addEventListener('click', () => { setLanguage(button.dataset.footerLang); window.location.reload(); }));
  }
}
customElements.define('site-footer', SiteFooter);
