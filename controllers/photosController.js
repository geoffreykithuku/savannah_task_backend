const Photo = require("../models/Photo");

// create photo

const createPhoto = async (req, res) => {
  try {
    const { albumId, title, imageUrl } = req.body;

    const photo = await Photo.create({
      albumId,
      title,
      imageUrl,
    });

    return res.status(201).json({ photo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get all photos

const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();

    return res.status(200).json({ photos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get photo by id

const getPhotoById = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);

    return res.status(200).json({ photo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// update photo

const updatePhoto = async (req, res) => {
  try {
    const photo = await Photo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json(photo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// delete photo

const deletePhoto = async (req, res) => {
  try {
    await Photo.findByIdAndDelete(req.params.id);

    return res.status(200).json({ msg: "Photo deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get photos by album id

const getPhotosByAlbumId = async (req, res) => {
  try {
    const photos = await Photo.find({ albumId: req.params.albumId });

    return res.status(200).json({ photos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = {
  createPhoto,
  deletePhoto,
  getPhotoById,
  getPhotos,
  getPhotosByAlbumId,
  updatePhoto,
};
