const express = require("express");
const router = express.Router();
const upload = require("../middlewares/MulterMiddleware");
const { createNews, getAllNews, editNews, removeNews, getNewsById, getCarouselNews, searchNewsByTitle } = require("../controllers/NewsController");
const { verifyToken } = require("../middlewares/AuthMiddleware");

router.post("/", verifyToken, upload.single("banner") , createNews);
router.get("/", getAllNews);
router.get("/carousel", getCarouselNews);
router.get("/search", searchNewsByTitle);
router.get("/:id", verifyToken, getNewsById);
router.put("/:id", verifyToken, upload.single("banner"), editNews);
router.delete("/:id", verifyToken, removeNews);

module.exports = router;