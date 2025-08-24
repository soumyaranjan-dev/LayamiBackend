const doVerifyToken = require("../../auth/jwt/jwt")
const doVerifyAdmin = require("../../auth/role/role")
const { defaultAdmin, addSong } = require("../../controllers/adminControllers/adminController")

const adminRouter = require("express").Router()

adminRouter.get("/", doVerifyToken, doVerifyAdmin, defaultAdmin)
adminRouter.get("/addsong", doVerifyToken, doVerifyAdmin, addSong)

module.exports = adminRouter