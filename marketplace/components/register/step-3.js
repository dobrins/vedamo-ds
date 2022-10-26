class Step3 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="flex flex-column gap-4 bg-default-0 br-2 p-10">
            <h2 class="fz-display-xs txt-bold heading-underline">Teaching</h2>
            <div class="mt-6 flex flex-column gap-4">
            
                <div>
                    <label for="vendor-category" class="fz-text-s txt-medium txt-default-700">Category</label>
                    <select class="form-el mt-2" id="vendor-category">
                        <option>Category</option>
                        <option>Math</option>
                        
                    </select>
                </div>
                <div>
                    <label for="vendor-subcategory" class="fz-text-s txt-medium txt-default-700">Subcategory</label>
                    <select class="form-el mt-2" id="vendor-subcategory">
                        <option>Category</option>
                        <option>Math</option>
                    </select>
                </div>
                <div>
                    <label for="vendor-experience" class="fz-text-s txt-medium txt-default-700">Years of teaching experience</label>
                    <select class="form-el mt-2" id="vendor-experience">
                        <option value="">1 - 3 years</option>
                        <option value="">3 - 5 years</option>
                        <option value="">5+ years</option>
                    </select>
                </div>
                <div>
                    
                        <div class="mt-6">
                            <button class="btn bg-mp-gradient full-width">Next</button>
                        </div>
                    
                </div>

            </div>
        </div>
      
        `;
      }
  }



customElements.define('step-3-component', Step3);