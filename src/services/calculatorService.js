// Access the logger from the global scope
const logger = require("../winstonLogger"); // Import the logger

// Service functions for calculator operations
exports.add = (num1, num2) => {
  validateNumbers(num1, num2);
  logInfo("add", num1, num2);
  return num1 + num2;
};

exports.subtract = (num1, num2) => {
  validateNumbers(num1, num2);
  logInfo("subtract", num1, num2);
  return num1 - num2;
};

exports.multiply = (num1, num2) => {
  validateNumbers(num1, num2);
  logInfo("multiply", num1, num2);
  return num1 * num2;
};

exports.divide = (num1, num2) => {
  validateNumbers(num1, num2);
  if (num2 === 0) {
    logError("Cannot divide by zero");
    throw new Error("Cannot divide by zero");
  }
  logInfo("divide", num1, num2);
  return num1 / num2;
};

// task 4.2 functionality
exports.exponentiation = (num1, num2) => {
  validateNumbers(num1, num2);
  logInfo("exponentiation", num1, num2);
  return Math.pow(num1, num2);
};

exports.squareRoot = (num1) => {
  validateNumber(num1);
  logInfo("square root", num1);
  if (num1 < 0) {
    logError("Cannot calculate square root of a negative number");
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(num1);
};

exports.modulo = (num1, num2) => {
  validateNumbers(num1, num2);
  logInfo("modulo", num1, num2);
  if (num2 === 0) {
    logError("Cannot perform modulo operation with divisor as zero");
    throw new Error("Cannot perform modulo operation with divisor as zero");
  }
  return num1 % num2;
};

// Additional functions for validation and logging
function validateNumber(num1) {
  if (typeof num1 !== "number" || isNaN(num1)) {
    logError("Invalid input: Parameter must be a valid number. Recieved: " + num1);
    throw new Error("Invalid input: Parameter must be a valid number. Recieved: " + num1);
  }
}

function validateNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
    logError("Invalid input: Both parameters must be valid numbers. Recieved: " + num1 + ", " + num2);
    throw new Error("Invalid input: Both parameters must be valid numbers. Recieved: " + num1 + ", " + num2);
  }
}

function logInfo(operation, num1, num2) {
  logger.log({
    level: "info",
    message: `New ${operation} requested: ${num1 !== undefined ? num1 : ""} ${operation} ${num2 !== undefined ? num2 : ""}`,
  });
}

function logError(message) {
  logger.log({
    level: "error",
    message: message,
  });
}
