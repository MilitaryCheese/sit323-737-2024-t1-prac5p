const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");
const dbConroller = require("../controllers/dbController");

router.post("/add", calculatorController.add);
router.post("/subtract", calculatorController.subtract);
router.post("/multiply", calculatorController.multiply);
router.post("/divide", calculatorController.divide);

// Tak 4.2 new functionality
router.post("/exponentiation", calculatorController.exponentiation);
router.post("/square-root", calculatorController.squareRoot);
router.post("/modulo", calculatorController.modulo);

// Task 9.1 functionality - exposing endpoints to get data from the db
router.get("/get-calculations", dbConroller.getCalculations);
router.put("/update-calculations", dbConroller.updateCalculations);
router.delete("/delete-calculations", dbConroller.deleteCalculations);

module.exports = router;
