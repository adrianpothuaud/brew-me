import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'c09a67e800e506',
    pass: 'a98faf3cfa3c0c',
  },
})

export default transport
