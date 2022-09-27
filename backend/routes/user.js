const { Router } = require('express');
const UserController = require("../controllers/userController");
const AuthController  = require("../controllers/authController");
const Auth = require('../middleware/auth');

const express = require('express')
const router = express.Router();

//Admin
//Admin ska kunna skapa nya konton och kunna radera resurser.
router.post('/authenticate', AuthController.authenticate) //Login

router.get('/getme', Auth.admin, UserController.getMe)
router.post('/createuser', Auth.admin, UserController.create)

router.delete('/:id', Auth.admin, UserController.delete) 

module.exports = router