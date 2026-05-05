// toggle menu bar
let menuEl = document.getElementById('menu-icon')
let navEl = document.getElementById('navEl');
let listItem = document.querySelectorAll('nav ul li a');
menuEl.addEventListener('click', () => {
    navEl.classList.toggle('show')
})

listItem.forEach(items =>{
    items.addEventListener('click', ()=>{
        navEl.classList.remove('show')
    })
})