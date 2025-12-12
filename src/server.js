const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

app.get("/", (req, res) => res.send("Nurdd API Running ✔"));

app.listen(process.env.PORT, () =>
    console.log("🔥 Server running on port " + process.env.PORT)
);
