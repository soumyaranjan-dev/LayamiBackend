const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport(
    {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    }
)

const sendEmail = async (email, subject, body) => {
    const mailOpt = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: body,
    }
    try {
        const info = await transporter.sendMail(mailOpt)
        console.log("mail sent", info)
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendEmail