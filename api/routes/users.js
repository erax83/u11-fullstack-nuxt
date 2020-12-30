const config = require("../config");
const { Router } = require("express");

const router = Router();

const usersController = require("../controllers/usersController");

router.post("/users/register", usersController.register);

router.post("/users/login", usersController.login);

router.get("/users/user", usersController.user);

// router.put("/users/:id", usersController.update);

// router.update("/users/addUserRecepie", usersController.addUserRecepie);

module.exports = router;
