class Hero extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section class="hero-section txt-center txt-default-0 container pt-9">
            <div class="grid-container">
                <div class="hero-section-slogan col-m-6 col-m-offset-4 col-sm-8 col-sm-offset-3">
                    <h2 class="txt-bold">On-demand <br>1-on-1 Online Tutors</h2>
                </div>
            </div>
            
            <div class="hero-section-benefits flex inline-flex flex-column-to-row flex-center-h mt-6">
                <span class="hero-section-benefit txt-medium flex flex-center-v"><span class="txt-bold flex flex-center-v">20K+</span> Active Students</span>
                <span class="hero-section-benefit txt-medium flex flex-center-v"><span class="txt-bold flex flex-center-v">3K+</span> On-Demand Tutors</span>
                <span class="hero-section-benefit txt-medium flex flex-center-v"><span class="txt-bold flex flex-center-v">2M+</span> Complete Sessions</span> 
            </div>

            <div class="grid-container hidden-m">
                <div class="col-sm-6 col-sm-offset-4">
                    <div class="ph-9">
                        <button class="btn btn-xl btn-primary bg-mp-gradient full-width mt-6 mb-9" data-modal-target="#modal">Find a Tutor</button>
                    </div>
                </div>
            </div>

            
        
        </section>
        `;
      }
  }



customElements.define('hero-component', Hero);