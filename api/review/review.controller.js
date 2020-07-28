const reviewService = require('./review.service')



async function addReview(req, res) {
    const review = req.body;
    review.rate = +review.rate
    await reviewService.add(review)
    res.send(review)
}


module.exports = {
   addReview
}