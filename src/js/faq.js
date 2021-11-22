const faqs = document.querySelectorAll('.faq__options__option')

faqs.forEach(faq => {
   const questionBox = faq.querySelector('.faq__options__option__question-box')
   const lineBox = faq.querySelector('.faq__options__option__line-box')
   const answerBox = faq.querySelector('.faq__options__option__answer-box')

   
   faq.style.height = questionBox.clientHeight + (lineBox.clientHeight / 2) + 'px'

   
   faq.addEventListener('mouseenter', () => {
      const questionBox = faq.querySelector('.faq__options__option__question-box')
      const lineBox = faq.querySelector('.faq__options__option__line-box')
      const answerBox = faq.querySelector('.faq__options__option__answer-box')

      

      faq.style.height = questionBox.clientHeight + (lineBox.clientHeight / 2) + lineBox.clientHeight + 70 + answerBox.clientHeight +  'px'
      console.log(faq.querySelector(questionBox).clientHeight)
      console.log(faq.querySelector(answerBox).clientHeight)

   })

   faq.addEventListener('mousemove', () => {
      const questionBox = faq.querySelector('.faq__options__option__question-box')
      const lineBox = faq.querySelector('.faq__options__option__line-box')
      const answerBox = faq.querySelector('.faq__options__option__answer-box')

      
      faq.style.height = questionBox.clientHeight + (lineBox.clientHeight / 2) + lineBox.clientHeight + 70 + answerBox.clientHeight +  'px'
      console.log(faq.querySelector(questionBox).clientHeight)
      console.log(faq.querySelector(answerBox).clientHeight)

   })
   
   faq.addEventListener('mouseout', () => {
      faq.style.height = questionBox.clientHeight + (lineBox.clientHeight / 2) + 'px'

   })
})
