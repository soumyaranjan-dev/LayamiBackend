const { default: mongoose } = require("mongoose")

const mongodbUri = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUri)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB