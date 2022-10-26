class Filters extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="home-filters bg-default-200 p-2 br-1 mt-2 space-between flex-center-v">
            <div class="flex flex-1 gap-1">
                <div class="dropdown position-relative" data-dropdown>
                    <button type="button" class="dropdown-button btn btn-tertiary" data-dropdown-button data-dropdown-filter>
                        <i class="i icon-layers-2 pointer-event-none"></i>
                        Subject
                        <i class="i icon-chevron-down pointer-event-none"></i>
                    </button>
                    <div class="dropdown-menu bg-default-0 mt-2 br-1 bs-m">
                        <div style="width: 30rem">
                            <subjects-component></subjects-component>
                        </div>
                    </div>
                </div>

                <div class="dropdown position-relative" data-dropdown>
                    <button type="button" class="dropdown-button btn btn-tertiary" data-dropdown-button>
                        <i class="i icon-calendar pointer-event-none"></i>
                        Day and Time
                        <i class="i icon-chevron-down pointer-event-none"></i>
                    </button>
                    <div class="dropdown-menu bg-default-0 mt-2 br-1 bs-m">
                        <div style="width: 30rem">
                            <filter-time-component></filter-time-component>  
                        </div>
                    </div>
                </div>

                <div class="dropdown position-relative" data-dropdown>
                    <button type="button" class="dropdown-button btn btn-tertiary" data-dropdown-button>
                        <i class="i icon-dollar-sign pointer-event-none"></i>
                        Price
                        <i class="i icon-chevron-down pointer-event-none"></i>
                    </button>
                    <div class="dropdown-menu bg-default-0 mt-2 br-1 bs-m">
                        <div style="width: 15rem">
                            <filter-price-component></filter-price-component>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="txt-default-450 txt-medium fz-text-xs mr-4">Clear all</a>
        </div>
        `;
      }
  }

customElements.define('filters-component', Filters);