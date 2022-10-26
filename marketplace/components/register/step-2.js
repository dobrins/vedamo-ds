class Step2 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="flex flex-column gap-2">
        
            <div class="flex flex-column gap-4 bg-default-0 br-2 p-10">
                <h2 class="fz-display-xs txt-bold heading-underline">Education</h2>
            </div>

            <step-2-saved></step-2-saved>
            <step-2-saved></step-2-saved>
            <step-2-saved></step-2-saved>

            <step-2-form></step-2-form>

            <div class="flex flex-center pv-9">
                <button class="btn btn-xs btn-tertiary"><i class="i icon-plus"></i> Add School</button>
            </div>

            <div class="flex flex-column gap-4 bg-default-0 br-2 p-10">
                <div class="grid-container">
                    <div class="col-sm-6 col-sm-offset-4">
                        <button class="btn bg-mp-gradient full-width">Next</button>
                    </div>
                </div>
            </div>
        </div>
       
        `;
      }
  }

  customElements.define('step-2-component', Step2);

  
// SAVED SCHOOL

class Step2Saved extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="flex flex-center-v bg-default-0 br-2 ph-10 pv-6 b">
                <div class="flex-1">
                    <h3 class="fz-text-l txt-semibold">Awesome University</h3>
                    <p class="fz-text-s txt-medium">Biochemistry</p>
                </div>
                <div>
                    <button class="btn btn-ghost btn-square"><i class="i icon-edit-3"></i></button>
                    <button class="btn btn-ghost btn-square"><i class="i icon-trash-2 txt-error-600"></i></button>
                </div>
            </div>
        `;
      }
  }

customElements.define('step-2-saved', Step2Saved);


// SCHOOL FORM

class Step2Form extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="flex flex-column gap-4 bg-default-0 br-2 p-10">
            <div>
                <label for="vendor-university" class="fz-text-s txt-medium txt-default-700">School</label>
                <input type="text" id="vendor-university" class="form-el full-width mt-2" placeholder="Institution name">
            </div>
            <div>
                <label for="vendor-degree" class="fz-text-s txt-medium txt-default-700">Degree</label>
                <input type="text" id="vendor-degree" class="form-el full-width mt-2" placeholder="ex: Bachelor's">
            </div>
            <div>
                <label for="vendor-specialization" class="fz-text-s txt-medium txt-default-700">Field of Study</label>
                <input type="text" id="vendor-specialization" class="form-el full-width mt-2" placeholder="ex: Mathematics">
            </div>
            <div>
                <label  class="fz-text-s txt-medium txt-default-700">Years of study</label>
                <div class="grid-container mt-2">
                    <div class="col-xs-5">
                        <select class="form-el ">
                            <option value="">From</option>
                            <option value="">1990</option>
                            <option value="">1991</option>
                            <option value="">1992</option>
                        </select>
                    </div>
                    <div class="col-xs-2">
                        <div class=" full-height flex flex-center">to</div>
                    </div>
                    <div class="col-xs-5">
                        <select class="form-el">
                            <option value="">To</option>
                            <option value="">1990</option>
                            <option value="">1991</option>
                            <option value="">1992</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <label for="country" class="fz-text-s txt-medium txt-default-700">Country</label>
                <select class="form-el mt-2" id="country">
                    <option value="">Bulgaria</option>
                    <option value="">United Kingdom</option>
                    <option value="">Spain</option>
                </select>
            </div>
            <label for="om" class="flex flex-column gap-4 mt-6 bg-info-100 p-9 br-2 b b-dashed border-info-300 txt-center txt-info-600">
                <i class="i icon-upload-cloud fz-display-s"></i>
                <p class="txt-semibold">Get "Diploma Verified" badge</p>
                <p class="fz-text-xs">Upload copy of your diploma as <span class="txt-semibold">.pdf</span>, <span class="txt-semibold">.png</span> or <span class="txt-semibold">.jpg</span> to boost credibility.</p>
                <div>
                    <span class="btn btn-tertiary btn-xs">Upload</span>
                </div>
                <input type="file" id="om" class="hidden btn btn-tertiary" accept="image/*,application/pdf">
            </label>
            <button class="btn btn-secondary mt-6">Save School</button>
        </div>
        `;
      }
  }

customElements.define('step-2-form', Step2Form);