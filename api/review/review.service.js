const dbService = require('../../services/db.service');

module.exports = {
    add
}


async function add(review) {
    const collection = await dbService.getCollection('review')
    try {
        await collection.insertOne(review);
        return review;
    } catch (err) {
        console.log(`ERROR: cannot insert review`)
        throw err;
    }
}





