import { Request, Response } from "express";

function getAllServicesController(req: Request, res: Response) {
    res. status(200).send("This is get all appointments")
}

function getServiceByIdController(req: Request, res: Response){
    const {id} = req.params;
    res.status(200).send(`This is get appointment by id, your id is: ${id}`);
}

function postServiceController(req: Request, res: Response) {
    const appointment = req.body
    res
    .send(201)
    .json({message: "This is a post appointment", body: appointment})
}

function putServiceController(req: Request, res: Response) {
    const appointment = req.body;
    res.send(201).json({ message: "put appointment", body: appointment});
}

export {
    getAllServicesController,
    getServiceByIdController,
    postServiceController,
    putServiceController,
}
