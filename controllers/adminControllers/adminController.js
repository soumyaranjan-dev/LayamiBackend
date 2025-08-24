const defaultAdmin = (req, res) => {
    res.json({message: "default admin route"})
}

const addSong = (req, res) => {
    res.json({message: "song is addded"})
}

module.exports = {defaultAdmin, addSong}