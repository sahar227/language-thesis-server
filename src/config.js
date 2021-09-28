module.exports = {
  port: process.env.PORT || 3000,
  dbConnectionString:
    process.env.CONNECTION_STRING || "mongodb://localhost:27017/thesis-app",
};
