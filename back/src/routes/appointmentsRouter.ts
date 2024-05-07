import { Router, Request, Response } from "express";
import {getAllAppointmentsController,getAppointmentByIdController,postAppointmentController,putAppointmentController,} from "../controllers/AppointmentsControllers"

const routerAppointment: Router = Router();

routerAppointment.get("/", getAllAppointmentsController);

routerAppointment.get("/:id", getAppointmentByIdController);

routerAppointment.post("/schedule", postAppointmentController);

routerAppointment.put("/cancel/:id", putAppointmentController);

export default routerAppointment