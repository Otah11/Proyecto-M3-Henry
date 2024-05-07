
interface AppointmentDto {
    date: Date,
    time: String,
    status: "active" | "cancelled",
}
export default AppointmentDto;