class Step5 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="flex flex-column gap-4 bg-default-0 br-2 p-10">
            <h2 class="fz-display-xs txt-bold heading-underline">Availability</h2>
            <div class="mt-6 flex flex-column gap-4">
            
                <div class="flex flex-column gap-4">
                    <p class="txt-semibold">What days are you available?</p>
                    <div class="flex gap-2">
                        <label class="inputButton inputButton-filter inputButton-filter-circle">
                            <input type="checkbox">
                            <span>M</span>
                        </label>
                        <label class="inputButton inputButton-filter inputButton-filter-circle">
                            <input type="checkbox">
                            <span>T</span>
                        </label>

                        <label class="inputButton inputButton-filter inputButton-filter-circle">
                            <input type="checkbox">
                            <span>W</span>
                        </label>
                        <label class="inputButton inputButton-filter inputButton-filter-circle">
                            <input type="checkbox">
                            <span>T</span>
                        </label>
                        <label class="inputButton inputButton-filter inputButton-filter-circle">
                            <input type="checkbox">
                            <span>F</span>
                        </label>
                        <label class="inputButton inputButton-filter inputButton-filter-circle">
                            <input type="checkbox">
                            <span>S</span>
                        </label>
                        <label class="inputButton inputButton-filter inputButton-filter-circle">
                            <input type="checkbox">
                            <span>S</span>
                        </label>
                    </div>
                    <div class="flex gap-4">
                        <a href="#" class="fz-text-s txt-medium">Select All</a>
                        <a href="#" class="fz-text-s txt-medium">Remove All</a>
                    </div
                </div>
                <div class="divider mv-4"></div>



<step-5-day></step-5-day>
<step-5-day></step-5-day>

                
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

customElements.define('step-5-component', Step5);


// SINGLE DAY

class Step5Day extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="pv-4">
        <h5 class="fz-text-m txt-semibold flex flex-center-v"><i class="i icon-calendar"></i>Monday</h5>
        <div class="grid-container mt-2">
            <div class="col-xs-5">
                <label for="monday1" class="fz-text-s txt-medium txt-default-700">From</label>
                <select class="form-el" id="monday1">
                    <option value="00:00">00:00</option>
                    <option value="00:30">00:30</option>
                    <option value="01:00">01:00</option>
                    <option value="01:30">01:30</option>
                    <option value="02:00">02:00</option>
                    <option value="02:30">02:30</option>
                    <option value="03:00">03:00</option>
                    <option value="03:30">03:30</option>
                    <option value="04:00">04:00</option>
                    <option value="04:30">04:30</option>
                    <option value="05:00">05:00</option>
                </select>
            </div>
            
            <div class="col-xs-5">
                <label for="monday2" class="fz-text-s txt-medium txt-default-700">To</label>
                <select class="form-el" id="monday2">
                    <option value="00:00">00:00</option>
                    <option value="00:30">00:30</option>
                    <option value="01:00">01:00</option>
                    <option value="01:30">01:30</option>
                    <option value="02:00">02:00</option>
                    <option value="02:30">02:30</option>
                    <option value="03:00">03:00</option>
                    <option value="03:30">03:30</option>
                    <option value="04:00">04:00</option>
                    <option value="04:30">04:30</option>
                    <option value="05:00">05:00</option>
                </select>
            </div>
    
            <div class="col-xs-2">
                <button class="btn btn-ghost btn-square mt-6"><i class="i icon-trash-2"></i></button>
            </div>
        </div>
        <div class="mt-6">
            <a href="javascript:void(0);" class="fz-text-s txt-medium ">+ Add another time period</a>
        </div>
    </div>
        `;
      }
  }

customElements.define('step-5-day', Step5Day);