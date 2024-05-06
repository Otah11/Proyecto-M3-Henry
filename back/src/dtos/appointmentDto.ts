import { Status } from "../interfaces/IAppointments"

interface AppointmentDto {
    date: Date,
    time: Date,
    userId: number,
    status: Status
}

export default AppointmentDto