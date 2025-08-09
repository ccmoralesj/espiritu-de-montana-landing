import { Route } from "@/interfaces/Route";

export const internationalRoutes: Route[] = [
  {
    title: "Circuito Canal de Panamá",
    date: "18.05.2025",
    location: "Panamá, Centroamérica",
    short_description: "Explora el Canal de Panamá en bici y descubre su historia en cada pedaleada.",
    long_description: "En este recorrido urbano guiado de 3–4 horas recorrerás Casco Viejo, la Cinta Costera y los alrededores del Canal. Guiado por expertos locales, incluirás paradas clave con historia y un merecido descanso con refrigerio local.",
    image: "https://images.unsplash.com/photo-1581905764498-1c3f95ffb6e1?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Intermedio",
    price: "$200 USD",
    duration: "72 km",
    category: "internacional"
  },
  {
    title: "Riviera Maya Ancestral",
    date: "22.06.2025",
    location: "Quintana Roo, México",
    short_description: "Ruta en bicicleta por cenotes, selva y ruinas mayas alrededor de Tulum.",
    long_description: "Durante este tour de medio día visitarás cenotes escondidos, senderos selváticos y pasadizos arqueológicos ocultos. Incluye transporte, guía bilingüe, lunch y entrada a sitio maya.",
    image: "https://images.unsplash.com/photo-1527515542815-2f81f369aa78?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Intermedio",
    price: "$110 USD",
    duration: "25 km",
    category: "internacional"
  },
  {
    title: "Cruce de los Andes (Bolivia–Perú)",
    date: "05.07.2025",
    location: "Altiplano, Bolivia y Perú",
    short_description: "Aventura épica por el altiplano andino, desde Bolivia hasta Cusco.",
    long_description: "Esta travesía de 10 días conecta poblaciones remotas, campos elevados y paisajes surrealistas como el Salar de Uyuni. Incluye hospedaje básico, soporte técnico y guías locales expertos en alta montaña.",
    image: "https://images.unsplash.com/photo-1610148263521-cba0eaea9ea1?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Avanzado",
    price: "$3,500 USD",
    duration: "460 km",
    category: "internacional"
  },
  {
    title: "Ecuador Volcano Loop",
    date: "15.09.2025",
    location: "Andes, Ecuador",
    short_description: "Ruta circular que rodea volcanes como Cotopaxi y Quilotoa.",
    long_description: "Durante cuatro días pedalearás por caminos de páramo, aldeas indígenas y miradores naturales. Estancia en hostales locales y guías bilingües incluidos.",
    image: "https://images.unsplash.com/photo-1592453465547-61015f59d0fc?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Avanzado",
    price: "$900 USD",
    duration: "180 km",
    category: "internacional"
  },
  {
    title: "Patagonia Austral",
    date: "10.01.2026",
    location: "Santa Cruz, Argentina",
    short_description: "Terrenos remotos, vientos helados y vistas de glaciares en bicicleta.",
    long_description: "Ruta de cinco días entre el Lago Argentino y El Chaltén, con paisajes glaciares, bosques y estepa patagónica. Incluye campamento, transfer aéreo y guía bilingüe.",
    image: "https://images.unsplash.com/photo-1508253578933-fed8d1f2b7af?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Avanzado",
    price: "$2,800 USD",
    duration: "150 km",
    category: "internacional"
  }
];


export const nationalRoutes: Route[] = [
  {
    title: "Cocora y Nevados",
    date: "27.05.2025",
    location: "Quindío, Colombia",
    short_description: "Palmas de cera, senderos de altura y café en vuelo de montaña.",
    long_description: "Recorrido de un día que combina la emblemática palma de cera de Cocora con senderos panorámicos hacia el Parque de los Nevados. Incluye guía, transporte local y refrigerio con café regional.",
    image: "...",
    difficulty: "Intermedio",
    price: "COP 750.000",
    duration: "35 km",
    category: "nacional"
  },
  {
    title: "Sierra Nevada (Colombia)",
    date: "15.08.2025",
    location: "Magdalena, Colombia",
    short_description: "Desde el mar hasta nieves eternas: una ruta que retadora y única.",
    long_description: "...",
    image: "...",
    difficulty: "Avanzado",
    price: "COP 1.875.000",
    duration: "120 km",
    category: "nacional"
  },
  {
    title: "Desierto de la Tatacoa",
    date: "10.10.2025",
    location: "Huila, Colombia",
    short_description: "Pedaleada entre formaciones caprichosas y cielos estrellados.",
    long_description: "...",
    image: "...",
    difficulty: "Fácil",
    price: "COP 540.000",
    duration: "25 km",
    category: "nacional"
  },
  {
    title: "Tatamá Bosque Nuboso",
    date: "12.09.2025",
    location: "Chocó‑Risaralda, Colombia",
    short_description: "Ríos, biodiversidad y la majestuosidad del bosque húmedo andino.",
    long_description: "Ruta de dos días entre senderos selváticos y miradores, pasando por el Bosque del Tatamá. Hospedaje comunitario y guía experto incluidos.",
    image: "https://images.unsplash.com/photo-1559500974-15f1bc594c4d?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Intermedio",
    price: "COP 1.200.000",
    duration: "70 km",
    category: "nacional"
  },
  {
    title: "Cañón del Chicamocha",
    date: "05.10.2025",
    location: "Santander, Colombia",
    short_description: "Vistas épicas desde una de las gargantas más grandes de América.",
    long_description: "Aventura de día completo en bici por bordes del Cañón del Chicamocha. Incluye guía, transporte desde Bucaramanga y parada en miradores naturales.",
    image: "https://images.unsplash.com/photo-1517821099600-fed6759794c9?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Avanzado",
    price: "COP 980.000",
    duration: "55 km",
    category: "nacional"
  }
];

export const localRoutes: Route[] = [
  {
    title: "Jericó",
    date: "12.05.2025",
    location: "Antioquia, Colombia",
    short_description: "Pueblo del alma: cultura, ciclomontañismo y aire puro.",
    long_description: "Salida desde Medellín temprano en la mañana con recorrido por zonas cafeteras, vistas panorámicas y almuerzo tradicional. Regreso por senderos locales en bicicleta.",
    image: "https://viajerosocultos.com/wp-content/uploads/2024/02/que-ver-en-jerico.jpg",
    difficulty: "Fácil",
    price: "COP 270.000",
    duration: "45 km",
    category: "nacional"
  },
  {
    title: "Amalfi",
    date: "21.06.2025",
    location: "Antioquia, Colombia",
    short_description: "Dos días de ciclismo y senderismo en los montes del oriente antioqueño.",
    long_description: "Aventura combinada: un día en bici por caminos montañosos seguido de caminata por senderos y cascadas. Hospedaje local incluido.",
    image: "https://images.unsplash.com/photo-1600851166610-0de56e075a39?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Fácil",
    price: "COP 405.000",
    duration: "60 km",
    category: "nacional"
  },
  {
    title: "Norcasia",
    date: "18.08.2025",
    location: "Antioquia, Colombia",
    short_description: "Senderos rurales entre colinas y comunidades agrícolas locales.",
    long_description: "Ruta de un día con vistas panorámicas, interacción con comunidades campesinas y gastronomía local. Transporte en van incluido.",
    image: "https://images.unsplash.com/photo-1563627845385-ee0b33e2e6a8?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Intermedio",
    price: "COP 203.000",
    duration: "38 km",
    category: "nacional"
  },
  {
    title: "Sonsón",
    date: "05.09.2025",
    location: "Antioquia, Colombia",
    short_description: "Circuito de montaña con ascensos suaves y paisajes verdes.",
    long_description: "Ruta de ciclomontañismo suave entre caminos boscosos con vista del embalse y naturaleza circundante. Comida típica y regreso al atardecer.",
    image: "https://images.unsplash.com/photo-1590423643526-3fb5936a065a?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Intermedio",
    price: "COP 248.000",
    duration: "42 km",
    category: "nacional"
  },
  {
    title: "Santa Fe de Antioquia",
    date: "10.07.2025",
    location: "Antioquia, Colombia",
    short_description: "Descenso técnico desde Santa Fe por senderos All‑Mountain y gravel.",
    long_description: "Descenso de gran adrenalina desde ~2.800 m hasta zonas más cálidas, combinando carreteras rurales, caminos de finca y singletrack técnico. Requiere guía por seguridad. :contentReference[oaicite:0]{index=0}",
    image: "https://images.unsplash.com/photo-1517821099600-fed6759794c9?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Avanzado",
    price: "COP 1.100.000",
    duration: "30 km",
    category: "nacional"
  },
  {
    title: "Arví – Guatapé",
    date: "22.08.2025",
    location: "Antioquia, Colombia",
    short_description: "Desde Medellín hasta el embalse de Guatapé a través del Parque Arví",
    long_description: "Primero en bici hasta Parque Arví vía metrocable, luego pedaleo por carreteras rurales hasta Guatapé. Paisajes de bosque, represa e íconos paisas como la Piedra del Peñol. Ideal ruta intermedia. :contentReference[oaicite:1]{index=1}",
    image: "https://images.unsplash.com/photo-1524544187526-2b2855b65f16?auto=format&fit=crop&q=80&w=1080",
    difficulty: "Intermedio",
    price: "COP 420.000",
    duration: "60 km",
    category: "nacional"
  }
];


export const allRoutes: Route[] = [...internationalRoutes, ...nationalRoutes, ...localRoutes];