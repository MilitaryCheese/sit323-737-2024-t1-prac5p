const dbService = require("../services/dbService");

exports.getCalculations = async (req, res) => {
  try {
    const calculations = await dbService.getCalculations();
    res.json({ calculations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCalculations = async (req, res) => {
  try {
    const { calculationId, updates } = req.body;
    updates.timestamp = new Date();
    const updatedCalculation = await dbService.updateCalculation(calculationId, updates);
    res.json({ updatedCalculation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCalculations = async (req, res) => {
  try {
    const { calculationId } = req.body;
    const deletedCalculation = await dbService.deleteCalculation(calculationId);
    res.json({ deletedCalculation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
