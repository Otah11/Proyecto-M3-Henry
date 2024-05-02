import { Router } from "express";
const routerUser: Router = Router()

routerUser.get("/", () => {});
routerUser.get("/:id", () => {});
routerUser.post("/register", () => {});
routerUser.post("/login", () => {});

export default routerUser;
