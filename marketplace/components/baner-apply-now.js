class BannerApplyNow extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="bg-default-850 pv-10 become-tutor">
            <div class="container-m">
                <div class="flex flex-center flex-column">
                    <h5 class="fz-display-s txt-semibold txt-center txt-default-0">Start tutoring with VEDAMO</h5>
                    <button class="mt-5 btn btn-l bg-mp-gradient">Apply</button>
                </div>
            </div>
        </div>
        `;
      }
  }



customElements.define('banner-apply-now-component', BannerApplyNow);