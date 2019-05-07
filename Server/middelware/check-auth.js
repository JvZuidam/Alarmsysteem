const jwt = require('jsonwebtoken');
const responseMessages = require("../responseMessages");


module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.token, 'secret');
        req.userData = decoded;
        next();
    } catch (e) {
        return responseMessages.ErrorCode401Auth(res)
    }


};