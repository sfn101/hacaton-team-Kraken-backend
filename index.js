const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

// Sample test route
app.get("/", (req, res) => {
  res.json({
    message: "hello from api",
  });
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
