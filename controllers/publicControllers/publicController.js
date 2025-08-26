require("dotenv").config()
const sendEmail = require("../../config/email/email")
const USER = require("../../models/userModel/userModel")
const jwttoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const defaultPublic = (req, res) => {
    res.json({ message: "default public route" })
}

const signupPublic = async (req, res) => {
    const userRegData = req.body
    const { userName, userEmail } = userRegData
    try {
        const exists = await USER.findOne({ userEmail })
        if (exists) return res.status(201).json({ message: "Email Exists! Try Another" })

        const otp = userName.slice(0, 3) + userEmail.slice(0, 3) + "001"
        const hashedOtp = await bcrypt.hash(otp, 10)

        const finalRegUser = { ...userRegData, userRole: "user", userPass: hashedOtp }
        await USER.create(finalRegUser)

        sendEmail(userEmail, "registrered ✅", `Welcome to onboard. \nHere is your One Time Password: ${otp}`)
        res.status(200).json({ message: "Good Signup!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Error!" })
    }
}

const signinPublic = async (req, res) => {
    const userLogData = req.body
    const { userEmail, userPass } = userLogData
    try {
        const exists = await USER.findOne({ userEmail })
        if (!exists) return res.status(201).json({ message: "User not Exists! Try Another" })

        const validate = await bcrypt.compare(userPass, exists.userPass)
        if (!validate) return res.status(201).json({ message: "Incorrect Password" })

        const token = jwttoken.sign({ userEmail }, process.env.PRIVATE_KEY, { expiresIn: "1h" })

        res.status(200).json({ message: "Good Signin!", token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Error!" })
    }
}

const updatePass = async (req, res) => {
    const userLogData = req.body
    const { userEmail, newPass } = userLogData
    try {
        const exists = await USER.findOne({ userEmail })
        if (!exists) return res.status(201).json({ message: "User not Exists! Try Another" })

        const hashedPass = await bcrypt.hash(newPass, 10)
        exists.userPass = hashedPass
        await exists.save()
        
        sendEmail(userEmail, "Password Reseted 🪶", `You password is Reseted.`)
        res.status(201).json({ message: "password reseted." })
    } catch (error) {
        res.status(500).json({ message: "" })
    }
}
module.exports = { defaultPublic, signupPublic, signinPublic, updatePass }