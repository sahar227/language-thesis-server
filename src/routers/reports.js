const Express = require("express");
const validateAdmin = require("../middleware/validateAdmin");

const router = Express.Router();

router.get("/:id", validateAdmin, async (req, res) => {
  const id = req.params.id;
  // Get all phase1 and phase2 reports for session id
  // return them + aggregate statistics like - total time and amount of correct answers per report out of asked questions
});

router.delete("/:id", validateAdmin, async (req, res) => {
  const id = req.params.id;
  // Remove all reports for a user from the server
});

router.post("/", async (req, res) => {
  const { id, report } = req.body;
  // Save report for the id
});

module.exports = router;
