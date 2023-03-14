const express = require("express");
const router = express.Router();
const { createUser, getAllUsers, getUserById, editUser, removeUser } = require("../controllers/UserController");
const upload = require("../middlewares/MulterMiddleware");

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", upload.single("photo_perfil"), editUser);
router.delete("/:id", removeUser);


module.exports = router;