require("dotenv").config()
const express = require("express")
const publicRouter = require("../routes/publicRoutes/publicRoutes")
const connectDB = require("../config/db/mongodb")
const userRouter = require("../routes/userRoutes/userRoutes")
const adminRouter = require("../routes/adminRoutes/adminRoutes")
const app = express()

// port
const portNo = process.env.PORT || 8002

// database
connectDB()

// middlewares
app.use(express.json())

// server testing
app.get("/", (req, res) => {
    res.json({message: "welcome to Layami XD"})
})

// routes
app.use("/public", publicRouter)
app.use("/user", userRouter)
app.use("/admin", adminRouter)

// server
app.listen(portNo, () => console.log(`Server started at port: ${portNo}`)) 