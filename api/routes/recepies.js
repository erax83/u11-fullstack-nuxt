const config = require("../config");
const { Router } = require("express");

const router = Router();

const recepiesController = require("../controllers/recepiesController");

router.post("/recepies/add", recepiesController.add);

// router.post('/users/login', usersController.login)

// router.get('/users/user', usersController.user)

module.exports = router;
