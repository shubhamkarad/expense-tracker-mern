const IncomeSchema = require("../models/incomeModel");

// add the income
exports.addIncome = async (req, res) => {
  console.log(req.body);
  const { title, amount, category, description } = req.body;
  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
  });
  console.log(income);
  try {
    if (!title || !amount || !category || !description) {
      res.status(400).json({ message: "Please fill all the fields" });
    }
    if (amount < 0 || amount === 0) {
      res.status(400).json({ message: "Please enter a valid amount" });
    }
    await income.save();
    res.status(200).json({ message: "Income added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

//get the incomes
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};
//delete the item
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    IncomeSchema.findByIdAndDelete(id)
      .then((income) => {
        res.status(200).json({ message: "Income deleted successfully" });
      })
      .catch((err) => {
        res.status(400).json({ message: "Something went wrong", error: err });
      });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};