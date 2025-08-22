const defaultPublic = (req, res) => {
    res.json({ message: "default public route" })
}

const signupPublic = async (req, res) => {
    const userData = req.body
    const { userEmail } = userData
    try {
        const exists = await USER.findOne({ userEmail })
        if (exists) return res.status(201).json({ message: "Email Exists! Try Another" })
        await USER.create(userData)
        res.status(200).json({message: "Good Signup!"})
    } catch (error) {
        res.status(500).json({message: "Internal Error!"})
    }
}

const signinPublic = (req, res) => {
    res.json({ message: "signin route" })
}

module.exports = {defaultPublic, signupPublic, signinPublic}