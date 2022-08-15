const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar= document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
})