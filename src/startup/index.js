const loadMiddleWare = require("./loadMiddleWare");
const loadRoutes = require("./loadRoutes");
const connectToDB = require("./db");

const handleStartup = async (app) => {
  await connectToDB();
  loadMiddleWare(app);
  loadRoutes(app);
};

module.exports = handleStartup;
