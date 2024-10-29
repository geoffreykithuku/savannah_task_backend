const {
  createPhoto,
  deletePhoto,
  getPhotoById,
  getPhotos,
  getPhotosByAlbumId,
  updatePhoto,
} = require("../controllers/photosController");

const { protect } = require("../middlewares/auth");

const router = require("express").Router();

// Create photo route
router.post("/create", protect, createPhoto);

// Get all photos route
router.get("/all", protect, getPhotos);

// Get photo by id route
router.get("/:id", protect, getPhotoById);

// Update photo route
router.patch("/update/:id", protect, updatePhoto);

// Delete photo route
router.delete("/delete/:id", protect, deletePhoto);

// Get photos by album id route
router.get("/album/:albumId", protect, getPhotosByAlbumId);

module.exports = router;
