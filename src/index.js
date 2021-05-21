const Express = require("express");
const { port } = require("./config");
const app = Express();

app.get("/", (req, res) => res.send("hello world!!!"));

app.listen(port, () => console.log(`Listening on port ${port}`));
