const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoute");
const postRoutes = require("./routes/postRoute");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", userRoutes);
app.use("/api", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(8080, () => console.log(`Server running on port 8080`));
