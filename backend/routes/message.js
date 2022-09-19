const { Router } = require('express')
const messageController = require('../controllers/messageController')
const Auth = require('../middleware/auth');
const router = new Router()