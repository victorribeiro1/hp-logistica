const form = document.getElementById('form')
const reviewButton = document.getElementById('reviewButton')
const editButton = document.getElementById('editButton')
const sendButton = document.getElementById('sendButton')
const inputs = document.querySelectorAll('.input')

console.log(form, reviewButton, editButton, sendButton, inputs)

class EmailManagement {
   constructor(form, sendButton, inputs) {
      this.form = form
      this.sendButton = sendButton
      this.inputs = inputs
   }

   validate() {
      this.inputs.forEach(input => {
         console.log('yeap')
      })
   }

   listenUp() {
      alert('ok')
      this.reviewButton.addEventListener('click', () => {
         this.form.addEventListener('submit', event => event.preventDefault())
         // this.validate()
      })
   }
}

const emailManager = new EmailManagement(form, sendButton, inputs)
// emailManager.listenUp()

// console.log

// criar classe 'Validator', responsável pela validação dos inputs