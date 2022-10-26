class Step1 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <h2 class="fz-display-xs txt-bold heading-underline">Personal Information</h2>

    <div class="mt-6 flex flex-column gap-4">
        <div>
            <label for="first_name" class="fz-text-s txt-medium txt-default-700">First Name</label>
            <input type="text" id="first_name" class="form-el full-width mt-2">
        </div>
        <div>
            <label for="last_name" class="fz-text-s txt-medium txt-default-700">Last Name</label>
            <input type="text" id="last_name" class="form-el full-width mt-2">
        </div>
        <div>
            <label for="reg_email" class="fz-text-s txt-medium txt-default-700">Email</label>
            <input type="email" id="reg_email" class="form-el full-width mt-2">
        </div>
        <div>
            <label for="vendor-telephone" class="fz-text-s txt-medium txt-default-700">Phone number</label>
            <input type="text" id="vendor-telephone" class="form-el full-width mt-2">
        </div>
        <div class="grid-container">
            <div class="col-m-8">
                <label for="country" class="fz-text-s txt-medium txt-default-700">Country</label>
                <select class="form-el mt-2" id="country">
                    <option value="">Bulgaria</option>
                    <option value="">United Kingdom</option>
                    <option value="">Spain</option>
                </select>
            </div>
            <div class="col-m-4">
                <label for="postcode" class="fz-text-s txt-medium txt-default-700">ZIP code</label>
                <input type="text" id="postcode" class="form-el full-width mt-2">
                
            </div>
        </div>
        <div>
            <label for="vendor-time-zone" class="fz-text-s txt-medium txt-default-700">Your timezone</label>
            <select class="form-el mt-2" id="vendor-time-zone">
                <option>Timezone: Sofia - UTC +03:00</option>
                <option>Timezone: Tirana - UTC +03:00</option>
                <option>Timezone: Athens - UTC +03:00</option>
                <option>Timezone: London - UTC +03:00</option>
                <option>Timezone: Berlin - UTC +03:00</option>
                <option>Timezone: Lisbon - UTC +03:00</option>
            </select>
        </div>
        <div>
            <label for="vendor-native-language" class="fz-text-s txt-medium txt-default-700">Native Language</label>
            <select class="form-el mt-2" id="vendor-native-language">
                <option value="">Bulgaria</option>
                <option value="">United Kingdom</option>
                <option value="">Spain</option>
            </select>
        </div>
        <div>
            <label for="reg_password" class="fz-text-s txt-medium txt-default-700">Create Password</label>
            <input type="password" id="reg_password" class="form-el full-width mt-2">
        </div>
        <div>
            <label for="reg_password2" class="fz-text-s txt-medium txt-default-700">Repeat Password</label>
            <input type="password" id="reg_password2" class="form-el full-width mt-2">
        </div>

        <div >
            <label class="flex flex-center-v"> 
                <input type="checkbox">
                <span class="fz-text-xs txt-medium txt-default-500">I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></span>
            </label>
        </div>
        `;
      }
  }



customElements.define('step-1-component', Step1);