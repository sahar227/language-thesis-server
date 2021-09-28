const Express = require("express");
const validateAdmin = require("../middleware/validateAdmin");
const userSessionService = require("../services/userSessionService");
const {
  wordsPhase1Service,
  wordsPhase2Service,
} = require("../services/wordsService");

const router = Express.Router();

router.get("/", validateAdmin, async (req, res) => {
  const sessions = await userSessionService.getAllSessions();
  return res.send(sessions);
});

router.post("/", validateAdmin, async (req, res) => {
  const session = req.body;
  const savedSession = await userSessionService.createNewSession(session);
  return res.send(savedSession);
});

router.get("/start-session/:id", async (req, res) => {
  const id = req.params.id;
  if (userSessionService.isSessionClosed(id)) return res.sendStatus(404);
  const session = await userSessionService.closeSession(id);
  const wordsPhase1 = await wordsPhase1Service.getWords();
  const wordsPhase2 = await wordsPhase2Service.getWords();

  return res.send({ session, wordsPhase1, wordsPhase2 });
});

module.exports = router;
