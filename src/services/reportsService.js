const { reportPhase1 } = require("../models/reportPhase1");

const createReportPhase1 = async (report) => {
  const newReport = new reportPhase1(report);
  await newReport.save();
  return newReport;
};

module.exports.createReportPhase1 = createReportPhase1;
