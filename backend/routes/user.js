const { Router }= require('express');
const UserController = require("../controllers/userController");
const AuthController  = require("../controllers/authController");
const Auth = require('../middleware/auth');

const router = new Router();