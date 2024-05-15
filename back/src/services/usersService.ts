import userDto from "../dtos/userDto";
import ICredentials from "../interfaces/ICredentials"; //??
import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialsService";
import  credentialsDto  from '../dtos/credentialdDto';
import { User } from "../entities/User";
import { CredentialsModel, UserModel } from "../config/data-source";

let users: IUser[] = [];

let id:number=1;

export const getUsersService = async ():Promise<User[]> => {
    const allUser:User[] = await UserModel.find({relations: ["appointments"]});
    return allUser;
};

export const getUserByIdService = async (id: number) :Promise <User | undefined> => {
    const userFound = await UserModel.findOne({where: { id: id }, relations: ["appointments"]});
    if(userFound) return userFound;
}

export const createUserService= async (user:userDto, credentials:credentialsDto) :Promise<User> => {
    const {name,email,birthDate,dni}= user;
    const {password,username}= credentials;
    
    const emailInUse = await UserModel.findOne({where: { email: email }});
    if(emailInUse) throw new Error('Email en uso');

    const dniInUse = await UserModel.findOne({where: { dni: dni }});
    if(dniInUse) throw new Error('DNI en uso');

    const usernameInUse = await CredentialsModel.findOne({where: {username: username}});
    if(usernameInUse) throw new Error('Usuario en uso');

    const credentialID = await createCredentialsService(username,password);
    
        const userCreated =  UserModel.create({
            name,
            email,
            birthDate,
            dni,
            credentials:{id:credentialID}}
        )
        UserModel.save(userCreated);
        return userCreated;
        
}


