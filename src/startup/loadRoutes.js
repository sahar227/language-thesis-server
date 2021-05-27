const { wordsPhase1Router, wordsPhase2Router } = require("../routers/words");

module.exports = (app) => {
  app.use("/words", wordsPhase1Router);
  app.use("/words", wordsPhase2Router);
};
