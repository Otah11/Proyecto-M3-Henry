"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserLogin = void 0;
var checkUserLogin = function (req, res, next) {
    var userData = req.body;
    if (typeof userData.username !== 'string' || typeof userData.password !== 'string') {
        return res.status(400).json({ error: 'Both username and password must be provided as strings' });
    }
    next();
};
exports.checkUserLogin = checkUserLogin;
