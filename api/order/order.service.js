const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    remove,
    add,
    getById
}

async function query(filter) {
    const criteria = {
        'by._id': filter.userId
    }
    const collection = await dbService.getCollection('order')
    try {
        var orders = await collection.find(criteria).toArray()   
            
        return orders
    } catch (err) {
        console.log('ERROR: cannot find orders')
        throw err;
    }    
}   
async function getById(orderId) {
    const collection = await dbService.getCollection('order')
    try {
        const order = await collection.findOne({"_id":ObjectId(orderId)})
        return order
    } catch (err) {
        console.log('ERROR: cannot find orders')
        throw err;
    }    
}   

async function remove(orderId) {
    const collection = await dbService.getCollection('order')    
    try {
        await collection.deleteOne({"_id":ObjectId(orderId)})    
    } catch (err) {
        console.log(`ERROR: cannot remove order ${orderId}`)    
        throw err;
    }
}

async function add(order) {
    const collection = await dbService.getCollection('order')
    try {
        await collection.insertOne(order);    
        return order;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)    
        throw err;
    }
}



