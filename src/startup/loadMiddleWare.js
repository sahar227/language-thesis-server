const express = require("express");
const cors = require("cors");

const corsOptions = {
  exposedHeaders: "x-auth-token",
};
module.exports = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));
};
