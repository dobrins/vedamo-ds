class FooterRegister extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="bg-default-100 pv-6">
            <div class="container-m">
                <div class="flex flex-center-h">
                    <span class="fz-text-s txt-default-550">Powered by VEDAMO</span>
                </div>
            </div>
        </div>
        `;
      }
  }

customElements.define('footer-register-component', FooterRegister);