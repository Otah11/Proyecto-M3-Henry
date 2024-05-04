import { Request, Response } from "express";

export const getAllUsersControllers = async (req: Request, res: Response) => {
    res.send("get all users")
}
export const getUserByIdController = async (req: Request, res: Response) => {
    res.send("get user by ID")
}

export const postUserRegisterController = async (req: Request, res: Response) => {
    res.send("this post user")
}

export const postUserLoginController = async (req: Request, res: Response) => {
    res.send("put user")
}