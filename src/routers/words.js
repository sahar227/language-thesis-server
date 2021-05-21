const Express = require("express");

const router = Express.Router();

router.get("/phase1", (req, res) => {
  return res.send("todo: get phase 1 words");
});

module.exports = router;
