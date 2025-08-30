const jwttoken = require("jsonwebtoken")

const doVerifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) return res.status(201).json({ message: "token not present" })
        
        jwttoken.verify(token, process.env.PRIVATE_KEY, (err, user) => {
            if (err) return res.status(201).json({ message: "invalid token" })
            req.user = user
            next()
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = doVerifyToken