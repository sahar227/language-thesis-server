const Joi = require("joi");
const mongoose = require("mongoose");
require("mongoose-type-url");

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

  imageURL: {
    type: mongoose.SchemaTypes.Url,
    required: true,
    minlength: 5,
    maxlength: 200,
  },
});

const wordPhase1 = mongoose.model("wordsForPhase1", dbSchema);

const validationSchema = {
  word: Joi.string().min(1).max(25).required(),
  translation: Joi.string().min(1).max(25).required(),
  imageURL: Joi.string().uri().min(5).max(200).required(),
};
function validate(word) {
  return Joi.validate(word, validationSchema);
}

module.exports.wordPhase1 = wordPhase1;
module.exports.validate = validate;
