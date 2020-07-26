const express = require('express')
const { getOrders , getOrder , deleteOrder , addOrder } = require('./order.controller')
const router = express.Router()



router.get('/', getOrders)
router.get('/:id', getOrder)
router.delete('/:id',  deleteOrder)
router.post('/',  addOrder)

module.exports = router