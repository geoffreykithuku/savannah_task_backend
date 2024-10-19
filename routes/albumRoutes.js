const Router = require("express").Router;

const {
  createAlbum,
  deleteAlbum,
  getAlbumById,
  getAlbums,
  getAlbumsByUser,
  updateAlbum,
} = require("../controllers/albumsController");

const { protect } = require("../middlewares/auth");

const router = Router();

// Create album route
router.post("/create", protect, createAlbum);

// Get all albums route
router.get("/all", protect, getAlbums);

// Get album by id route
router.get("/:id", protect, getAlbumById);

// Update album route
router.put("/update/:id", protect, updateAlbum);

// Delete album route
router.delete("/delete/:id", protect, deleteAlbum);

// Get albums by user id route
router.get("/user/:userId", protect, getAlbumsByUser);

module.exports = router;
