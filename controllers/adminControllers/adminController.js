const cloudinary = require("../../config/cloudinary/cloudinary")
const fs = require("fs")
const SONG = require("../../models/songModel/songModel")
const formatDuration = require("../../utils/formatDuration/formatDuration")

const defaultAdmin = async (req, res) => {
    const result = await SONG.find()
    res.json({result})
}

const addSong = async (req, res) => {
    try {    
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "video",
            folder: "songs"
        })
 
        const songObj = {
            songId: result.public_id,
            cloudinaryUrl: result.secure_url,
            cover: `https://picsum.photos/400?random=${Date.now()}`,
            title: result.original_filename,
            duration: formatDuration(result.duration),
            createdAt: result.created_at
        }
       
        await SONG.create(songObj)
        await fs.promises.unlink(req.file.path)
        res.json({ message: "song is addded", cloudinaryUrl: result.secure_url })
    } catch (error) {
        res.json({ message: "no file uploaded", error: error.message })
    }
}

module.exports = { defaultAdmin, addSong }