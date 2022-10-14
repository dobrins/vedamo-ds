// NAV MENU MOBILE

const navigationMobile = document.querySelector('.navigation-mobile');
const navResources = document.querySelector('#nav-resources');
const navLanguages = document.querySelector('.nav-languages');
const navOpen = document.querySelector('.mobile-nav-open');
const navClose = document.querySelector('.mobile-nav-close');
// const navCloseResources = document.querySelector('.mobile-close-nav-resources');
const navOpenLang = document.querySelector('.mobile-open-nav-languages');
const navCloseLang = document.querySelector('.mobile-close-nav-languages');

navOpen.addEventListener("click", () => {
    navigationMobile.setAttribute("data-visible", true);
    navClose.style.display = "flex";
    setTimeout(() => {
        body.classList.add('backdropBody');
    }, 200);
});

navClose.addEventListener("click", () => {
    navigationMobile.setAttribute("data-visible", false);
    body.classList.remove('backdropBody');
    // navResources.setAttribute("data-visible", false);
    
    setTimeout(() => {
        navClose.style.display = "none";
    }, 200);

});

document.addEventListener("click", e => {
    const isMobileNavOpen = e.target.matches(".mobile-open-nav-resources");
    if(!isMobileNavOpen) return
    navResources.setAttribute("data-visible", true);
})

// navCloseResources.addEventListener("click", () => {
//     navResources.setAttribute("data-visible", false);
// });

// DROPDOWN

const toggleSidebar = document.querySelector('.toggleSidebar');
const toggleSidebarIcon = toggleSidebar.querySelector('.i');
const sidebar = document.querySelector('.sidebar-dashboard');
const fullSizeLogo = document.querySelector('.full-size-logo');
const onlyVLogo = document.querySelector('.only-v-logo');

toggleSidebar.addEventListener("click", e => {
    sidebar.classList.toggle("minimized");
    toggleSidebarIcon.classList.toggle("icon-chevron-right");
    fullSizeLogo.classList.toggle('hidden');
    onlyVLogo.classList.toggle('hidden');
})


document.addEventListener("click", e => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]");

    if(!isDropDownButton && e.target.closest("data-dropdown") != null) return;

    

    let currentDropdown;
    if(isDropDownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if ( dropdown === e.target.closest("[data-dropdown]") ) return;
        dropdown.classList.remove("active");
        
    })
});

// TABS

const buttons = document.querySelectorAll(".tabs-link");
const sections = document.querySelectorAll(".tab-content");

buttons.forEach((btn)=>{

  btn.addEventListener("click", ()=>{

    // if(btn.parentElement.classList.contains("active")) {
    //   btn.closest('.tabs').classList.toggle("show-the-shit");
    // }

    buttons.forEach((btn)=>{
      btn.parentElement.classList.remove("active");
    });

    btn.parentElement.classList.add("active");
    const id = btn.id;
    sections.forEach((section)=>{
      section.classList.remove("block");
    });
    const req = document.getElementsByClassName(id);
    req[0].classList.add("block");

    

  })
})



// SHOW MORE

document.addEventListener("click", e => {
  const showMore = e.target;
  const isShowMore = showMore.matches(".show-more");

  if(!isShowMore) return;

  const text = showMore.previousElementSibling;
  const showLess = text.querySelector('.show-less');

  text.classList.remove('txt-truncate');
  showMore.classList.add('hidden');
  showLess.classList.remove('hidden')
})

//  SHOW LESS

document.addEventListener("click", e => {
  const showLess = e.target;
  const isShowLess = showLess.matches(".show-less");

  if(!isShowLess) return;

  const text = showLess.parentElement;

  text.classList.add('txt-truncate');
  text.nextElementSibling.classList.remove('hidden');
  // showMore.classList.remove('hidden');
  showLess.classList.add('hidden')
})

// MODAL

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// HEIGHT ON MOBILE BROWSER


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
