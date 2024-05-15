import styles from './Gymhome.module.css'

const Gymhome = () => {
    return (
        <div className={styles.container}>
            <h1>Bienvenido a Gym Studio</h1>
            <p>Bienvenidos a Gym Studio, el salón de gimnasia de primera nivel que ofrece una amplia variedad de clases diseñadas para satisfacer las necesidades de adolescentes y adultos! Aquí encontrarás una selección de servicios de alta calidad que te permitirán mejorar tu condición física, aumentar tu energía y reducir el estrés. Descubre cómo nuestras clases innovadoras y profesionales te ayudarán a alcanzar tus objetivos de salud y bienestar. ¡No te pierdas esta oportunidad de transformar tu vida y tu cuerpo al unirte a nuestra comunidad de gimnastas motivados</p>
            <ul>
                <li><strong>Calistenia:</strong> Ejercicio que utiliza el peso corporal para desarrollar fuerza, resistencia y flexibilidad.</li>
                <li><strong>Crossfit:</strong> Entrenamiento funcional de alta intensidad que combina levantamiento de pesas, cardio y gimnasia.</li>
                <li><strong>HIT:</strong> Entrenamiento de alta intensidad que alterna períodos cortos de ejercicio intenso con descanso.</li>
                <li><strong>Kickboxing:</strong> Arte marcial y actividad de fitness que combina boxeo y patadas.</li>
                <li><strong>Pilates:</strong> Método de ejercicio que se centra en la fuerza, la flexibilidad y la postura.</li>
                <li><strong>Spinning:</strong> Clase de ciclismo indoor de alta intensidad.</li>
                <li><strong>Streching:</strong> Rutina de estiramientos para mejorar la flexibilidad y prevenir lesiones.</li>
                <li><strong>Taebo:</strong> Combinación de taekwondo y boxeo, enfocado en el cardio y la quema de calorías.</li>
                <li><strong>Taekwondo:</strong> Arte marcial de origen coreano que se enfoca en técnicas de piernas y defensa personal.</li>
                <li><strong>Taichi:</strong> Arte marcial chino que combina movimiento suave y conciencia mental.</li>
                <li><strong>Zumba:</strong> Clase de baile fitness que combina ritmos latinos e internacionales.</li>
                <li><strong>Yoga:</strong> Práctica que une cuerpo y mente a través de posturas, respiración y meditación.</li>
            </ul>
        </div>
    );
}

export default Gymhome;