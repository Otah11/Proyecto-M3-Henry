"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRouters_1 = __importDefault(require("./userRouters"));
var appointmentsRouter_1 = __importDefault(require("./appointmentsRouter"));
var indexRouter = (0, express_1.Router)();
indexRouter.get("/", function (req, res) {
    res.status(200).send("Hello Wolrd!!");
});
indexRouter.use("/users", userRouters_1.default);
indexRouter.use("/appointments", appointmentsRouter_1.default);
exports.default = indexRouter;
