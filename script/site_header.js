const header_template = document.createElement('template');
header_template.innerHTML = `
   <style>
      .header {
         padding: 32px;
         column-width: 100%;
         min-height: 128px;
         background-color: var(--col_bg1);
         font-family: LTRenovate;
         font-size: 300%;
         text-wrap: nowrap;
         text-align: center;
         white-space: nowrap;
         overflow: hidden;
         color: var(--col-main3);
      }
      .top-bar {
         padding: 4px;
         padding-top: 0;
         display: flex;
         line-height: 1vw;
         min-height: 38px;
         flex-direction: row;
         flex-wrap: nowrap;
         justify-content: center;
         overflow: hidden;
         background: linear-gradient(to bottom, var(--col-main3) 15%, var(--col_bg1) 15%);
      }
      .top-bar > .page-button {
         --fac: 0%;
         border-radius: 0 0 1ex 1ex;
         padding: 4px 3% 4px;
         width: auto;
         line-height: 100%;
         margin-left: 4px;
         margin-right: 4px;
         background: var(--col-main3);
         font-family: LTRenovate;
         font-size: 200%;
         text-wrap: nowrap;
         text-align: center;
         text-decoration: none;
         color: var(--col-main1);
      }
      @keyframes button-anim {
         from {
            --fac: 0%;
         }
         to {
            --fac: 100%;
            text-shadow: 0 5px 4px var(--col-main1);
            color: var(--col-main3);
         }
      }
      .top-bar > .page-button:hover {
         --fac: 100%;
         background: linear-gradient(to top, color-mix(in srgb, var(--col-main3), var(--col-main1) 70%) var(--fac), var(--col-main3) var(--fac));
         animation-name: button-anim;
         animation-duration: 0.3s;
         animation-fill-mode: both;
      }
      .content-box {
         display: flex;
         flex-wrap: nowrap;
         flex-direction: row;
         height: 100vh;
         padding: 0.5ex;
      }
      .content-box > div {
         background-color: var(--col_bg1);
         padding: 0.5ex;
         height: 100%;
         margin: 0.5ex;
      }
   </style>
   <div class="header">Renny's Website</div>
   <div class="top-bar">
      <a class="page-button" href="/index.html">About</a>
      <a class="page-button" href="/pages/about.html">Temp</a>
      <a class="page-button" href="/pages/about.html">Temp</a>
      <a class="page-button" href="/pages/about.html">Temp</a>
   </div>
   <div class="content-box">
      <slot name="site-content"></slot>
   </div>
   <footer style="text-align: center; color: var(--col-main3);">copyright Serenity Skiff 2025</footer>
`;

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
   }
}

customElements.define('site-header', SiteHeader);
