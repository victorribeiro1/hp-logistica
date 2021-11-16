const menu = document.getElementById('menu')

let lastScrollTop = 0

window.addEventListener('scroll', function() {
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop

   if (scrollTop > lastScrollTop) {
      menu.classList.add('hide')
   } else {
      menu.classList.remove('hide')
   }

   if (scrollTop > 730) {
      menu.classList.add('background')
   }  else {
      menu.classList.remove('background')
   }

   lastScrollTop = scrollTop
})