const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// Define Calculation Schema
const calculationSchema = new mongoose.Schema({
  operation: String,
  operand1: Number,
  operand2: Number,
  result: Number,
  timestamp: { type: Date, default: Date.now },
});

// Create Calculation Model
const Calculation = mongoose.model("Calculation", calculationSchema);

// CRUD Operations
exports.addCalculation = async (operation, num1, num2, result) => {
  const calculation = new Calculation({ operation, operand1: num1, operand2: num2, result });
  await calculation.save();
  return calculation;
};

exports.getCalculations = async () => {
  return await Calculation.find().sort("-timestamp");
};

exports.getCalculationById = async (calculationId) => {
  return await Calculation.findById(calculationId);
};

exports.updateCalculation = async (calculationId, updates) => {
  return await Calculation.findByIdAndUpdate(calculationId, updates, { new: true });
};

exports.deleteCalculation = async (calculationId) => {
  return await Calculation.findByIdAndDelete(calculationId);
};
