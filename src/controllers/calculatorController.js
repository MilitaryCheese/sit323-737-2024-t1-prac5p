const calculatorService = require("../services/calculatorService");

// Controller functions for calculator operations
exports.add = (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = calculatorService.add(num1, num2);
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

exports.multiply = (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = calculatorService.multiply(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.divide = (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = calculatorService.divide(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.exponentiation = (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = calculatorService.exponentiation(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.squareRoot = (req, res) => {
  const { num1 } = req.body;
  console.log(num1);
  try {
    const result = calculatorService.squareRoot(num1);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.modulo = (req, res) => {
  const { num1, num2 } = req.body;
  try {
    const result = calculatorService.modulo(num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
