const Express = require("express");
const validateAdmin = require("../middleware/validateAdmin");

const {
  wordsPhase1Service,
  wordsPhase2Service,
} = require("../services/wordsService");

const createWordsRouter = (routeAddress, wordService) => {
  const router = Express.Router();
  router.get(`/${routeAddress}`, async (req, res) => {
    const words = await wordService.getWords();
    return res.send(words);
  });

  router.post(`/${routeAddress}`, validateAdmin, async (req, res) => {
    const word = req.body;
    const savedWord = await wordService.addWord(word);
    return res.send(savedWord);
  });

  router.delete(`/${routeAddress}/:id`, validateAdmin, async (req, res) => {
    const id = req.params.id;
    const word = await wordService.removeWord(id);
    if (!word) return res.status(404).send(`word with id ${id} was not found`);
    return res.send(word);
  });

  return router;
};

module.exports.wordsPhase1Router = createWordsRouter(
  "phase1",
  wordsPhase1Service
);
module.exports.wordsPhase2Router = createWordsRouter(
  "phase2",
  wordsPhase2Service
);
