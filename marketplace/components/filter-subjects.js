class Subjects extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <div class="flex flex-column gap-0 full-height">
            <div class=" p-6 flex flex-center-v flex-space-between">
              <span class="fz-text-l txt-bold">Select subject and subcategory</span>
              <a href="#" class="txt-default-450 txt-medium fz-text-xs">Clear all</a>
            </div>
            <div class="flex gap-0 overflow-hidden full-height bt border-default-250">
              <div class="pb-6 full-height">
                <ul class="list-group full-height overflow-y-auto" style="width: 12.5rem">
                 <subjects-item></subjects-item>
                 <subjects-item></subjects-item>
                 <subjects-item></subjects-item>
                 <subjects-item></subjects-item>
                </ul>
              </div>
              <div class="menu-inner full-height flex-1 p-4">
                <ul class="full-height overflow-y-auto">
                  <subjects-item-sub></subjects-item-sub>
                  <subjects-item-sub></subjects-item-sub>
                  <subjects-item-sub></subjects-item-sub>
                  <subjects-item-sub></subjects-item-sub>
                </ul>
              </div>
            </div>
          </div>
        `;
      }
  }


  class SubjectsItemSub extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <li class="list-item">
            <label class="flex  full-width ph-4 pv-3">
              <input type="checkbox"> Subject
            </label>
          </li>     
        `;
      }
  }

  class SubjectsItem extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        
          <li class="list-item">
            <a href="#" class="fz-text-s txt-medium">
              Languages
              <i class="i icon-chevron-right txt-default-450"></i>
            </a>
          </li>
                  
        `;
      }
  }

customElements.define('subjects-component', Subjects);
customElements.define('subjects-item', SubjectsItem);
customElements.define('subjects-item-sub', SubjectsItemSub);
