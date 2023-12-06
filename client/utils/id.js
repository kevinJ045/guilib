"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elman_1 = require("./elman");
function generateRandomID(length) {
    if (length === void 0) { length = 12; }
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var randomID = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charactersLength);
        randomID += characters.charAt(randomIndex);
    }
    return elman_1.GUIDOMTREE[randomID] ? generateRandomID(length) : randomID;
}
exports.default = generateRandomID;
