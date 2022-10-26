class MobileNav extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `

        <nav class="navigation-mobile nav-sliding bg-default-100 flex" data-visible="false">

          <!-- Close menu button -->

          <div class="nav-mobile-header flex flex-center-v">
              <div class="container">
                  <button class="btn btn-square mobile-nav-close" aria-controls="navigation-mobile" aria-expanded="false" >
                      <span class="sr-only">Close menu</span>
                      <i class="i icon-vico-close"></i>
                  </button>
              </div>
          </div>

          <div class="ph-8">
              <ul>
                  <li class="pv-6"><a href="#" class="fz-display-xs txt-semibold txt-decoration-none">Find a Tutor</a></li>
                  <li class="pv-6"><a href="#" class="fz-display-xs txt-semibold txt-decoration-none">Become a Tutor</a></li>
              </ul>
          </div>

          <div class="flex-1 overflow-y-auto">
              <p class="ph-8 bg-default-200 txt-semibold fz-text-s txt-uppercase txt-default-500 pv-4">Categories </p>
              <ul class=" home-list">                
                  <li class="list-item">
                      <a href="#" class="list-link mobile-open-nav-resources pointer-event-none-children" aria-controls="nav-resources" aria-expanded="false">
                          <img src="../public/math.svg" width="48" alt="" />
                          Mathematics
                          <span class="txt-end flex-1"><i class="i icon-chevron-right"></i></span>
                      </a>
                  </li>
                  <li class="list-item">
                      <a href="#" class="list-link mobile-open-nav-resources pointer-event-none-children" aria-controls="nav-resources" aria-expanded="false">
                          <img src="../public/languages.svg" width="48" alt="" />
                          Languages
                          <span class="txt-end flex-1"><i class="i icon-chevron-right"></i></span>
                      </a>
                  </li>
                  <li class="list-item">
                      <a href="#" class="list-link mobile-open-nav-resources pointer-event-none-children" aria-controls="nav-resources" aria-expanded="false">
                          <img src="../public/programming.svg" width="48" alt="" />
                          Programming
                          <span class="txt-end flex-1"><i class="i icon-chevron-right"></i></span>
                      </a>
                  </li>
                  <li class="list-item">
                      <a href="#" class="list-link mobile-open-nav-resources pointer-event-none-children" aria-controls="nav-resources" aria-expanded="false">
                          <img src="../public/programming.svg" width="48" alt="" />
                          Programming
                          <span class="txt-end flex-1"><i class="i icon-chevron-right"></i></span>
                      </a>
                  </li>
              </ul>
          </div>
          
          <div class="p-8 flex flex-column gap-6">
              <a href="#" class="btn full-width btn-tertiary btn-2xl">Register</a>
              <a href="#" class="btn full-width btn-secondary btn-2xl">Login</a>
          </div>
          
          <div class="p-8 flex">
              <a href="#" class="flex-1 txt-semibold txt-decoration-none">    
                  <i class="i icon-log-in"></i>
                  Login
              </a>
          </div>
      </nav>   

      <!-- Second level menu -->

    <nav id="nav-resources" class="flex nav-sliding nav-sliding-second bg-default-100" data-visible="false">
        
        <div class="nav-mobile-header flex flex-center-v">
            <div class="container">
                <button class="btn btn-square mobile-close-nav-resources">
                    <span class="sr-only">Close menu</span>
                    <i class="i icon-arrow-left"></i>
                </button>
            </div>
        </div>
        <p class="flex fz-display-xs flex-center-v txt-medium ph-8 pv-10">
            <img src="../public/math.svg" width="48" alt="" />
            Mathematics
        </p>
        <div class="flex-1 overflow-y-auto">
            <ul class=" home-list">                
                <li class="list-item">
                    <a href="#" class="list-link">
                        All
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        General Mathematics
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Algebra
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Analysis
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Arithmetic
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Combinatorics
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Euclidean
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Non-Euclidean Geometries
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Game Theory
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Optimization
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">
                        Set Theory
                    </a>
                </li>
            </ul>
        </div>
    </nav>
        `;
      }
  }

customElements.define('mobile-navigation-component', MobileNav);
