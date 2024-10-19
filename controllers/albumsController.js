const Album = require("../models/Album");

// create album

 const createAlbum = async (req, res) => {
  try {
    const { userId, title } = req.body;

    const album = await Album.create({
      userId,
      title,
    });

    return res.status(201).json({ album });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get all albums

 const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();

    return res.status(200).json({ albums });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get album by id

 const getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);

    return res.status(200).json({ album });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// update album

 const updateAlbum = async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// delete album

 const deleteAlbum = async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.id);

    return res.status(200).json({ msg: "Album deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// get albums by user

 const getAlbumsByUser = async (req, res) => {
  const user = req.user;
  try {
    const albums = await Album.find({ userId: user.id });

    return res.status(200).json({ albums });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};


module.exports = { createAlbum, deleteAlbum, getAlbumById, getAlbums, getAlbumsByUser, updateAlbum };