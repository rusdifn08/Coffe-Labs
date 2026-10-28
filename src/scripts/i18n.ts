import { translations } from '../data/translations';

export type Language = 'id' | 'en';

export function getActiveLanguage(): Language {
  if (typeof window === 'undefined') return 'id';
  
  // 1. Check URL query (?lang=en)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang === 'en' || urlLang === 'id') {
    return urlLang;
  }
  
  // 2. Check path (/en)
  if (window.location.pathname.startsWith('/en')) {
    return 'en';
  }

  // 3. Check localStorage
  const saved = localStorage.getItem('coffeelabs_lang');
  if (saved === 'en' || saved === 'id') {
    return saved;
  }

  return 'id';
}

export function setLanguage(lang: Language) {
  if (typeof window === 'undefined') return;

  // Persist choice
  localStorage.setItem('coffeelabs_lang', lang);
  document.documentElement.lang = lang;

  // Update Page Title & Description
  if (translations['meta.title'] && translations['meta.title'][lang]) {
    document.title = translations['meta.title'][lang];
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations['meta.desc'] && translations['meta.desc'][lang]) {
    metaDesc.setAttribute('content', translations['meta.desc'][lang]);
  }

  // Update all elements with data-i18n
  const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  // Update elements with data-i18n-html
  const htmlElements = document.querySelectorAll<HTMLElement>('[data-i18n-html]');
  htmlElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (key && translations[key] && translations[key][lang]) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Update Navbar Toggle Buttons (Desktop)
  const btnId = document.getElementById('lang-btn-id');
  const btnEn = document.getElementById('lang-btn-en');
  if (btnId && btnEn) {
    if (lang === 'id') {
      btnId.className = 'px-2.5 py-0.5 rounded-md bg-[#6B4423] text-white shadow-xs transition-colors cursor-pointer';
      btnEn.className = 'px-2.5 py-0.5 rounded-md text-[#8F857D] hover:text-[#332B25] transition-colors cursor-pointer';
    } else {
      btnEn.className = 'px-2.5 py-0.5 rounded-md bg-[#6B4423] text-white shadow-xs transition-colors cursor-pointer';
      btnId.className = 'px-2.5 py-0.5 rounded-md text-[#8F857D] hover:text-[#332B25] transition-colors cursor-pointer';
    }
  }

  // Update Navbar Toggle Buttons (Mobile)
  const mBtnId = document.getElementById('mobile-lang-btn-id');
  const mBtnEn = document.getElementById('mobile-lang-btn-en');
  if (mBtnId && mBtnEn) {
    if (lang === 'id') {
      mBtnId.className = 'px-3 py-1 rounded-full bg-[#6B4423] text-white transition-colors cursor-pointer';
      mBtnEn.className = 'px-3 py-1 rounded-full text-[#8F857D] hover:text-[#332B25] transition-colors cursor-pointer';
    } else {
      mBtnEn.className = 'px-3 py-1 rounded-full bg-[#6B4423] text-white transition-colors cursor-pointer';
      mBtnId.className = 'px-3 py-1 rounded-full text-[#8F857D] hover:text-[#332B25] transition-colors cursor-pointer';
    }
  }

  // Dispatch custom event for any listening component
  window.dispatchEvent(new CustomEvent('coffeelabs:langchange', { detail: { lang } }));
}

export function initI18n() {
  if (typeof window === 'undefined') return;

  const initialLang = getActiveLanguage();
  setLanguage(initialLang);

  // Bind desktop toggle
  const btnId = document.getElementById('lang-btn-id');
  const btnEn = document.getElementById('lang-btn-en');
  btnId?.addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('id');
  });
  btnEn?.addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('en');
  });

  // Bind mobile toggle
  const mBtnId = document.getElementById('mobile-lang-btn-id');
  const mBtnEn = document.getElementById('mobile-lang-btn-en');
  mBtnId?.addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('id');
  });
  mBtnEn?.addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('en');
  });
}

// Auto-run on DOMContentLoaded or immediately if already loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initI18n());
  } else {
    initI18n();
  }
}
