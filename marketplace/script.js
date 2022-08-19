const backdrop = document.querySelector('.backdropMenu1');
const menuInner = document.querySelector('.menu-inner');
const menuClose = document.querySelector('.menu-close');
const body = document.querySelector('body');

document.addEventListener("click", e => {

    const isDropDownButton = e.target.matches("[data-dropdown-button]");
    const isCategoryButton = e.target.matches("[data-category]");
    let currentDropdown;
    let currentButton;

    if(!isDropDownButton && e.target.closest("data-dropdown") != null) return

    if(isDropDownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
        backdrop.classList.toggle("block");
        menuInner.classList.remove("block");
        body.classList.toggle('backdropBody');
    }

    closeMenu();

    if(isCategoryButton) {
        currentButton = e.target;
        menuInner.classList.add("block")
        e.target.classList.add("active")
    } 

    document.querySelectorAll("[data-category].active").forEach(button => {
        if(button == currentButton) return
        button.classList.remove("active");
    })

    if( e.target.classList.contains("menu-close") ) {
        closeMenu();
    }

    function closeMenu() {
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {

            if ( dropdown === e.target.closest("[data-dropdown]") && !e.target.classList.contains("menu-close") ) return;
            if ( dropdown === currentDropdown ) return; 
    
            dropdown.classList.remove("active");
            backdrop.classList.remove("block");
            body.classList.remove('backdropBody');

            menuInner.classList.remove("block");
        })
    }

});

