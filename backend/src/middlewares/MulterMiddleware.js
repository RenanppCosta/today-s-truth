const multer = require("multer");
const path = require("path");

const multerDiskStorage = multer.diskStorage({
    destination: (req,file,cb) =>{
        const uploadsPath = path.join(__dirname, "../uploads");
        cb(null, uploadsPath);
    },
    filename: (req,file,cb) =>{
        cb(null, file.originalname + Date.now());
    }
})

const upload = multer({storage: multerDiskStorage});

module.exports = upload;