const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.post("/add", calculatorController.add);
router.post("/subtract", calculatorController.subtract);
router.post("/multiply", calculatorController.multiply);
router.post("/divide", calculatorController.divide);

// Tak 4.2 new functionality
router.post("/exponentiation", calculatorController.exponentiation);
router.post("/square-root", calculatorController.squareRoot);
router.post("/modulo", calculatorController.modulo);

module.exports = router;
