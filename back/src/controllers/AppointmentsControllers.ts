import { Request, Response } from "express";
import {
    getAppointmentsService,
    getAppointmentByIdService,
    createAppointmentService,
    cancelAppointmentService,
} from "../services/appointmentsService";
import  { IAppointment } from "../interfaces/IAppointments"; 

export const getAllAppointmentsController = async (req: Request, res: Response):Promise <void> => {
    try {
        const appointments = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: "error en el servidor"});
    }
}
export const getAppointmentByIdController = async (req: Request, res: Response):Promise <void> => {
    const appointmentId: number = parseInt(req.params.id);
    try {
        const appointment = await getAppointmentByIdService(appointmentId);
        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: "Cita no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "error en el servidor"});
    }
}
export const postAppointmentController = async (req: Request, res: Response):Promise <void> => {
    const appointment: IAppointment = req.body;
    try {
        const newAppointment = await createAppointmentService( appointment);
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: "error en el servidor"});
    }
}
export const putAppointmentController = async (req: Request, res: Response):Promise <void> => {
    const appointmentId: number = parseInt(req.params.id);
    try {
        await cancelAppointmentService(appointmentId);
        res.status(200).json({ message: "Cita cancelada" });
    } catch (error) {
        res.status(500).json({ message: "error en el servidor"});
    }
}
