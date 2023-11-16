/*-------------- NavBar script ----------------*/
const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleMenu.addEventListener('click',()=> {
    navbarlinks.classList.toggle('active')
})



