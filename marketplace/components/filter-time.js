class Time extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `

        
          <div class="flex flex-column gap-0 full-height">
            <div class=" p-6 flex flex-center-v flex-space-between">
              <span class="fz-text-l txt-bold">When are you available?</span>
              <a href="#" class="txt-default-450 txt-medium fz-text-xs">Clear all</a>
            </div>
            <div class="p-6 overflow-hidden full-height">
              <div class="flex flex-column gap-9">
                <div>
                  <select>
                    <option>Timezone: Sofia - UTC +03:00</option>
                    <option>Timezone: Tirana - UTC +03:00</option>
                    <option>Timezone: Athens - UTC +03:00</option>
                    <option>Timezone: London - UTC +03:00</option>
                    <option>Timezone: Berlin - UTC +03:00</option>
                    <option>Timezone: Lisbon - UTC +03:00</option>
                  </select>
                </div>
                <div>
                  <label class="inputSwitch">
                    <input type="checkbox">
                    <span></span>
                    I need a session today
                  </label>
                </div>
                <div>
                  <p class="txt-medium">Day of the Week</p>
                  <div class="flex gap-2 mt-4">
                    <label class="inputButton inputButton-filter inputButton-filter-circle">
                      <input type="checkbox">
                      <span>Mo</span>
                    </label>
                    <label class="inputButton inputButton-filter inputButton-filter-circle">
                      <input type="checkbox">
                      <span>Tu</span>
                    </label>

                    <label class="inputButton inputButton-filter inputButton-filter-circle">
                      <input type="checkbox">
                      <span>We</span>
                      </label>
                    <label class="inputButton inputButton-filter inputButton-filter-circle">
                      <input type="checkbox">
                      <span>Th</span>
                      </label>
                    <label class="inputButton inputButton-filter inputButton-filter-circle">
                      <input type="checkbox">
                      <span>Fr</span>
                      </label>
                    <label class="inputButton inputButton-filter inputButton-filter-circle">
                      <input type="checkbox">
                      <span>Sa</span>
                      </label>
                    <label class="inputButton inputButton-filter inputButton-filter-circle">
                      <input type="checkbox">
                      <span>Su</span>
                      </label>
                  </div>
                </div>
                <div>
                  <p class="txt-medium">Time of the Day</p>
                  <div class="flex gap-2 mt-4">
                    <div class="flex flex-column txt-center gap-2">
                      <label class="inputButton inputButton-filter">
                        <input type="checkbox">
                        <span>Morning</span>
                      </label>
                      <span class="txt-medium fz-text-xs txt-default-550">6:00 - 12:00</span>
                    </div>
                    <div class="flex flex-column txt-center gap-2">
                      <label class="inputButton inputButton-filter">
                        <input type="checkbox">
                        <span>Afternoon</span>
                      </label>
                      <span class="txt-medium fz-text-xs txt-default-550">12:00 - 18:00</span>
                    </div>
                    <div class="flex flex-column txt-center gap-2">
                      <label class="inputButton inputButton-filter">
                        <input type="checkbox">
                        <span>Evening</span>
                      </label>
                      <span class="txt-medium fz-text-xs txt-default-550">18:00 - 24:00</span>
                    </div>
                    <div class="flex flex-column txt-center gap-2">
                      <label class="inputButton inputButton-filter">
                        <input type="checkbox">
                        <span>Night</span>
                      </label>
                      <span class="txt-medium fz-text-xs txt-default-550">00:00-6:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        `;
      }
  }

customElements.define('filter-time-component', Time);
