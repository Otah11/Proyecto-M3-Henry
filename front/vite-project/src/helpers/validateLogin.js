export const validateLogin = (input) => {
    let errors = {};
    
    if (input.username === ""){
        errors.name="Ingrese su Usuario";
    }
    if (input.password === ""){
        errors.name="Ingrese su Contraseña";
    }
        return errors;

}