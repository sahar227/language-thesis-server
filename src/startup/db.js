const mongoose = require("mongoose");
const { dbConnectionString } = require("../config");

module.exports = async () => {
  await mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};
