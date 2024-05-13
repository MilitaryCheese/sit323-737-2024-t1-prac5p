const calculatorService = require("../services/calculatorService");

// Controller functions for calculator operations
exports.add = async (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = await calculatorService.add(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.subtract = async (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = await calculatorService.subtract(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.multiply = async (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = await calculatorService.multiply(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.divide = async (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = await calculatorService.divide(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.exponentiation = async (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = await calculatorService.exponentiation(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.squareRoot = async (req, res) => {
  const { num1 } = req.body;
  console.log(num1);
  try {
    const result = await calculatorService.squareRoot(num1);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.modulo = async (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = await calculatorService.modulo(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
