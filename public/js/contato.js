const form = document.getElementById('form')
const reviewButton = document.getElementById('reviewButton')
const inputs = document.querySelectorAll('.input')
const reviewBox = document.getElementById('reviewBox')
const editButton = document.getElementById('editButton')
const sendButton = document.getElementById('sendButton')

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
   constructor(form, reviewButton, inputs, reviewBox, editButton, sendButton) {
      this.form = form
      this.reviewButton = reviewButton
      this.inputs = inputs
      this.reviewBox = reviewBox
      this.editButton = editButton
      this.sendButton = sendButton
   }

   isValid() {
      let validation = new Validation(this.inputs)

      let isValid = true

      validation.isBlank()
      validation.checkLength()
      validation.checkEmail()

      if (validation.isBlank() || !validation.checkEmail() || !validation.checkLength()) {
         // isValid = false
      }

      return isValid
   }

   getAndSetReviewMessage() {
      const message = this.inputs[4].value

      const messageDestination = document.getElementById('messageDestination')

      messageDestination.innerText = message
   }

   activeReviewBox() {
      this.reviewBox.classList.add('active')
   }

   closeReviewBox() {
      this.reviewBox.classList.remove('active')
   }

   listenUp() {
      this.reviewButton.addEventListener('click', () => {
         this.form.addEventListener('submit', event => event.preventDefault())

         if(this.isValid()) {
            this.getAndSetReviewMessage()
            this.activeReviewBox()
         }
      })

      const blur = document.querySelector('.contact__message__blur')

      blur.addEventListener('click', () => this.closeReviewBox())
      this.editButton.addEventListener('click', () => this.closeReviewBox())
   }
}

const emailManager = new EmailManagement(form, reviewButton, inputs, reviewBox, editButton, sendButton)
emailManager.listenUp()