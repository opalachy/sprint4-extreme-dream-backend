const express = require('express')
const { getReviews, getReview, deleteReview, addReview , updateReview} = require('./review.controller')
const router = express.Router()


router.post('/', addReview)


module.exports = router