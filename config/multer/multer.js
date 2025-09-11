const multer = require("multer")
const path = require("path")
const myStorage = multer.diskStorage(
    {
        destination: (req, file, cb) => cb(null, path.join(__dirname, "../../uploads")), 
        filename: (req, file, cb) => cb(null, file.originalname)
    }
)

const fileFilter = (req, file, cb) => {
    const allowed = ["audio/mpeg", "audio/mp3"];
    if (!allowed.includes(file.mimetype)) {
        return cb(new Error("Invalid file format"), false);
    }
    cb(null, true);
}

const uploader = multer(
    {
        storage: myStorage,
        fileFilter
    }
)

module.exports = uploader