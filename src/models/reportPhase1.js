const Joi = require("joi");
const mongoose = require("mongoose");

const questionReport1Schema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 25,
  },
  letter: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1,
  },
  answer: {
    type: Boolean,
    required: true,
  },
  userAnswer: {
    type: Boolean,
    required: true,
  },
  secondsToAnswer: {
    type: Number,
    required: true,
  },
});

const report1Schema = new mongoose.Schema({
  report: {
    type: [questionReport1Schema],
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const reportPhase1 = mongoose.model("reportPhase1", report1Schema);

module.exports.reportPhase1 = reportPhase1;
