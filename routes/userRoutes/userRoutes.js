const doVerifyToken = require("../../auth/jwt/jwt")
const doVerifyAdmin = require("../../auth/role/role")
const { defaultUser, getAllSongs } = require("../../controllers/userControllers/userController")

const userRouter = require("express").Router()

userRouter.get("/", doVerifyToken, defaultUser)

userRouter.get("/allsongs", doVerifyToken, getAllSongs)

// userRouter.get("/allartists", doVerifyToken, getAllArtists)

module.exports = userRouter