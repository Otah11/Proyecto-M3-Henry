import userDto from "../dtos/userDto";
import ICredentials from "../interfaces/ICredentials"; //??
import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialsService";
import credentialsDto from '../dtos/credentialdDto';


let users: IUser[] = [];

let id:number=1;


export const getUsersService = async () => {
    return users;
};

export const getUserByIdService = async (id: number) :Promise <IUser | undefined> => {
    return users.find((user) => user.id === id);
}

export const createUserService= async (user:userDto, credentials:credentialsDto) :Promise< IUser> => {
    const {username,password}= credentials;
    const idCredentials = await createCredentialsService(username,password);
    const {name,email,birthDate,dni}=user;
    const newUser: IUser = {
        id,
        name,
        email,
        birthDate,
        dni,
        idCredentials
    }

    users.push(newUser);
    id++;

    return newUser;
};

export const deleteUserService = async () => {};

