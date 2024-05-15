import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

enum TipoTurno{ 
    Yoga = "Yoga",
    Streching = "Streching",
    Pilates = "Pilates",
    Crossfit = "Crossfit",
    Hiit = "Hiit",
    Zumba = "Zumba",
    Spinning = "Spinning",
    Kickboxing = "Kickboxing",
    Taebo = "Taebo",
    Taekwondo = "Taekwondo",
    Taichi = "Taichi",
    Calistenia = "Calistenia",

}
@Entity({name: "appointments"})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date
    @Column()
    time: String
    
    @Column({type: "enum", enum: TipoTurno})
    type: TipoTurno

    @Column({default: "active"})
    status: "active" | "cancelled"

    @ManyToOne(() => User, user => user.appointments)
    user: User

}
export default TipoTurno