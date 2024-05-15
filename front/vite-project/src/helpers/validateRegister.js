export const validateRegister = (input) => {
    let errors = {};
    if (input.name === ""){
        errors.name="Por favor, ingrese su nombre y apellido";
    }
    if (input.email === ""){
        errors.email="Por favor, ingrese su email";    
    } else if (!/\S+@\S+.\S+/.test(input.email)){
        errors.email="Por favor, ingrese un email válido";
    }
    if (input.birthDate === ""){
        errors.birthDate="Por favor, ingrese su fecha de nacimiento";
    }
    if (input.dni === ""){
        errors.dni="Por favor, ingrese su dni";
    }else if (input.dni.length !== 8){
        errors.dni="Por favor, ingrese un dni válido";
    }
    if (input.username === ""){
        errors.username="Por favor, ingrese su username";
    }else if (input.username.length < 6){
        errors.username="Por favor, ingrese un username de al menos 6 caracteres";
    }
    if (input.password === ""){
        errors.password="Por favor, ingrese su password";
    }else if (input.password.length < 8){
        errors.password="Por favor, ingrese una password de al menos 8 caracteres";
    }
    if (input.password === input.confirmPassword) {
      console.log(input);
    } else {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    return errors;
    
}
