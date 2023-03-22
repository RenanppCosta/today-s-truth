const express = require("express");
const router = express.Router();
const { createUser, getAllUsers, getUserById, editUser, removeUser, getNewsByUser } = require("../controllers/UserController");
const upload = require("../middlewares/MulterMiddleware");
const { verifyToken } = require("../middlewares/AuthMiddleware");


router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", verifyToken, getUserById);
router.get("/news/:userId", getNewsByUser);
router.put("/:id", verifyToken, upload.single("photo_perfil"), editUser);
router.delete("/:id", removeUser);


module.exports = router;