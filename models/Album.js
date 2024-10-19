

const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
});
    
const Album = mongoose.model("album", albumSchema);

module.exports = Album;