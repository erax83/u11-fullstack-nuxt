const config = require('../config')
const { Router } = require('express')

const router = Router()


const usersController = require('../controllers/usersController')

router.post('/recepies/add', usersController.add)

// router.post('/users/login', usersController.login)

// router.get('/users/user', usersController.user)

module.exports = router