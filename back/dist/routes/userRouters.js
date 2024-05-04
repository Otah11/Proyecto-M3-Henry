"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersControllers_1 = require("../controllers/usersControllers");
var routerUser = (0, express_1.Router)();
routerUser.get("/", usersControllers_1.getAllUsersControllers);
routerUser.get("/:id", usersControllers_1.getUserByIdController);
routerUser.post("/register", usersControllers_1.postUserRegisterController);
routerUser.post("/login", usersControllers_1.postUserLoginController);
exports.default = routerUser;
