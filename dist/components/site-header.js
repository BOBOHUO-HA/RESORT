import { t, languages, getLanguage, setLanguage, startI18n } from '/pages/i18n.js';

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const lang = getLanguage();
    const menuOpen = lang === 'en' ? 'Open menu' : lang === 'zh-CN' ? '打开菜单' : '打開選單';
    const menuClose = lang === 'en' ? 'Close menu' : lang === 'zh-CN' ? '关闭菜单' : '關閉選單';
    const languageButtons = () => languages.map(item => `<button type="button" data-lang="${item.code}" aria-pressed="${item.code === lang}" aria-label="${item.label}">${item.short}</button>`).join('');
    this.innerHTML = `
      <header class="site-header" data-header><div class="site-header__inner">
        <a class="brand" href="/" aria-label="Pousada do Silêncio home"><img src="/public/images/brand/logo-lockup.png" alt="竹灣隱舍 · Pousada do Silêncio" width="150" height="100"></a>
        <nav class="desktop-nav" aria-label="Primary navigation"><a href="/hotel/" data-nav="hotel">${t('nav.hotel')}</a><a href="/rooms/" data-nav="rooms">${t('nav.rooms')}</a><a href="/journeys/" data-nav="journeys">${t('nav.journeys')}</a><a href="/experiences/" data-nav="experiences">${t('nav.experiences')}</a><a href="/shop/" data-nav="shop">${t('nav.shop')}</a><a href="/coloane/" data-nav="coloane">${t('nav.coloane')}</a><a href="/find-your-scent/" data-nav="find-your-scent">${t('nav.scent')}</a></nav>
        <div class="header-actions"><div class="language-switcher" aria-label="${t('nav.language')}">${languageButtons()}</div><a class="button button--small header-book" href="/book/">${t('nav.book')}</a></div>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${menuOpen}"><span></span><span></span></button>
      </div></header>
      <div class="mobile-menu" id="mobile-menu" hidden><nav aria-label="Mobile navigation"><a href="/hotel/">${t('nav.hotel')}</a><a href="/rooms/">${t('nav.rooms')}</a><a href="/journeys/">${t('nav.journeys')}</a><a href="/experiences/">${t('nav.experiences')}</a><a href="/shop/">${t('nav.shop')}</a><a href="/coloane/">${t('nav.coloane')}</a><a href="/find-your-scent/">${t('nav.scent')}</a><a href="/book/">${t('nav.book')}</a></nav><div class="language-switcher language-switcher--mobile" aria-label="${t('nav.language')}">${languageButtons()}</div></div>`;
    const header = this.querySelector('[data-header]'); const button = this.querySelector('.menu-toggle'); const menu = this.querySelector('.mobile-menu');
    const section = window.location.pathname.split('/').filter(Boolean)[0] || 'home'; this.querySelector(`[data-nav="${section}"]`)?.setAttribute('aria-current', 'page');
    this.querySelectorAll('[data-lang]').forEach(control => control.addEventListener('click', () => { setLanguage(control.dataset.lang); window.location.reload(); }));
    const setHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    const close = (restoreFocus = false) => { button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', menuOpen); menu.hidden = true; document.body.classList.remove('menu-open'); if (restoreFocus) button.focus(); };
    button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') === 'true'; if(open){close();return;} button.setAttribute('aria-expanded', 'true'); button.setAttribute('aria-label', menuClose); menu.hidden = false; document.body.classList.add('menu-open'); menu.querySelector('a')?.focus(); });
    menu.addEventListener('click', event => { if (event.target.matches('a')) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) close(true); if(event.key==='Tab'&&!menu.hidden){const focusable=[...menu.querySelectorAll('a,button')];const first=focusable[0],last=focusable.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}} });
    window.addEventListener('resize',()=>{if(window.innerWidth>1120&&!menu.hidden)close();}); window.addEventListener('scroll', setHeader, { passive: true }); setHeader(); startI18n();
  }
}
customElements.define('site-header', SiteHeader);
