const { reportPhase1 } = require("../models/reportPhase1");
const { reportPhase2Block } = require("../models/reportPhase2Block");

const getFinalReportForSession = async (sessionId) => {
  const phase1 = await reportPhase1.findOne({ sessionId });
  const phase2Blocks = await reportPhase2Block.find({ sessionId });
  return {
    phase1,
    phase2Blocks,
  };
};

const createReportPhase1 = async (report) => {
  const newReport = new reportPhase1(report);
  await newReport.save();
  return newReport;
};

const createReportPhase2Block = async (report) => {
  const newReport = new reportPhase2Block(report);
  await newReport.save();
  return newReport;
};

const deleteAllReportsForSession = async (sessionId) => {
  await reportPhase1.deleteMany({ sessionId });
  await reportPhase2Block.deleteMany({ sessionId });
};

module.exports.createReportPhase1 = createReportPhase1;
module.exports.createReportPhase2Block = createReportPhase2Block;
module.exports.deleteAllReportsForSession = deleteAllReportsForSession;
module.exports.getFinalReportForSession = getFinalReportForSession;
