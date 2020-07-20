const express = require('express')
<<<<<<< HEAD
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { login, signup, logout } = require('./auth.controller')
=======
const {requireAuth}  = require('../../middlewares/requireAuth.middleware')
const {login, signup, logout} = require('./auth.controller')
// console.log('authRoutes: ',requireAuth);
>>>>>>> 1cc0ea6efb9b83ff4c8ff3454bec7f8625529246


const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', requireAuth, logout)

module.exports = router