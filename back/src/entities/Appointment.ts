import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({name: "appointments"})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date
    @Column()
    time: String
    

    @Column({default: "active"})
    status: "active" | "cancelled"

    @ManyToOne(() => User, user => user.appointments)
    user: User

}