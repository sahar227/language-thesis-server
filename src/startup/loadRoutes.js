const { wordsPhase1Router, wordsPhase2Router } = require("../routers/words");
const reportRoutes = require("../routers/reports");
const userSessionRoutes = require("../routers/userSessionRoutes");

module.exports = (app) => {
  app.use("/words", wordsPhase1Router);
  app.use("/words", wordsPhase2Router);
  app.use("/reports", reportRoutes);
  app.use("/user-session", userSessionRoutes);
};
