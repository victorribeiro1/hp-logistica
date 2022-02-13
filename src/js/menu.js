const menus = document.querySelectorAll('.menu')

let lastScrollTop = 0

window.addEventListener('scroll', function() {
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop

   if (scrollTop > lastScrollTop) {
      menus.forEach(menu => {
         menu.classList.add('hide')
      })
   } else {
      menus.forEach(menu => {
         menu.classList.remove('hide')
      })
   }

   if (scrollTop > 730) {
      menus.forEach(menu => {
         menu.classList.add('background')
      })
   }  else {
      menus.forEach(menu => {
         menu.classList.remove('background')
      })
   }

   lastScrollTop = scrollTop
})