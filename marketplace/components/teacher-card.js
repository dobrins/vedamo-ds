class Teacher extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="home-card br-3 mt-4 position-relative ">
            <div class="home-card-grid flex">
                <div>
                    <div class="position-relative inline-block">
                        <a href="#" class="avatar avatar-3xl">
                            <img src='../public/avatar.png' alt="" />
                        </a>
                        <a href="#" class="play-video btn btn-secondary btn-xl btn-circle btn-play-video bottom-0 position-absolute">
                            <i class="i icon-play-circle"></i>
                        </a>
                    </div>
                </div>
                <div class="home-card-description flex-1 flex flex-column gap-0">
                    <a class="txt-bold fz-text-xl stretched-link txt-decoration-none" href="#">Andrew The Botanic</a>
                    <div class="flex flex-center-v gap-2">
                        <div class="starRating" style="--rating: 4;"></div>
                        <span class="fz-text-s txt-default-600">of <span class="txt-bold">197</span> reviews</span>
                    </div>
                    <div class="flex gap-1 mt-4">
                        <span class="badge badge-default">English</span>
                        <span class="badge badge-default">Nestinaria</span>
                    </div>
                    <p class="txt-default-600">A short sen tence-like paragraph sharing more about the tutors' background.</p>
                    <div class="mt-4 flex flex-wrap gap-1">
                        <language-badge></language-badge>
                        <language-badge></language-badge>
                    </div>
                </div>
                <div class="divider-vertical home-divider bg-default-250 hide-on-mobile"></div>
                <div class="flex flex-center-v home-card-price">
                    <div class="flex">
                        <span class="fz-display-m txt-bold line-height-1">$35</span>
                        <span class="fz-text-s txt-default-550 line-height-1 pb-1">/1 hr session</span>
                    </div>
                </div>
            </div>
        </div>
        `;
      }
  }



customElements.define('teacher-card', Teacher);