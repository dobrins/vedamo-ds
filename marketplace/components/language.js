class Language extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <span class="br-5 border-default-250 ph-3 pv-1 fz-text-xs">
                <span class="txt-semibold">Spanish</span> <em class="txt-default-500">(Native)</em>
            </span>
        `;
      }
  }



customElements.define('language-badge', Language);