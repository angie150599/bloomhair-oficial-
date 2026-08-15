(function () {
  const path = location.pathname.split('/').pop() || 'index.html';

  function buildHeader() {
    const isHome = path === '' || path === 'index.html';
    const items = window.BH.nav.map(l => `<a class="nav-link ${path === l.path ? 'active' : ''}" href="${l.path}">${l.label}${l.hasMenu ? ' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><polyline points="6 9 12 15 18 9"/></svg>' : ''}</a>`).join('');
    return `
      <div class="header-inner">
        <button class="mobile-toggle" aria-label="Menú" onclick="BH.toggleMobile(true)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <a href="index.html" class="logo">
          <div>
            <div class="logo-title">BLOOM<b>HAIR</b></div>
            <div class="logo-sub">HAIR EXTENSIONS</div>
          </div>
        </a>
        <nav class="nav-main" id="nav-main">${items}</nav>
        <div class="nav-icons">
          <button class="icon-btn" aria-label="Buscar"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
          <button class="icon-btn" aria-label="Cuenta"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></button>
          <button class="icon-btn" aria-label="Carrito"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><span class="cart-badge">0</span></button>
        </div>
      </div>
      <div class="mega-menu" id="mega-menu">
        <div class="mega-grid">
          <div>
            <div class="mega-img"><img src="${window.BH.founder.shop}" alt="BloomHair"></div>
            <p style="margin-top:20px;font-size:11px;letter-spacing:.28em;color:#5a4a3a">DESCUBRE NUESTRAS EXTENSIONES PREMIUM</p>
          </div>
          <div>
            <h4 class="mega-title">Hair Extensions</h4>
            <ul class="mega-list">${window.BH.categories.map(c => `<li><a href="coleccion.html?slug=${c.slug}">${c.name}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h4 class="mega-title">Recursos</h4>
            <ul class="mega-list">
              <li><a href="quiz.html">Calcula tu presupuesto</a></li>
              <li><a href="historia.html">Nuestra Historia</a></li>
              <li><a href="clases.html">Clases y Formación</a></li>
              <li><a href="galeria.html">Galería</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  function buildFooter() {
    return `
      <div class="footer-newsletter">
        <div class="footer-nl-inner">
          <div>
            <h3>Suscríbete a nuestra newsletter</h3>
            <p>Recibe las últimas colecciones, nuevos tonos y ofertas exclusivas directamente en tu correo.</p>
          </div>
          <form class="nl-form" onsubmit="BH.subscribe(event)">
            <input class="nl-input" type="email" required placeholder="tu@email.com">
            <button class="btn btn-primary" type="submit">SUSCRIBIRME</button>
          </form>
        </div>
      </div>
      <div class="footer-main">
        <div class="footer-col">
          <div style="font-family:'Cormorant Garamond',serif;font-size:26px;letter-spacing:.28em;color:#F5EFDF;margin-bottom:8px">BLOOM<b>HAIR</b></div>
          <div style="font-size:10px;letter-spacing:.4em;color:#c9a97a;margin-bottom:20px">HAIR EXTENSIONS</div>
          <p>Extensiones Premium de Cabello Natural. Calidad profesional 100% cabello Remy.</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="Email"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h5>TIENDA</h5>
          <ul>
            <li><a href="coleccion.html?slug=genius-weft">Genius Weft</a></li>
            <li><a href="coleccion.html?slug=adesivas">Adesivas</a></li>
            <li><a href="coleccion.html?slug=adesivas-invisibles">Adesivas Invisibles</a></li>
            <li><a href="shop.html">Todo el catálogo</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>EMPRESA</h5>
          <ul>
            <li><a href="historia.html">Historia</a></li>
            <li><a href="clases.html">Clases</a></li>
            <li><a href="galeria.html">Galería</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>CONTACTO</h5>
          <ul>
            <li>hola@bloomhair.com</li>
            <li>+34 900 000 000</li>
            <li>Madrid, España</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p>© ${new Date().getFullYear()} BloomHair. Todos los derechos reservados.</p>
          <div><a href="#">Privacidad</a><a href="#">Términos</a><a href="#">Envíos</a></div>
        </div>
      </div>
    `;
  }

  function buildMobile() {
    const items = window.BH.nav.map(l => `<a href="${l.path}">${l.label}</a>`).join('');
    return `
      <div class="mobile-drawer-header">
        <div style="font-family:'Cormorant Garamond',serif;font-size:22px;letter-spacing:.28em">BLOOM<b>HAIR</b></div>
        <button onclick="BH.toggleMobile(false)" aria-label="Cerrar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="mobile-nav">${items}</div>
    `;
  }

  window.BH.toggleMobile = function (open) {
    const d = document.getElementById('mobile-drawer');
    if (d) d.classList.toggle('open', open);
  };

  window.BH.subscribe = function (e) {
    e.preventDefault();
    e.target.reset();
    window.BH.toast('¡Suscripción confirmada!', 'Gracias por unirte a BloomHair.');
  };

  window.BH.toast = function (title, desc) {
    const t = document.createElement('div');
    t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1B1210;color:#F5EFDF;padding:16px 20px;z-index:100;box-shadow:0 10px 30px rgba(0,0,0,.25);max-width:340px;animation:slidein .3s ease-out';
    t.innerHTML = `<div style="font-family:'Cormorant Garamond',serif;font-size:18px;margin-bottom:4px">${title}</div><div style="font-size:13px;color:#c4b8a3">${desc}</div>`;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  };

  document.addEventListener('DOMContentLoaded', function () {
    const h = document.getElementById('site-header');
    if (h) {
      h.innerHTML = buildHeader();
      if (path === '' || path === 'index.html') h.classList.add('transparent');

      // Mega menu on hover of SHOP
      const mm = document.getElementById('mega-menu');
      const shopLink = h.querySelector('a[href="shop.html"]');
      if (shopLink && mm) {
        shopLink.addEventListener('mouseenter', () => mm.classList.add('open'));
        h.addEventListener('mouseleave', () => mm.classList.remove('open'));
      }

      // Scroll effect for transparent header
      if (h.classList.contains('transparent')) {
        window.addEventListener('scroll', () => {
          h.classList.toggle('transparent', window.scrollY < 40);
        });
      }
    }
    const f = document.getElementById('site-footer');
    if (f) f.innerHTML = buildFooter();
    const m = document.getElementById('mobile-drawer');
    if (m) m.innerHTML = buildMobile();
  });
})();
