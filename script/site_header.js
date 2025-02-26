const header_template = document.createElement('template');
header_template.innerHTML = `
   <link rel="stylesheet" href="/style.css" type="text/css">
   <div class="header">Renny's Website</div>
   <nav class="top-bar" id="top-bar">
      <a id="about" class="page-tab" href="/index.html">About</a>
      <a id="p1" class="page-tab" href="/pages/about.html">Temp</a>
      <a id="p2" class="page-tab" href="/pages/about.html">Temp</a>
      <a id="p3" class="page-tab" href="/pages/about.html">Temp</a>
   </nav>
   <div class="content-box">
      <slot name="site-content"></slot>
   </div>
   <footer style="line-height: 10vw; text-align: center; font-size: 2vw; color: var(--col-main3);">copyright Serenity Skiff 2025</footer>
`;

// const active_page = header_template.id
// active_page.classList.add('page-button-active');

class SiteHeader extends HTMLElement
{
   constructor()
   {
      super();
   }

   connectedCallback()
   {
      const shadow_root = this.attachShadow({ mode: 'open' });
      shadow_root.appendChild(header_template.content);

      const active_page = shadow_root.getElementById(page_id);
      active_page.classList.add('page-tab-active');
   }
}

customElements.define('site-header', SiteHeader);
