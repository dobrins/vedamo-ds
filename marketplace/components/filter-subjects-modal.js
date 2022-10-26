class SubjectsModal extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <div class="flex flex-center-h">
              <span class="fz-text-xl txt-bold txt-center">What do you want to learn?</span>
            </div>
          <div class="grid-container mt-8">
            <div class="col-sm-6 col-sm-offset-4">
              <div class="flex flex-column gap-6">
                <div class="flex flex-column">
                  <label for="subject1" class="flex flex-center-v txt-bold fz-text-s"><i class="i icon-layers-2"></i>Category</label>
                  <select class="form-el" id="subject1">
                    <option>Select</otpion>
                    <option>Chemistry</otpion>
                    <option>Math</otpion>
                  </select>
                </div>
                <div class="flex flex-column">
                  <label for="subject2" class="flex flex-center-v txt-bold fz-text-s"><i class="i icon-layers-3"></i>Subcategory</label>
                  <select class="form-el" id="subject2">
                    <option>Select</otpion>
                    <option>Chemistry</otpion>
                    <option>Math</otpion>
                  </select>
                </div>
                <div class="flex flex-column">
                  <label for="subject3" class="flex flex-center-v txt-bold fz-text-s"><i class="i icon-globe"></i>Language</label>
                  <select class="form-el" id="subject3">
                    <option>Select</otpion>
                    <option>English</otpion>
                    <option>German</otpion>
                  </select>
                </div>
                <div class="flex gap-3 p-2 bg-default-150 br-10 txt-default-500 txt-semibold fz-text-xs txt-uppercase flex-center">
                  <i class="i icon-search"></i>
                  19792 Matches
                </div>
              </div>
            </div>
          </div>
          
        `;
      }
  }

customElements.define('filter-subjects-component-modal', SubjectsModal);
