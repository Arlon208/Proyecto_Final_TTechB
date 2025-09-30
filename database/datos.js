//Lista que contiene la informaciond e los elementos que se mostrara
//en el carrusel de la pagina principal

//El Carrusel contiene los articulos destacados
const elementos_carrusel = [
    {
        nombre: "Sabanas",
        descripcion: "Sabanas de variedad de estilos y medidas",
        imagen: "images/sabanasplamas.jpg"
    },
    {
        nombre: "Sabanas Infantiles",
        descripcion: "Sabana con los personajes favoritos para tu pequeño",
        imagen: "images/dbz.jpg"
    },
    {
        nombre: "Edredones", descripcion: "Gran variedad de estilos y colores con la mejor calidad ",
        imagen: "images/edredon.jpeg"
    },
    {
        nombre: "Cobijas", descripcion: "Gran calidad y variedad de estilos",
        imagen: "images/cobijas.jpeg"
    }
]

const lista_categorias = [
    {
        codigo: "101",
        nombre: "Sabanas", descripcion: "Variedad de estilos y medidas",
        imagen: "images/sabanasplamas.jpg"
    },
    {
        codigo: "201",
        nombre: "Edredones", descripcion: "Viste tu cama con los mejores edredones",
        imagen: "images/edredon.jpeg"
    },
    {
        codigo: "301",
        nombre: "Cobijas", descripcion: "Cubrete con la mejor calidad al mejor precio",
        imagen: "images/cobijas.jpeg"
    },
    {
        codigo: "401",
        nombre: "Cortina Meson", descripcion: "Dale un nuevo estilo a tu cocina",
        imagen: "images/cortinacocina.jpeg"
    },
       {
        codigo: "501",
        nombre: "Tapete Baño", descripcion: "Gran calidad variedad de colores",
        imagen: "images/tapete.jpeg"
    },
];

//Lista que contiene la informacion de los cursos que se mostraran en la pagina de productos

const lista_productos = [
    //Sabanas
  {
    "codigo": "1011",
    "nombre": "Sabana Torre Eiffel",
    "descripcion": "Sábana decorativa con estampado de la Torre Eiffel, ideal para habitaciones juveniles y modernas. Diseño urbano que aporta un estilo elegante y cosmopolita al dormitorio.",
    "codigo_categoria": "101",
    "imagen": "images/sabanas/sabana_torre_eiffel_01.jpg",
    "marca": "Kingo",
    "precio": 75000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Sabana de 144 hilos",
      "50% Algodon",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "1012",
    "nombre": "Sabana Rombos",
    "descripcion": "Sábana con patrón de rombos en tonos gris, verde y blanco. Un diseño geométrico contemporáneo que combina perfectamente con decoraciones minimalistas y modernas.",
    "codigo_categoria": "101",
    "imagen": "images/sabanas/sabana_rombos_gris_verde_blanco_02.jpg",
    "marca": "Kingo",
    "precio": 80000,
    "calificacion": 4.5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Sabana de 144 hilos",
      "50% Algodon",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "1013",
    "nombre": "Sabana Mariposas Blanco Rosa",
    "descripcion": "Sábana estampada con mariposas en blanco y rosa, pensada para dar un aire delicado y femenino. Ideal para dormitorios juveniles y espacios acogedores.",
    "codigo_categoria": "101",
    "imagen": "images/sabanas/sabana_mariposas_blanco_rosa_03.jpg",
    "marca": "Kingo",
    "precio": 85000,
    "calificacion": 4.8,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Sabana de 144 hilos",
      "50% Algodon",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "1014",
    "nombre": "Sabana Flamenco Rosa",
    "descripcion": "Sábana con diseño de flamencos en tonos rosa, fresca y alegre. Perfecta para dar un estilo tropical y vibrante a la habitación.",
    "codigo_categoria": "101",
    "imagen": "images/sabanas/sabana_flamenco_rosa_04.jpg",
    "marca": "Kingo",
    "precio": 75000,
    "calificacion": 4.2,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Sabana de 144 hilos",
      "50% Algodon",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "1015",
    "nombre": "Sabana Lila Mariposa a Cuadros",
    "descripcion": "Sábana en tonos lila con mariposas y cuadros, un diseño encantador que mezcla ternura y frescura. Aporta un aire juvenil y relajante al espacio.",
    "codigo_categoria": "101",
    "imagen": "images/sabanas/sabana_lila_mariposa_a_cuadros_05.jpg",
    "marca": "Kingo",
    "precio": 80000,
    "calificacion": 4.7,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Sabana de 144 hilos",
      "50% Algodon",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },

  //Edredones
{
    "codigo": "2011",
    "nombre": "Edredón Burbujas",
    "descripcion": "Edredón con diseño geométrico de Burbujas, aporta dinamismo y estilo contemporáneo al dormitorio.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonBurbujas.jpeg",
    "marca": "Kingo",
    "precio": 140000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2012",
    "nombre": "Edredón Circulo",
    "descripcion": "Edredón con diseño geométrico de Circulo, aporta dinamismo y estilo contemporáneo al dormitorio.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonCirculo.jpeg",
    "marca": "Kingo",
    "precio": 135000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2013",
    "nombre": "Edredón CuadroVerde",
    "descripcion": "Edredón con patrón de cuadros en tonos CuadroVerde, perfecto para un estilo moderno y organizado.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonCuadroVerde.jpeg",
    "marca": "Kingo",
    "precio": 130000,
    "calificacion": 4.3,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2014",
    "nombre": "Edredón EstrellaLineal",
    "descripcion": "Edredón con diseño lineal de estrellas, moderno y juvenil, perfecto para habitaciones vibrantes.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonEstrellaLineal.jpeg",
    "marca": "Kingo",
    "precio": 120000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2015",
    "nombre": "Edredón Fashion",
    "descripcion": "Edredón estilo Fashion con estampado moderno, pensado para quienes buscan elegancia y personalidad en su dormitorio.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonFashion.jpeg",
    "marca": "Kingo",
    "precio": 135000,
    "calificacion": 4.5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2016",
    "nombre": "Edredón Floral",
    "descripcion": "Edredón con diseño floral Floral, ideal para dar un toque fresco y elegante a la habitación.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonFloral.jpeg",
    "marca": "Kingo",
    "precio": 130000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2017",
    "nombre": "Edredón FloralGris",
    "descripcion": "Edredón con diseño floral FloralGris, ideal para dar un toque fresco y elegante a la habitación.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonFloralGris.jpeg",
    "marca": "Kingo",
    "precio": 135000,
    "calificacion": 4.5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2018",
    "nombre": "Edredón FloralMorado",
    "descripcion": "Edredón con diseño floral FloralMorado, ideal para dar un toque fresco y elegante a la habitación.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonFloralMorado.jpeg",
    "marca": "Kingo",
    "precio": 135000,
    "calificacion": 4.5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2019",
    "nombre": "Edredón FloralRosa",
    "descripcion": "Edredón con diseño floral FloralRosa, ideal para dar un toque fresco y elegante a la habitación.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonFloralRosa.jpeg",
    "marca": "Kingo",
    "precio": 135000,
    "calificacion": 4.3,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2020",
    "nombre": "Edredón Huellitas",
    "descripcion": "Edredón estampado con huellitas, tierno y divertido, ideal para amantes de las mascotas.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonHuellitas.jpeg",
    "marca": "Kingo",
    "precio": 140000,
    "calificacion": 4.5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2021",
    "nombre": "Edredón LilaRosa",
    "descripcion": "Edredón en tonos lila y rosa, suave y delicado, ideal para un espacio acogedor y femenino.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonLilaRosa.jpeg",
    "marca": "Kingo",
    "precio": 135000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2022",
    "nombre": "Edredón MariposaCorazon",
    "descripcion": "Edredón con estampado de mariposas y corazones, delicado y romántico, pensado para dar calidez a la habitación.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonMariposaCorazon.jpeg",
    "marca": "Kingo",
    "precio": 120000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2023",
    "nombre": "Edredón Ondas",
    "descripcion": "Edredón con diseño de ondas, que transmite frescura y armonía al ambiente del dormitorio.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonOndas.jpeg",
    "marca": "Kingo",
    "precio": 135000,
    "calificacion": 4.5,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  {
    "codigo": "2024",
    "nombre": "Edredón Tropical",
    "descripcion": "Edredón con estampado tropical, lleno de color y vitalidad, perfecto para un estilo alegre y veraniego.",
    "codigo_categoria": "201",
    "imagen": "images/edredones/EdredonTropical.jpeg",
    "marca": "Kingo",
    "precio": 120000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1 * 1.90 mts",
      "1.60 * 1.90 mts",
      "2 * 2 mts"
    ],
    "especificacion": [
      "Edredón de alta calidad",
      "50% Algodón",
      "50% Poliéster",
      "Incluye funda de almohada"
    ]
  },
  //Cobijas
  {
    "codigo": "3011",
    "nombre": "Cobija Roja Rosas",
    "descripcion": "Cobija con un delicado estampado de rosas rojas que aporta elegancia, romanticismo y calidez al ambiente de tu dormitorio.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaRojaRosas.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3012",
    "nombre": "Cobija Rosada Floral",
    "descripcion": "Cobija con un diseño floral encantador, ideal para darle frescura y un estilo natural a tu habitación.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaRosadaFloral.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3013",
    "nombre": "Cobija Verde Hojas",
    "descripcion": "Cobija decorada con un moderno diseño de hojas verdes que transmite frescura y un toque de naturaleza a tu espacio.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaVerdeHojas.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3014",
    "nombre": "Cobija Verde Mandala",
    "descripcion": "Cobija con un atractivo diseño de mandala que aporta armonía, estilo bohemio y un aire espiritual a tu dormitorio.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaVerdeMandala.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3015",
    "nombre": "Cobija Azul Floral",
    "descripcion": "Cobija con un diseño floral encantador, ideal para darle frescura y un estilo natural a tu habitación.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaAzulFloral.jpeg",
    "marca": "Kingo",
    "precio": 155000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3016",
    "nombre": "Cobija Azul Tallo",
    "descripcion": "Cobija con delicados tallos estampados que añaden sutileza, frescura y un diseño minimalista al entorno.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaAzulTallo.jpeg",
    "marca": "Kingo",
    "precio": 145000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3017",
    "nombre": "Cobija Beige Floriada",
    "descripcion": "Cobija con un diseño floral encantador, ideal para darle frescura y un estilo natural a tu habitación.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaBeigeFloriada.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3018",
    "nombre": "Cobija Grabado Puntos",
    "descripcion": "Cobija con un elegante diseño grabado que combina texturas y patrones para ofrecer un estilo sofisticado y contemporáneo.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaGrabadoPuntos.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3019",
    "nombre": "Cobija Grabados",
    "descripcion": "Cobija con un elegante diseño grabado que combina texturas y patrones para ofrecer un estilo sofisticado y contemporáneo.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaGrabados.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3020",
    "nombre": "Cobija Gris Mandala",
    "descripcion": "Cobija con un atractivo diseño de mandala que aporta armonía, estilo bohemio y un aire espiritual a tu dormitorio.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaGrisMandala.jpeg",
    "marca": "Kingo",
    "precio": 155000,
    "calificacion": 4,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3021",
    "nombre": "Cobija Leopardo",
    "descripcion": "Cobija con estampado de leopardo que añade un aire atrevido y moderno, perfecta para quienes buscan un estilo salvaje y audaz.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaLeopardo.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "3022",
    "nombre": "Cobija Roja Floral",
    "descripcion": "Cobija con un diseño floral encantador, ideal para darle frescura y un estilo natural a tu habitación.",
    "codigo_categoria": "301",
    "imagen": "images/cobijas/CobijaRojaFloral.jpeg",
    "marca": "Kingo",
    "precio": 160000,
    "calificacion": 5,
    "medida": [
      "1.20 * 1.90 mts",
      "1.40 * 1.90 mts"
    ],
    "especificacion": [
      "Cobija de alta calidad",
      "70% Algodón",
      "30% Poliéster"
    ]
  },
  {
    "codigo": "4011",
    "nombre": "Cortina Mesón Azul",
    "descripcion": "Cortina para mesón en tonos azules que aporta frescura y un estilo moderno a la cocina.",
    "codigo_categoria": "401",
    "imagen": "images/cocina/CortinaMesonAzul.jpeg",
    "marca": "Kingo",
    "precio": 50000,
    "calificacion": 4,
    "medida": [
      "200*80cm"
    ],
    "especificacion": [
      "Cortina para meson de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "4012",
    "nombre": "Cortina Mesón Chef",
    "descripcion": "Cortina para mesón con diseño de chef, ideal para quienes disfrutan cocinar con estilo y un toque divertido.",
    "codigo_categoria": "401",
    "imagen": "images/cocina/CortinaMesonChef.jpeg",
    "marca": "Kingo",
    "precio": 45000,
    "calificacion": 5,
    "medida": [
      "200*80cm"
    ],
    "especificacion": [
      "Cortina para meson de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "4013",
    "nombre": "Cortina Mesón Coffee",
    "descripcion": "Cortina para mesón con estampado de café, perfecta para los amantes del café que buscan un ambiente acogedor en la cocina.",
    "codigo_categoria": "401",
    "imagen": "images/cocina/CortinaMesonCoffee.jpeg",
    "marca": "Kingo",
    "precio": 50000,
    "calificacion": 4,
    "medida": [
      "200*80cm"
    ],
    "especificacion": [
      "Cortina para meson de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "4014",
    "nombre": "Cortina Mesón Frutas",
    "descripcion": "Cortina para mesón con diseño de frutas coloridas que aporta alegría, vitalidad y frescura a tu espacio.",
    "codigo_categoria": "401",
    "imagen": "images/cocina/CortinaMesonFrutas.jpeg",
    "marca": "Kingo",
    "precio": 55000,
    "calificacion": 4,
    "medida": [
      "200*80cm"
    ],
    "especificacion": [
      "Cortina para meson de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "4015",
    "nombre": "Cortina Mesón Postre",
    "descripcion": "Cortina para mesón con un encantador diseño de postres que brinda un ambiente dulce y divertido en la cocina.",
    "codigo_categoria": "401",
    "imagen": "images/cocina/CortinaMesonPostre.jpeg",
    "marca": "Kingo",
    "precio": 45000,
    "calificacion": 5,
    "medida": [
      "200*80cm"
    ],
    "especificacion": [
      "Cortina para meson de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "4016",
    "nombre": "Cortina Mesón Vacas",
    "descripcion": "Cortina para mesón con estampado de vacas que añade un toque campestre, original y simpático al hogar.",
    "codigo_categoria": "401",
    "imagen": "images/cocina/CortinaMesonVacas.jpeg",
    "marca": "Kingo",
    "precio": 45000,
    "calificacion": 4,
    "medida": [
      "200*80cm"
    ],
    "especificacion": [
      "Cortina para meson de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  //Tapetes
   {
    "codigo": "5011",
    "nombre": "Tapete Ba Azul",
    "descripcion": "Tapete para baño en tonos azules que transmite serenidad y frescura, ideal para un espacio relajante.",
    "codigo_categoria": "501",
    "imagen": "images/tapetes/TapeteBañoAzul.jpeg",
    "marca": "Kingo",
    "precio": 28000,
    "calificacion": 5,
    "medida": [
      "40*60cm"
    ],
    "especificacion": [
      "Tapete para baño de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "5012",
    "nombre": "Tapete Ba Beige",
    "descripcion": "Tapete para baño de alta calidad con diseño exclusivo que añade confort y estilo a tu hogar.",
    "codigo_categoria": "501",
    "imagen": "images/tapetes/TapeteBañoBeige.jpeg",
    "marca": "Kingo",
    "precio": 30000,
    "calificacion": 4,
    "medida": [
      "40*60cm"
    ],
    "especificacion": [
      "Tapete para baño de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "5013",
    "nombre": "Tapete Ba Gris Claro",
    "descripcion": "Tapete para baño en tonos grises que combina sobriedad y elegancia, adaptándose a cualquier decoración.",
    "codigo_categoria": "501",
    "imagen": "images/tapetes/TapeteBañoGrisClaro.jpeg",
    "marca": "Kingo",
    "precio": 28000,
    "calificacion": 4,
    "medida": [
      "40*60cm"
    ],
    "especificacion": [
      "Tapete para baño de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "5014",
    "nombre": "Tapete Ba Gris Oscuro",
    "descripcion": "Tapete para baño en tonos grises que combina sobriedad y elegancia, adaptándose a cualquier decoración.",
    "codigo_categoria": "501",
    "imagen": "images/tapetes/TapeteBañoGrisOscuro.jpeg",
    "marca": "Kingo",
    "precio": 25000,
    "calificacion": 4,
    "medida": [
      "40*60cm"
    ],
    "especificacion": [
      "Tapete para baño de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "5015",
    "nombre": "Tapete Ba Marron",
    "descripcion": "Tapete para baño de alta calidad con diseño exclusivo que añade confort y estilo a tu hogar.",
    "codigo_categoria": "501",
    "imagen": "images/tapetes/TapeteBañoMarron.jpeg",
    "marca": "Kingo",
    "precio": 30000,
    "calificacion": 5,
    "medida": [
      "40*60cm"
    ],
    "especificacion": [
      "Tapete para baño de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "5016",
    "nombre": "Tapete Ba Naranja",
    "descripcion": "Tapete para baño de alta calidad con diseño exclusivo que añade confort y estilo a tu hogar.",
    "codigo_categoria": "501",
    "imagen": "images/tapetes/TapeteBañoNaranja.jpeg",
    "marca": "Kingo",
    "precio": 30000,
    "calificacion": 4,
    "medida": [
      "40*60cm"
    ],
    "especificacion": [
      "Tapete para baño de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "5017",
    "nombre": "Tapete Ba Rojo",
    "descripcion": "Tapete para baño en vibrantes tonos rojos que aporta energía y vitalidad al entorno.",
    "codigo_categoria": "501",
    "imagen": "images/tapetes/TapeteBañoRojo.jpeg",
    "marca": "Kingo",
    "precio": 25000,
    "calificacion": 5,
    "medida": [
      "40*60cm"
    ],
    "especificacion": [
      "Tapete para baño de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  },
  {
    "codigo": "5018",
    "nombre": "Tapete Ba Vinotinto",
    "descripcion": "Tapete para baño de alta calidad con diseño exclusivo que añade confort y estilo a tu hogar.",
    "codigo_categoria": "501",
    "imagen": "images/tapetes/TapeteBañoVinotinto.jpeg",
    "marca": "Kingo",
    "precio": 28000,
    "calificacion": 4,
    "medida": [
      "40*60cm"
    ],
    "especificacion": [
      "Tapete para baño de gran calidad",
      "20% Algodón",
      "80% Poliéster"
    ]
  }
]

let carrito = [];
