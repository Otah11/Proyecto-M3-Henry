"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registerDataCheck = function (req, res, next) {
    var _a = req.body, name = _a.name, email = _a.email, birthDate = _a.birthDate, dni = _a.dni, username = _a.username, password = _a.password;
    var fechaEnFormato = new Date(birthDate);
    if (!name || !email || !birthDate || !dni || !username || !password) {
        res.status(400).json({ message: "Faltan datos" });
    }
    if (typeof name !== "string") {
        res.status(400).json({ message: "El nombre no es válido" });
    }
    if (typeof email !== "string") {
        res.status(400).json({ message: "El email no es válido" });
    }
    if (!fechaEnFormato.getTime()) {
        res.status(400).json({ message: "La fecha de nacimiento no es válida" });
    }
    if (typeof dni !== "number") {
        res.status(400).json({ message: "El dni no es válido" });
    }
    if (typeof username !== "string") {
        res.status(400).json({ message: "El nombre de usuario no es válido" });
    }
    if (typeof password !== "string") {
        res.status(400).json({ message: "La contraseña no es válida" });
    }
    next();
};
exports.default = registerDataCheck;
