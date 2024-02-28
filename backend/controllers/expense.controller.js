const ExpenseSchema = require("../models/expenseModel");

// add the Expense
exports.addExpense = async (req, res) => {
  console.log(req.body);
  const { title, amount, category, description } = req.body;
  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
  });
  try {
    if (!title || !amount || !category || !description) {
      res.status(400).json({ message: "Please fill all the fields" });
    }
    if (amount < 0 || amount === 0) {
      res.status(400).json({ message: "Please enter a valid amount" });
    }
    await expense.save();
    res.status(200).json({ message: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

//get the expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};
//delete the item
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    ExpenseSchema.findByIdAndDelete(id)
      .then((expense) => {
        res.status(200).json({ message: "Expense deleted successfully" });
      })
      .catch((err) => {
        res.status(400).json({ message: "Something went wrong", error: err });
      });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
