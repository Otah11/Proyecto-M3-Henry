import { Request, Response } from "express";

function getAllUsersControllers(req: Request, res: Response) {
    res.status(200).send("get all users");
}

function getUserByIdController(req: Request, res: Response) {
    const {id} = req.params;
    res.status(200).send(`get user by ID, your ID is: ${id}`);
}

function postUserController(req: Request, res: Response) {
    const user = req.body;
    res.send(201).json({ message: "this post user"});
}

function putUserController(req: Request, res: Response) {
    const user = req.body;
    res.send(201).json({ message: "put user", body: user});
}

export {
    getAllUsersControllers,
    getUserByIdController,
    postUserController,
    putUserController,
}