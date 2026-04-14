const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

/* ===========================
   CLOUDINARY CONFIG
=========================== */
const hasCloudinary = process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_CLOUD_NAME !== 'your_cloudinary_cloud_name';

if (hasCloudinary) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

/* DEBUG (REMOVE LATER) */
console.log("Cloudinary Config Loaded:", hasCloudinary ? "YES" : "NO (Using Local Storage)");

/* ===========================
   STORAGE CONFIG
=========================== */
let storage;

if (hasCloudinary) {
  storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      try {
        let folder = "darshan-e-bharat/products";
        if (req.originalUrl.includes("course")) {
          folder = "darshan-e-bharat/courses";
        }
        return {
          folder,
          allowed_formats: ["jpg", "png", "jpeg", "webp"],
          public_id: Date.now() + "-" + file.originalname,
        };
      } catch (err) {
        console.error("Cloudinary Param Error:", err);
        throw err;
      }
    },
  });
} else {
  // Use Local Storage instead
  const uploadDir = path.join(__dirname, "../uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });
}

/* ===========================
   MULTER INSTANCE
=========================== */
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

module.exports = upload;
