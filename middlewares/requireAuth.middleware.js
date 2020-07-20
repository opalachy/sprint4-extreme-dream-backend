const logger = require('../services/logger.service')
const session = require('express-session')

async function requireAuth(req, res, next) {
    if (!req.session || !req.session.user) {
        res.status(401).end('Unauthorized!');
        return;
    }
    next();
}

module.exports = {requireAuth};