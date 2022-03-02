const { send } = require("express/lib/response")

const form = document.getElementById('form')
const reviewButton = document.getElementById('reviewButton')
const editButton = document.getElementById('editButton')
const sendButton = document.getElementById('sendButton')
const inputs = document.querySelectorAll('.input')

class EmailManagement {
   constructor(form, reviewButton, editButton, sendButton, inputs) {
      this.form = form
      this.reviewButton = reviewButton
      this.editButton = editButton
      this.sendButton = sendButton
      this.inputs = inputs
   }

   validate() {
      this.inputs.forEach(input => {

      })
   }

   listenUp() {
      this.reviewButton.addEventListener('click', () => {
         this.form.addEventListener('submit', event => event.preventDefault())
         this.validate()
      })
   }
}

const emailManager = new EmailManagement(form, reviewButton, editButton, sendButton, inputs)
emailManager.listenUp()

// console.log

// criar classe 'Validator', responsável pela validação dos inputs