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
});

const wordPhase2 = mongoose.model("wordsForPhase2", dbSchema);

const validationSchema = {
  word: Joi.string().min(1).max(25).required(),
  translation: Joi.string().min(1).max(25).required(),
};
function validate(word) {
  return Joi.validate(word, validationSchema);
}

module.exports.wordPhase2 = wordPhase2;
module.exports.validate = validate;
