"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PROTO = exports.PORT = void 0;
require("dotenv/config");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./src/config/.env" });
var _a = process.env, PORT = _a.PORT, PROTO = _a.PROTO, HOST = _a.HOST;
exports.PORT = PORT;
exports.PROTO = PROTO;
exports.HOST = HOST;
