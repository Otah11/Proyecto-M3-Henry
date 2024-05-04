import { Router, Request, Response } from "express";
import routerUser from "./userRouters";
import routerAppointment from "./appointmentsRouter";

const indexRouter: Router = Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello Wolrd!!");
});

indexRouter.use("/users", routerUser)
indexRouter.use("/appointments", routerAppointment)

export default indexRouter