const mongoose = require("mongoose");
const { urlDb } = require("../config");

mongoose.set("strictQuery", true);

mongoose.connect(urlDb, {
  dbName: "storegg",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;
