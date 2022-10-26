
// DROPDOWN

// const backdrop = document.querySelector('.backdropMenu1');

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


// HOME FILTER

// const filterButton = document.querySelector("[data-dropdown-filter]");

// filterButton.addEventListener("click", (e) => {
//     const parentFilterBox = e.target.closest(".home-filters");
//     parentFilterBox.style.backgroundColor = "blue";
    
//     backdrop.classList.toggle("block");
// });

document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    backdrop.classList.remove("block");
   

})



// // NAV MENU DESKTOP

// const backdrop = document.querySelector('.backdropMenu1');
// // const menuInner = document.querySelector('.menu-inner');
// const menuClose = document.querySelector('.menu-close');
// const body = document.querySelector('body');

// document.addEventListener("click", e => {

//     const isDropDownButton = e.target.matches("[data-dropdown-button]");
//     const isCategoryButton = e.target.matches("[data-category]");
//     let currentDropdown;
//     let currentButton;

//     if(!isDropDownButton && e.target.closest("data-dropdown") != null) return

//     if(isDropDownButton) {
//         currentDropdown = e.target.closest("[data-dropdown]");
//         currentDropdown.classList.toggle("active");
//         backdrop.classList.toggle("block");
//         // menuInner.classList.remove("block");
//         // body.classList.toggle('backdropBody');
//     }

//     closeMenu();

//     if(isCategoryButton) {
//         currentButton = e.target;
//         // menuInner.classList.add("block")
//         e.target.classList.add("active")
//     } 

//     document.querySelectorAll("[data-category].active").forEach(button => {
//         if(button == currentButton) return
//         button.classList.remove("active");
//     })

//     if( e.target.classList.contains("menu-close") ) {
//         closeMenu();
//     }

//     function closeMenu() {
//         document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {

//             if ( dropdown === e.target.closest("[data-dropdown]") && !e.target.classList.contains("menu-close") ) return;
//             if ( dropdown === currentDropdown ) return; 
    
//             dropdown.classList.remove("active");
//             backdrop.classList.remove("block");
//             body.classList.remove('backdropBody');

//             // menuInner.classList.remove("block");
//         })
//     }
// });

// NAV MENU MOBILE

const navigationMobile = document.querySelector('.navigation-mobile');
const navResources = document.querySelector('#nav-resources');
const navLanguages = document.querySelector('.nav-languages');
const navOpen = document.querySelector('.mobile-nav-open');
const navClose = document.querySelector('.mobile-nav-close');
const navCloseResources = document.querySelector('.mobile-close-nav-resources');
const navOpenLang = document.querySelector('.mobile-open-nav-languages');
const navCloseLang = document.querySelector('.mobile-close-nav-languages');

navOpen.addEventListener("click", () => {
    navigationMobile.setAttribute("data-visible", true);
    navClose.style.display = "flex";
    // setTimeout(() => {
    //     body.classList.add('backdropBody');
    // }, 200);
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

navCloseResources.addEventListener("click", () => {
    navResources.setAttribute("data-visible", false);
});

// MODAL

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const modalBox = document.getElementById('modal')


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

modalBox.addEventListener('click', (e) => {
  if (e.target !== this) return
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  document.body.style.overflow = "hidden"
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  document.body.style.removeProperty("overflow")

}