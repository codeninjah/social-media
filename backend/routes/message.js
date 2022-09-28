const { Router } = require('express')
const messageController = require('../controllers/messageController')
const Auth = require('../middleware/auth');
const router = new Router()

//For user
router.post('/createmessage',Auth.user, messageController.create) 
router.patch('/:id',Auth.user, messageController.update) 
router.get('/all', Auth.user, messageController.getAll)

//For admin
router.get('/', Auth.admin, messageController.getAll) 
router.patch('/:id',Auth.admin, messageController.update) 
router.post('/createmessage',Auth.admin, messageController.create) 

module.exports = router