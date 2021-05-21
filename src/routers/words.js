const Express = require("express");
const { wordsPhase1Service } = require("../services/wordsService");

const router = Express.Router();

router.get("/phase1", async (req, res) => {
  const words = await wordsPhase1Service.getWords();
  return res.send(words);
});

router.post("/phase1", async (req, res) => {
  const word = req.body;
  const savedWord = await wordsPhase1Service.addWord(word);
  return res.send(savedWord);
});

module.exports = router;
