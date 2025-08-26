const doVerifyToken = require("../../auth/jwt/jwt")
const doVerifyAdmin = require("../../auth/role/role")
const { defaultUser, getSongs } = require("../../controllers/userControllers/userController")

const userRouter = require("express").Router()

userRouter.get("/", doVerifyToken, defaultUser)

userRouter.get("/songs", doVerifyToken, getSongs)

// userRouter.get("/allartists", doVerifyToken, getAllArtists)

module.exports = userRouter