const loadMiddleWare = require("./loadMiddleWare");
const loadRoutes = require("./loadRoutes");

const handleStartup = (app) => {
  loadMiddleWare(app);
  loadRoutes(app);
};

module.exports = handleStartup;
