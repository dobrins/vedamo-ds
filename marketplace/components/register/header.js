class HeaderRegister extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav class="header blur-s flex">
            <div class="container">
                <div class="flex gap-6 flex-center-v">
                    <a href="#" class="logo flex">
                        <img src="../public/logo.svg" alt="" />
                    </a>
                    <a href="#" class="btn btn-tertiary">
                        <i class="i icon-arrow-left"></i>Back to home</a>  
                </div>
            </div>
        </nav>
        `;
      }
  }



customElements.define('header-register-component', HeaderRegister);