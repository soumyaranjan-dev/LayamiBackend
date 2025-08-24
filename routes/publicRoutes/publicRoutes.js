const { defaultPublic, signupPublic, signinPublic, updatePass } = require("../../controllers/publicControllers/publicController")

const publicRouter = require("express").Router()

// default route
publicRouter.get("/", defaultPublic)

// signup route
publicRouter.post("/signup", signupPublic)

// signin route
publicRouter.post("/signin", signinPublic)

// update pass route
publicRouter.post("/updatePass", updatePass)

module.exports = publicRouter