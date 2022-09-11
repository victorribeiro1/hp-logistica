// const form = document.getElementById('form')
// const reviewButton = document.getElementById('reviewButton')
// // const editButton = document.getElementById('editButton')
// // const sendButton = document.getElementById('sendButton')
// const inputs = document.querySelectorAll('.input')

// class Validation {
//    constructor(inputs) {
//       this.inputs = inputs
//    }

//    isBlank() {
//       let f_isBlank = false // 'f' de 'flag'

//       this.inputs.forEach(input => {
//          if (input.value == '') f_isBlank = true
//       })

//       return f_isBlank
//    }

//    // markInputs() {

//    // }

//    checkEmail() {
//       let f_checkEmail = false

//       const email = this.inputs[0].value
//       const emailArray = email.split('@gmail.com')

//       if (emailArray.length === 2) {
//          f_checkEmail = true
//          this.inputs[0].classList.remove('incorrect')
//       } else {
//          this.inputs[0].classList.add('incorrect')
//       }

//       return f_checkEmail
//    }

//    checkLength() {
//       let f_checkLength = true

//       if (this.inputs[0].value.length < 15)  {
//          this.inputs[0].classList.add('incorrect')
//          f_checkLength  =  false
//       } else {
//          this.inputs[0].classList.remove('incorrect')
//       }

//       if (this.inputs[1].value.length < 10)  {
//          this.inputs[1].classList.add('incorrect')
//          f_checkLength  =  false
//       } else {
//          this.inputs[1].classList.remove('incorrect')
//       }

//       if (this.inputs[2].value.length < 4)   {
//          this.inputs[2].classList.add('incorrect')
//          f_checkLength  =  false
//       } else {
//          this.inputs[2].classList.remove('incorrect')
//       }

//       if (this.inputs[3].value.length < 4)   {
//          this.inputs[3].classList.add('incorrect')
//          f_checkLength  =  false
//       } else {
//          this.inputs[3].classList.remove('incorrect')
//       }

//       if (this.inputs[4].value.length < 25)  {
//          this.inputs[4].classList.add('incorrect')
//          f_checkLength  =  false
//       } else {
//          this.inputs[4].classList.remove('incorrect')
//       }


//       return f_checkLength
//    }
// }

// class EmailManagement {
//    constructor(form, reviewButton, inputs) {
//       this.form = form
//       this.reviewButton = reviewButton
//       this.inputs = inputs
//    }

//    isValid() {
//       let validation = new Validation(this.inputs)

//       let isValid = true

//       validation.isBlank()
//       validation.checkLength()
//       validation.checkEmail()

//       if (validation.isBlank() || !validation.checkEmail() || !validation.checkLength()) {
//          isValid = false
//       }

//       return isValid
//    }

//    listenUp() {
//       this.reviewButton.addEventListener('click', () => {
//          this.form.addEventListener('submit', event => event.preventDefault())

//          if(this.isValid()) {

//          }
//       })
//    }
// }

// const emailManager = new EmailManagement(form, reviewButton, inputs)
// emailManager.listenUp()

const form=document.getElementById("form"),reviewButton=document.getElementById("reviewButton"),inputs=document.querySelectorAll(".input"),reviewBox=document.getElementById("reviewBox"),editButton=document.getElementById("editButton"),sendButton=document.getElementById("sendButton");let text,from;class Validation{constructor(a){this.inputs=a}isBlank(){let a=!1;return this.inputs.forEach(b=>{""==b.value&&(a=!0)}),a}checkEmail(){let a=!1,b=this.inputs[0].value,c=b.split("@gmail.com");return 2===c.length?(a=!0,this.inputs[0].classList.remove("incorrect")):this.inputs[0].classList.add("incorrect"),a}checkLength(){let a=!0;return this.inputs[0].value.length<15?(this.inputs[0].classList.add("incorrect"),a=!1):this.inputs[0].classList.remove("incorrect"),this.inputs[1].value.length<10?(this.inputs[1].classList.add("incorrect"),a=!1):this.inputs[1].classList.remove("incorrect"),this.inputs[2].value.length<4?(this.inputs[2].classList.add("incorrect"),a=!1):this.inputs[2].classList.remove("incorrect"),this.inputs[3].value.length<4?(this.inputs[3].classList.add("incorrect"),a=!1):this.inputs[3].classList.remove("incorrect"),this.inputs[4].value.length<25?(this.inputs[4].classList.add("incorrect"),a=!1):this.inputs[4].classList.remove("incorrect"),a}}class EmailManagement{constructor(a,b,c,d,e,f){this.form=a,this.reviewButton=b,this.inputs=c,this.reviewBox=d,this.editButton=e,this.sendButton=f}isValid(){let a=new Validation(this.inputs),b=!0;return a.isBlank(),a.checkLength(),a.checkEmail(),!a.isBlank()&&a.checkEmail()&&a.checkLength()||(b=!1),b}getAndSetReviewMessage(){let a=this.inputs[4].value,b=document.getElementById("messageDestination");b.innerText=a}activeReviewBox(){this.reviewBox.classList.add("active")}closeReviewBox(){this.reviewBox.classList.remove("active")}listenUp(){this.reviewButton.addEventListener("click",()=>{this.form.addEventListener("submit",a=>a.preventDefault()),this.isValid()&&(this.getAndSetReviewMessage(),this.activeReviewBox())});let a=document.querySelector(".contact__message__blur");a.addEventListener("click",()=>this.closeReviewBox()),this.editButton.addEventListener("click",()=>this.closeReviewBox()),this.sendButton.addEventListener("click",()=>{if("true"==localStorage.getItem("jaEnviou")){alert("email já enviado anteriormente.");return}console.log("email enviado"),localStorage.setItem("jaEnviou","true"),document.getElementById('form').submit(),this.closeReviewBox(),from=inputs[0],text=`Email: ${inputs[0]}< br />Nome: ${inputs[1]}< br />Cargo:${inputs[2]}< br />Empresa:${inputs[3]}< br />Mensagem:${inputs[4]}`,run()})}}const emailManager=new EmailManagement(form,reviewButton,inputs,reviewBox,editButton,sendButton);emailManager.listenUp();