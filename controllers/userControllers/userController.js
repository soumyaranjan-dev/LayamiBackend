const SONG = require("../../models/songModel/songModel")

const defaultUser = (req, res) => {
    res.json({ message: "default user route" })
}

const getSongs = async (req, res) => {
    try {
        const songs = await SONG.find()
        res.json({ message: "got all songs",songs})
    } catch (error) {
        res.json({error})
    }
}

module.exports = {defaultUser, getSongs}