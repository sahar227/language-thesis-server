const Express = require("express");
const { port } = require("./config");
const app = Express();
const handleStartup = require("./startup");

async function run() {
  await handleStartup(app);

  app.get("/", (req, res) => res.send("hello world!!!"));

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

run();
