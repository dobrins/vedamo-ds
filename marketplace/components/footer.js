class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="bg-default-100 pv-12">
            <div class="container-m">
                <div class="grid-container">
                    <div class="col-xs-6 col-sm-offset-3">
                        <div class="flex flex-center-v gap-6">
                            <a href="#" class="logo flex">
                                <img src="../public/logo.svg" alt="" />
                            </a>
                            <span class="fz-text-s txt-default-550">Powered by VEDAMO</span>
                        </div>
                    </div>
                </div>
                <div class="grid-container">
                    <div class="col-xs-6 col-sm-2 col-sm-offset-3 grid gap-6 mt-8">
                        <p class="txt-uppercase fz-text-s txt-semibold txt-default-500">Product</p>

                        <div class="grid">
                            <span class="txt-semibold">
                                <i class="i icon-arrow-right"></i>
                                <a href="#">For Tutors</a>
                            </span>
                            <span class="txt-semibold">
                                <i class="i icon-arrow-right"></i>
                                <a href="#">For Students</a>
                            </span>
                        
                        </div>
                        <span class="txt-medium fz-text-s flex flex-column gap-3">
                            <a href="#">FAQ</a>
                            <a href="#">Login</a>
                            <a href="#">Register</a>
                        </span>
                        
                    </div>
                    <div class="col-xs-6 col-sm-2 col-sm-offset-5 flex flex-column gap-6 mt-8">

                        <p class="txt-uppercase fz-text-s txt-semibold txt-default-500">Company</p>
                        <span class="txt-medium fz-text-s flex flex-column gap-3">
                            <a href="#">About</a>
                            <a href="#">Contacts</a>
                            <a href="#">Partnership</a>
                        </span>

                    </div>
                    <div class="col-sm-3 col-sm-offset-7 flex flex-column gap-6 mt-8">
                        <p class="txt-uppercase fz-text-s txt-semibold txt-default-500">Terms and Policies</p>
                        <span class="txt-medium fz-text-s flex flex-column gap-3">
                            <a href="#">Data Processing Addendum</a>
                            <a href="#">General Terms and Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </span>
                    </div>
                    <div class="col-sm-1 col-sm-offset-10 flex flex-column mt-8">
                        <p class="txt-uppercase fz-text-s txt-semibold txt-default-500">Social</p>
                        <div class="flex flex-row-to-column">
                            <a href="#" class="txt-decoration-none"><i class="i icon-social-youtube fz-text-xl txt-default-400"></i></a>
                            <a href="#" class="txt-decoration-none"><i class="i icon-social-twitter fz-text-xl txt-default-400"></i></a>
                            <a href="#" class="txt-decoration-none"><i class="i icon-social-facebook fz-text-xl txt-default-400"></i></a>
                            <a href="#" class="txt-decoration-none"><i class="i icon-social-twitter fz-text-xl txt-default-400"></i></a>
                        </div>
                    </div>
                </div>
                <div class="mt-13">
                    <p class="txt-center fz-text-xs txt-default-450">© 2022 <a href="#">Marketplace</a> is owned and operated by Vedamo EAD, Bulgaria.</p>
                </div>
            </div>
        </div>
        `;
      }
  }



customElements.define('footer-component', Footer);