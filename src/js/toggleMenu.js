const toggleMenu = document.getElementById('toggleMenu')
const button = document.getElementById('toggleMenuButton')
const htmlForToggleMenu = document.getElementById('html')

const toggleMenuLinks = document.querySelectorAll('.toggle-menu a')

class ToggleMenu {
   constructor(toggleMenu, button) {
      this.toggleMen = toggleMenu
      this.button = button
   }

   toggleClass() {
      button.classList.toggle('active')
      toggleMenu.classList.toggle('active')
      htmlForToggleMenu.classList.toggle('menu-is-active')
   }

   listenUp() {
      this.button.addEventListener('click', this.toggleClass)
      toggleMenuLinks.forEach(link => {
         link.addEventListener('click', this.toggleClass)
      })
   }
}

const toggleMenu1 = new ToggleMenu(toggleMenu, button)
toggleMenu1.listenUp()