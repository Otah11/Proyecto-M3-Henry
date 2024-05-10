import { Request, Response } from "express";
import {getAppointmentsService,getAppointmentByIdService,createAppointmentService,cancelAppointmentService,} from "../services/appointmentsService";
import   IAppointment  from "../interfaces/IAppointments"; 
import { Appointment } from '../entities/Appointment';

export const getAllAppointmentsController = async (req: Request, res: Response):Promise <void> => {
    const appointments = await getAppointmentsService()
    res.status(200).json(appointments);
}
export const getAppointmentByIdController = async (req: Request, res: Response):Promise <void> => {
    const appointmentById = await getAppointmentByIdService(parseInt(req.params.id));
    res.status(200).json(appointmentById);
}
export const postAppointmentController = async (req: Request, res: Response):Promise <void> => {
    try {
        const {date, time, type,  userId} = req.body;
        const newAppointment = await createAppointmentService({date, time, type}, parseInt(userId));
        res.status(201).json(newAppointment);
    } catch (error:any) {
        res.status(400).json({error:error.message});
    }
}
export const putAppointmentController = async (req: Request, res: Response):Promise <void> => {
    try {
        const appointmentId = req.params.id;
        const appointment = await cancelAppointmentService(parseInt(appointmentId));
        res.status(200).json(appointment);
    } catch (error:any) {
        res.status(400).json({error:error.message});
    }
}
