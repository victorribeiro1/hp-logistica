const slider = document.querySelector('.differential--mobile__slider')
const innerSlider = document.querySelector('.differential--mobile__differentials')

let pressed = false;
let startX;
let x = 0;

let limit = -860

slider.addEventListener('mousedown', event => {
   pressed = true
   startX = event.clientX - slider.offsetLeft
   slider.style.cursor = 'grabbing'

   console.log(startX)
})


slider.addEventListener('mousemove', event => {
   if (!pressed) return
   event.preventDefault()

   x = event.clientX

   slider.style.left = `${x - startX}px`

   check()
})

slider.addEventListener('touchmove', event => {
   slider.style.overflow = 'scroll'
})


slider.addEventListener('mouseup', () => {
   pressed = false
   slider.style.cursor = 'grab'
})

window.addEventListener('mouseout', () => {
   pressed = false
   slider.style.cursor = 'grab'
})

function check() {
   let outer = slider.getBoundingClientRect()
   // let inner = slider.getBoundingClientRect()

   // console.log(slider.getBoundingClientRect())
   // console.log(slider.style.left)

   if (parseInt(slider.style.left) > 0) {
      slider.style.left = '0px'
   } else if (parseInt(slider.style.left) < limit) {
      slider.style.left = `${limit}px`
   }
}

window.addEventListener('resize', () => {
   if (outerWidth >= 1020) {
      limit = -920
   }
   else if (outerWidth >= 964) {
      limit = -860

   }
   else if (outerWidth >= 900) {
      limit = -820
   }
   else if (outerWidth >= 800) {
      limit = -680
   }
   else if (outerWidth >= 550) {
      limit = -650
   }
   else if (outerWidth >= 519.5) {

      limit = -600
   }
   else if (outerWidth >= 516) {
      limit = -770
   }
})

if (outerWidth >= 1020) {
   limit = -920
}
else if (outerWidth >= 964) {
   limit = -860

}
else if (outerWidth >= 900) {
   limit = -820
}
else if (outerWidth >= 800) {
   limit = -680
}
else if (outerWidth >= 550) {
   limit = -650
}
else if (outerWidth >= 519.5) {

   limit = -600
}
else if (outerWidth >= 516) {
   limit = -770
}