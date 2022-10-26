class Price extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `

          <div class="flex flex-column gap-0 full-height">
            <div class=" p-6 flex flex-center-v flex-space-between">
              <span class="fz-text-l txt-bold">Price per class (USD)</span>
            </div>
            <div class="overflow-hidden full-height">
              <ul>
                <li class="list-item">
                  <label class="fz-text-s txt-medium flex">
                    <input type="radio" name="price-filter">  
                    $20 or less
                  </label>
                </li>
                <li class="list-item">
                  <label class="fz-text-s txt-medium flex">
                    <input type="radio" name="price-filter">  
                    $30 or less
                  </label>
                </li>
                <li class="list-item">
                  <label class="fz-text-s txt-medium flex">
                    <input type="radio" name="price-filter">  
                    $40 or less
                  </label>
                </li>
                <li class="list-item">
                  <label class="fz-text-s txt-medium flex">
                    <input type="radio" name="price-filter">  
                    $50 or less
                  </label>
                </li>
                <li class="list-item">
                  <label class="fz-text-s txt-medium flex">
                    <input type="radio" name="price-filter">  
                    $60 or less
                  </label>
                </li>
                <li class="list-item">
                  <label class="fz-text-s txt-medium flex">
                    <input type="radio" name="price-filter">  
                    More than $60
                  </label>
                </li>
              </ul>             
            </div>
          </div>
        `;
      }
  }

customElements.define('filter-price-component', Price);
