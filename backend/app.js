const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const { logger } = require("./middlewares/logger.middleware");
const { errorHandler } = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/auth", authRoutes);

app.use(errorHandler);

sequelize.sync().then(() => {
  console.log("Database connected");
});

module.exports = app;