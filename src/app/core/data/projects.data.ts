import { Project } from '../models/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'browser-extension-manager-ui',
    name: 'Interfaz de usuario del administrador de extensiones del navegador',
    description: '¡Este proyecto será una forma divertida de practicar el trabajo con datos dinámicos, el filtrado de datos, la aplicación de temas de color, la creación de una cuadrícula adaptable y mucho más!',
    difficulty: 'Junior',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://browser-extension-manager-ui-rho-rouge.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/browser-extension-manager-ui',
    imageUrl: '/images/browser-extension-manager-ui.webp'
  },
  {
    id: 'typing-speed-test',
    name: 'Prueba de velocidad de escritura',
    description: 'Crea una prueba de velocidad de escritura que calcule palabras por minuto (ppm) y precisión. Un proyecto divertido para practicar la manipulación del DOM y el uso de temporizadores.',
    difficulty: 'Junior',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://typing-speed-test-seven-amber.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/typing-speed-test',
    imageUrl: '/images/typing-speed-test.webp',
    instructions: [
      'Inicie una prueba haciendo clic en el botón de inicio o haciendo clic en el texto y escribiendo.',
      'Seleccione un nivel de dificultad (Fácil, Medio, Difícil) para pasajes de complejidad variable.',
      'Cambia entre el modo "Temporizador (60 s)" y el modo "Paso" (el temporizador cuenta hacia adelante, sin límite).',
      'Reinicia en cualquier momento para obtener un nuevo pasaje aleatorio de la dificultad seleccionada.',
      'Consulta en tiempo real las estadísticas de palabras por minuto, precisión y tiempo mientras escribes.',
      'Vea la retroalimentación visual que muestra los caracteres correctos (verde), los errores (rojo/subrayado) y la posición del cursor.',
      'Corrige los errores con la tecla de retroceso (los errores originales siguen afectando la precisión).',
      'Vea los resultados que muestran palabras por minuto, precisión y caracteres (correctos/incorrectos) después de completar una prueba.',
      'Verán un mensaje de "¡Línea de base establecida!" en su primera prueba, estableciendo su mejor marca personal.',
      '¡Observa una celebración con confeti y el grito de "¡Puntuación máxima superada!" cuando superen su mejor marca personal!',
      'Que sus mejores marcas personales se conserven entre sesiones mediante el almacenamiento local.',
      'Visualiza el diseño óptimo según el tamaño de la pantalla de tu dispositivo.',
      'Consulte los estados de desplazamiento y enfoque para todos los elementos interactivos.'
    ]
  },
  {
    id: 'hotel-booking-confirmation-page',
    name: 'Página de confirmación de reserva de hotel',
    description: 'Practica el diseño y la tipografía creando esta página de confirmación de reserva de un hotel boutique, que incluye tarjetas superpuestas, una barra lateral con la marca y un diseño totalmente adaptable.',
    difficulty: 'Junior',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://hotel-booking-confirmation-page-eight.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/hotel-booking-confirmation-page',
    imageUrl: '/images/hotel-booking-confirmation-page.webp'
  },
  {
    id: 'stats-preview-card',
    name: 'Tarjeta de vista previa de estadísticas',
    description: 'Este es un pequeño reto ideal para que te familiarices con el diseño. Este proyecto no incluye JavaScript, así que podrás concentrarte en tus habilidades de HTML y CSS.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://stats-preview-card-ashen-one.vercel.app',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/stats-preview-card',
    imageUrl: '/images/Stats Preview Card.webp'
  },
  {
    id: 'social-proof-section',
    name: 'Sección de prueba social',
    description: 'Este proyecto pondrá a prueba tus habilidades de maquetación. Si ya empiezas a sentirte seguro con Flexbox o Grid, ¡este proyecto te supondrá un buen reto!',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://social-proof-section-one-rouge.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/social-proof-section',
    imageUrl: '/images/Social Proof Section.webp'
  },
  {
    id: 'social-links-profile',
    name: 'Perfil con enlaces a redes sociales',
    description: 'En este pequeño proyecto, crearás tu perfil para compartir enlaces en redes sociales. ¡Incluso puedes personalizarlo y usarlo para compartir todos tus perfiles sociales!',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://social-links-profile-nine-mocha.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/social-links-profile',
    imageUrl: '/images/Social links profile.webp'
  },
  {
    id: 'single-price-grid',
    name: 'Cuadrícula de precio único',
    description: 'En este desafío, deberás desarrollar el componente de precios para los diseños proporcionados. Es ideal para principiantes y para quienes buscan un reto más sencillo.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://single-price-grid-chi-three.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/single-price-grid',
    imageUrl: '/images/Single Price Grid.webp'
  },
  {
    id: 'results-summary',
    name: 'Resumen de resultados',
    description: 'Este reto tiene algo para todos. Es un proyecto solo con HTML y CSS, pero también hemos proporcionado un archivo JSON con los resultados de las pruebas para quienes quieran practicar JavaScript.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://results-summary-indol.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/results-summary',
    imageUrl: '/images/results-summary.webp'
  },
  {
    id: 'recipe-page',
    name: 'Página de recetas',
    description: 'Este reto te ayudará a centrarte en escribir HTML semántico. Asegúrate de analizar qué elementos HTML son los más adecuados para cada fragmento de contenido.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://recipe-page-taupe-three.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/recipe-page',
    imageUrl: '/images/recipe-page.webp'
  },
  {
    id: 'qr-code',
    name: 'Código QR',
    description: 'Un reto perfecto para quienes se inician en HTML y CSS. El diseño de la tarjeta no cambia, por lo que es ideal si aún no has aprendido a crear diseños responsivos.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://qr-code-beta-livid-19.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/qr-code',
    imageUrl: '/images/qr-code.webp'
  },
  {
    id: 'profile-card',
    name: 'Tarjeta de perfil',
    description: 'Este es un reto perfecto para poner a prueba tus habilidades de diseño. El diseño de las tarjetas no cambia, ¡así que también es ideal para quienes aún no se han adentrado en el mundo de los sitios web responsivos!',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://profile-card-one-peach.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/profile-card',
    imageUrl: '/images/profile-card.webp'
  },
  {
    id: 'product-preview-card',
    name: 'Tarjeta de vista previa del producto',
    description: 'Este reto, que solo utiliza HTML y CSS, será perfecto para cualquiera que esté empezando a crear proyectos responsivos.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://product-preview-card-mu-five.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/product-preview-card',
    imageUrl: '/images/Product preview card component.webp'
  },
  {
    id: 'ping-coming-soon',
    name: 'Ping de una sola columna',
    description: 'Este reto es ideal para principiantes y ofrece la oportunidad de practicar la validación básica de formularios del lado del cliente.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://ping-coming-soon-gold.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/ping-coming-soon',
    imageUrl: '/images/ping-coming-soon.webp'
  },
  {
    id: 'order-summary',
    name: 'Resumen del pedido',
    description: '¡Un proyecto perfecto para principiantes que están empezando a ganar confianza con los diseños!',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://order-summary-psi-bay.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/order-summary',
    imageUrl: '/images/order-summary.webp'
  },
  {
    id: 'nft-preview-card',
    name: 'Tarjeta de vista previa NFT',
    description: 'Este reto, que solo utiliza HTML y CSS, es perfecto para quienes están empezando o para quienes desean un pequeño proyecto con el que experimentar.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://nft-preview-card-theta-seven.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/nft-preview-card',
    imageUrl: '/images/nft-preview-card.webp'
  },
  {
    id: 'intro-with-signup-form',
    name: 'Introducción con formulario de registro',
    description: 'Practica la creación de un formulario de registro completo con validación del lado del cliente utilizando JavaScript.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://intro-with-signup-form-lilac.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/intro-with-signup-form',
    imageUrl: '/images/intro-with-signup-form.webp'
  },
  {
    id: 'interactive-rating',
    name: 'Calificación interactiva',
    description: 'Un componente de calificación interactivo. Requiere actualizar el DOM según la selección del usuario.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://interactive-rating-green-ten.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/interactive-rating',
    imageUrl: '/images/Interactive rating component.webp'
  },
  {
    id: 'huddle-landing',
    name: 'Página de inicio de Huddle con una única sección introductoria.',
    description: 'Este proyecto, un reto perfecto para principiantes, te permitirá trabajar con un diseño de dos columnas.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://huddle-landing-chi.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/huddle-landing',
    imageUrl: '/images/huddle-landing.webp'
  },
  {
    id: 'four-card-feature-section',
    name: 'Sección de características de cuatro cartas',
    description: 'Un buen reto de diseño para principiantes. Pondrá a prueba a cualquiera que no esté familiarizado con los diseños de varias columnas y los diseños responsivos.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://four-card-feature-section-dun-three.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/four-card-feature-section',
    imageUrl: '/images/four-card-feature-section.webp'
  },
  {
    id: 'faq-accordion',
    name: 'Acordeón de preguntas frecuentes',
    description: 'En este desafío, crearás un acordeón de preguntas frecuentes. Este es un patrón de diseño front-end muy común, ¡así que es una excelente oportunidad para practicar!',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://faq-accordion-nine-gamma.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/faq-accordion',
    imageUrl: '/images/faq-accordion.webp'
  },
  {
    id: 'blog-preview-card',
    name: 'Tarjeta de vista previa del blog',
    description: 'Este reto, que solo utiliza HTML y CSS, es un proyecto perfecto para principiantes que desean familiarizarse rápidamente con los fundamentos de HTML y CSS, como la estructura HTML y el modelo de caja.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://blog-preview-card-hazel-one.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/blog-preview-card',
    imageUrl: '/images/blog-preview-card.webp'
  },
  {
    id: 'base-apparel-coming-soon',
    name: 'Página de ropa básica próximamente',
    description: 'Este diseño parece bastante sencillo, pero tiene algunos detalles interesantes que pondrán a prueba tus habilidades con CSS. También podrás practicar la validación básica de formularios.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://base-apparel-coming-soon-zeta.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/base-apparel-coming-soon',
    imageUrl: '/images/base-apparel-coming-soon.webp'
  },
  {
    id: 'article-preview',
    name: 'Vista previa del artículo',
    description: 'Practica tus habilidades de maquetación con este componente de vista previa de artículos. También puedes divertirte mucho experimentando con las animaciones de los iconos para compartir.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS', 'JS'],
    liveDemoUrl: 'https://article-preview-two-gilt.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/article-preview',
    imageUrl: '/images/article-preview.webp'
  },
  {
    id: '3-column-preview-card',
    name: 'Tarjeta de vista previa de 3 columnas',
    description: 'Este reto es perfecto si estás empezando. El cambio entre los diseños será una buena prueba si eres nuevo en la creación de proyectos responsivos.',
    difficulty: 'Novato',
    technologies: ['HTML', 'CSS'],
    liveDemoUrl: 'https://3-column-preview-card-five-tawny.vercel.app/',
    viewCodeUrl: 'https://github.com/Cristianbeltran333/3-column-preview-card',
    imageUrl: '/images/3-column-preview-card.webp'
  }
];
