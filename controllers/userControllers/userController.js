const defaultUser = (req, res) => {
    res.json({ message: "default user route" })
}

const getAllSongs = async (req, res) => {
    res.json({message: "got all songs"})
}

module.exports = {defaultUser, getAllSongs}