const express = require("express");
const router = express.Router();
const upload = require("../middlewares/MulterMiddleware");
const { createNews, getAllNews, editNews, removeNews, getNewsById, getCarouselNews, searchNewsByTitle } = require("../controllers/NewsController");

router.post("/", upload.single("banner") , createNews);
router.get("/", getAllNews);
router.get("/carousel", getCarouselNews);
router.get("/search", searchNewsByTitle);
router.get("/:id", getNewsById);
router.put("/:id",upload.single("banner"), editNews);
router.delete("/:id", removeNews);

module.exports = router;