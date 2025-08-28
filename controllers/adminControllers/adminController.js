const cloudinary = require("../../config/cloudinary/cloudinary")
const fs = require("fs")
const defaultAdmin = (req, res) => {
    res.json({ message: "default admin route" })
}

const addSong = async (req, res) => {
    try {
        // console.log(req.file);
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "video",
            folder: "songs"
        })
        // console.log(result)
        await fs.promises.unlink(req.file.path)
        
        res.json({ message: "song is addded", cloudinaryUrl: result.secure_url })
    } catch (error) {
        res.json({ message: "no file uploaded", error: error.message })
    }
}

module.exports = { defaultAdmin, addSong }