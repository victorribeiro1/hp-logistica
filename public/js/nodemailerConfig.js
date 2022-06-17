const nodemailer = require('nodemailer')
console.log(nodemailer)
const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 587,
   secure: false,
   auth: {
      user: 'victorribs123@gmail.com',
      pass: 'esquilo29',
   },
   tls: {
      rejectUnauthorized: false
   }
})

async function run() {
   const mailSent = await transporter.sendMail({
      text: 'Texto do E-mail',
      subject: 'Assunto do E-mail',
      from: 'Hp Log <victorribs123@gmail.com>',
      to: 'victorribs123@gmail.com'
   })

   console.log(mailSent)
}

// window.addEventListener('click', () => {
//    alert('ok')
// })
run()