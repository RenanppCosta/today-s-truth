const express = require("express");
const router = express.Router();
const { createUser, getAllUsers, getUserById, editUser, removeUser } = require("../controllers/UserController");

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.delete("/:id", removeUser);


module.exports = router;