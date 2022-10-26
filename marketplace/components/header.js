class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav class="header blur-s flex">
            <div class="container">
                <div class="grid-container">
                    <div class="col-sm-4 col-xs-6">
                        <div class="flex gap-3 flex-center-v">
                            <button class="btn btn-square btn-tertiary hidden-m mobile-nav-open" aria-controls="navigation-mobile" aria-expanded="false">
                                <span class="sr-only">Menu</span>
                                <i class="i icon-menu"></i>
                            </button>
                            <a href="#" class="logo flex">
                                <img src="../public/logo.svg" alt="" />
                            </a>
                            <a href="#" class="btn btn-primary nav-desktop bg-mp-gradient" data-modal-target="#modal">Find a Tutor</a>
                        </div>
                    </div>
                    
                    <div class="col-sm-4 hide-on-mobile">
                        <input type="search" class="form-el full-width search-input" placeholder="Search subject or keywords" />
                    </div>

                    <div class="col-sm-4 col-xs-6">
                        <div class="flex full-height flex-center-v">
                            <a href="#" class="btn btn-ghost txt-end txt-semibold txt-decoration-none hidden-m to-right">
                                <i class="i icon-log-in"></i>
                            </a>
                            <div class="nav-desktop to-right">
                                <div class="flex flex-center-v gap-4">
                                    <a href="#" class="txt-medium fz-text-s mr-3">Become a Tutor</a>
                                    <a href="#" class="btn btn-tertiary">Register</a>
                                    <a href="#" class="btn btn-secondary">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>   
        </nav>
        `;
      }
  }



customElements.define('header-component', Header);