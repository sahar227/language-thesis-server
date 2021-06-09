const Joi = require("joi");
const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
  groupNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 2,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
});

const userSession = mongoose.model("userSession", dbSchema);

const validationSchema = {
  name: Joi.string().min(3).max(25).required(),
  groupNumber: Joi.number().min(1).max(2).required(),
};
function validate(userSession) {
  return Joi.validate(userSession, validationSchema);
}

module.exports.userSession = userSession;
module.exports.validate = validate;
