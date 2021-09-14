const Joi = require("joi");
const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 25,
  },
  translation: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 25,
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

const reportPhase2Block = mongoose.model("reportPhase2Block", dbSchema);

module.exports.reportPhase2Block = reportPhase2Block;
