const USER = require("../../models/userModel/userModel")

const doVerifyAdmin = async (req, res, next) => {
    console.log(req.user)
    if(!req.user) return res.status(404).json({message: "user not found"})
    const user = await USER.findOne({userEmail: req.user.userEmail})
    if (user.userRole !== "admin") return res.status(201).json({ message: "not an admin" })
    next()
}

module.exports = doVerifyAdmin