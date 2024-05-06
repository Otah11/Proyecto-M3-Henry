import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUsersService } from "../services/usersService";
import { checkCredentialsService } from "../services/credentialsService";
import IUser from "../interfaces/IUser";
import ICredentials from '../interfaces/ICredentials';

export const getAllUsersControllers = async (req: Request, res: Response): Promise<void> => {
    const users = await getUsersService();
    res.status(200).json(users);
}
export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = parseInt(req.params.id); // obtener el ID del usuario de la solicitud
        const user = await getUserByIdService(userId); // llamar al servicio para obtener el usuario por ID
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });    }

}

export const postUserRegisterController = async (req: Request, res: Response) => {
    try {
        const { name, email, birthDate, dni, username, password } = req.body;
        const user = { name, email, birthDate, dni, };// por que tengo que poner el idCredentials?
        const credentialArray = { username, password };
        const newUser :IUser = await createUserService(user, credentialArray);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const postUserLoginController = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        await checkCredentialsService(username, password);
        res.status(200).send("usuario logeado");
    } catch (error:any) {
        res.status(400).json({error:error.message});        
    }
}

//res.send("get all users")
//res.send("get user by ID")
//res.send("this post user")
//res.send("put user")