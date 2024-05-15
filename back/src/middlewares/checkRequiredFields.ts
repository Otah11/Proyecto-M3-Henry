// import { Request, Response, NextFunction } from 'express';
// import userDto from '../dtos/userDto';

// const checkRequiredFields = (userData: userDto): string[] => {
//     const requiredFields = ['name', 'email', 'birthDate', 'dni'];
//     return requiredFields.filter(field => !(field in userData));
// };

// const checkDataTypes = (userData: userDto): boolean => {
//     return (
//         typeof userData.name === 'string' &&
//         typeof userData.email === 'string' &&
//         new Date(userData.birthDate).toString() !== 'Invalid Date' &&
//         typeof userData.dni === 'number'
        
//     );
// };

// export const checkUserRegisterDto = (req: Request, res: Response, next: NextFunction) => {
//     const userData: userDto = req.body;

//     const missingFields = checkRequiredFields(userData);
//     if (missingFields.length > 0) {
//         return res.status(400).json({ error: `The following fields are missing: ${missingFields.join(', ')}` });
//     }

//     if (!checkDataTypes(userData)) {
//         return res.status(400).json({ error: 'The provided data types are not valid' });
//     }

//     next();
// };
import { Request, Response, NextFunction } from "express"

const registerDataCheck = (req: Request, res: Response, next: NextFunction) => {
    const {name, email, birthDate, dni, username, password} = req.body
    const fechaEnFormato = new Date(birthDate)

    if(!name || !email || !birthDate || !dni || !username || !password){
        res.status(400).json({message: "Faltan datos"})
    }

    if(typeof name !== "string" ) {
        res.status(400).json({message: "El nombre no es válido"})
    }
    if(typeof email !== "string" ) {
        res.status(400).json({message: "El email no es válido"})
    }
    if(!fechaEnFormato.getTime() ) {
        res.status(400).json({message: "La fecha de nacimiento no es válida"})
    }
    if(typeof dni !== "number" ) {
        res.status(400).json({message: "El dni no es válido"})
    }
    if(typeof username !== "string" ) {
        res.status(400).json({message: "El nombre de usuario no es válido"})
    }
    if(typeof password !== "string" ) {
        res.status(400).json({message: "La contraseña no es válida"})
    }

    next()
}

export default registerDataCheck