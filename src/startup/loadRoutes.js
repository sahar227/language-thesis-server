const words = require("../routers/words");

module.exports = (app) => {
  app.use("/words", words);
};
