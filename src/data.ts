import { Book, Course } from "./types";

export const initialBooks: Book[] = [
  {
    id: "tracy-camino-riqueza",
    title: "El camino hacia la riqueza",
    author: "Brian Tracy",
    driveId: "1-MfbOFN7C37rQ0NDsFxjI1FPbJ9NGLFv",
    coverUrl: "https://i.postimg.cc/0yP7HfJM/mini-magick20190112-14892-iz50xb.png",
    cover_url: "https://i.postimg.cc/0yP7HfJM/mini-magick20190112-14892-iz50xb.png",
    category: "Brian Tracy",
    description: "Estrategias invaluables sobre la mentalidad empresarial, acumulación de capital y toma de decisiones financieras eficientes para la autonomía profesional.",
    pages: 120
  },
  {
    id: "tracy-emprende-negocio",
    title: "Emprende tu propio negocio",
    author: "Brian Tracy",
    driveId: "1W-fE8uY5HSje4g_2QTJxRhRuHOG9zHM1",
    coverUrl: "https://i.postimg.cc/mDvH3NsP/images.png",
    cover_url: "https://i.postimg.cc/mDvH3NsP/images.png",
    category: "Brian Tracy",
    description: "La guía definitiva de planificación, análisis de viabilidad, marketing estratégico e incremento de ventas de forma acelerada.",
    pages: 164
  },
  {
    id: "tracy-leyes-suerte",
    title: "Las leyes de la suerte",
    author: "Brian Tracy",
    driveId: "1UtUHM2k3iqHHcN5tXSGNJudWEBJOzkGa",
    coverUrl: "https://i.postimg.cc/zXjy31VY/718998-f6038f1dc5698bafd217275731889535-640-0.webp",
    cover_url: "https://i.postimg.cc/zXjy31VY/718998-f6038f1dc5698bafd217275731889535-640-0.webp",
    category: "Brian Tracy",
    description: "Cómo reprogramar tus hábitos cotidianos y tu visión mental para atraer abundancia y sincronizar oportunidades ideales.",
    pages: 145
  },
  {
    id: "tracy-pasos-gigante",
    title: "Pasos de gigante",
    author: "Brian Tracy",
    driveId: "17Rb2UJg4BsHyz5Y4crjFxDz0s3opq7nC",
    coverUrl: "https://i.postimg.cc/5NntbqR4/9781404119406.jpg",
    cover_url: "https://i.postimg.cc/5NntbqR4/9781404119406.jpg",
    category: "Brian Tracy",
    description: "21 Claves prácticas de desarrollo personal para construir disciplina férrea, optimizar el tiempo laboral y desbloquear el éxito constante.",
    pages: 138
  },
  {
    id: "disney-libro-1",
    title: "101 Dálmatas",
    author: "Walt Disney",
    driveId: "1NKPE24RmP4Wj3b0svKnRDC6xD0YqjOhP",
    coverUrl: "https://i.postimg.cc/tCRdCk2V/1.webp",
    cover_url: "https://i.postimg.cc/tCRdCk2V/1.webp",
    category: "Disney",
    description: "Acompaña a Pongo, Perdita y sus tiernos cachorros en esta emocionante y divertida odisea clásica para escapar de las garras de la icónica Cruella de Vil.",
    pages: 142
  },
  {
    id: "disney-libro-2",
    title: "Bambi",
    author: "Walt Disney",
    driveId: "1J7J9_tSSvzOqoLaluiNqNgcPE3_rY5Zp",
    coverUrl: "https://i.postimg.cc/DZgW9kVD/download.jpg",
    cover_url: "https://i.postimg.cc/DZgW9kVD/download.jpg",
    category: "Disney",
    description: "Sigue la tierna historia de crecimiento del joven príncipe del bosque Bambi, junto a sus fieles compañeros Tambor y Flor, en un viaje lleno de aprendizaje y emotividad.",
    pages: 158
  },
  {
    id: "disney-libro-3",
    title: "Alicia en el País de las Maravillas",
    author: "Walt Disney",
    driveId: "122BxgTe8fvhqyuwQmOPmsJ4WPTNEBLlt",
    coverUrl: "https://i.postimg.cc/yxxN2DyB/1.webp",
    cover_url: "https://i.postimg.cc/yxxN2DyB/1.webp",
    category: "Disney",
    description: "Sumérgete con Alicia a través de la madriguera del conejo para explorar un mundo extraordinario y disparatado, repleto de acertijos, magia y sombreros peculiares.",
    pages: 116
  },
  {
    id: "grey-libro-1",
    title: "Cincuenta sombras de Grey",
    author: "E. L. James",
    driveId: "1bPLm4g9HC1yrp2Vm28FhwfVTyQFcqyXf",
    coverUrl: "https://i.postimg.cc/sgdV46q5/cincuenta-sombras-de-grey-cincuenta-sombras-1.webp",
    cover_url: "https://i.postimg.cc/sgdV46q5/cincuenta-sombras-de-grey-cincuenta-sombras-1.webp",
    category: "50 Sombras",
    description: "Descubre el apasionante inicio de la trilogía que revolucionó el romance contemporáneo, narrando la intensa y apasionada atracción entre la inocente universitaria Anastasia Steele y el misterioso magnate Christian Grey.",
    pages: 540
  },
  {
    id: "grey-libro-2",
    title: "Cincuenta sombras liberadas",
    author: "E. L. James",
    driveId: "1knFRiE2fmcSkkjx1istfEi99xjiAt42R",
    coverUrl: "https://i.postimg.cc/wvGzy0Dj/81rf-C62qof-L-UF1000-1000-QL80.jpg",
    cover_url: "https://i.postimg.cc/wvGzy0Dj/81rf-C62qof-L-UF1000-1000-QL80.jpg",
    category: "50 Sombras",
    description: "La esperada y suntuosa conclusión de la historia de amor que une a Anastasia y Christian. Al comprometerse bajo un lazo inquebrantable, resurgen fantasmas del pasado con el potencial de destruirlo todo.",
    pages: 650
  },
  {
    id: "grey-libro-3",
    title: "Cincuenta sombras oscuras",
    author: "E. L. James",
    driveId: "1G4r40vCt4VF20aYEtcHilAsJk3c2w_OF",
    coverUrl: "https://i.postimg.cc/vZs4ZZQj/unnamed.jpg",
    cover_url: "https://i.postimg.cc/vZs4ZZQj/unnamed.jpg",
    category: "50 Sombras",
    description: "Anastasia intenta cortar lazos definitivos con el enigmático magnate e iniciar una career editorial estructurada, pero el implacable Christian Grey regresa a su vida con una nueva propuesta irresistible.",
    pages: 590
  },
  {
    id: "hp-libro-1",
    title: "Harry Potter y la piedra filosofal",
    author: "J. K. Rowling",
    driveId: "1tTffJTVsn6O9N71suvR4CafesR47oaW9",
    coverUrl: "https://i.postimg.cc/W15scNt7/633251A3-C8FD-4FB3-A190-95E07EA18B30-IMG400.jpg",
    cover_url: "https://i.postimg.cc/W15scNt7/633251A3-C8FD-4FB3-A190-95E07EA18B30-IMG400.jpg",
    category: "Harry Potter",
    description: "El inicio de las legendarias aventuras del joven mago Harry Potter cuando descubre su verdadera herencia mágica al cumplir once años de edad y asiste a su primer año en el Colegio Hogwarts.",
    pages: 254
  },
  {
    id: "hp-libro-2",
    title: "Harry Potter y la cámara secreta",
    author: "J. K. Rowling",
    driveId: "1bgSWi-bUUIH1bfUkYZNgl4RMgr3VNbOt",
    coverUrl: "https://i.postimg.cc/W1BX3rDR/harry-potter-y-la-camara-secreta.jpg",
    cover_url: "https://i.postimg.cc/W1BX3rDR/harry-potter-y-la-camara-secreta.jpg",
    category: "Harry Potter",
    description: "En su segundo año en Hogwarts, Harry y sus fieles compañeros investigan misteriosos ataques petrificantes vinculados a la mítica leyenda de la Cámara Secreta y el heredero de Slytherin.",
    pages: 286
  },
  {
    id: "hp-libro-3",
    title: "Harry Potter y el prisionero de Azkaban",
    author: "J. K. Rowling",
    driveId: "1TSByUPtO_fy-cJpmABxPoDmu9kolh63v",
    coverUrl: "https://i.postimg.cc/Y0Dxwmcz/cuantas-palabras-tiene-el-libro-de-harry-potter-y-el-prisionero-de-azkaban.webp",
    cover_url: "https://i.postimg.cc/Y0Dxwmcz/cuantas-palabras-tiene-el-libro-de-harry-potter-y-el-prisionero-de-azkaban.webp",
    category: "Harry Potter",
    description: "Harry descubre que un peligroso prisionero, Sirius Black, ha escapado de la fortaleza mágica de Azkaban y aparentemente lo busca desatando grandes revelaciones sobre su pasado.",
    pages: 360
  },
  {
    id: "hp-libro-4",
    title: "Harry Potter y el cáliz de fuego",
    author: "J. K. Rowling",
    driveId: "12JvUDhfRWMUOCo3hrLWLUYJcCPcV_18L",
    coverUrl: "https://i.postimg.cc/vBqn1FPm/9789878000213.jpg",
    cover_url: "https://i.postimg.cc/vBqn1FPm/9789878000213.jpg",
    category: "Harry Potter",
    description: "Elegido inexplicablemente para competir en el peligroso Torneo de los Tres Magos de Hogwarts, Harry debe superar duras pruebas mientras un mal ancestral resurge en las sombras.",
    pages: 636
  },
  {
    id: "terror-reflejo-bruja",
    title: "El reflejo de la bruja",
    author: "Adaptación de Terror",
    driveId: "1wtHNI6YGHhhrQHDZ0gh-Qr1Ep3xGDo30",
    coverUrl: "https://i.postimg.cc/j2vJVVf5/63018776.jpg",
    cover_url: "https://i.postimg.cc/j2vJVVf5/63018776.jpg",
    category: "Terror",
    description: "Un relato tenso y místico donde un antiguo espejo desata visiones sombrías y condenas sobrenaturales.",
    pages: 95
  },
  {
    id: "terror-queridos-monstruos",
    title: "Queridos Monstruos",
    author: "Elsa Bornemann",
    driveId: "1F1zALLu77YC8QB-p4FCmJjusrByg_c4P",
    coverUrl: "https://i.postimg.cc/cHFs0dFc/360-9789504643500.jpg",
    cover_url: "https://i.postimg.cc/cHFs0dFc/360-9789504643500.jpg",
    category: "Terror",
    description: "Una recopilación de relatos clásicos de terror habitados por criaturas inolvidables, monstruos legendarios y misterios escalofriantes.",
    pages: 140
  },
  {
    id: "terror-cuentos-fantasticos",
    title: "Cuentos fantásticos terroríficos",
    author: "Colección Antológica",
    driveId: "1lYiKbhpkasUAd3yMxgRPCxJq5dI10NKN",
    coverUrl: "https://i.postimg.cc/ZqZZNW2Y/p-6BMWT-m-Xt43S5d5DYi-C1x2q-WU.webp",
    cover_url: "https://i.postimg.cc/ZqZZNW2Y/p-6BMWT-m-Xt43S5d5DYi-C1x2q-WU.webp",
    category: "Terror",
    description: "Historias extraordinarias que cruzan los límites de la realidad y se adentran en pesadillas inconcebibles.",
    pages: 210
  },
  {
    id: "terror-cuentos-terror",
    title: "Cuentos para leer con la luz prendida",
    author: "Varios Autores",
    driveId: "1LwNze89eztgZXjRpRGr2p65f2UBfQZ0t",
    coverUrl: "https://i.postimg.cc/SQXskMp7/Cuentosparaleerconlaluzprendida-1-320.webp",
    cover_url: "https://i.postimg.cc/SQXskMp7/Cuentosparaleerconlaluzprendida-1-320.webp",
    category: "Terror",
    description: "Una selecta antología de narraciones espeluznantes y atmósferas oscuras diseñadas para desafiar tu temple en cada página.",
    pages: 180
  },
  {
    id: "bridgerton-1",
    title: "El duque y yo",
    author: "Julia Quinn",
    driveId: "1_4BAZs-j2DDvs4KfNfHlISoosfdOEEcs",
    coverUrl: "https://i.postimg.cc/R0KchDfv/el-duque-y-yo-bridgerton-1.jpg",
    cover_url: "https://i.postimg.cc/R0KchDfv/el-duque-y-yo-bridgerton-1.jpg",
    category: "Bridgerton",
    description: "Daphne Bridgerton y el rebelde duque de Hastings trazan un pacto de mutua conveniencia: simular un noviazgo ficticio para alejar a pretendientes indeseados y pretensiones familiares.",
    pages: 320
  },
  {
    id: "bridgerton-2",
    title: "El vizconde que me amó",
    author: "Julia Quinn",
    driveId: "1CKsihUItwy6xKAFxxIN8O6uw1WwhxE0s",
    coverUrl: "https://i.postimg.cc/2j2n1vqV/images.jpg",
    cover_url: "https://i.postimg.cc/2j2n1vqV/images.jpg",
    category: "Bridgerton",
    description: "Anthony Bridgerton, el soltero más codiciado de Londres, decide casarse, pero la obstinada hermana de su elegida, Kate Sheffield, está decidida a sabotear los planes por desconfianza.",
    pages: 352
  },
  {
    id: "bridgerton-3",
    title: "Te doy mi corazón",
    author: "Julia Quinn",
    driveId: "1OYKu_T8Hl1-b2ixVijLYmNto6b1Z76Bq",
    coverUrl: "https://i.postimg.cc/Y09G6n4v/c43df965e34844da96219d1b320581a0.jpg",
    cover_url: "https://i.postimg.cc/Y09G6n4v/c43df965e34844da96219d1b320581a0.jpg",
    category: "Bridgerton",
    description: "Sophie Beckett, hija ilegítima de un conde, asiste de incógnito a un suntuoso baile de máscaras donde conoce al carismático Benedict Bridgerton, desatando una búsqueda apasionada.",
    pages: 384
  },
  {
    id: "bridgerton-4",
    title: "Seduciendo a Mr. Bridgerton",
    author: "Julia Quinn",
    driveId: "1wMW0YKsCzSJ1MEh2JcyfWjLCGEJ5B5ey",
    coverUrl: "https://i.postimg.cc/0jbjMz3w/7f590f289bd0df7e13386a93cd5485bb.jpg",
    cover_url: "https://i.postimg.cc/0jbjMz3w/7f590f289bd0df7e13386a93cd5485bb.jpg",
    category: "Bridgerton",
    description: "Penelope Featherington ha amado en secreto a Colin Bridgerton durante años. Cuando Colin regresa de sus viajes, descubre secretos que cambiarán para siempre su percepción sobre ella.",
    pages: 380
  },
  {
    id: "bridgerton-5",
    title: "A Sir Phillip, con amor",
    author: "Julia Quinn",
    driveId: "1sEdUCge1Eh999qoaNojVmoUV5pPpBmxh",
    coverUrl: "https://i.postimg.cc/VNgkK9Pb/b250a004501f13338ecec921aeea6552.jpg",
    cover_url: "https://i.postimg.cc/VNgkK9Pb/b250a004501f13338ecec921aeea6552.jpg",
    category: "Bridgerton",
    description: "Tras meses de correspondencia, Eloise Bridgerton toma una decisión impulsiva: escaparse para conocer a Sir Phillip Crane, un viudo solitario que necesita desesperadamente de su alegría.",
    pages: 336
  },
  {
    id: "bridgerton-6",
    title: "El corazón de una Bridgerton",
    author: "Julia Quinn",
    driveId: "1DwDfhqWYJr6qIoHvYcVbtA_41aaqasN-",
    coverUrl: "https://i.postimg.cc/g0zYLwLr/39017c0cb7bdc064ca67cf6920c5a241.webp",
    cover_url: "https://i.postimg.cc/g0zYLwLr/39017c0cb7bdc064ca67cf6920c5a241.webp",
    category: "Bridgerton",
    description: "Francesca Bridgerton halla consuelo tras una dolorosa pérdida en Michael Stirling, el primo de su difunto esposo, quien esconde un amor devorador y prohibido por ella.",
    pages: 340
  },
  {
    id: "bridgerton-7",
    title: "Por un beso",
    author: "Julia Quinn",
    driveId: "1xviJJSJyM9RTXlg1GTefQZbsp0JsmCtR",
    coverUrl: "https://i.postimg.cc/3r4Dx6HL/porunbeso.jpg",
    cover_url: "https://i.postimg.cc/3r4Dx6HL/porunbeso.jpg",
    category: "Bridgerton",
    description: "Gareth St. Clair se ve envuelto en una herencia incierta y encuentra en Hyacinth Bridgerton, la menor e ingeniosa de la familia, a la aliada perfecta para traducir un diario misterioso.",
    pages: 330
  },
  {
    id: "bridgerton-8",
    title: "Buscando esposa",
    author: "Julia Quinn",
    driveId: "1PC-_61SMnvIxvuiqJe3-HuALi_bJKj0j",
    coverUrl: "https://i.postimg.cc/HxJjjJFt/209af909a4ebe48b4ebd5a1f21a9cab1.jpg",
    cover_url: "https://i.postimg.cc/HxJjjJFt/209af909a4ebe48b4ebd5a1f21a9cab1.jpg",
    category: "Bridgerton",
    description: "Gregory Bridgerton es un romántico incorregible que cree en el verdadero amor. Cuando pide ayuda a la inteligente Lucy Abernathy para conquistar a otra dama, el destino tiene otros planes.",
    pages: 360
  },
  {
    id: "crepusculo-1",
    title: "Crepúsculo",
    author: "Stephenie Meyer",
    driveId: "1Ugr3qN74fPdFuNNdHPkgmZ1t_cwPsUGz",
    coverUrl: "https://i.postimg.cc/bJYH5RD8/Crepusculo.jpg",
    cover_url: "https://i.postimg.cc/bJYH5RD8/Crepusculo.jpg",
    category: "Crepúsculo",
    description: "Bella Swan se muda a Forks y se siente intrigada por Edward Cullen, un misterioso compañero de clase que esconde un secreto ancestral: es un vampiro.",
    pages: 512
  },
  {
    id: "crepusculo-2",
    title: "Luna nueva",
    author: "Stephenie Meyer",
    driveId: "1Od5qT6D8gy2nwkZkHr8z8qLFM1XTzFir",
    coverUrl: "https://i.postimg.cc/J4H3S0nN/3204159-RS500x500.jpg",
    cover_url: "https://i.postimg.cc/J4H3S0nN/3204159-RS500x500.jpg",
    category: "Crepúsculo",
    description: "Tras la partida de Edward para protegerla, Bella cae en una profunda depresión y halla consuelo en su leal amigo Jacob Black, quien guarda su propio secreto sobrenatural.",
    pages: 576
  },
  {
    id: "crepusculo-3",
    title: "Eclipse",
    author: "Stephenie Meyer",
    driveId: "15Gg_I8hIoMgAOflbOpXKBYmKXclSW8k1",
    coverUrl: "https://i.postimg.cc/SN98DPTc/19451545.jpg",
    cover_url: "https://i.postimg.cc/SN98DPTc/19451545.jpg",
    category: "Crepúsculo",
    description: "Seattle es asolada por una ola de misteriosos asesinatos. Bella debe elegir entre su amor por Edward y su amistad con Jacob, mientras vampiros y hombres lobo pactan una tregua.",
    pages: 624
  },
  {
    id: "crepusculo-4",
    title: "Amanecer",
    author: "Stephenie Meyer",
    driveId: "11Rw_AN3KKsS-raLOtFzkfeLQQM1p2kc2",
    coverUrl: "https://i.postimg.cc/B6tPD7Px/la-saga-crepusculo-amanecer-parte-1.jpg",
    cover_url: "https://i.postimg.cc/B6tPD7Px/la-saga-crepusculo-amanecer-parte-1.jpg",
    category: "Crepúsculo",
    description: "El matrimonio de Bella y Edward desencadena una serie de acontecimientos inesperados que culminan en una amenaza inminente de los Vóluri sobre su extraordinaria hija.",
    pages: 752
  },
  {
    id: "crepusculo-5",
    title: "Sol de medianoche",
    author: "Stephenie Meyer",
    driveId: "1iPzqLR87293oYpdfBOWdimqEUYIASwEu",
    coverUrl: "https://i.postimg.cc/sfQT7sWH/D-NQ-NP-2X-959595-MLM49684084582-042022-F.webp",
    cover_url: "https://i.postimg.cc/sfQT7sWH/D-NQ-NP-2X-959595-MLM49684084582-042022-F.webp",
    category: "Crepúsculo",
    description: "La célebre historia de amor es narrada por primera vez desde la perspectiva de Edward Cullen, revelando su tormento interno y la intensidad de su fascinación por Bella.",
    pages: 800
  },
  {
    id: "got-juego-tronos",
    title: "Juego de Tronos (Canción de Hielo y Fuego I)",
    author: "George R. R. Martin",
    driveId: "1m3ggT-gjnN9t89EW78tSs_z8_pOvwbej",
    coverUrl: "https://i.postimg.cc/rmnSZ8ng/images.jpg",
    cover_url: "https://i.postimg.cc/rmnSZ8ng/images.jpg",
    category: "Juego de Tronos",
    description: "En el mítico Poniente, las grandes casas nobles se enfrentan por el control del Trono de Hierro, mientras las estaciones duran años y un mal ancestral despierta en el lejano norte.",
    pages: 800
  },
  {
    id: "got-choque-reyes",
    title: "Choque de Reyes (Canción de Hielo y Fuego II)",
    author: "George R. R. Martin",
    driveId: "1Y6YN69iobKNNHDGlE42ytoKo__xqetm3",
    coverUrl: "https://i.postimg.cc/66FHB0cL/D-NQ-NP-662649-MLC109156231641-032026-O.webp",
    cover_url: "https://i.postimg.cc/66FHB0cL/D-NQ-NP-662649-MLC109156231641-032026-O.webp",
    category: "Juego de Tronos",
    description: "La guerra civil se extiende por los Siete Reinos tras la muerte del rey Robert. Cinco reyes se disputan la corona en una cruenta lucha llena de intrigas y magia resurgente.",
    pages: 928
  },
  {
    id: "got-tormenta-espadas",
    title: "Tormenta de Espadas (Canción de Hielo y Fuego III)",
    author: "George R. R. Martin",
    driveId: "1BOle7RrD9rmc6ipSImsWjEiS6eoX5IFv",
    coverUrl: "https://i.postimg.cc/6640bZKz/tormentadeespadas-georger-240928135844-9c80aba6-thumbnail.jpg",
    cover_url: "https://i.postimg.cc/6640bZKz/tormentadeespadas-georger-240928135844-9c80aba6-thumbnail.jpg",
    category: "Juego de Tronos",
    description: "La guerra llega a su clímax con alianzas rotas, traiciones brutales y muertes inesperadas, mientras Daenerys Targaryen avanza hacia Poniente con sus tres jóvenes dragones.",
    pages: 1120
  },
  {
    id: "got-festin-cuervos",
    title: "Festín de Cuervos (Canción de Hielo y Fuego IV)",
    author: "George R. R. Martin",
    driveId: "1cUO2GyrTNH-7iAwmpyZAVGVXeKlIPP2v",
    coverUrl: "https://i.postimg.cc/FHr0vdML/mini-magick20220701-8962-zhko6j.png",
    cover_url: "https://i.postimg.cc/FHr0vdML/mini-magick20220701-8962-zhko6j.png",
    category: "Juego de Tronos",
    description: "Tras los sangrientos acontecimientos del conflicto, los supervivientes intentan reconstruir sus vidas y reclamar el poder en una tierra devastada donde los carroñeros se disputan los restos.",
    pages: 864
  },
  {
    id: "got-danza-dragones",
    title: "Danza de Dragones (Canción de Hielo y Fuego V)",
    author: "George R. R. Martin",
    driveId: "1QEGgHgTbTn2Oc3uoqXKihR8S0igdRiSw",
    coverUrl: "https://i.postimg.cc/hvKtmxb1/978849620895.jpg",
    cover_url: "https://i.postimg.cc/hvKtmxb1/978849620895.jpg",
    category: "Juego de Tronos",
    description: "Tyrion Lannister, Jon Nieve y Daenerys Targaryen afrontan desafíos críticos en sus respectivos frentes, mientras amenazas del este y del norte convergen de forma letal.",
    pages: 1040
  },
  {
    id: "got-caballero-siete-reinos",
    title: "El caballero de los Siete Reinos",
    author: "George R. R. Martin",
    driveId: "1d5PZNzajWR1MzjQI3PdwySKyMUH4GZ30",
    coverUrl: "https://i.postimg.cc/Fs8Q53dW/5037D862-038D-4457-BEEE-9AF5A2FA30BC-Img400.jpg",
    cover_url: "https://i.postimg.cc/Fs8Q53dW/5037D862-038D-4457-BEEE-9AF5A2FA30BC-Img400.jpg",
    category: "Juego de Tronos",
    description: "Ambientadas un siglo antes de Juego de Tronos, estas tres novelas cortas siguen las aventuras del caballero errante sir Duncan el Alto y su joven escudero, Egg.",
    pages: 350
  },
  {
    id: "got-sangre-fuego",
    title: "Sangre y Fuego",
    author: "George R. R. Martin",
    driveId: "1kicL8t8SfWXhT9Sb9kV7JNxzWqfSHhYg",
    coverUrl: "https://i.postimg.cc/pVSSpxW0/E2F98582-55C6-40D4-9839-A2BD329683B3-Img400.jpg",
    cover_url: "https://i.postimg.cc/pVSSpxW0/E2F98582-55C6-40D4-9839-A2BD329683B3-Img400.jpg",
    category: "Juego de Tronos",
    description: "La fascinante crónica histórica de Poniente que detalla el reinado de la dinastía Targaryen, desde la conquista de Aegon el Dragón hasta la legendaria Danza de los Dragones.",
    pages: 880
  },
  {
    id: "narnia-sobrino-mago",
    title: "El sobrino del mago (Las crónicas de Narnia I)",
    author: "C. S. Lewis",
    driveId: "1Df1cRTDTndPP2UFkNmGJUzkktlMCHZNi",
    coverUrl: "https://i.postimg.cc/02DdCqvk/El-sobrino-del-mago-174495.jpg",
    cover_url: "https://i.postimg.cc/02DdCqvk/El-sobrino-del-mago-174495.jpg",
    category: "Narnia",
    description: "Dos amigos, víctimas de un malvado experimento, son transportados a otro mundo mediante unos anillos mágicos, presenciando el nacimiento del grandioso reino de Narnia.",
    pages: 200
  },
  {
    id: "narnia-leon-bruja",
    title: "El león, la bruja y el armario (Las crónicas de Narnia II)",
    author: "C. S. Lewis",
    driveId: "1d5GZjfR9qbLPqXLLFmHaMqBQcvHvPzkP",
    coverUrl: "https://i.postimg.cc/hjXVzks1/big.jpg",
    cover_url: "https://i.postimg.cc/hjXVzks1/big.jpg",
    category: "Narnia",
    description: "Cuatro hermanos descubren un armario mágico que conduce a la mística tierra de Narnia, un reino sumergido en un invierno eterno por la temible Bruja Blanca, que solo el gran león Aslan puede salvar.",
    pages: 240
  },
  {
    id: "narnia-caballo-muchacho",
    title: "El caballo y su muchacho (Las crónicas de Narnia III)",
    author: "C. S. Lewis",
    driveId: "1r0UjjTnaM_Ongo9hQEtcZtDy-UDueFja",
    coverUrl: "https://i.postimg.cc/2jB4zfVW/big.jpg",
    cover_url: "https://i.postimg.cc/2jB4zfVW/big.jpg",
    category: "Narnia",
    description: "Un niño huérfano y un caballo parlante emprenden un arriesgado escape de la esclavitud en Calormen hacia la libertad y gloria del legendario reino de Narnia.",
    pages: 224
  },
  {
    id: "narnia-principe-caspian",
    title: "El príncipe Caspian (Las crónicas de Narnia IV)",
    author: "C. S. Lewis",
    driveId: "1BgLwaUyvpcYA23FTR_70jpZr7FXvY6dA",
    coverUrl: "https://i.postimg.cc/FKRL8MMj/mini-magick20210413-17270-az2yry.png",
    cover_url: "https://i.postimg.cc/FKRL8MMj/mini-magick20210413-17270-az2yry.png",
    category: "Narnia",
    description: "Los hermanos Pevensie regresan misteriosamente a Narnia para ayudar al legítimo heredero al trono, el príncipe Caspian, a liberar su reino de la opresión del usurpador rey Miraz.",
    pages: 224
  },
  {
    id: "narnia-viajero-alba",
    title: "La travesía del Viajero del Alba (Las crónicas de Narnia V)",
    author: "C. S. Lewis",
    driveId: "1pd3HJA1lj8f_ZCHIBFvc4MRTdjCz7MK9",
    coverUrl: "https://i.postimg.cc/h4x7kb5y/9788408059295.jpg",
    cover_url: "https://i.postimg.cc/h4x7kb5y/9788408059295.jpg",
    category: "Narnia",
    description: "Lucy, Edmund y su molesto primo Eustace viajan a bordo de un barco real liderado por Caspian para buscar a los siete lores desterrados en los límites desconocidos del gran océano oriental.",
    pages: 256
  },
  {
    id: "narnia-silla-plata",
    title: "La silla de plata (Las crónicas de Narnia VI)",
    author: "C. S. Lewis",
    driveId: "1hKFGXGA3u8QZMwdnlmbWIhVOcs79WMWM",
    coverUrl: "https://i.postimg.cc/vTLTcXRw/portada-la-silla-de-plata-c-s-lewis-201505260933.webp",
    cover_url: "https://i.postimg.cc/vTLTcXRw/portada-la-silla-de-plata-c-s-lewis-201505260933.webp",
    category: "Narnia",
    description: "Aslan encomienda a Eustace y su compañera de escuela Jill Pole la peligrosa misión de encontrar al príncipe Rilian, el hijo desaparecido del anciano rey Caspian.",
    pages: 240
  },
  {
    id: "narnia-ultima-batalla",
    title: "La última batalla (Las crónicas de Narnia VII)",
    author: "C. S. Lewis",
    driveId: "1tUQMyo4PVQMOH2FoeKsu-vt_WcCUpiz8",
    coverUrl: "https://i.postimg.cc/bwMyY4Gk/La-ltima-batalla.webp",
    cover_url: "https://i.postimg.cc/bwMyY4Gk/La-ltima-batalla.webp",
    category: "Narnia",
    description: "Una terrible amenaza interna y la mentira unida a un falso Aslan sacuden el reino, llevando a Narnia a su batalla final para decidir el destino definitivo de su gloriosa creación.",
    pages: 224
  },
  {
    id: "negocios-habitos-atomicos",
    title: "Hábitos Atómicos",
    author: "James Clear",
    driveId: "17Rb2UJg4BsHyz5Y4crjFxDz0s3opq7nC", // linking to an available self-development file so reading also works
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UF1000,1000_QL80_.jpg",
    cover_url: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UF1000,1000_QL80_.jpg",
    category: "Ventas y Negocios",
    description: "El revolucionario método para desarrollar buenos hábitos, eliminar los malos y conseguir resultados extraordinarios a través de pequeños cambios cotidianos.",
    pages: 326,
    keywords: ["habito", "habitos", "atómico", "atómicos", "atomicos", "rutinas", "disciplina", "productividad", "superacion", "desarrollo personal", "james clear"]
  },
  {
    id: "negocios-vendes-vendes",
    title: "Vendes o Vendes",
    author: "Grant Cardone",
    driveId: "1zX3tRBazYAIHR1cIaSq8pZ_WQstlt6MV",
    coverUrl: "https://i.postimg.cc/zvbBk5RN/30200343.jpg",
    cover_url: "https://i.postimg.cc/zvbBk5RN/30200343.jpg",
    category: "Ventas y Negocios",
    description: "Todo en la vida es una venta y todo lo que deseas es un negocio. Grant Cardone detalla cómo vender cualquier idea, producto o a ti mismo.",
    pages: 250
  },
  {
    id: "negocios-vendedor-millonario",
    title: "El vendedor millonario",
    author: "Yudis Lonzoy",
    driveId: "1-t2KmT916b3Eyo3l66o_yo631h-DQBvu",
    coverUrl: "https://i.postimg.cc/HkCxbqWD/71l-Hs-Ysqat-L-UF1000-1000-QL80.jpg",
    cover_url: "https://i.postimg.cc/HkCxbqWD/71l-Hs-Ysqat-L-UF1000-1000-QL80.jpg",
    category: "Ventas y Negocios",
    description: "Las estrategias más influyentes y determinantes del reconocido entrenador de ventas latinoamericano Yudis Lonzoy para cerrar ventas de alto valor.",
    pages: 200
  },
  {
    id: "negocios-vendele-mente",
    title: "Véndele a la Mente, No a la Gente",
    author: "Jürgen Klaric",
    driveId: "1CcmW05qIlz3yJGuYWH4HFOMEkFrwNTkH",
    coverUrl: "https://i.postimg.cc/nz5Vr5S0/709290-c1b020cde6457f742b17275638535364-1024-1024.webp",
    cover_url: "https://i.postimg.cc/nz5Vr5S0/709290-c1b020cde6457f742b17275638535364-1024-1024.webp",
    category: "Ventas y Negocios",
    description: "Descubre cómo funciona la mente del consumidor y cuáles son las claves de la neuroventa para conectar de manera profunda y científica con las decisiones de compra.",
    pages: 220
  },
  {
    id: "negocios-ventas-101",
    title: "Ventas 101",
    author: "Zig Ziglar",
    driveId: "1b3M97YKFjZw9Qfe1h9PwwgqidRbE1RwM",
    coverUrl: "https://i.postimg.cc/7ZV2hH31/9781602555655.jpg",
    cover_url: "https://i.postimg.cc/7ZV2hH31/9781602555655.jpg",
    category: "Ventas y Negocios",
    description: "La guía indispensable del maestro mundial de la motivación y las ventas. Aprende los fundamentos prácticos del proceso de prospección, negociación y cierre.",
    pages: 112
  },
  {
    id: "negocios-vendedor-elegante",
    title: "El Vendedor Elegantemente Irresistible",
    author: "Santiago Torres",
    driveId: "1662PW22Mg6Fo_pMfwuYCfMKNWSEiBsA_",
    coverUrl: "https://i.postimg.cc/jj3n6Mk8/61NVsni-DQZL-UF1000-1000-QL80.jpg",
    cover_url: "https://i.postimg.cc/jj3n6Mk8/61NVsni-DQZL-UF1000-1000-QL80.jpg",
    category: "Ventas y Negocios",
    description: "Manual pragmático para estructurar oratoria persuasiva, prospección sofisticada y un magnetismo comercial intachable sin presionar al prospecto.",
    pages: 180
  },
  {
    id: "negocios-22-leyes",
    title: "Las 22 leyes inmutables del marketing",
    author: "Al Ries & Jack Trout",
    driveId: "1WBh8p-OLHZuItkJYWq-5W4xjMTP615-r",
    coverUrl: "https://i.postimg.cc/pVF58YQ5/mini-magick20190121-15792-1qmvmx3.png",
    cover_url: "https://i.postimg.cc/pVF58YQ5/mini-magick20190121-15792-1qmvmx3.png",
    category: "Ventas y Negocios",
    description: "Descubre las leyes fundamentales del marketing que gobiernan el éxito o el fracaso de cualquier producto o servicio en la mente del consumidor.",
    pages: 160
  },
  {
    id: "negocios-manipula-consumidor",
    title: "Así se manipula al consumidor",
    author: "Martin Lindstrom",
    driveId: "1kKjwTw_HSdjxsHSuGiFR-7kka9VsxIXE",
    coverUrl: "https://i.postimg.cc/PrbLVXRL/images.jpg",
    cover_url: "https://i.postimg.cc/PrbLVXRL/images.jpg",
    category: "Ventas y Negocios",
    description: "Una reveladora y audaz investigación que expone las de tácticas subliminales de neuromarketing y psicología comercial que utilizan las grandes marcas.",
    pages: 288
  },
  {
    id: "negocios-principios-orden",
    title: "Principios para enfrentarse al nuevo orden mundial",
    author: "Ray Dalio",
    driveId: "1JZH4ecZnNUk3FswSpc8jLcTTnnR7Xg86",
    coverUrl: "https://i.postimg.cc/gJ6jVmhp/image.png",
    cover_url: "https://i.postimg.cc/gJ6jVmhp/image.png",
    category: "Ventas y Negocios",
    description: "Ray Dalio examina los empires más emblemáticos de la historia para revelar las fuerzas macroeconómicas e históricas que configuran el éxito geopolítico y comercial.",
    pages: 576
  },
  {
    id: "negocios-10-tips-pnl",
    title: "10 tips de ventas PNL exitosos",
    author: "Anónimo",
    driveId: "1l8p8sD9LRUrEeLFRQze1wxOkAxFmXbrj",
    coverUrl: "https://i.postimg.cc/L86syzPJ/mini-magick20190113-4092-wkhtg7.png",
    cover_url: "https://i.postimg.cc/L86syzPJ/mini-magick20190113-4092-wkhtg7.png",
    category: "Ventas y Negocios",
    description: "Un compendio directo y práctico de técnicas de Programación Neurolingüística aplicadas al rapport instantáneo, sintonía verbal y cierres de venta irresistibles.",
    pages: 50
  },
  {
    id: "negocios-12-claves",
    title: "12 claves para construir negocios exitosos",
    author: "Luis Eduardo Barón",
    driveId: "10wefR8OQWWKLWWI_7tbFzklDxvnBWo2l",
    coverUrl: "https://i.postimg.cc/Bn8rQbfX/images.jpg",
    cover_url: "https://i.postimg.cc/Bn8rQbfX/images.jpg",
    category: "Ventas y Negocios",
    description: "El prestigioso consultor Luis Eduardo Barón sintetiza una hoja de ruta con 12 metodologías estables para crear negocios de alto rendimiento y rentables.",
    pages: 140
  },
  {
    id: "negocios-50-formas-enamorar",
    title: "50 Formas De Enamorar A Un Cliente",
    author: "David Gómez",
    driveId: "1hq0SSMkJDWn17B-s6oeCol1fN2XtiE4e",
    coverUrl: "https://i.postimg.cc/nrRWnbd8/mini-magick20210829-32130-stl2xy.png",
    cover_url: "https://i.postimg.cc/nrRWnbd8/mini-magick20210829-32130-stl2xy.png",
    category: "Ventas y Negocios",
    description: "Una guía repleta de ideas creativas, directas y memorables para fidelizar a tus clientes a través del servicio, agregando valor inesperado en cada detalle.",
    pages: 204
  },
  {
    id: "disney-blancanieves",
    title: "Blancanieves y los Siete Enanitos",
    author: "Walt Disney",
    driveId: "1xFIM8ilE7TX-wLHisMZ0H2Ss436YbDey",
    coverUrl: "https://i.postimg.cc/BnsDht5g/download.jpg",
    cover_url: "https://i.postimg.cc/BnsDht5g/download.jpg",
    category: "Disney",
    description: "Sigue a la princesa Blancanieves en su huida de la malvada reina, encontrando refugio en el bosque junto a siete simpáticos mineros y una manzana misteriosa.",
    pages: 110
  },
  {
    id: "disney-nemo",
    title: "Buscando a Nemo",
    author: "Walt Disney",
    driveId: "1LB81utC7p2_uXW4JBe376daqhrsEd3_n",
    coverUrl: "https://i.postimg.cc/BQf16tzQ/Finding-nemo-1-320.webp",
    cover_url: "https://i.postimg.cc/BQf16tzQ/Finding-nemo-1-320.webp",
    category: "Disney",
    description: "La apasionante búsqueda de un padre pez payaso en el inmenso océano para rescatar a su hijo Nemo, acompañado por la inolvidable y olvidadiza Dory.",
    pages: 125
  },
  {
    id: "disney-dumbo",
    title: "Dumbo",
    author: "Walt Disney",
    driveId: "1GmaVHg0DX8Ghfa8cuAmKLWKZqvB9z_ui",
    coverUrl: "https://i.postimg.cc/0QJb5qdy/1547627107.webp",
    cover_url: "https://i.postimg.cc/0QJb5qdy/1547627107.webp",
    category: "Disney",
    description: "Un tierno elefantito con orejas gigantescas descubre que su supuesta diferencia es en realidad su superpoder más asombroso en esta mágica historia clásica.",
    pages: 94
  },
  {
    id: "disney-libro-selva",
    title: "El Libro de la Selva",
    author: "Walt Disney",
    driveId: "1ojZyQbI_hZAjucF7dC5hRb9Ku38a6AXr",
    coverUrl: "https://i.postimg.cc/fR2Lxb8n/1716194901.webp",
    cover_url: "https://i.postimg.cc/fR2Lxb8n/1716194901.webp",
    category: "Disney",
    description: "Sigue las aventuras de Mowgli, el cachorro humano criado por lobos, en su inolvidable viaje por la jungla junto al oso Baloo y la pantera Bagheera.",
    pages: 130
  },
  {
    id: "disney-winnie",
    title: "El Osito Winnie (Winnie Pooh)",
    author: "Walt Disney",
    driveId: "1bWt-1-A2jCPA6pghRAAL6iCWAmaMlOgc",
    coverUrl: "https://i.postimg.cc/9fsQnn5C/1.webp",
    cover_url: "https://i.postimg.cc/9fsQnn5C/1.webp",
    category: "Disney",
    description: "Las entrañables y tiernas aventuras de Winnie Pooh, Piglet, Tigger y todos sus amigos en el encantador Bosque de los Cien Acres.",
    pages: 112
  },
  {
    id: "disney-rey-leon",
    title: "El Rey León",
    author: "Walt Disney",
    driveId: "1orP3z-NtMPZP8KKgFIeJFfUfy5y6n_Xw",
    coverUrl: "https://i.postimg.cc/x83jqjXZ/1.webp",
    cover_url: "https://i.postimg.cc/x83jqjXZ/1.webp",
    category: "Disney",
    description: "La épica travesía de Simba, un joven cachorro de león destinado a suceder a su padre Mufasa como rey de las tierras del orgullo, superando el exilio y grandes pruebas.",
    pages: 150
  },
  {
    id: "disney-rey-leon-2",
    title: "El Rey León 2: El tesoro de Simba",
    author: "Walt Disney",
    driveId: "15Q2JFdMsGaobHmwCbcY2s6bnfYs7kLZm",
    coverUrl: "https://i.postimg.cc/CKnFksZ6/shot.jpg",
    cover_url: "https://i.postimg.cc/CKnFksZ6/shot.jpg",
    category: "Disney",
    description: "Kiara, la obstinada hija de Simba, busca su propio camino y se encuentra con Kovu, un joven criado para seguir los oscuros pasos del desterrado Scar.",
    pages: 135
  },
  {
    id: "disney-hercules",
    title: "Hércules",
    author: "Walt Disney",
    driveId: "1XpfYCBn4d72TxN82QSiEA2_N0Jd4iwD2",
    coverUrl: "https://i.postimg.cc/jdqtZbwj/1.webp",
    cover_url: "https://i.postimg.cc/jdqtZbwj/1.webp",
    category: "Disney",
    description: "El valiente hijo de Zeus lucha por convertirse de un joven desgarbado a un héroe legendario para recuperar su lugar legítimo en el Monte Olimpo.",
    pages: 118
  },
  {
    id: "disney-bella-durmiente",
    title: "La Bella Durmiente del Bosque",
    author: "Walt Disney",
    driveId: "1bPwRyulElsmlFHy08T8ivbJUktpeN73Y",
    coverUrl: "https://i.postimg.cc/HkRmY8Sv/la-bella-durmiente-del-bosque.jpg",
    cover_url: "https://i.postimg.cc/HkRmY8Sv/la-bella-durmiente-del-bosque.jpg",
    category: "Disney",
    description: "La princesa Aurora cae bajo el embrujo de Maléfica condenándola a un sueño eterno, del cual solo el beso de un amor verdadero podrá despertarla.",
    pages: 120
  },
  {
    id: "disney-bella-bestia-2",
    title: "La Bella y la Bestia 2: Una Navidad Encantada",
    author: "Walt Disney",
    driveId: "11RCiwqu_ibrrzUM5cPg-_RrsF-QGQeb8",
    coverUrl: "https://i.postimg.cc/KzrhDqmP/2.webp",
    cover_url: "https://i.postimg.cc/KzrhDqmP/2.webp",
    category: "Disney",
    description: "Bella decide decorar el castillo y organizar una hermosa Navidad para alegrar a la Bestia, a pesar de los malvados planes del órgano Forte para impedirlo.",
    pages: 115
  },
  {
    id: "disney-dama-vagabundo",
    title: "La Dama y el Vagabundo",
    author: "Walt Disney",
    driveId: "1fGq-wTcJWjEYXSN_nO3HfDQs5uhoN0yj",
    coverUrl: "https://i.postimg.cc/CLKpbsXz/1715963173.webp",
    cover_url: "https://i.postimg.cc/CLKpbsXz/1715963173.webp",
    category: "Disney",
    description: "La romántica aventura de Reina, una mimada perrita de raza cocker spaniel, y Golfo, un simpático perro mestizo y libre, superando diferencias de mundos.",
    pages: 108
  },
  {
    id: "disney-sirenita",
    title: "La Sirenita",
    author: "Walt Disney",
    driveId: "1Z7uGcoaconOApNm-sYVytW8lfUekkvOs",
    coverUrl: "https://i.postimg.cc/KzbdjPtz/1.webp",
    cover_url: "https://i.postimg.cc/KzbdjPtz/1.webp",
    category: "Disney",
    description: "Sigue el sueño de Ariel, una sirenita fascinada por el mundo humano, que hace un pacto peligroso con la bruja Úrsula para vivir en la superficie.",
    pages: 132
  },
  {
    id: "disney-mulan",
    title: "Mulan",
    author: "Walt Disney",
    driveId: "16puLalf91fJGt0jpXFtIlCrwpxN4Alg8",
    coverUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=500&auto=format&fit=crop&q=80",
    cover_url: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=500&auto=format&fit=crop&q=80",
    category: "Disney",
    description: "Mulan se disfraza de soldado para tomar el lugar de su anciano padre en el ejército imperial chino, luchando con valentía y honor por su familia y su patria.",
    pages: 122
  },
  {
    id: "disney-peter-pan",
    title: "Peter Pan",
    author: "Walt Disney",
    driveId: "1gSnfN2A5Flhd6dJsL_pnBo_KwJAzoTOH",
    coverUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    cover_url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    category: "Disney",
    description: "Acompaña a Wendy, John, Michael y Peter Pan en su fantástico viaje al País de Nunca Jamás, donde se enfrentarán al temible Capitán Garfio.",
    pages: 136
  },
  {
    id: "disney-pinocho",
    title: "Pinocho",
    author: "Walt Disney",
    driveId: "1SSbugKM0sS1tecOT3L178xxQELsjHydm",
    coverUrl: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=500&auto=format&fit=crop&q=80",
    cover_url: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=500&auto=format&fit=crop&q=80",
    category: "Disney",
    description: "Una marioneta de madera creada por el carpintero Geppetto sueña con convertirse en un niño de verdad bajo la guía de Pepito Grillo y su propia conciencia.",
    pages: 114
  },
  {
    id: "disney-robin-hood",
    title: "Robin Hood",
    author: "Walt Disney",
    driveId: "1ynWig2NTX14fDo1I609cBGy--Tsg_ito",
    coverUrl: "https://i.postimg.cc/brCMm4WR/1.webp",
    cover_url: "https://i.postimg.cc/brCMm4WR/1.webp",
    category: "Disney",
    description: "El valiente y astuto Robin Hood, ambientado en el bosque de Sherwood, roba a los ricos para dárselo a los pobres junto a su leal compañero Little John.",
    pages: 110
  },
  {
    id: "disney-tarzan",
    title: "Tarzan",
    author: "Walt Disney",
    driveId: "13izsy1kboE0tEbpzweac17UuJp_x5d4v",
    coverUrl: "https://i.postimg.cc/gk7Q8FvJ/1.webp",
    cover_url: "https://i.postimg.cc/gk7Q8FvJ/1.webp",
    category: "Disney",
    description: "Un huérfano criado por gorilas en la selva africana descubre sus orígenes humanos tras la llegada de un grupo de expedicionarios y la encantadora Jane.",
    pages: 128
  },
  {
    id: "kiss-me-1",
    title: "Kiss Me 1: Prohibido Enamorarse",
    author: "Elle Kennedy",
    driveId: "1VdEPmr_nWSYhG5ZNXPZFJggrrUxsdwic",
    coverUrl: "https://i.postimg.cc/kXb3nZFy/images.jpg",
    cover_url: "https://i.postimg.cc/kXb3nZFy/images.jpg",
    category: "Kiss Me",
    description: "La aclamada primera entrega de la serie Off-Campus. Un pacto inesperado entre una universitaria centrada y el popular capitán del equipo de hockey sobre hielo desencadena una innegable atracción.",
    pages: 380,
    keywords: ["kiss me", "elle kennedy", "romance", "hockey", "prohibido enamorarse", "the deal", "universidades"]
  },
  {
    id: "kiss-me-2",
    title: "Kiss Me 2: Error de Cálculo",
    author: "Elle Kennedy",
    driveId: "1Hb2rabXDAJ4vNxcEneHotP9easdG3l6v",
    coverUrl: "https://i.postimg.cc/YCBcj3dv/images.jpg",
    cover_url: "https://i.postimg.cc/YCBcj3dv/images.jpg",
    category: "Kiss Me",
    description: "La segunda apasionante novela de la saga. Un deportista estrella acostumbra a conseguir todo lo que quiere, pero esta vez tendrá que esforzarse en serio para convencer a la chica de sus sueños de que vale la pena.",
    pages: 360,
    keywords: ["kiss me", "elle kennedy", "romance", "hockey", "error de calculo", "the mistake", "universidades"]
  },
  {
    id: "kiss-me-3",
    title: "Kiss Me 3: Inmune a ti",
    author: "Elle Kennedy",
    driveId: "1vFrzuTiawHl8XPoZ7QARFL21ozrj9bYs",
    coverUrl: "https://i.postimg.cc/766djQZ3/images.jpg",
    cover_url: "https://i.postimg.cc/766djQZ3/images.jpg",
    category: "Kiss Me",
    description: "La chispeante y seductora tercera entrega de la serie de Elle Kennedy. Dean es el chico que siempre lo tiene todo bajo control, hasta que se cruza con Allie y sus mundos chocan intensamente.",
    pages: 410,
    keywords: ["kiss me", "elle kennedy", "romance", "hockey", "inmune a ti", "the score", "universidades"]
  }
];

export const initialCourses: Course[] = [
  {
    id: "instagram-masterclass",
    title: "Masterclass de Instagram: Crecimiento Viral y Conversión",
    headline: "Domina el algoritmo, posiciona tu marca personal e implementa embudos de conversión de seguidores a leads cualificados.",
    instructor: "Gabriel Ríos",
    difficulty: "Intermedio",
    description: "Aprende el sistema paso a paso que utilizan las principales marcas personales del mundo para crear ganchos de alta retención, videos virales de TikTok/Reels, y automatizaciones vía DM para vender de forma constante.",
    price: 19.99,
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 1,
    syllabus: [
      {
        id: "ig-m1",
        title: "Módulo Principal: Algoritmo y Embudos Automatizados",
        lessons: [
          {
            id: "les-ig-1",
            title: "1.1 Estrategia de Contenido Viral y Embudos de Conversión por DM",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1xFUqejFG2NPVlAZejifXLzJb2Cv2B4xA/preview",
            type: "video",
            duration: "35 mins",
          }
        ]
      }
    ]
  },
  {
    id: "facebook-ads-2025",
    title: "Facebook Ads 2025: Dominando el ROI",
    headline: "Domina la inteligencia artificial de Meta, optimiza tus presupuestos en escala y maximiza el retorno de tus campañas pautadas.",
    instructor: "Carlos Baez (Performance Analyst)",
    difficulty: "Avanzado",
    description: "Aprende las estrategias de pauta publicitaria para el 2025. Configuración de campañas, segmentación avanzada con IA de Meta, y optimización de presupuestos para maximizar ventas.",
    price: 24.99,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Marketing Digital / Ventas",
    total_lessons: 1,
    syllabus: [
      {
        id: "fb-m1",
        title: "Módulo Principal: Pauta Avanzada de Alto Rendimiento",
        lessons: [
          {
            id: "les-fb-1",
            title: "1.1 Estrategia de Pauta Digital y Optimización del ROI",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1O75hYKIR2JjLP5-02SZCXrFM0-ybGWfe/preview",
            type: "video",
            duration: "42 mins",
          }
        ]
      }
    ]
  },
  {
    id: "virtual-dj-basics",
    title: "Virtual DJ para Principiantes: Las Bases",
    headline: "Domina el arte de la mezcla desde cero. Aprende a manejar decks, ecualización básica, beatmatching y efectos esenciales en Virtual DJ.",
    instructor: "Dj Club Pro (Audio Resident)",
    difficulty: "Principiante",
    description: "Iníciate en la mezcla digital. Aprende de manera interactiva a controlar la ganancia, el ecualizador de 3 bandas, sincronización de BPMs y técnicas de loops en vivo.",
    price: 14.99,
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    category: "Música / DJing",
    total_lessons: 1,
    syllabus: [
      {
        id: "vdj-m1",
        title: "Módulo Principal: Decks y Mezcla Esencial",
        lessons: [
          {
            id: "les-vdj-1",
            title: "1.1 Virtual DJ: Conceptos y Primeras Mezclas",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1BBKdCtzEPEsPSLwESogmxcgr3Bo-h_IB/view?usp=drive_link",
            type: "video",
            duration: "45 mins",
          }
        ]
      }
    ]
  },
  {
    id: "mecanica-motos",
    title: "Mecánica de Motos: Formación Técnica",
    headline: "Domina el funcionamiento, desarme, diagnóstico y mantenimiento de motores y sistemas de motocicletas desde cero.",
    instructor: "Taller Mecánico Senior (Master Mechanic)",
    difficulty: "Principiante",
    description: "Aprende el funcionamiento, desarme, diagnóstico y mantenimiento de motores y sistemas de motocicletas de forma práctica.",
    price: 29.99,
    thumbnail: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    category: "Mecánica",
    total_lessons: 2,
    syllabus: [
      {
        id: "motos-m1",
        title: "Módulo Central: Práctica de Taller",
        lessons: [
          {
            id: "p1",
            title: "Parte 1: El Corazón Mecánico y Motor",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1Lp7wUgQTC-6nmtr_f3jRVc3aWdEE9oab/view?usp=drive_link",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "p2",
            title: "Parte 2: Sistemas Eléctricos y Chasis",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1dhLROci5FfWKXkhPspudSkVdg-8j14Is/view?usp=drive_link",
            type: "video",
            duration: "30 mins"
          }
        ]
      }
    ]
  },
  {
    id: "frances-desde-cero",
    title: "Francés desde Cero: Inmersión Lingüística",
    headline: "Aprende el idioma del amor y los negocios desde las bases. Fonética, gramática esencial y conversación fluida en 3 niveles detallados.",
    instructor: "Jean-Pierre (Native Educator)",
    difficulty: "Principiante",
    description: "Aprende el idioma del amor y los negocios desde las bases. Fonética, gramática esencial y conversación fluida en 3 niveles detallados.",
    price: 34.99,
    thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    category: "Idiomas",
    total_lessons: 3,
    syllabus: [
      {
        id: "frances-m1",
        title: "Inmersión Completa",
        lessons: [
          {
            id: "p1",
            title: "Parte 1: Fonética y Saludos Iniciales",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1y2R-YgEuSJOx1yxAAxIituZHA7-5Cqq6/view?usp=drive_link",
            type: "video",
            duration: "20 mins"
          },
          {
            id: "p2",
            title: "Parte 2: Gramática y Estructura",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1lefAkoL_Xfjuow8SydYcsdZcvfid4YqQ/view?usp=drive_link",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "p3",
            title: "Parte 3: Conversación y Situaciones Reales",
            order: 3,
            video_drive_url: "https://drive.google.com/file/d/1GjSC3UNSz7tbRqvmaQa6Uwyi5U1GJh5k/view?usp=drive_link",
            type: "video",
            duration: "30 mins"
          }
        ]
      }
    ]
  },
  {
    id: "portugues-principiantes",
    title: "Portugués para Principiantes: Tudo Bem?",
    headline: "Iníciate en el idioma más alegre del mundo y aprende fonética, saludos y verbos básicos.",
    instructor: "Thiago Silva (Native Instructor)",
    difficulty: "Principiante",
    description: "Iníciate en el idioma más alegre del mundo. Aprende fonética, saludos, verbos básicos y evita las trampas del portuñol en una sola Masterclass.",
    price: 19.99,
    thumbnail: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80",
    category: "Idiomas",
    total_lessons: 1,
    syllabus: [
      {
        id: "portugues-m1",
        title: "Inmersión Rápida",
        lessons: [
          {
            id: "p1",
            title: "Parte 1: Pronunciación y Vocabulario Esencial",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/15fuymagrM41jhpzOeRmgl7povwdLqw_a/view?usp=drive_link",
            type: "video",
            duration: "40 mins"
          }
        ]
      }
    ]
  },
  {
    id: "ingles-desde-cero",
    title: "Inglés desde Cero: Dominio Global",
    headline: "El curso definitivo para hablar inglés. Desde los sonidos básicos hasta conversaciones fluidas. Aprende gramática, listening y speaking con soporte de IA.",
    instructor: "Sarah Jenkins (Global Educator)",
    difficulty: "Principiante",
    description: "El curso definitivo para hablar inglés. Desde los sonidos básicos hasta conversaciones fluidas. Aprende gramática, listening y speaking con soporte de IA.",
    price: 29.99,
    thumbnail: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    category: "Idiomas",
    total_lessons: 2,
    syllabus: [
      {
        id: "ingles-m1",
        title: "Dominio Global",
        lessons: [
          {
            id: "p1",
            title: "Parte 1: Fundamentos y Estructura",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1fGXkoYanCsRkc-mejMkJC5sWU7Fqs_lC/view?usp=drive_link",
            type: "video",
            duration: "35 mins"
          },
          {
            id: "p2",
            title: "Parte 2: Conversación y Fluidez",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/12KfyrtrlkvnGv2qiuR3s7Dov1kea8mtG/view?usp=drive_link",
            type: "video",
            duration: "45 mins"
          }
        ]
      }
    ]
  },
  {
    id: "microblading-cejas",
    title: "Máster en Diseño, Perfilado y Microblading de Cejas",
    headline: "Formación profesional paso a paso para dominar la técnica de microblading, perfilado híbrido, bioseguridad y resguardo jurídico.",
    instructor: "Especialista Flor Cardozo (Master Aesthetician)",
    difficulty: "Principiante",
    description: "Conviértete en profesional de la estética de la ceja. Este máster cubre desde la bioseguridad higiénico-sanitaria y la anatomía de la dermis, hasta el diseño morfológico, anestésicos permitidos, práctica intensiva paso a paso en látex y modelo real de manera guiada.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 27,
    syllabus: [
      {
        id: "micro-m1",
        title: "Módulo 1: Introducción y Fundamentos",
        lessons: [
          {
            id: "micro-1-1",
            title: "Parte 1. Comenzando el curso de microblading",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/11oC-Q17iwrCjNRwvtnubyqiJmddYsAW7/preview",
            type: "video",
            duration: "15 mins"
          },
          {
            id: "micro-1-2",
            title: "Parte 2. Introducción y definición de la técnica",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/13jV9ZhMOoGCa-jJroMfCTxLEHgstF3TH/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "micro-1-3",
            title: "Parte 3. Introducción a la Bioseguridad (Clave)",
            order: 3,
            video_drive_url: "https://drive.google.com/file/d/15AnmZxzz8y1OiGn2QIKGFRyI46vkcQKI/preview",
            type: "video",
            duration: "22 mins"
          },
          {
            id: "micro-1-4",
            title: "Parte 4. Anatomía de la piel",
            order: 4,
            video_drive_url: "https://drive.google.com/file/d/1XTfuKpT5oUSUgrXwS4y3ImoJicnQS5_S/preview",
            type: "video",
            duration: "25 mins"
          }
        ]
      },
      {
        id: "micro-m2",
        title: "Módulo 2: Herramientas y Materiales",
        lessons: [
          {
            id: "micro-2-1",
            title: "Parte 5. Tipos y recomendaciones de pigmentos",
            order: 5,
            video_drive_url: "https://drive.google.com/file/d/1ew2Gb8yVRenQBnQYbq_qKfQkVsrYrWaa/preview",
            type: "video",
            duration: "20 mins"
          },
          {
            id: "micro-2-2",
            title: "Parte 6. Materiales de trabajo",
            order: 6,
            video_drive_url: "https://drive.google.com/file/d/1qoHXwtX9IMAhDJ6E66lQO9kkGRuMtbAr/preview",
            type: "video",
            duration: "15 mins"
          },
          {
            id: "micro-2-3",
            title: "Parte 11. Tipos de aguja (Parte 1)",
            order: 7,
            video_drive_url: "https://drive.google.com/file/d/1rhFO1pHsIofBxVJKLfOC3IPiC5uoY6n_/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "micro-2-4",
            title: "Parte 12. Tipos de aguja (Parte 2)",
            order: 8,
            video_drive_url: "https://drive.google.com/file/d/1Qzjurkln_J3cqM_cBLfNUmibkUH73TBa/preview",
            type: "video",
            duration: "14 mins"
          },
          {
            id: "micro-2-5",
            title: "Parte 13. Forma correcta de colocar la aguja en el inductor o tebori",
            order: 9,
            video_drive_url: "https://drive.google.com/file/d/1Q9btmeUIUD0VK00GHp8u3PjrpSpZeBQV/preview",
            type: "video",
            duration: "10 mins"
          }
        ]
      },
      {
        id: "micro-m3",
        title: "Módulo 3: Preparación, Diseño y Anestesia",
        lessons: [
          {
            id: "micro-3-1",
            title: "Parte 7. Anestésicos",
            order: 10,
            video_drive_url: "https://drive.google.com/file/d/1nlXiWRr49xtN3svG5ezXj1P6CLBr8Cm-/preview",
            type: "video",
            duration: "15 mins"
          },
          {
            id: "micro-3-2",
            title: "Parte 8. Exfoliación de la piel y aplicación de la anestesia",
            order: 11,
            video_drive_url: "https://drive.google.com/file/d/1OF_hhM29VWRaMRKap67jzd5RPTnzV8QE/preview",
            type: "video",
            duration: "16 mins"
          },
          {
            id: "micro-3-3",
            title: "Parte 9. Lápiz dermográfico",
            order: 12,
            video_drive_url: "https://drive.google.com/file/d/1F_ySgWCkE3wnxEAi2TYdTTlJ5mtEPhph/preview",
            type: "video",
            duration: "12 mins"
          },
          {
            id: "micro-3-4",
            title: "Parte 10. Marcación, diseño y perfilado de cejas",
            order: 13,
            video_drive_url: "https://drive.google.com/file/d/1QIUkW-csm2ImtmG2e0hdWlp6gpn5x4aV/preview",
            type: "video",
            duration: "26 mins"
          }
        ]
      },
      {
        id: "micro-m4",
        title: "Módulo 4: Práctica y Técnica Práctica",
        lessons: [
          {
            id: "micro-4-1",
            title: "Parte 14. ¿Cómo practicar correctamente?",
            order: 14,
            video_drive_url: "https://drive.google.com/file/d/1tcjpQTweXOtnZKCsoDU65VZ2FWE7K7Dw/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "micro-4-2",
            title: "Parte 15. Practicando marcación de cejas y marcado con pintura (Parte 1)",
            order: 15,
            video_drive_url: "https://drive.google.com/file/d/1OLV0mKDzu7QlWuz8VDAHKgiF-Y4eRQXs/preview",
            type: "video",
            duration: "21 mins"
          },
          {
            id: "micro-4-3",
            title: "Parte 16. Practicando marcación de cejas y marcado con pintura (Parte 2)",
            order: 16,
            video_drive_url: "https://drive.google.com/file/d/1BsYOyotI4zrNFmBG_uzfdnPhVjL4P2R_/preview",
            type: "video",
            duration: "24 mins"
          },
          {
            id: "micro-4-4",
            title: "Parte 17. Profundidad correcta del corte en piel superficial",
            order: 17,
            video_drive_url: "https://drive.google.com/file/d/1f-QF663tB92du0VjqY4ttItQpvoM377I/preview",
            type: "video",
            duration: "16 mins"
          },
          {
            id: "micro-4-5",
            title: "Parte 18. Paso a paso de la técnica (teórico)",
            order: 18,
            video_drive_url: "https://drive.google.com/file/d/1am1911J6SW_FQ7wmgHL5MhvD4xbB9RfQ/preview",
            type: "video",
            duration: "20 mins"
          }
        ]
      },
      {
        id: "micro-m5",
        title: "Módulo 5: Aplicación Real en Modelo",
        lessons: [
          {
            id: "micro-5-1",
            title: "Parte 19. Retiro de la anestesia, marcado de cejas y primeros cortes (Parte 1)",
            order: 19,
            video_drive_url: "https://drive.google.com/file/d/1098Asu3jGiAEIaZPS9DiQ75YMqRbc7Nv/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "micro-5-2",
            title: "Parte 20. Retiro de la anestesia, marcado de cejas y primeros cortes (Parte 2)",
            order: 20,
            video_drive_url: "https://drive.google.com/file/d/1kN130pJNGGn2XnEc0DEEVkvkWmo-kcWP/preview",
            type: "video",
            duration: "28 mins"
          },
          {
            id: "micro-5-3",
            title: "Parte 21. Retiro del pigmento, remarcado de cejas y cortes (varias veces) (Parte 1)",
            order: 21,
            video_drive_url: "https://drive.google.com/file/d/1UbwJqFxdtUHTLaFBqclYGeBwkef7wvK1/preview",
            type: "video",
            duration: "30 mins"
          },
          {
            id: "micro-5-4",
            title: "Parte 22. Retiro del pigmento, remarcado de cejas y cortes (varias veces) (Parte 2)",
            order: 22,
            video_drive_url: "https://drive.google.com/file/d/1iwyNrNvFSPZynheCT0c2kmJij0fpx811/preview",
            type: "video",
            duration: "26 mins"
          }
        ]
      },
      {
        id: "micro-m6",
        title: "Módulo 6: Finalización, Correcciones y Aspectos Legales",
        lessons: [
          {
            id: "micro-6-1",
            title: "Parte 23. Correcciones y relleno",
            order: 23,
            video_drive_url: "https://drive.google.com/file/d/17ECOMzc95n7nLc85O5ru322Dt_7T8QX-/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "micro-6-2",
            title: "Parte 24. Rectificación de diseño",
            order: 24,
            video_drive_url: "https://drive.google.com/file/d/169FowKC0VbFOs4_EK9zprhKjG3XdN_X_/preview",
            type: "video",
            duration: "14 mins"
          },
          {
            id: "micro-6-3",
            title: "Parte 25. Cuidados post tratamiento",
            order: 25,
            video_drive_url: "https://drive.google.com/file/d/1ctSuzhzGdjzMQXjIn0-b3m9m4GZsOELi/preview",
            type: "video",
            duration: "15 mins"
          },
          {
            id: "micro-6-4",
            title: "Parte 26. Contraindicaciones",
            order: 26,
            video_drive_url: "https://drive.google.com/file/d/1wfz4c0HiEhh7Ltbk6nAMFOCCO7rkBp33/preview",
            type: "video",
            duration: "12 mins"
          },
          {
            id: "micro-6-5",
            title: "Parte 27. Ficha técnica y resguardo jurídico (Fundamental)",
            order: 27,
            video_drive_url: "https://drive.google.com/file/d/1od7l_H28S7_WolH8fpfImo5bpjRHJwIY/preview",
            type: "video",
            duration: "21 mins"
          }
        ]
      }
    ]
  },
  {
    id: "peluqueria-estilismo",
    title: "Curso Máster: Estilismo, Peluquería y Corte de Cabello",
    headline: "Domina las técnicas de corte, peinado, cuidado capilar y herramientas profesionales del estilista desde cero.",
    instructor: "Lucas Benítez (Estilista & Hair Designer)",
    difficulty: "Principiante",
    description: "Iníciate con confianza en el apasionante mundo del estilismo y la peluquería profesional. El curso abarca el estudio de la textura capilar, técnicas fundamentales de corte de cabello y el uso correcto de herramientas de precisión como tijera y navaja.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 2,
    syllabus: [
      {
        id: "pelu-m1",
        title: "Módulo 1: Fundamentos y Herramientas del Estilista",
        lessons: [
          {
            id: "pelu-1-1",
            title: "Parte 1: Introducción a la Peluquería y Estructura Capilar",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/13VOz7RkWjaHw7H_TaRm1-bRPRYYzoFne/preview",
            type: "video",
            duration: "24 mins"
          },
          {
            id: "pelu-1-2",
            title: "Parte 2: Herramientas del Estilista y Técnicas de Corte",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1T0_Il05y8Qm05K2f7ws9wS8H3_-f_YLD/preview",
            type: "video",
            duration: "21 mins"
          }
        ]
      }
    ]
  },
  {
    id: "unas-manicuria",
    title: "Curso Especialista en Uñas, Manicuría y Nail Art",
    headline: "Formación profesional en cuidado de manos, preparación de la uña, esmaltado semipermanente y decoración creativa.",
    instructor: "Sofía Valenzuela (Nail Master & Educator)",
    difficulty: "Principiante",
    description: "Inicia tu camino como manicurista profesional. Aprende a fondo la anatomía de las manos y uñas, la correcta preparación química de la lámina ungueal, técnicas avanzadas de limado, limpieza de cutículas y la aplicación perfecta de esmaltado semipermanente, esculpidos fundamentales y arte decorativo.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1604654894610-df490651e56c?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 3,
    syllabus: [
      {
        id: "unas-m1",
        title: "Módulo 1: Anatomía, Preparación y Manicuría Inicial",
        lessons: [
          {
            id: "unas-1-1",
            title: "Parte 1: Anatomía de la Uña y Preparación de la Lámina",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1NG9uH1PFzg3YTdyryxnKOa5FrDvSioAw/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "unas-1-2",
            title: "Parte 2: Limpieza de Cutículas y Técnicas de Limado",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1Xv2VFO_pnD4zags3DnImC2EhyQEvPE7w/preview",
            type: "video",
            duration: "22 mins"
          },
          {
            id: "unas-1-3",
            title: "Parte 3: Aplicación de Semi y Sellado de Cutícula",
            order: 3,
            video_drive_url: "https://drive.google.com/file/d/1Yu_pFSDlL_l9JtpGAqhCYvoPmbtEGhg3/preview",
            type: "video",
            duration: "28 mins"
          }
        ]
      }
    ]
  },
  {
    id: "masoterapia-masajes",
    title: "Curso Máster: Masoterapia e Iniciación al Masaje Corporal",
    headline: "Aprende el arte del contacto terapéutico, masajes descontracturantes, relajantes y anatomía muscular para masajistas profesionales.",
    instructor: "Clara Domínguez (Terapeuta Corporal & Kinesióloga)",
    difficulty: "Principiante",
    description: "Iníciate en la masoterapia y el bienestar físico corporal. Este máster introductorio te capacita en la anatomía del sistema muscular, técnicas fundamentales de deslizamiento, amasamiento, fricción, preparación del ambiente y maniobras descontracturantes de espalda.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 2,
    syllabus: [
      {
        id: "masa-m1",
        title: "Módulo 1: Fundamentos de la Masoterapia Corporal",
        lessons: [
          {
            id: "masa-1-1",
            title: "Parte 1: Introducción a la Masoterapia y Biomecánica Corporal",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1lQwctQbv3oHrYKVWd4xZUlNvEVtPlx68/preview",
            type: "video",
            duration: "26 mins"
          },
          {
            id: "masa-1-2",
            title: "Parte 2: Técnicas de Amasamiento y Masaje Descontracturante",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1O97viNClI9gcxIyr32j3WD1HsBgy0QMI/preview",
            type: "video",
            duration: "24 mins"
          }
        ]
      }
    ]
  },
  {
    id: "automaquillaje-completo",
    title: "Curso Máster: Automaquillaje Completo y Diseño de Imagen",
    headline: "Domina el arte del automaquillaje social de día y de noche, estudio morfológico, colorimetría y diseño de cejas.",
    instructor: "Paula Mendoza (Beauty Creator & Make-Up Artist)",
    difficulty: "Principiante",
    description: "Aprende a resaltar tu belleza natural potenciando tus facciones únicas. Pasaremos desde el estudio morfológico de tu tipo de rostro y preparación de piel preliminar, hasta técnicas de contorno avanzado, difuminados de ojos de nivel intermedio y maquillaje para eventos de gala paso a paso.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 13,
    syllabus: [
      {
        id: "maq-m1",
        title: "Módulo 1: Preparación de la Piel y Paletas Cromáticas",
        lessons: [
          {
            id: "maq-1-1",
            title: "Parte 1: Tipos de Piel y Preparación Cutánea",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1u6hVIWbCkdb8UYRsahYhQECoJcY5Pb-b/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "maq-1-2",
            title: "Parte 2: Teoría del Color y Selección de Paletas",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1e5eIO-GzHPbhhetYymglFgKX6cwB8UEF/preview",
            type: "video",
            duration: "15 mins"
          },
          {
            id: "maq-1-3",
            title: "Parte 3: Bases, Correctores y Cobertura Profesional",
            order: 3,
            video_drive_url: "https://drive.google.com/file/d/1GuVqY_4nGXFyZYfEks3Nylb6MoCg0cPM/preview",
            type: "video",
            duration: "22 mins"
          }
        ]
      },
      {
        id: "maq-m2",
        title: "Módulo 2: Perfilado de Rostro y Cejas",
        lessons: [
          {
            id: "maq-2-1",
            title: "Parte 4: Contorno y Puntos de Luz (Contouring & Strobing)",
            order: 4,
            video_drive_url: "https://drive.google.com/file/d/1w-H-Rgo-zcxppVBhR_TZeoicBPvRJka3/preview",
            type: "video",
            duration: "20 mins"
          },
          {
            id: "maq-2-2",
            title: "Parte 5: Diseño y Definición de Cejas en Maquillaje",
            order: 5,
            video_drive_url: "https://drive.google.com/file/d/1RS5aEptDUAvcCCKSQhjI9UpY6Dq_kDu_/preview",
            type: "video",
            duration: "16 mins"
          }
        ]
      },
      {
        id: "maq-m3",
        title: "Módulo 3: Sombras, Delineado y Detalles del Rostro",
        lessons: [
          {
            id: "maq-3-1",
            title: "Parte 6: Preparación de Párpados y Sombras de Transición",
            order: 6,
            video_drive_url: "https://drive.google.com/file/d/12EuaV_B1pEmLo_IZQKIuFhpw-2Aj2LyE/preview",
            type: "video",
            duration: "14 mins"
          },
          {
            id: "maq-3-2",
            title: "Parte 7: Difuminados, Profundidad y Transición de Color",
            order: 7,
            video_drive_url: "https://drive.google.com/file/d/1KMwT60vipt8mMwlhtAAtvalgh9un6LP5/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "maq-3-3",
            title: "Parte 8: Delineados de Ojos de Precisión (Eyeliner)",
            order: 8,
            video_drive_url: "https://drive.google.com/file/d/1bTmBYCL-yfMMFYExeFFtPHfHx1iWDElI/preview",
            type: "video",
            duration: "15 mins"
          },
          {
            id: "maq-3-4",
            title: "Parte 9: Colocación de Pestañas y Máscara de Oestañas",
            order: 9,
            video_drive_url: "https://drive.google.com/file/d/1Jhnu5g33dUxSHc1GLj3qOTAUhl92yOLL/preview",
            type: "video",
            duration: "13 mins"
          },
          {
            id: "maq-3-5",
            title: "Parte 10: Técnicas de Delineado y Relleno de Labios",
            order: 10,
            video_drive_url: "https://drive.google.com/file/d/1xvUOKxMFZlmBHVFsfOXAfytblTOuBIGR/preview",
            type: "video",
            duration: "12 mins"
          },
          {
            id: "maq-3-6",
            title: "Parte 11: Sellado, Polvos y Fijación Final del Maquillaje",
            order: 11,
            video_drive_url: "https://drive.google.com/file/d/19Lzrj7ihwBeQFqXyVbsiiD5LQfWR0DzD/preview",
            type: "video",
            duration: "17 mins"
          }
        ]
      },
      {
        id: "maq-m4",
        title: "Módulo 4: Looks Especiales y Material Teórico de Estudio",
        lessons: [
          {
            id: "maq-4-1",
            title: "Parte 12: Look de Noche, Cut Crease y Brillos (Glam)",
            order: 12,
            video_drive_url: "https://drive.google.com/file/d/13zo5Bq19H6f9_0HUYjY10Q4YWVU-kvOY/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "maq-4-2",
            title: "Material Extra Escrito: Manual y Presentación de Automaquillaje Completo",
            order: 13,
            video_drive_url: "https://docs.google.com/presentation/d/1IA7FSWaMLdvOqT06XyL6ZFDcstPgvZy7/preview",
            type: "pdf",
            duration: "Lectura de Apoyo"
          }
        ]
      }
    ]
  },
  {
    id: "reparacion-tv",
    title: "Curso Máster: Reparación de Smart TV, LCD y LED",
    headline: "Formación integral paso a paso en electrónica aplicada, diagnóstico de fallas, fuentes conmutadas, retroiluminación LED y placas Main.",
    instructor: "Prof. Alberto Silva (Técnico de Laboratorio Electrónico)",
    difficulty: "Principiante",
    description: "Aprende desde las bases teóricas y pragmáticas a diagnosticar y reparar televisores modernos LED, LCD y Smart TV de todas las marcas. El máster aborda de forma completa las mediciones y circuito de stand-by de fuentes commutadas, la comprobación de tiras de retroiluminación con probadores caseros e inductores modernos, cambio dinámico de diodos SMD defectuosos, reparaciones de panel con tarjeta T-CON y reprogramación de firmware.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 19,
    syllabus: [
      {
        id: "tv-m1",
        title: "Módulo 1: Introducción y Electrónica Básica de TV",
        lessons: [
          {
            id: "tv-1-1",
            title: "Parte 1: Introducción y Desarmado Seguro de Cobertura",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1PlK0BCtl-auOpkQjICUkz2iExBDPXmHG/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "tv-1-2",
            title: "Parte 2: Reconocimiento de Placas y Componentes Clave",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1YBj4uK0H3aoDJrOgT-wUXmbJLbAzj48A/preview",
            type: "video",
            duration: "20 mins"
          },
          {
            id: "tv-1-3",
            title: "Parte 3: Herramientas de Medición e Instrumentos de Taller",
            order: 3,
            video_drive_url: "https://drive.google.com/file/d/1ECQMH70tVVsGdNhqEMeeie4aVGboYdIp/preview",
            type: "video",
            duration: "15 mins"
          },
          {
            id: "tv-1-4",
            title: "Parte 4: Arquitectura General de un TV Moderno (LED/LCD)",
            order: 4,
            video_drive_url: "https://drive.google.com/file/d/1rVSLAYOSpZ5PkhR_hz0-ORm726ev4ymc/preview",
            type: "video",
            duration: "24 mins"
          },
          {
            id: "tv-1-5",
            title: "Parte 5: Electrónica Aplicada e Identificación de Circuitos",
            order: 5,
            video_drive_url: "https://drive.google.com/file/d/17H12ySpgrNVZQ1A4dfdfqBid5Jku2vGn/preview",
            type: "video",
            duration: "21 mins"
          }
        ]
      },
      {
        id: "tv-m2",
        title: "Módulo 2: Fuentes de Alimentación y Mediciones",
        lessons: [
          {
            id: "tv-2-1",
            title: "Parte 6: Principio de Funcionamiento de Fuentes Conmutadas (SMPS)",
            order: 6,
            video_drive_url: "https://drive.google.com/file/d/1sKsvLhSiodL5veOXLrpK-Jp7dtWIkZHv/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "tv-2-2",
            title: "Parte 7: Diagnóstico de Falla en Etapa Primaria de la Fuente (HOT)",
            order: 7,
            video_drive_url: "https://drive.google.com/file/d/1SWELUH2vXoI5RBmsXAZjjrseQ5brpr4P/preview",
            type: "video",
            duration: "22 mins"
          },
          {
            id: "tv-2-3",
            title: "Parte 8: Medición de Tensiones Secundarias (COLD) y Señal de Stand-By",
            order: 8,
            video_drive_url: "https://drive.google.com/file/d/1n7BZofgyKRC4mpusI4cwbGbtGqM0U1va/preview",
            type: "video",
            duration: "19 mins"
          },
          {
            id: "tv-2-4",
            title: "Parte 9: Reemplazo de Componentes Críticos (Capacitores y Optoacopladores)",
            order: 9,
            video_drive_url: "https://drive.google.com/file/d/18k-3XytXotiSMZVq1p_eSs7z82LwRYze/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "tv-2-5",
            title: "Parte 10: Placa Main o Única (Monoplaca) y Señales de Control",
            order: 10,
            video_drive_url: "https://drive.google.com/file/d/12X3-PQLM_jLwpZhvdVmgDsfGwkPqUD1q/preview",
            type: "video",
            duration: "21 mins"
          }
        ]
      },
      {
        id: "tv-m3",
        title: "Módulo 3: Retroiluminación LED y Pantallas",
        lessons: [
          {
            id: "tv-3-1",
            title: "Parte 11: Sistema de Retroiluminación LED (Backlight) y Drivers",
            order: 11,
            video_drive_url: "https://drive.google.com/file/d/15pLw8gWCvMrxgv-SXKLGUb5Ozv-yZf3y/preview",
            type: "video",
            duration: "23 mins"
          },
          {
            id: "tv-3-2",
            title: "Parte 12: Comprobación Dinámica de Tiras de LED con Probador Externo",
            order: 12,
            video_drive_url: "https://drive.google.com/file/d/1veJdm77udIKikr4o37Oi0iAlN96Dq5X6/preview",
            type: "video",
            duration: "17 mins"
          },
          {
            id: "tv-3-3",
            title: "Parte 13: Desarmado de Panel LCD y Reemplazo de Diodos LED Quemados",
            order: 13,
            video_drive_url: "https://drive.google.com/file/d/149yFpxeMh355ff3EC5XlxMVxyKfSwGHh/preview",
            type: "video",
            duration: "30 mins"
          },
          {
            id: "tv-3-4",
            title: "Parte 14: Reparación de Circuitos del Backlight Integrados en Placa",
            order: 14,
            video_drive_url: "https://drive.google.com/file/d/1K1pUCBp2uToV_NEnBEYJWNNof9yhSStU/preview",
            type: "video",
            duration: "26 mins"
          },
          {
            id: "tv-3-5",
            title: "Parte 15: Fallas de Pantalla y Comprobación con Tarjetas T-CON",
            order: 15,
            video_drive_url: "https://drive.google.com/file/d/1kMpS5ZC_5vxpsQdzN6anAz472Br5fN70/preview",
            type: "video",
            duration: "28 mins"
          }
        ]
      },
      {
        id: "tv-m4",
        title: "Módulo 4: Diagnósticos Avanzados y Fallas Comunes",
        lessons: [
          {
            id: "tv-4-1",
            title: "Parte 16: Flex de Pantalla y Anulación de Señales Defectuosas (Cof y Ckv)",
            order: 16,
            video_drive_url: "https://drive.google.com/file/d/1SnVbGIEdM1A19D4sjL6NyOfZCw9QKS7k/preview",
            type: "video",
            duration: "22 mins"
          },
          {
            id: "tv-4-2",
            title: "Parte 17: Fallas Típicas de Encendido - Luz de Standby Destella o Parpadea",
            order: 17,
            video_drive_url: "https://drive.google.com/file/d/1Dx2XwsDNhaYJYj9Ze8n2CdzrR096cx_E/preview",
            type: "video",
            duration: "20 mins"
          },
          {
            id: "tv-4-3",
            title: "Parte 18: Fallas Típicas de Pantalla - TV con Sonido pero sin Imagen (Pantalla Negra)",
            order: 18,
            video_drive_url: "https://drive.google.com/file/d/1inXZf_QTLX5imKSuCy_Nr-TD2Y08X1vv/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "tv-4-4",
            title: "Parte 19: Caso de Éxito de Reparación Completa y Recomendaciones de Taller",
            order: 19,
            video_drive_url: "https://drive.google.com/file/d/1EkCxYH6E1uIM5H9EGZ_fgZeEiR7sAtpA/preview",
            type: "video",
            duration: "35 mins"
          }
        ]
      }
    ]
  },
  {
    id: "aire-acondicionado",
    title: "Curso Máster: Instalación y Reparación de Aire Acondicionado",
    headline: "Domina la instalación, mantenimiento, soldadura, vacío del circuito y carga de gas refrigerante de equipos de aire acondicionado split.",
    instructor: "Ing. Néstor Gómez (Técnico HVAC Superior)",
    difficulty: "Principiante",
    description: "Iníciate profesionalmente en el rubro de la refrigeración y climatización. Aprenderás las bases teóricas de los ciclos frigoríficos, la colocación y montaje de unidades split internas y externas, el aborcardado de tuberías de cobre, la realización adecuada de vacío, pruebas de estanqueidad para resolver fugas y los procedimientos técnicos de carga de gas refrigerante.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 2,
    syllabus: [
      {
        id: "ac-m1",
        title: "Módulo 1: Montaje, Vacío y Carga de Gas del Sistema",
        lessons: [
          {
            id: "ac-1-1",
            title: "Parte 1: Fundamentos de Refrigeración e Instalación de Unidad Split",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/18K6ONwnXBfXEllz8-sixGKjoYL7QW2bx/preview",
            type: "video",
            duration: "28 mins"
          },
          {
            id: "ac-1-2",
            title: "Parte 2: Proceso de Vacío, Control de Presión y Carga de Gas",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1_2xNl_dLqf-wDTSrohJ5cJTugbX8q2Sq/preview",
            type: "video",
            duration: "25 mins"
          }
        ]
      }
    ]
  },
  {
    id: "tatuaje-profesional",
    title: "Curso Máster: Técnica, Arte e Iniciación al Tatuaje",
    headline: "Domina la calibración de máquinas rotativas o bobinas, bioseguridad rigurosa, tipos de trazado con aguja y práctica sobre piel sintética.",
    instructor: "Diego 'Gato' Romero (Tatuador Profesional)",
    difficulty: "Principiante",
    description: "Iníciate con solvencia en el mundo profesional de los tatuajes. En este curso especializado, aprenderás todo sobre la bioseguridad e higiene sanitaria, la correcta preparación de la mesa de trabajo, montaje de agujas tipo cartucho y tradicionales, calibración fina de voltajes y las técnicas esenciales de trazado lineal, sombras y relleno en superficies de prueba.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 1,
    syllabus: [
      {
        id: "tattoo-m1",
        title: "Módulo 1: Equipos, Bioseguridad y Primeros Trazos",
        lessons: [
          {
            id: "tattoo-1-1",
            title: "Parte 1: Introducción al Tatuaje Profesional, Tipos de Agujas y Técnica de Línea",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1UJBp_SXq4t2XeG-P-1NtzgraRo8Z8v8K/preview",
            type: "video",
            duration: "22 mins"
          }
        ]
      }
    ]
  },
  {
    id: "astrologia-profesional",
    title: "Curso Máster: Astrología, Carta Natal y Cosmos",
    headline: "Aprende a interpretar cartas natales, planetas, casas astrológicas, signos y aspectos cósmicos desde cero.",
    instructor: "Andrea Cassini (Astróloga & Investigadora)",
    difficulty: "Principiante",
    description: "Iníciate en es el fascinante lenguaje sagrado de los astros. Este curso te capacita para comprender e interpretar una carta natal de manera integral, analizando la energía y el significado profundo de los doce signos del zodíaco, los planetas personales y generacionales, y las doce casas terrestres.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 1,
    syllabus: [
      {
        id: "astro-m1",
        title: "Módulo 1: Fundamentos de la Astrología y Carta Natal",
        lessons: [
          {
            id: "astro-1-1",
            title: "Parte 1: Introducción a la Astrología, Signos Zodiacales y Estructura Cósmica",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/12i2_J_DaRphog_RWyuh3A3QFhmaeJKkz/preview",
            type: "video",
            duration: "25 mins"
          }
        ]
      }
    ]
  },
  {
    id: "corte-confeccion-n1",
    title: "Curso Máster: Corte y Confección (Nivel 1)",
    headline: "Aprende el arte del diseño textil, patronaje, toma de medidas y confección de prendas desde cero.",
    instructor: "Lucía Fernández (Diseñadora de Moda & Modista)",
    difficulty: "Principiante",
    description: "Conviértete en profesional de la costura y el diseño textil. Este primer nivel te guiará paso a paso en el manejo de la máquina de coser, la identificación de tipos de telas, la elaboración de moldes y patrones básicos, hasta la confección de tus primeras prendas terminadas con acabados impecables.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 12,
    syllabus: [
      {
        id: "corte-m1",
        title: "Módulo 1: Introducción a la Costura, Herramientas y Puntadas",
        lessons: [
          {
            id: "corte-1-1",
            title: "Parte 1: Introducción al Corte y Confección y Máquina de Coser",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1vRNAHGIUu07kxK_Wn3LyaiQUILsIxrgO/preview",
            type: "video",
            duration: "20 mins"
          },
          {
            id: "corte-1-2",
            title: "Parte 2: Herramientas de Costura y Materiales de Trabajo",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1D0lWCXhEzWv2C_suCBHDDyE3GNRCysy_/preview",
            type: "video",
            duration: "18 mins"
          },
          {
            id: "corte-1-3",
            title: "Parte 3: Tipos de Telas, Texturas y Selección Correcta",
            order: 3,
            video_drive_url: "https://drive.google.com/file/d/14veB0fPHuY4XFCRRP4bMOdkHB9Ln0xd2/preview",
            type: "video",
            duration: "22 mins"
          },
          {
            id: "corte-1-4",
            title: "Parte 4: Técnicas Fundamentales de Enhebrado y Bobina",
            order: 4,
            video_drive_url: "https://drive.google.com/file/d/1GvsGvwFpoD_IzEva8yUBl3MEt3PiBF3U/preview",
            type: "video",
            duration: "15 mins"
          },
          {
            id: "corte-1-5",
            title: "Parte 5: Prácticas de Costura Recta, Curva y Zigzag",
            order: 5,
            video_drive_url: "https://drive.google.com/file/d/1zhi--p0XqzarJ_xGGExRF3Eb1-QwEck2/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "corte-1-6",
            title: "Parte 6: Hilvanado, Costuras Invisibles y Terminaciones a Mano",
            order: 6,
            video_drive_url: "https://drive.google.com/file/d/1Ejcw0eOvski_RCKfaA2TfPOrNK3MfjHE/preview",
            type: "video",
            duration: "19 mins"
          }
        ]
      },
      {
        id: "corte-m2",
        title: "Módulo 2: Toma de Medidas, Patronaje y Confección",
        lessons: [
          {
            id: "corte-2-1",
            title: "Parte 7: Estudio de Siluetas y Toma de Medidas Antropométricas",
            order: 7,
            video_drive_url: "https://drive.google.com/file/d/1Mjr1ZlFArV0ulI3jPma2vZpGzcn-ttyT/preview",
            type: "video",
            duration: "24 mins"
          },
          {
            id: "corte-2-2",
            title: "Parte 8: Elaboración de Patrón o Molde Base Superior",
            order: 8,
            video_drive_url: "https://drive.google.com/file/d/14fY9SQ8eotNZFhzebQAn6LRfa7eInhiw/preview",
            type: "video",
            duration: "28 mins"
          },
          {
            id: "corte-2-3",
            title: "Parte 9: Trazado de Cuellos, Mangas y Sisas del Patrón",
            order: 9,
            video_drive_url: "https://drive.google.com/file/d/11sL1Dgne07ENY8rBKMVFLREacHWGaclp/preview",
            type: "video",
            duration: "22 mins"
          },
          {
            id: "corte-2-4",
            title: "Parte 10: Corte de Tela y Distribución Eficiente del Patrón",
            order: 10,
            video_drive_url: "https://drive.google.com/file/d/1oiSF0yZNzys_0-OHyd9kw2k8fKe477PX/preview",
            type: "video",
            duration: "21 mins"
          },
          {
            id: "corte-2-5",
            title: "Parte 11: Ensamblado y Armado de la Primera Prenda",
            order: 11,
            video_drive_url: "https://drive.google.com/file/d/1h12An6YcB2iCISHsZrlBrbNrLQjt8ol8/preview",
            type: "video",
            duration: "30 mins"
          },
          {
            id: "corte-2-6",
            title: "Parte 12: Detalles Finales, Ojales, Botones y Planchado Profesional",
            order: 12,
            video_drive_url: "https://drive.google.com/file/d/1psC_UJOOwXY6jhzNTnH20s-V2F_D2WGp/preview",
            type: "video",
            duration: "26 mins"
          }
        ]
      }
    ]
  },
  {
    id: "corte-confeccion-n2",
    title: "Curso Máster: Corte y Confección (Nivel 2 - Intermedio)",
    headline: "Avanza en el diseño de modas, moldería compleja, transformaciones de pinzas, cuellos sastre, mangas avanzadas y técnicas de sastrería y forrado.",
    instructor: "Lucía Fernández (Diseñadora de Moda & Modista)",
    difficulty: "Intermedio",
    description: "Levanta tus habilidades de costura y patronaje al siguiente nivel profesional. En este curso de nivel intermedio, aprenderás paso a paso el traslado y rotación de pinzas, confección de bolsillos avanzados, mangas reglán y de dos piezas (sastre), adaptaciones para moldería asimétrica y las bases del forrado integral de chaquetas y faldas.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 20,
    syllabus: [
      {
        id: "corte2-m1",
        title: "Módulo 1: Patronaje Avanzado y Rotación de Pinzas",
        lessons: [
          {
            id: "corte2-1-1",
            title: "Parte 1: Traslado de Pinzas de Busto y Talle (Teoría y Práctica)",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1IZgQSPeoDR1gzE_khcwYNZktT-zOlu7f/preview",
            type: "video",
            duration: "22 mins"
          },
          {
            id: "corte2-1-2",
            title: "Parte 2: Rotación de Pinzas a Sisas, Costadillos y de Forma Asimétrica",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1guPpfarbOh03w2uQwNRKFE6Rn2rsgA1d/preview",
            type: "video",
            duration: "20 mins"
          },
          {
            id: "corte2-1-3",
            title: "Parte 3: Diseño de Tablas, Pliegues, Frunces y Drapeados en Escotes",
            order: 3,
            video_drive_url: "https://drive.google.com/file/d/1nF3QkMukHnUZrSbl7R3OIaahY0ybzbtD/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "corte2-1-4",
            title: "Parte 4: Moldería de Breteles, Escotes en V y Sisas de Sastrería",
            order: 4,
            video_drive_url: "https://drive.google.com/file/d/1s6_Hw4ygs-G10hmYRJOoK0Qs0S8pmde1/preview",
            type: "video",
            duration: "24 mins"
          },
          {
            id: "corte2-1-5",
            title: "Parte 5: Transformaciones de Korsetts y Corpiños con Estructura",
            order: 5,
            video_drive_url: "https://drive.google.com/file/d/1AhJbv6crt3kMuibq9mhB4d6KBKIrIKgJ/preview",
            type: "video",
            duration: "28 mins"
          }
        ]
      },
      {
        id: "corte2-m2",
        title: "Módulo 2: Cuellos Complejos, Escotes y Bolsillos",
        lessons: [
          {
            id: "corte2-2-1",
            title: "Parte 6: Trazado de Cuello de Camisa con Pie de Cuello Integrado",
            order: 6,
            video_drive_url: "https://drive.google.com/file/d/1p8GYQBz-6kQDcaLxwuKzFH6H1zdOO9JR/preview",
            type: "video",
            duration: "21 mins"
          },
          {
            id: "corte2-2-2",
            title: "Parte 7: Moldería del Cuello Sastre y Solapas de Todo Tipo",
            order: 7,
            video_drive_url: "https://drive.google.com/file/d/1iewixJjed1_P1xZwW2HFjkwsz6vlMFbj/preview",
            type: "video",
            duration: "26 mins"
          },
          {
            id: "corte2-2-3",
            title: "Parte 8: Elaboración del Cuello Smoking y Solapas Redondas",
            order: 8,
            video_drive_url: "https://drive.google.com/file/d/1K7wj2Q92xXmQ4FnttPLHz7e2IsJNiZeV/preview",
            type: "video",
            duration: "23 mins"
          },
          {
            id: "corte2-2-4",
            title: "Parte 9: Bolsillos Placa, Bolsillos Ojal Simples y Bolsillos con Tapas",
            order: 9,
            video_drive_url: "https://drive.google.com/file/d/1TNyA3VEzc_khG-5aO6LK46YA1xJNTtxj/preview",
            type: "video",
            duration: "19 mins"
          },
          {
            id: "corte2-2-5",
            title: "Parte 10: Bolsillos Sastre e Inserción Limpia de Cremalleras Ocultas",
            order: 10,
            video_drive_url: "https://drive.google.com/file/d/12zcJuFv8erBFNGuIjc8CZjcDAoa3Ce7R/preview",
            type: "video",
            duration: "27 mins"
          }
        ]
      },
      {
        id: "corte2-m3",
        title: "Módulo 3: Mangas Avanzadas y Confección de Pantalón",
        lessons: [
          {
            id: "corte2-3-1",
            title: "Parte 11: Transformación de la Manga Base a Manga Ranglan (Reglán)",
            order: 11,
            video_drive_url: "https://drive.google.com/file/d/1_iVX9UXuWUvq8RKssa5pAOp3V8Ibg8mR/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "corte2-3-2",
            title: "Parte 12: Trazado de Manga Globo, Manga Jamón y Variantes Drapeadas",
            order: 12,
            video_drive_url: "https://drive.google.com/file/d/12p-fr2bbuj5KcU0ly5qAylES77Tex8MI/preview",
            type: "video",
            duration: "21 mins"
          },
          {
            id: "corte2-3-3",
            title: "Parte 13: Manga Sastre de Dos Piezas (Trasera y Delantera)",
            order: 13,
            video_drive_url: "https://drive.google.com/file/d/1AyIHRf8UPLfD78Y1nxSAYI9AQjFGDfyg/preview",
            type: "video",
            duration: "29 mins"
          },
          {
            id: "corte2-3-4",
            title: "Parte 14: Trazado y Moldería del Pantalón Clásico Unisex",
            order: 14,
            video_drive_url: "https://drive.google.com/file/d/1UQShFVL3Orb7sMlWOkVpWcghFX-ZTxnB/preview",
            type: "video",
            duration: "30 mins"
          },
          {
            id: "corte2-3-5",
            title: "Parte 15: Confección de Bragueta, Botones y Pretinas de Pantalón",
            order: 15,
            video_drive_url: "https://drive.google.com/file/d/1uMc_wNABxc4mUXf_q1Gj1pidfd1x6ISZ/preview",
            type: "video",
            duration: "28 mins"
          }
        ]
      },
      {
        id: "corte2-m4",
        title: "Módulo 4: Sastrería Inicial, Forrados y Acabados de Élite",
        lessons: [
          {
            id: "corte2-4-1",
            title: "Parte 16: Bases de Estructuras y Entretelados de Sastrería",
            order: 16,
            video_drive_url: "https://drive.google.com/file/d/1rby-mSVwBus1Za5Iy5dEWpk07LsTdsrt/preview",
            type: "video",
            duration: "24 mins"
          },
          {
            id: "corte2-4-2",
            title: "Parte 17: Corte y Montaje de Vistas y Contravistas",
            order: 17,
            video_drive_url: "https://drive.google.com/file/d/1NXZjVPKy3IunTtHNF9NjuTMaNGezFu6_/preview",
            type: "video",
            duration: "22 mins"
          },
          {
            id: "corte2-4-3",
            title: "Parte 18: Técnica de Forrado Integral de Faldas y Vestidos",
            order: 18,
            video_drive_url: "https://drive.google.com/file/d/1YTLNQixUIo0Q0IrvhIujSnrnAD0CSZoW/preview",
            type: "video",
            duration: "32 mins"
          },
          {
            id: "corte2-4-4",
            title: "Parte 19: Forrado Completo en Sacos y Chaquetas Forradas paso a paso",
            order: 19,
            video_drive_url: "https://drive.google.com/file/d/1xifNzVXLIZVzi6ttoIfp7bGqcmycD3zv/preview",
            type: "video",
            duration: "35 mins"
          },
          {
            id: "corte2-4-5",
            title: "Parte 20: Costuras Francesas, Dobladillos Invisibles y Cierre de Proyecto",
            order: 20,
            video_drive_url: "https://drive.google.com/file/d/1JAY-nbxxqID_R31JofWxSMONMZs2YKGx/preview",
            type: "video",
            duration: "31 mins"
          }
        ]
      }
    ]
  },
  {
    id: "corte-confeccion-n3",
    title: "Curso Máster: Corte y Confección (Nivel 3 - Alta Costura)",
    headline: "Domina el arte de la alta costura, modelaje sobre maniquí (moulage), corsetería estructurada con ballenas y acabados artesanales.",
    instructor: "Lucía Fernández (Diseñadora de Moda & Modista)",
    difficulty: "Avanzado",
    description: "Alcanza la cúspide del diseño de indumentaria con este máster avanzado en Alta Costura. Aprenderás las técnicas sagradas del Moulage (diseño tridimensional sobre maniquí), la confección paso a paso de corsetts con varillas y copas incorporadas, drapeados complejos, aplicación artesanal de encajes y bordado de pedrería fina para vestidos de gala y novia.",
    price: 0,
    thumbnail: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    category: "Oficios",
    total_lessons: 6,
    syllabus: [
      {
        id: "corte3-m1",
        title: "Módulo 1: Alta Costura, Corsetería y Moulage Avanzado",
        lessons: [
          {
            id: "corte3-1-1",
            title: "Parte 1: Introducción a la Alta Costura y Diseño de Trajes de Gala",
            order: 1,
            video_drive_url: "https://drive.google.com/file/d/1WjFAX0HmH1oKl7Z1XD2WizF8azSwSj3T/preview",
            type: "video",
            duration: "25 mins"
          },
          {
            id: "corte3-1-2",
            title: "Parte 2: Modelado sobre Maniquí (Moulage) de Corpiño de Noche",
            order: 2,
            video_drive_url: "https://drive.google.com/file/d/1AijBAUH49FCWvCIS3zaNHQlDhq157q24/preview",
            type: "video",
            duration: "28 mins"
          },
          {
            id: "corte3-1-3",
            title: "Parte 3: Elaboración de Corsetería de Élite, Varillado y Copas",
            order: 3,
            video_drive_url: "https://drive.google.com/file/d/1CQg7a6UPEEFu44YN-MfZ3sofMEgZVRk5/preview",
            type: "video",
            duration: "30 mins"
          },
          {
            id: "corte3-1-4",
            title: "Parte 4: Drapeados sobre Maniquí y Transformaciones Estructurales",
            order: 4,
            video_drive_url: "https://drive.google.com/file/d/1kbFUvhXuVsM2b2AVgz-uZwahGO7zith5/preview",
            type: "video",
            duration: "26 mins"
          },
          {
            id: "corte3-1-5",
            title: "Parte 5: Aplicación de Encajes, Tul Ilusión y Bordado en Pedrería Fina",
            order: 5,
            video_drive_url: "https://drive.google.com/file/d/13ieVLAl8MY4ojEV58XW_KMi_bNNU-9C_/preview",
            type: "video",
            duration: "31 mins"
          },
          {
            id: "corte3-1-6",
            title: "Parte 6: Ensamblado Completo y Forrado de Vestidos de Gala Artesanales",
            order: 6,
            video_drive_url: "https://drive.google.com/file/d/13zd8AzWTk2NbKUtdIyfYoxlo4ymIGpSA/preview",
            type: "video",
            duration: "35 mins"
          }
        ]
      }
    ]
  }
];
