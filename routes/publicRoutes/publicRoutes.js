const { defaultPublic, signupPublic, signinPublic } = require("../../controllers/publicControllers/publicController")
const USER = require("../../models/userModel/userModel")

const publicRouter = require("express").Router()

// default route
publicRouter.get("/", defaultPublic)

// signup route
publicRouter.post("/signup", signupPublic)


// signin route
publicRouter.get("/signin", signinPublic)

module.exports = publicRouter