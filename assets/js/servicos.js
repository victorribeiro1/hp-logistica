
const serviceCards = document.querySelectorAll('.serviceCard')
const saibaMais = document.querySelector('.saiba-mais__box')

serviceCards.forEach(serviceCard => {
   serviceCard.addEventListener('click', () => {
      serviceCard.classList.toggle('active')
   })
})

const saibaMaisButtons = document.querySelectorAll('.saiba-mais-button')
saibaMaisButtons.forEach(saibaMaisButton => {
   saibaMaisButton.addEventListener('click', () => {
      const service = saibaMaisButton.getAttribute('service')
      saibaMais.classList.add('active')
      document.querySelector(`.popUp[service=${service}]`).classList.add('active')

   })
})

const xs = document.querySelectorAll('#x')
xs.forEach(x => {
   x.addEventListener('click', () => {
      document.querySelector('.popUp.active').classList.remove('active')
      saibaMais.classList.remove('active')
   })
})