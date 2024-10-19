// connect to mongodb atlas

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(URL, clientOptions);
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
