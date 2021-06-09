const Express = require("express");
const validateAdmin = require("../middleware/validateAdmin");
const userSessionService = require("../services/userSessionService");

const router = Express.Router();

router.get("/", validateAdmin, async (req, res) => {
  const sessions = await userSessionService.getAllSessions();
  return res.send(sessions);
});

// TODO: add validation
router.post("/", validateAdmin, async (req, res) => {
  const session = req.body;
  const savedSession = await userSessionService.createNewSession(session);
  return res.send(savedSession);
});

// TODO: Send in response everything the user would need to start
// TODO: Handle 404 when bad id
// TODO: Handle request to session that was already closed
router.get("/start-session/:id", async (req, res) => {
  const id = req.params.id;
  const session = await userSessionService.closeSession(id);
  return res.send(session);
});

module.exports = router;
