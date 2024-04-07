// Access the logger from the global scope
const logger = require("../winstonLogger"); // Import the logger

// Service functions for calculator operations
exports.add = (num1, num2) => {
  validateNumbers(num1, num2);
  logInfo("add");
  return num1 + num2;
};

exports.subtract = (num1, num2) => {
  validateNumbers(num1, num2);
  logInfo("subtract");
  return num1 - num2;
};

exports.multiply = (num1, num2) => {
  validateNumbers(num1, num2);
  logInfo("multiply");
  return num1 * num2;
};

exports.divide = (num1, num2) => {
  validateNumbers(num1, num2);
  if (num2 === 0) {
    logger.log({
      level: "error",
      message: `Cannot divide by zero. Received: ${num1} and ${num2}.`,
    });
    throw new Error("Cannot divide by zero");
  }
  logInfo("divide");
  return num1 / num2;
};

function validateNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
    logger.log({
      level: "error",
      message: `Invalid input: Both parameters must be valid numbers. Received: ${num1} and ${num2}.`,
    });
    throw new Error("Invalid input: Both parameters must be valid numbers");
  }
}

function logInfo(operation) {
  logger.log({
    level: "info",
    message: `New ${operation} requested: ${num1} ${operation} ${num2}`,
  });
}
