import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credentials } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "juan1234",
    database: "m3turnos",
    //dropSchema: true,
    synchronize: true,
    logging: ["error"],
    entities: [User,Credentials, Appointment],
    subscribers: [],
    migrations: [],
})

export const UserModel= AppDataSource.getRepository(User)
export const CredentialsModel= AppDataSource.getRepository(Credentials)
export const AppointmentModel=  AppDataSource.getRepository(Appointment)