"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var index_1 = require("./config/index");
require("reflect-metadata");
var data_source_1 = require("./config/data-source");
data_source_1.AppDataSource.initialize().then(function () {
    console.log('Data Source has been initialized!');
    server_1.default.listen(index_1.PORT, function () {
        console.log("Server running on port ".concat(index_1.PORT));
    });
});
