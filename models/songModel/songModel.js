const { default: mongoose } = require("mongoose");

const songSchema = new mongoose.Schema({
    songId: String,
    cloudinaryUrl: String,
    cover: String,
    title: String,
    duration: String,
    createdAt: Date
});

const SONG = mongoose.model("layami_song", songSchema)

module.exports = SONG
