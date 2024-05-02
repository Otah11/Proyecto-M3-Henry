import { Request, Response } from "express";

function getAllAppointmentsController(req: Request, res: Response) {
    res. status(200).send("This is get all appointments")
}

function getAppointmentByIdController(req: Request, res: Response){
    const {id} = req.params;
    res.status(200).send(`This is get appointment by id, your id is: ${id}`);
}

function postAppointmentController(req: Request, res: Response) {
    const appointment = req.body
    res
    .send(201)
    .json({message: "This is a post appointment", body: appointment})
}

function putAppointmentController(req: Request, res: Response) {
    const appointment = req.body;
    res.send(201).json({ message: "put appointment", body: appointment});
}

export {
    getAllAppointmentsController,
    getAppointmentByIdController,
    postAppointmentController,
    putAppointmentController,
}
