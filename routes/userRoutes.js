const express = require("express");
const { protect } = require("../middlewares/auth");

const {
  getAllUsers,
  deleteUser,
  getUser,
  userSignup,
  userLogin,
  updateUser,
  getUserById,
} = require("../controllers/usersController");
const router = express.Router();

// User signup route
router.post("/signup", (req, res) => userSignup(req, res));

// User signin route
router.post("/signin", (req, res) => userLogin(req, res));

// update user route
router.put("/update", protect, updateUser);

// get user profile route
router.get("/profile", protect, getUser);

// get all users route
router.get("/all", protect, getAllUsers);

// get user by id route
router.get("/:id", protect, getUserById);

// delete user route
router.delete("/delete", protect, deleteUser);

module.exports = router;
