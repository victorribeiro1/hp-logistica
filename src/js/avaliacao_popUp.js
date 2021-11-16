const create = document.getElementById('create')
const popUp = document.getElementById('popUp')
const close = document.getElementById('close')
const submit = document.getElementById('submit')


create.addEventListener('click', () => {
   popUp.classList.toggle('active')
})

close.addEventListener('click', () => {
   popUp.classList.remove('active')
})

submit.addEventListener('click', (e) => {

   if (localStorage.getItem('alreadyPost') == true) {
      popUp.classList.remove('active')
   } else {
      localStorage.setItem('alreadyPost', true)
      popUp.classList.remove('active')
   }
})