const Express = require("express");
const validateAdmin = require("../middleware/validateAdmin");
const {
  createReportPhase1,
  createReportPhase2Block,
  deleteAllReportsForSession,
  getFinalReportForSession,
} = require("../services/reportsService");

const router = Express.Router();

router.get("/:id", validateAdmin, async (req, res) => {
  const sessionId = req.params.id;
  const finalReport = await getFinalReportForSession(sessionId);
  return res.send(finalReport);
});

router.delete("/:id", validateAdmin, async (req, res) => {
  const sessionId = req.params.id;
  await deleteAllReportsForSession(sessionId);
  return res.status(200);
});

// phase 1
router.post("/phase1", async (req, res) => {
  const reportRequest = req.body;
  const savedReport = await createReportPhase1(reportRequest);
  return res.send(savedReport);
});

// phase 2
router.post("/phase2", async (req, res) => {
  const reportRequest = req.body;
  const savedReport = await createReportPhase2Block(reportRequest);
  return res.send(savedReport);
});

module.exports = router;
