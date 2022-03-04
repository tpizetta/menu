function menuToggle() {
    let menuArea = document.getElementById('menu-area');
    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
    /* ou
    if(menuArea.style.widht == '200px') {
        menuArea.style.widht = '0px';
    } else {
        menuArea.style.widht = '200px';
    }
    */
}

