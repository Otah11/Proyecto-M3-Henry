export const validateAppointment = (formData) => {
  const errors = {};

  if (!formData.date) {
    errors.date = 'La fecha es requerida';
  } else if (new Date(formData.date) <= new Date()) {
    errors.date = 'La fecha debe ser a partir de mañana';
  }

  if (!formData.time) {
    errors.time = 'El horario es requerido';
  }

  if (!formData.type) {
    errors.type = 'La clase es requerida';
  }

  return errors;
};
