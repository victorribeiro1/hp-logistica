const form = document.getElementById('form')
const reviewButton = document.getElementById('reviewButton')
// const editButton = document.getElementById('editButton')
// const sendButton = document.getElementById('sendButton')
const inputs = document.querySelectorAll('.input')

class Validation {
   constructor(inputs) {
      this.inputs = inputs
   }

   isBlank() {
      let f_isBlank = false // 'f' de 'flag'

      this.inputs.forEach(input => {
         if (input.value == '') f_isBlank = true
      })

      return f_isBlank
   }

   // markInputs() {

   // }

   checkEmail() {
      let f_checkEmail = false

      const email = this.inputs[0].value
      const emailArray = email.split('@gmail.com')

      if (emailArray.length === 2) {
         f_checkEmail = true
         this.inputs[0].classList.remove('incorrect')
      } else {
         this.inputs[0].classList.add('incorrect')
      }

      return f_checkEmail
   }

   checkLength() {
      let f_checkLength = true

      if (this.inputs[0].value.length < 15)  {
         this.inputs[0].classList.add('incorrect')
         f_checkLength  =  false
      } else {
         this.inputs[0].classList.remove('incorrect')
      }

      if (this.inputs[1].value.length < 10)  {
         this.inputs[1].classList.add('incorrect')
         f_checkLength  =  false
      } else {
         this.inputs[1].classList.remove('incorrect')
      }

      if (this.inputs[2].value.length < 4)   {
         this.inputs[2].classList.add('incorrect')
         f_checkLength  =  false
      } else {
         this.inputs[2].classList.remove('incorrect')
      }

      if (this.inputs[3].value.length < 4)   {
         this.inputs[3].classList.add('incorrect')
         f_checkLength  =  false
      } else {
         this.inputs[3].classList.remove('incorrect')
      }

      if (this.inputs[4].value.length < 25)  {
         this.inputs[4].classList.add('incorrect')
         f_checkLength  =  false
      } else {
         this.inputs[4].classList.remove('incorrect')
      }


      return f_checkLength
   }
}

class EmailManagement {
   constructor(form, reviewButton, inputs) {
      this.form = form
      this.reviewButton = reviewButton
      this.inputs = inputs
   }

   isValid() {
      let validation = new Validation(this.inputs)

      let isValid = true

      validation.isBlank()
      validation.checkLength()
      validation.checkEmail()

      if (validation.isBlank() || !validation.checkEmail() || !validation.checkLength()) {
         isValid = false
      }

      return isValid
   }

   listenUp() {
      this.reviewButton.addEventListener('click', () => {
         this.form.addEventListener('submit', event => event.preventDefault())

         if(this.isValid()) {

         }
      })
   }
}

const emailManager = new EmailManagement(form, reviewButton, inputs)
emailManager.listenUp()