import AppointmentDto from "../dtos/appointmentDto";
import  { IAppointment, Status } from "../interfaces/IAppointments"; //IAppointment  from "../interfaces/IAppointments";

let appointments: IAppointment[] = [];
let id: number = 1;

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
};

export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
    return appointments.find((appointment) => appointment.id === id);
};

// export const createAppointmentService = async (userId: number, appointment: IAppointment): Promise<IAppointment> => {
//     const newAppointment: IAppointment = {
//         ...appointment,
//         id,
//         userId
//     };

//     appointments.push(newAppointment);
//     id++;

//     return newAppointment;
// };
export const createAppointmentService = (appointment : AppointmentDto) =>{
    const newAppointment = {
        id,
        date: appointment.date,
        time: appointment.time,
        userId: appointment.userId,
        status:appointment.status

    }
    if(!newAppointment.userId){
        throw new Error("Appointment must have a userId");
    }else
    {   id++,
        appointments.push(newAppointment);}

}


export const cancelAppointmentService = async (appointmentId: number): Promise<void> => {
    const index = appointments.findIndex((appointment) => appointment.id === appointmentId);
    if (index !== -1) {
        appointments[index].status = Status.CANCELLED;
    }
};
