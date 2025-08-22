const USER = require("../../models/userModel/userModel")
const jwttoken = require("jsonwebtoken")

const defaultPublic = (req, res) => {
    res.json({ message: "default public route" })
}

const signupPublic = async (req, res) => {
    const userRegData = req.body
    const { userEmail } = userData
    try {
        const exists = await USER.findOne({ userEmail })
        if (exists) return res.status(201).json({ message: "Email Exists! Try Another" })
        await USER.create(userData)
        res.status(200).json({message: "Good Signup!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Error!"})
    }
}

const signinPublic = async (req, res) => {
    const userLogData = req.body
    const {userEmail} = userLogData
    try {
        const exists = await USER.findOne({ userEmail })
        if (!exists) return res.status(201).json({ message: "User not Exists! Try Another" })
        
        const token = jwttoken.sign({userEmail}, process.env.PRIVATE_KEY,{expiresIn: "1hr"})
        res.status(200).json({ message: "Good Signin!", token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Error!" })
    }
}

module.exports = {defaultPublic, signupPublic, signinPublic}