import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUsersService } from "../services/usersService";
import { checkCredentialsService } from "../services/credentialsService";
import IUser from "../interfaces/IUser";
import ICredentials from '../interfaces/ICredentials';
import { User } from "../entities/User";

export const getAllUsersControllers = async (req: Request, res: Response): Promise<void> => {
    const users = await getUsersService();
    res.status(200).json(users);
}
export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    try {
        const user = await getUserByIdService(parseInt(id));
        res.status(200).json(user)
    } catch (error) {
        
    }
    ;
}

export const postUserRegisterController = async (req: Request, res: Response) => {
    try {
        const { name, email, birthDate, dni, username, password } = req.body;
        const user = { name, email, birthDate, dni, };
        const credentialArray = { username, password };
        const newUser :User = await createUserService(user, credentialArray);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const postUserLoginController = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await checkCredentialsService(username, password);
        res.status(200).json(user);
    } catch (error:any) {
        res.status(400).json({error:error.message});        
    }
}

//res.send("get all users")
//res.send("get user by ID")
//res.send("this post user")
//res.send("put user")