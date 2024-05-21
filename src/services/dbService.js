const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const userNameDB = process.env.MONGO_INITDB_ROOT_USERNAME;
const passwordDB = process.env.MONGO_INITDB_ROOT_PASSWORD;

const mongoDB = `mongodb://${userNameDB}:${passwordDB}@mongo-service:32001`;

mongodb: main().catch((err) => console.log(err));
async function main() {
  try {
    console.log("Connecting to database ...");
    await mongoose.connect(mongoDB);
    console.log("Connected to database");

    const db = mongoose.connection.db;
    const collection = db.collection("my_database");
  } catch (error) {
    console.error(error);
  }
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

// const mongoDB = `mongodb://admin1:password@10.98.185.190:32001/`;
