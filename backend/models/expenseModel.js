const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
