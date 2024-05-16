"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersControllers_1 = require("../controllers/usersControllers");
var checkRequiredFields_1 = __importDefault(require("../middlewares/checkRequiredFields"));
var loginRequiredFields_1 = require("../middlewares/loginRequiredFields");
var routerUser = (0, express_1.Router)();
routerUser.get("/", usersControllers_1.getAllUsersControllers);
routerUser.get("/:id", usersControllers_1.getUserByIdController);
routerUser.post("/register", checkRequiredFields_1.default, usersControllers_1.postUserRegisterController);
routerUser.post("/login", loginRequiredFields_1.checkUserLogin, usersControllers_1.postUserLoginController);
exports.default = routerUser;
