const Joi = require("joi");
const mongoose = require("mongoose");

const qusetionReport2BlcokSchema = new mongoose.Schema({
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

const report2BlcokSchema = new mongoose.Schema({
  report: {
    type: [qusetionReport2BlcokSchema],
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const reportPhase2Block = mongoose.model(
  "reportPhase2Block",
  report2BlcokSchema
);

module.exports.reportPhase2Block = reportPhase2Block;
