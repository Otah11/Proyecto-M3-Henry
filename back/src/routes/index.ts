import { Router, Request, Response } from "express";
import routerUser from "./user";
import routerAppointment from "./appointment";
import routerService from "./service";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello Wolrd!!");
});

router.use("users", routerUser)
router.use("/appointments", routerAppointment)
router.use("/services", routerService)

export default router