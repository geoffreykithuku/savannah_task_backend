const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const photoRoutes = require("./routes/photoRoutes");
const albumRoutes = require("./routes/albumRoutes");

const dotenv = require("dotenv");
dotenv.config();
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("API Running"));

// Define Routes

app.use("/api/users", userRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/albums", albumRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
