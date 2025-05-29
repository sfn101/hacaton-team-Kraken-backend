const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Initialize Sequelize - using SQLite by default
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  logging: false,
});

// Import model definition functions
const defineUser = require("./models/User");
const definePost = require("./models/Post");

// Define models
const User = defineUser(sequelize);
const Post = definePost(sequelize);

// Define associations
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

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

// Sync database and then start server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Database sync failed:', err);
  });
