class Stats extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="container bg-default-0 pb-4">
                <div class="grid-container">
                    
                    <div class="col-l-7">
                        <div class="flex">
                            
                            <div class="dashboard-card flex-1 b border-default-300 br-2 pv-4 position-relative aspect-1 bs-s flex flex-center-h flex-column">
                                
                                <div class="flex flex-center-h">
                                    <div class="dashboard-card-count bg-warning-mp txt-bold br-12 flex-center fz-text-l flex flex-center line-height-1">11</div>
                                </div>
                                
                                <a href="#" class="txt-semibold stretched-link txt-decoration-none block txt-center line-height-1">
                                Sessions for approval
                                </a>
                                <i class="i icon-arrow-up-right txt-warning-600 fz-display-xs dashboard-card-icon"></i>
                            
                            </div>

                            <div class="dashboard-card flex-1 b border-default-300 br-2 pv-4 position-relative aspect-1 bs-s flex flex-center-h flex-column">
                                
                                <div class="flex flex-center-h">
                                    <div class="dashboard-card-count bg-warning-mp txt-bold br-12 flex-center fz-text-l flex flex-center  line-height-1">11</div>
                                </div>
                                
                                <a href="#" class="txt-semibold stretched-link txt-decoration-none block txt-center mt-2 line-height-1">
                                New Messages
                                </a>
                                <i class="i icon-arrow-up-right txt-warning-600 fz-display-xs dashboard-card-icon"></i>
                            
                            </div>

                            <div class="dashboard-card flex-1 b border-default-300 br-2 pv-4 position-relative aspect-1 bs-s flex flex-center-h flex-column">
                                
                                <div class="flex flex-center-h">
                                    <div class="dashboard-card-count bg-dark-purple-mp txt-default-0 txt-bold br-12 flex-center fz-text-l flex flex-center line-height-1">11</div>
                                </div>
                                
                                <a href="#" class="txt-semibold stretched-link txt-decoration-none block txt-center mt-2 line-height-1">
                                New Reviews
                                </a>
                                <i class="i icon-arrow-up-right txt-dark-purple-mp fz-display-xs dashboard-card-icon"></i>
                            
                            </div>

                            

                        </div>
                       
                    </div>
                    <div class="col-l-5 ">
                        <div class="inline-flex flex-column bg-default-100 br-2 p-6">
                        <p class="txt-default-500">
                            <i class="i icon-bar-chart-2 mr-1"></i> 
                            <span class="txt-semibold">Stats for Aug'22</span>
                        </p>
                        <div class="dashboard-stats flex mt-4">
                            <div class="flex flex-column gap-1 flex-center">
                                <div>
                                    <i class="i icon-dollar-sign fz-display-xs"></i>
                                    <span class="fz-display-xs txt-bold">$1,379</span>
                                </div>
                                <span class="txt-default-450 fz-text-xs txt-uppercase txt-semibold">income</span>
                            </div>
                            <div class="flex flex-column gap-1 flex-center">
                                <div>
                                    <i class="i icon-calendar fz-display-xs"></i>
                                    <span class="fz-display-xs txt-bold">51</span>
                                </div>
                                <span class="txt-default-450 fz-text-xs txt-uppercase txt-semibold">completed</span>
                            </div>
                            <div class="flex flex-column gap-1 flex-center">
                                <div>
                                    <i class="i icon-star fz-display-xs"></i>
                                    <span class="fz-display-xs txt-bold">4.7</span>
                                </div>
                                <span class="txt-default-450 fz-text-xs txt-uppercase txt-semibold">rating</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
      }
  }



customElements.define('stats-component', Stats);