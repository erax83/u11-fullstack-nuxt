const config = require("../config");
const { Router } = require("express");

const router = Router();

const recepiesController = require("../controllers/recepiesController");

// Add one
router.post("/recepies/add", recepiesController.add);

// Get all
router.get("/recepies", recepiesController.list);

//Delete one
router.delete("/recepies/:id", recepiesController.delete);


module.exports = router;
