// toggle menu bar
let menuEl = document.getElementById('menu-icon')
let navEl = document.getElementById('navEl');
menuEl.addEventListener('click', ()=> {
    navEl.classList.toggle('active')
})