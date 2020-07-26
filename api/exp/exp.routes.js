const express = require('express')



const { getExps, getExp, deleteExp, addExp , updateExp} = require('./exp.controller')
const router = express.Router()


router.get('/', getExps)
router.get('/:id', getExp)
router.delete('/:id', deleteExp)
router.post('/', addExp)
router.put('/:id', updateExp)

module.exports = router