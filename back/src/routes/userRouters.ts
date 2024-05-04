import { Router } from "express";
import { getAllUsersControllers, getUserByIdController, postUserLoginController, postUserRegisterController } from "../controllers/usersControllers";

const routerUser: Router = Router()

routerUser.get("/", getAllUsersControllers);
routerUser.get("/:id", getUserByIdController);
routerUser.post("/register", postUserRegisterController);
routerUser.post("/login", postUserLoginController);

export default routerUser
