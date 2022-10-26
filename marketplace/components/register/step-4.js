class Step4 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="flex flex-column gap-2 ">
        
            <div class="flex flex-column gap-4 bg-default-0 br-2 p-10">
                
                <h2 class="fz-display-xs txt-bold heading-underline">Spoken Languages</h2>
                <p class="fz-text-xl txt-medium">Which spoken languages do you plan to offer your sessions in?</p>
            </div>

            <step-4-saved></step-4-saved>
            <step-4-saved></step-4-saved>
            <step-4-saved></step-4-saved>

            <step-4-form></step-4-form>

            <div class="flex flex-center pv-9">
                <button class="btn btn-xs btn-tertiary"><i class="i icon-plus"></i> Add Spoken Language</button>
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

  customElements.define('step-4-component', Step4);

  
// SAVED LANGUAGE

class Step4Saved extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="flex flex-center-v bg-default-0 br-2 ph-10 pv-6 b">
                <div class="flex-1">
                    <h3 class="fz-text-l txt-semibold">Bulgarian</h3>
                    <p class="fz-text-s txt-medium txt-warning-600">Native language</p>
                </div>
                <div>
                    <button class="btn btn-ghost btn-square"><i class="i icon-edit-3"></i></button>
                    <button class="btn btn-ghost btn-square"><i class="i icon-trash-2 txt-error-600"></i></button>
                </div>
            </div>
        `;
      }
  }

customElements.define('step-4-saved', Step4Saved);


// LANGUAGE FORM

class Step4Form extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="flex flex-column gap-4 bg-default-0 br-2 p-10 position-relative">
            <button class="close-button btn btn-circle btn-ghost"><i class="i icon-vico-close"></i></button>
            <h3 class="fz-text-l txt-semibold">New Spoken Language</h3>
            <div>
                <label for="vendor-native-language" class="fz-text-s txt-medium txt-default-700">Language</label>
                <select class="form-el mt-2" id="vendor-native-language">
                    <option value="">English</option>
                    <option value="">French</option>
                    <option value="">Spanish</option>
                </select>
            </div>
            <div>
            <p class="fz-text-s txt-medium txt-default-700">Language Level</p>

            <div class="flex flex-wrap mt-2">
            
                <label class="inputButton inputButton-filter">
                    <input type="radio" name="proficiency"  checked>
                    <span>A1</span>
                </label>
                <label class="inputButton inputButton-filter ">
                    <input type="radio" name="proficiency" >
                    <span>A2</span>
                </label>
                <label class="inputButton inputButton-filter">
                    <input type="radio" name="proficiency" >
                    <span>B1</span>
                </label>
                <label class="inputButton inputButton-filter">
                    <input type="radio" name="proficiency" >
                    <span>B2</span>
                </label>
                <label class="inputButton inputButton-filter">
                    <input type="radio" name="proficiency" >
                    <span>C1</span>
                </label>
                <label class="inputButton inputButton-filter">
                    <input type="radio" name="proficiency" >
                    <span>C2</span>
                </label>
                <label class="inputButton inputButton-filter">
                    <input type="radio" name="proficiency" >
                    <span>Proficiency</span>
                </label>

                </div>
            
            </div>
           
           
           
            <button class="btn btn-secondary mt-6">Save Language</button>
        </div>
        `;
      }
  }

customElements.define('step-4-form', Step4Form);