"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var index_1 = require("./config/index");
server_1.default.listen(index_1.PORT, function () {
    console.log("Server listening on port ".concat(index_1.PORT));
});
