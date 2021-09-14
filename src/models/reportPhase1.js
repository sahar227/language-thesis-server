const Joi = require("joi");
const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
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

const reportPhase1 = mongoose.model("reportPhase1", dbSchema);

module.exports.reportPhase1 = reportPhase1;
