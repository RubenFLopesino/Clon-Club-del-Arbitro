import { Question, QuestionOption } from './exam/exam.interface';

const questions: Question[] = [
  {
    question:
      'A4 ha controlado el balón durante 6 segundos en pista trasera. Efectúa un pase que toca en A5 que tiene un pie en pista delantera y otro en pista trasera. El balón ha pasado a pista delantera al tocar a A5. Si el balón vuelve a pista trasera, ¿la cuenta de 8 segundos se reinicia?',
    options: {
      a: 'El balón vuelve a pista trasera y la cuenta de 8 segundos se reinicia.',
      b: 'Si el balón vuelve a pista trasera, la cuenta de 8 segundos no se reinicia.',
      c: 'Si el balón vuelve a A4, es violación de campo atrás.',
    },
    correctAnswer: {
      option: QuestionOption.B,
      explanation:
        'Si el balón vuelve a pista trasera, la cuenta de 8 segundos no se reinicia. (ARTICULO 28)',
    },
  },
  {
    question:
      'Quedan 30 segundos en el reloj de partido para el final del cuarto cuarto, cuando A1 regatea en su pista delantera. B1 palmea el balón hasta la pista trasera del equipo A, donde A2 obtiene el control del balón. B2 comete falta sobre A2 con 8 segundos en el reloj de lanzamiento. Se concede un tiempo muerto al equipo A, que solicita sacar en su pista delantera. ¿Con cuántos segundos en el reloj de lanzamiento se reanudará el juego?',
    options: {
      a: 'El juego se reanudará con 14 segundos en el reloj de lanzamiento.',
      b: 'El juego se reanudará con 24 segundos en el reloj de lanzamiento.',
      c: 'El juego se reanudará con 8 segundos en el reloj de lanzamiento.',
    },
    correctAnswer: {
      option: QuestionOption.A,
      explanation:
        'El juego se reanudará mediante un saque del equipo A en la línea de saque en pista delantera, enfrente de la mesa de oficiales, con 14 segundos en el reloj de lanzamiento (Ejemplo 17-15 IO)',
    },
  },
  {
    question:
      'A4 es objeto de falta en acción de tiro. El balón entra en el cesto. A consecuencia del contacto, A4 debe abandonar la pista lesionado, por lo que su sustituto, A7, lanza el tiro libre adicional. Mientras el balón está en el aire, se sanciona falta de B4 sobre A9 (5ª falta de equipo). El tiro libre entra. En ese momento, A4, ya recuperado, solicita una sustitución. ¿Cuál es la decisión correcta?',
    options: {
      a: 'El tiro libre es válido. Se concede la sustitución de A4 y A9 dispondrá de dos tiros libres.',
      b: 'El tiro libre es válido. A9 dispondrá de dos tiros libres y, si convierte el segundo, se permitirá la sustitución de A4.',
      c: 'El tiro libre es válido. A9 dispondrá de dos tiros libres. La sustitución de A4 no se concede.',
    },
    correctAnswer: {
      option: QuestionOption.C,
      explanation:
        'El tiro libre es válido. A9 dispondrá de dos tiros libres. La sustitución de A4 no se concede. (ARTICULO 19)',
    },
  },
  {
    question:
      'Se detiene el partido porque A1 ha perdido una lentilla. De su banquillo sale el fisioterapeuta, que entra al terreno de juego y la recoge del suelo. Esta acción se considera:',
    options: {
      a: 'Asistencia a A1.',
      b: 'Lesión de A1.',
      c: 'Merecedora de sanción.',
    },
    correctAnswer: {
      option: QuestionOption.A,
      explanation: 'Asistencia a A1. (Art. 5.4 RJ)',
    },
  },
  {
    question:
      '¿Quiénes pueden acudir a solicitar información a la mesa de oficiales mientras el reloj de partido está en marcha?',
    options: {
      a: 'Nadie.',
      b: 'El entrenador y el ayudante de entrenador.',
      c: 'Los entrenadores y el delegado de equipo.',
    },
    correctAnswer: {
      option: QuestionOption.A,
      explanation: 'Nadie (ARTICULO 7)',
    },
  },
  {
    question:
      'A4 efectúa un saque de lateral cuando quedan 3 minutos para el final del partido. A5 agarra a B5 por el hombro, sin opción de jugar legalmente el balón, con el fin de evitar que B5 siga a su par. ¿Cuál es la decisión correcta?',
    options: {
      a: 'Debe sancionarse falta antideportiva a A5.',
      b: 'Falta normal al no estar aún en los dos últimos minutos.',
      c: 'Falta normal puesto que es el atacante quien comete la falta.',
    },
    correctAnswer: {
      option: QuestionOption.A,
      explanation: 'Debe sancionarse falta antideportiva a A5 (Art. 37.1.1 RJ)',
    },
  },
  {
    question:
      'A4 regatea en su pista trasera y se detiene con un pie en cada pista. Luego pasa a A10 que también tiene un pie en cada pista. ¿Cuál es la decisión correcta?',
    options: {
      a: 'A4 comete violación por balón devuelto a pista trasera al finalizar su regate.',
      b: 'Jugada legal.',
      c: 'A10 comete una violación por balón devuelto a pista trasera al recibir el balón.',
    },
    correctAnswer: {
      option: QuestionOption.B,
      explanation: 'Jugada legal (Art. 28.1 RJ)',
    },
  },
  {
    question:
      'Al comienzo de un cuarto el sacador A1 comete una violación en la prolongación de la línea central. El saque del equipo oponente será desde:',
    options: {
      a: 'La prolongación de la línea central.',
      b: 'La pista trasera.',
      c: 'La pista delantera.',
    },
    correctAnswer: {
      option: QuestionOption.A,
      explanation: 'La prolongación de la línea central.',
    },
  },
  {
    question:
      'El entrenador A solicita un tiempo muerto antes que el ayudante de entrenador B. El equipo A consigue una canasta. ¿Cuál es la decisión correcta?',
    options: {
      a: 'El tiempo muerto es concedido y se anotará al equipo A, que fue quien lo solicitó en primer lugar.',
      b: 'El tiempo muerto no es concedido, porque fue el equipo A quien lo solicitó primero y no tiene derecho a él en esta situación.',
      c: 'El tiempo muerto será concedido y se anotará al equipo B, aunque no lo haya solicitado en primer lugar.',
    },
    correctAnswer: {
      option: QuestionOption.C,
      explanation:
        'El tiempo muerto será concedido y se anotará al equipo B, aunque no lo haya solicitado en primer lugar. (Art. 18.2.7 RJ)',
    },
  },
  {
    question:
      'A1 lanza a canasta a falta de 1 minuto para el final del cuarto cuarto. Cuando el balón va por el aire, suena la señal del reloj de lanzamiento. La canasta acaba entrando. ¿Cuál es la decisión correcta?',
    options: {
      a: 'Se trata de una oportunidad de tiempo muerto para ambos equipos y una oportunidad de sustitución para el equipo B.',
      b: 'Se trata de una oportunidad de tiempo muerto para ambos equipos y una oportunidad de sustitución para ambos equipos.',
      c: 'Se trata de una oportunidad de tiempo muerto para el equipo B y una oportunidad de sustitución para el equipo B.',
    },
    correctAnswer: {
      option: QuestionOption.C,
      explanation:
        'Se trata de una oportunidad de tiempo muerto para el equipo B y una oportunidad de sustitución para el equipo B. (INTERPRETACIONES ARTICULO 18)',
    },
  },
  {
    question:
      'El entrenador del equipo A es descalificado. Sus funciones las ejercerá:',
    options: {
      a: 'El capitán del equipo o el ayudante de entrenador, si este no desea ejercerlas.',
      b: 'El ayudante de entrenador si lo hay.',
      c: 'Si no hay ayudante entrenador y el capitán está en pista, el miembro de equipo que esté en el banquillo y sea designado por el capitán.',
    },
    correctAnswer: {
      option: QuestionOption.B,
      explanation: 'El ayudante de entrenador si lo hay. (ARTICULO 7)',
    },
  },
  {
    question:
      'Durante el salto inicial, A4 palmea el balón y llega a B5. El árbitro señala violación de pasos de este jugador. ¿Cuál es la decisión correcta?',
    options: {
      a: 'La flecha de alternancia favorecerá al equipo A.',
      b: 'La flecha de alternancia favorecerá al equipo B.',
      c: 'La flecha de alternancia se establecerá después del saque del equipo A.',
    },
    correctAnswer: {
      option: QuestionOption.A,
      explanation:
        'La flecha de alternancia favorecerá al equipo A. (ARTICULOS 12 Y 25)',
    },
  },
  {
    question:
      'Un jugador finaliza su regate agarrando el balón con ambas manos. Lo lanza hacia el tablero de su propia canasta y posteriormente lo controla nuevamente. ¿Cuál es la decisión correcta?',
    options: {
      a: 'Violación de doble regate.',
      b: 'Acción legal.',
      c: 'Interposición defensiva.',
    },
    correctAnswer: {
      option: QuestionOption.B,
      explanation: 'Acción legal. (Ejemplo 24-3 IO)',
    },
  },
  {
    question:
      'El equipo A dispone de dos tiros libres y posesión del balón. Durante la ejecución de los mismos el entrenador de dicho equipo solicita un tiempo muerto. Inmediatamente después hace lo mismo el entrenador B. El lanzador convierte el segundo tiro libre. ¿A quién debe concederse el tiempo muerto?',
    options: {
      a: 'Al equipo A.',
      b: 'Al equipo B.',
      c: 'No es posible conceder un tiempo muerto en esta situación.',
    },
    correctAnswer: {
      option: QuestionOption.A,
      explanation: 'Al equipo A. (ARTICULO 18)',
    },
  },
  {
    question:
      'A9 debe lanzar 1 tiro libre adicional, seguido de rebote. B4 está en uno de los lugares acotados del área restringida y, antes de que el balón salga de las manos de A9 en su lanzamiento, B4 abandona el lugar acotado sin entrar en el área restringida sino para retroceder hacia el lugar más cercano de la línea de 3 puntos. El balón no entra en la canasta. ¿Cuál es la decisión correcta?',
    options: {
      a: 'Acción no sancionable.',
      b: 'Violación de B4, hay que repetir el tiro libre.',

      c: 'Violación de B4, saque de banda en la prolongación de la línea de tiros libres para el equipo A.',
    },
    correctAnswer: {
      option: QuestionOption.B,
      explanation:
        'Violación de B4, hay que repetir el tiro libre. (Arts. 43.2.4 y 43.3.3 RJ)',
    },
  },
  {
    question:
      'A9 lanza a canasta. Cuando el balón está en el aire, suena la señal del operador del reloj de lanzamiento. El balón no toca en el aro y, a continuación, se produce un balón retenido entre A6 y B7. La flecha de alternancia favorece al equipo A.',
    options: {
      a: 'Se ha producido una violación del reloj de lanzamiento.',
      b: 'Se trata de una situación de salto. El saque se realizará con una nueva cuenta de 24 segundos en todos los casos.',
      c: 'Se trata de una situación de salto. El saque se realizará con una nueva cuenta de 14 segundos en todos los casos.',
    },
    correctAnswer: {
      option: QuestionOption.A,
      explanation:
        'Se ha producido una violación del reloj de lanzamiento. (Art. 29.1.2 RJ)',
    },
  },
  {
    question:
      '¿Con cuántos jugadores en pista debe quedar un equipo para perder un partido por inferioridad?',
    options: {
      a: 'Menos de uno.',
      b: 'Menos de dos.',
      c: 'Menos de tres.',
    },
    correctAnswer: {
      option: QuestionOption.B,
      explanation: 'Menos de dos. (ARTICULO 21)',
    },
  },
  {
    question:
      'El entrenador A solicita un tiempo muerto antes que el el ayudante de entrenador B. El equipo A consigue una canasta.',
    options: {
      a: 'El tiempo muerto es concedido y se anotará al equipo A, que fue quien lo solicitó en primer lugar.',
      b: 'El tiempo muerto no es concedido, porque fue el equipo A quien lo solicitó primero y no tiene derecho a él en esta situación.',
      c: 'El tiempo muerto será concedido y se anotará al equipo B, aunque no lo haya solicitado en primer lugar.',
    },
    correctAnswer: {
      option: QuestionOption.C,
      explanation:
        'El tiempo muerto será concedido y se anotará al equipo B, aunque no lo haya solicitado en primer lugar. (Art. 18.2.7 RJ)',
    },
  },
  {
    question:
      'Un jugador finaliza su regate agarrando el balón con ambas manos. Lo lanza hacia el tablero de su propia canasta y posteriormente lo controla nuevamente.',
    options: {
      a: 'Violación de doble regate.',
      b: 'Acción legal.',
      c: 'Interposición defensiva.',
    },
    correctAnswer: {
      option: QuestionOption.B,
      explanation: 'Acción legal. (Ejemplo 24-3 IO)',
    },
  },
  {
    question:
      'A1, cerca de la canasta, con el balón en sus manos en su acción de tiro, y fuera del semicírculo, salta desde su posición hacia delante. B1 está dentro del semicírculo de no-carga y A1 carga contra el torso de B1, causando su caída.',
    options: {
      a: 'Falta de B1.',
      b: 'Jugada legal. No hay ninguna acción punible.',
      c: 'Falta de A1.',
    },
    correctAnswer: {
      option: QuestionOption.B,
      explanation:
        'Jugada legal. No hay ninguna acción punible. (Arts. 11.1 y 33.10 RJ)',
    },
  },
];

export default questions;
