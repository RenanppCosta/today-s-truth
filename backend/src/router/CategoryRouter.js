const express = require("express");
const router = express.Router();
const { getAllCategories, createCategory, getAllNewsByCategory } = require("../controllers/CategoryController");

router.get("/", getAllCategories);
router.post("/", createCategory);
router.get("/:categoryId", getAllNewsByCategory);

module.exports = router;