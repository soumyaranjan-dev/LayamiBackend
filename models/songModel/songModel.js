const { default: mongoose } = require("mongoose");

const songSchema = new mongoose.Schema({
    songId: String,
    artistId: String,
    cover: String,
    title: String,
    duration: Number,
    createdAt: { type: Date, default: Date.now }
});

const SONG = mongoose.model("layami_song", songSchema)

module.exports = SONG
