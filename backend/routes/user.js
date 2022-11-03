const { Router } = require('express');
const UserController = require("../controllers/userController");
const AuthController  = require("../controllers/authController");
const Auth = require('../middleware/auth');

const express = require('express')
const router = express.Router();

//Admin
router.post('/authenticate', AuthController.authenticate) //Login
router.get('/getme', Auth.common, UserController.getMe)
//router.get('/getme', Auth.user, UserController.getMe)
router.delete('/:id', UserController.delete) 

//This is used to create an account
router.post('/createuser', UserController.create)

router.get('/all', UserController.getAll)

router.get('/test', UserController.getOne)


module.exports = router