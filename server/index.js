var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')
var cors = require('cors')
const creds = require('./config')

var transport = {
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Le serveur est prêt pour recevoir des messages')
  }
})

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var tel = req.body.tel
  var email = req.body.email
  var content = 'Vous avez rempli le formulaire de contact d\'Anthropi vous pouvez trouver en pièce jointe le plan de formation'

  var mail = {
    from: 'developnexx@gmail.com',
    to: `${email}`,
    subject: 'Plan de formation d\'Anthropi',
    text: content,
    attachments: {
      filename: 'Catalogue_de_formation.pdf',
      path: './Catalogue_de_formation.pdf'
    }
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })

      transporter.sendMail({
        from: 'Message auto',
        to: '<developnexx@gmail.com>',
        subject: 'Email bien envoyée',
        text: `Email envoyé à :\n\n Nom: ${name}\n Tel: ${tel}\n Email: ${email}`
      }, function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Message envoyée: ' + info.response)
        }
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)
