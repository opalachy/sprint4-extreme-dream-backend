const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query() {
    const collection = await dbService.getCollection('exp');
    try {
        const exps = await collection.find().toArray();
        return exps
    } catch (err) {
        console.log('ERROR: cannot find exps')
        throw err;
    }
}
async function getById(expId) {
    const collection = await dbService.getCollection('exp')
    try {
        const exp = await collection.findOne({"_id":ObjectId(expId)})
        return exp
    } catch (err) {
        console.log(`ERROR: while finding exp ${expId}`)
        throw err;
    }
}

async function remove(expId) {
    const collection = await dbService.getCollection('exp')
    try {
        await collection.deleteOne({"_id":ObjectId(expId)})
    } catch (err) {
        console.log(`ERROR: cannot remove exp ${expId}`)
        throw err;
    }
}
async function add(exp) {
    const collection = await dbService.getCollection('exp')
    try {
        await collection.insertOne(exp);
        return exp;
    } catch (err) {
        console.log(`ERROR: cannot insert exp`)
        throw err;
    }
}

async function update(exp) {
    const collection = await dbService.getCollection('exp')
    exp._id = ObjectId(exp._id);
    try {
        await collection.replaceOne({"_id":exp._id}, {$set : exp})
        return exp
    } catch (err) {
        console.log(`ERROR: cannot update exp ${exp._id}`)
        throw err;
    }
}


// function _buildCriteria(filterBy) {
//     console.log(filterBy);
//     const criteria = {};
//     if (filterBy.name_like) {
//         criteria.name = {'$regex': `.*${filterBy.name_like.toLowerCase()}.*\i`} 
//     }
//     if (filterBy.type !== 'all') {
//         criteria.type = filterBy.type;
//     }
//     if (filterBy.inStock !== 'all') {
//         criteria.inStock = true;
//     }
//     return criteria;
// }

// async function query(filterBy = {}) {
//     console.log(filterBy)
//     let sortBy = {};
//     if(filterBy._sortBy === 'createdAt') sortBy[filterBy._sortBy] = -1
//     else sortBy[filterBy._sortBy] = 1;
//     const criteria = _buildCriteria(filterBy);
//     const collection = await dbService.getCollection('exp');
//     try {
//         const exps = await collection.find(criteria).sort(sortBy).toArray();
//         return exps
//     } catch (err) {
//         console.log('ERROR: cannot find users')
//         throw err;
//     }
// }