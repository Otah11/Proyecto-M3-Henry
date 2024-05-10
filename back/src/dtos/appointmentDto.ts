import TipoTurno from "../entities/Appointment";

interface AppointmentDto {
    date: Date,
    time: String,
    type: TipoTurno,
    //status: "active" | "cancelled",
}
export default AppointmentDto;