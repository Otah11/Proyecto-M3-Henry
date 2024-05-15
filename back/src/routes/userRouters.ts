import { Router } from "express";
import { getAllUsersControllers, getUserByIdController, postUserLoginController, postUserRegisterController } from "../controllers/usersControllers";
import  registerDataCheck  from "../middlewares/checkRequiredFields";

const routerUser: Router = Router()

routerUser.get("/", getAllUsersControllers);
routerUser.get("/:id", getUserByIdController);
routerUser.post("/register",registerDataCheck,postUserRegisterController);
routerUser.post("/login", postUserLoginController);

export default routerUser
