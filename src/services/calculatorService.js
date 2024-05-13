// Access the logger from the global scope
const logger = require("../winstonLogger"); // Import the logger
const db = require("./dbService"); // Import the database service file

// Service functions for calculator operations
exports.add = async (num1, num2) => {
  validateNumbers(num1, num2);
  const result = num1 + num2;

  try {
    await db.addCalculation("add", num1, num2, result);
    logInfo("add", num1, num2);
    return result;
  } catch (error) {
    console.error("Error adding calculation to the database:", error);
    throw error;
  }
};

exports.subtract = async (num1, num2) => {
  validateNumbers(num1, num2);
  const result = num1 - num2;

  try {
    await db.addCalculation("subtract", num1, num2, result);
    logInfo("subtract", num1, num2);
    return result;
  } catch (error) {
    console.error("Error adding calculation to the database:", error);
    throw error;
  }
};

exports.multiply = async (num1, num2) => {
  validateNumbers(num1, num2);
  const result = num1 * num2;

  try {
    await db.addCalculation("multiply", num1, num2, result);
    logInfo("multiply", num1, num2);
    return result;
  } catch (error) {
    console.error("Error adding calculation to the database:", error);
    throw error;
  }
};

exports.divide = async (num1, num2) => {
  validateNumbers(num1, num2);
  const result = num1 / num2;

  try {
    await db.addCalculation("divide", num1, num2, result);
    logInfo("divide", num1, num2);
    return result;
  } catch (error) {
    console.error("Error adding calculation to the database:", error);
    throw error;
  }
};

exports.exponentiation = async (num1, num2) => {
  validateNumbers(num1, num2);
  const result = Math.pow(num1, num2);

  try {
    await db.addCalculation("exponentiation", num1, num2, result);
    logInfo("exponentiation", num1, num2);
    return result;
  } catch (error) {
    console.error("Error adding calculation to the database:", error);
    throw error;
  }
};

exports.squareRoot = async (num1) => {
  validateNumber(num1);
  if (num1 < 0) {
    logError("Cannot calculate square root of a negative number");
    throw new Error("Cannot calculate square root of a negative number");
  }
  const result = Math.sqrt(num1);

  try {
    await db.addCalculation("squareRoot", num1, undefined, result);
    logInfo("square root", num1);
    return result;
  } catch (error) {
    console.error("Error adding calculation to the database:", error);
    throw error;
  }
};

exports.modulo = async (num1, num2) => {
  validateNumbers(num1, num2);
  if (num2 === 0) {
    logError("Cannot perform modulo operation with divisor as zero");
    throw new Error("Cannot perform modulo operation with divisor as zero");
  }
  const result = num1 % num2;

  try {
    await db.addCalculation("modulo", num1, num2, result);
    logInfo("modulo", num1, num2);
    return result;
  } catch (error) {
    console.error("Error adding calculation to the database:", error);
    throw error;
  }
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
