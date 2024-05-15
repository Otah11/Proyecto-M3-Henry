import { useState } from "react";

const AppointmentForm2 = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Cita creada:', { date, time, type });
  };

  const getTimes = () => {
    const times = [];
    for (let i = 6; i <= 21; i++) {
      times.push(`${i}:00`);
    }
    return times;
  };

  const types = [
    'Calistenia',
    'Crossfit',
    'HIIT',
    'Kickboxing',
    'Pilates',
    'Spinning',
    'Stretching',
    'Taebo',
    'Taekwondo',
    'Taichi',
    'Zumba',
    'Yoga'
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]}
          max={new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0]} // Solo permite de lunes a sábado
        />
      </div>
      <div>
        <label htmlFor="time">Horario:</label>
        <select id="time" value={time} onChange={handleTimeChange}>
          <option value="">Seleccione un horario</option>
          {getTimes().map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="type">Tipo:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="">Seleccione un tipo</option>
          {types.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <button type="submit">Crear Cita</button>
    </form>
  );
};

export default AppointmentForm2;
