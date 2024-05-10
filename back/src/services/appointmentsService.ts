import AppointmentDto from "../dtos/appointmentDto";
import  IAppointment from "../interfaces/IAppointments"; //IAppointment  from "../interfaces/IAppointments";
import { AppointmentModel, UserModel } from "../config/data-source";
import TipoTurno, { Appointment } from "../entities/Appointment";


let appointments: IAppointment[] = [];
let id: number = 1;

export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const allAppointments = await AppointmentModel.find();
    return allAppointments;
};

export const getAppointmentByIdService = async (appointmentId: number) : Promise<Appointment> => {
    const foundAppointment = await AppointmentModel.findOne({
        where: { id: appointmentId }
        });
        
        if (!foundAppointment) {
            throw new Error("Appointment not found");
        }
        
        return foundAppointment;
};

export const createAppointmentService = async (appointment : AppointmentDto, userId: number): Promise<Appointment> =>{
    const {time, date, type} = appointment;
    if (!(type in TipoTurno)){
        throw new Error("Invalid appointment type")};
    const user = await UserModel.findOne({where: {id: userId}});
    
    if(!user){
        throw new Error("User not found");
    }else{   
        const newAppointment = AppointmentModel.create({
            date: date,
            time: time,
            type: type,
            user: user
        });
        await AppointmentModel.save(newAppointment);
        return newAppointment;
    }
}

export const cancelAppointmentService = async (id: number)=> {
    const appointment = await getAppointmentByIdService(id);
    if(appointment){
        appointment.status = "cancelled";
        await AppointmentModel.save(appointment);
        return appointment;
    }
};

