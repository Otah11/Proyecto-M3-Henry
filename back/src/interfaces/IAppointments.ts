enum Status {
    ACTIVE = "active",
    CANCELLED = "cancelled",
}

interface IAppointment{
    id: number,
    date: Date,
    time: Date,
    status: Status,
    userId: number
    
}
export  { IAppointment, Status };
