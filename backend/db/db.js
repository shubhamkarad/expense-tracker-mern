const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://localhost:27017/expense-tracker");
    console.log("Database connected");
  } catch (error) {
    console.log("DB connection error", error);
  }
};

module.exports = {
  db,
};
