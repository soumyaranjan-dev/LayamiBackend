const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userName: String,
        userEmail: String,
        // userDob: Date,
        // userAvatar: String,
        // userBio: String,
        // userInterest: String,
    }
)

const USER = mongoose.model("layami_user", userSchema)

module.exports = USER