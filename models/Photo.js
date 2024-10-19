
const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
    albumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
        required: true,
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    imageUrl: {
        type: String,
        required: [true, "Please provide an image URL"],
    },
});

const Photo = mongoose.model("photo", photoSchema);

module.exports = Photo;