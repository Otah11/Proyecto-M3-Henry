import { Router, Request, Response } from "express";
const routerService: Router = Router();

routerService.get("/", (req: Request, res: Response) => {
    res.send("get all services");
});

routerService.get("/id", () => {});

routerService.post("/", () => {});

routerService.put("/", () => {});

routerService.patch("/", () => {});

export default routerService;