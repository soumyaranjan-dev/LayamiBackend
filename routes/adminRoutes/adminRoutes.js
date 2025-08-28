const doVerifyToken = require("../../auth/jwt/jwt")
const doVerifyAdmin = require("../../auth/role/role")
const uploader = require("../../config/multer/multer")
const { defaultAdmin, addSong } = require("../../controllers/adminControllers/adminController")

const adminRouter = require("express").Router()

adminRouter.get("/", doVerifyToken, doVerifyAdmin, defaultAdmin)
adminRouter.post("/addsong", doVerifyToken, doVerifyAdmin, uploader.single("songfile"), addSong)

module.exports = adminRouter