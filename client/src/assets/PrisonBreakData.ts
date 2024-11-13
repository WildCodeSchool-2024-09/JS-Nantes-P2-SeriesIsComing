const PBcharctere = [
  {
    id: 0,
    firstName: "Michael ",
    lastName: "Scofield",
    nickname: "None",
    occupation: ["Ingénieur", "Détenu à Fox River"],
    status: "En vie",
    description:
      "Ingénieur brillant et stratégique, Michael se fait emprisonner volontairement pour organiser l’évasion de son frère. Connu pour son altruisme et sa détermination.",
    imageUrl:
      "https://i.pinimg.com/originals/eb/e2/fe/ebe2fe50fbaf64bdfe8dbe9f874dfea8.jpg",
  },
  {
    id: 1,
    firstName: "Lincoln ",
    lastName: "Burrows",
    nickname: "None",
    occupation: ["Condamné à mort"],
    status: "En vie",
    description:
      "Condamné à tort pour meurtre, Lincoln est prêt à tout pour prouver son innocence. Son lien avec Michael est au cœur de l’intrigue.",
    imageUrl: "https://live.staticflickr.com/3384/3511731116_531a29c12d.jpg",
  },
  {
    id: 2,
    firstName: "Sara ",
    lastName: "Tancredi",
    nickname: "None",
    occupation: ["Médecin de Fox River"],
    status: "En vie",
    description:
      "Médecin de la prison et fille du gouverneur, Sara se lie à Michael et devient un allié clé dans son plan d’évasion.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Sarah_Wayne_Callies_Comic-Con_2012.jpg",
  },
  {
    id: 3,
    firstName: "Theodore ",
    lastName: "Bagwell",
    nickname: "T-Bag",
    occupation: ["Détenu", "Criminel"],
    status: "En vie",
    description:
      "Psychopathe manipulateur, T-Bag est un personnage imprévisible qui rejoint l'évasion pour ses propres intérêts. Cruel et redouté des autres détenus.",
    imageUrl: "https://pbs.twimg.com/media/FxH3eUVXgAAl9sB.jpg",
  },
  {
    id: 4,
    firstName: "Fernando ",
    lastName: "Sucre",
    nickname: "None",
    occupation: ["Détenu", "Compagnon de cellule de Michael"],
    status: "En vie",
    description:
      "Compagnon de cellule de Michael et ami loyal, Sucre participe à l’évasion pour retrouver sa petite amie Maricruz.",
    imageUrl:
      "https://i.pinimg.com/474x/5c/b8/4c/5cb84cfb1cf9a28d0e51e1682d74d8fb.jpg",
  },
  {
    id: 5,
    firstName: "Alexander ",
    lastName: "Mahone",
    nickname: "None",
    occupation: ["Agent du FBI"],
    status: "En vie",
    description:
      "Agent du FBI perspicace et obsédé par la traque des évadés, Mahone est redoutable et cache un passé complexe.",
    imageUrl:
      "https://cinema-quotes.com/wp-content/uploads/2024/05/Alexander-Mahone.jpg",
  },
  {
    id: 6,
    firstName: "Benjamin Miles ",
    lastName: "Franklin",
    nickname: "C-Note",
    occupation: ["Détenu", "Ancien militaire"],
    status: "En vie",
    description:
      "Ancien militaire injustement incarcéré, C-Note rejoint l’évasion dans l’espoir de revoir sa famille.",
    imageUrl:
      "https://www.sofoot.com/convert/2023/01/24121528/c-note-benjamin-miles-franklin-6001439-240-320.jpg/image.png",
  },
  {
    id: 7,
    firstName: "Paul ",
    lastName: "Kellerman",
    nickname: "None",
    occupation: ["Agent de la Compagnie"],
    status: "Décédé",
    description:
      "Agent de la Compagnie, il exécute les ordres d’une organisation puissante et sans scrupules. Son allégeance devient ambiguë au fil de la série.",
    imageUrl:
      "https://ew.com/thmb/cszZCjKdZ5htjEyiF6TWo-0XF00=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/paul-adelstein_0-7e2172c60a884af8ba8fd2487d14079b.jpg",
  },
  {
    id: 8,
    firstName: "Brad ",
    lastName: "Bellick",
    nickname: "None",
    occupation: ["Gardien en chef de Fox River"],
    status: "Décédé",
    description:
      "Gardien de Fox River autoritaire et impitoyable, Bellick se retrouve impliqué dans la poursuite des évadés après leur évasion.",
    imageUrl:
      "https://tls.img.pmdstatic.net/scale/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2F2019.2F09.2F20.2F2e7f3630-74f2-4a98-abe7-b7cd719a5199.2Ejpeg/autox450/quality/65/crop-from/center/picture.jpeg",
  },
  {
    id: 9,
    firstName: "John ",
    lastName: "Abruzzi",
    nickname: "None",
    occupation: ["Chef mafieux", "Détenu à Fox River"],
    status: "Décédé",
    description:
      "Chef mafieux redoutable et craint, Abruzzi est l’un des alliés stratégiques de Michael dans l’évasion, mais il reste dangereux et imprévisible.",
    imageUrl:
      "https://i.pinimg.com/originals/e0/b1/e0/e0b1e0f550801bb137755dec97344b15.jpg",
  },
  {
    id: 10,
    firstName: "Charles ",
    lastName: "Patoshik",
    nickname: "Haywire",
    occupation: ["Détenu", "Ancien étudiant"],
    status: "Décédé",
    description:
      "Surnommé Haywire, Charles est mentalement instable et obsédé par les tatouages de Michael, ajoutant de l’imprévu au plan d’évasion.",
    imageUrl: "https://storage.canalblog.com/80/89/265088/11078190_o.jpg",
  },
  {
    id: 11,
    firstName: "David ",
    lastName: "Apolskis",
    nickname: "Tweener",
    occupation: ["Détenu", "Petit voleur"],
    status: "Décédé",
    description:
      "Tweener, jeune voleur insouciant, est pris dans l’évasion malgré lui et se montre souvent méfiant vis-à-vis des autres.",
    imageUrl:
      "https://64.media.tumblr.com/f6cf9e0d2019665b11fe62d05acb8986/98bc471722c88d10-0b/s1280x1920/7a59888f918b198256e59fac9c96c38915af3df1.jpg",
  },
  {
    id: 12,
    firstName: "LJ ",
    lastName: "Burrows",
    nickname: "None",
    occupation: ["Étudiant", "Fils de Lincoln"],
    status: "En vie",
    description:
      "Fils de Lincoln, LJ est pris pour cible par la Compagnie et devient un enjeu émotionnel pour Lincoln et Michael.",
    imageUrl:
      "https://prisonbreakallseasons.wordpress.com/wp-content/uploads/2013/03/lj.jpg",
  },
  {
    id: 13,
    firstName: "Sofia ",
    lastName: "Lugo",
    nickname: "None",
    occupation: ["Compagne de Lincoln"],
    status: "En vie",
    description:
      "Elle devient la petite amie de Lincoln et son soutien inconditionnel dans ses luttes contre la Compagnie.",
    imageUrl: "https://vainkeurz.com/wp-content/uploads/2022/10/16-1.png",
  },
  {
    id: 14,
    firstName: "Gretchen ",
    lastName: "Morgan",
    nickname: "None",
    occupation: ["Agent de la Compagnie"],
    status: "En vie",
    description:
      "Implacable et sans remords, Gretchen est une agente de la Compagnie avec des méthodes brutales pour atteindre ses objectifs.",
    imageUrl:
      "https://cinema-quotes.com/wp-content/uploads/2024/05/Gretchen-Morgan.jpg",
  },
  {
    id: 15,
    firstName: "James ",
    lastName: "Whistler",
    nickname: "None",
    occupation: ["Détenu à Sona"],
    status: "Décédé",
    description:
      "Détenu mystérieux à Sona, Whistler possède des informations précieuses et devient essentiel pour la mission de Michael.",
    imageUrl:
      "https://i.pinimg.com/originals/52/b8/81/52b8815ec8dfd4954cd31e9b3d4d357a.jpg",
  },
  {
    id: 16,
    firstName: "Don ",
    lastName: "Self",
    nickname: "None",
    occupation: ["Agent du gouvernement"],
    status: "En vie",
    description:
      "Agent gouvernemental ambigu, Self collabore avec Michael mais son intégrité est mise en question par ses actions.",
    imageUrl: "https://static.tvtropes.org/pmwiki/pub/images/DonSelf_5319.jpg",
  },
  {
    id: 17,
    firstName: "Christina ",
    lastName: "Scofield",
    nickname: "None",
    occupation: ["Membre de la Compagnie"],
    status: "Décédée",
    description:
      "Mère de Michael et Lincoln, Christina se révèle être une figure de la Compagnie avec des motivations propres et dangereuses.",
    imageUrl:
      "https://resizing.flixster.com/bel7cWvNZI5RX11EnDfvOxwDslU=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/v9/AllPhotos/1402/1402_v9_ba.jpg",
  },
  {
    id: 18,
    firstName: "Norman",
    lastName: "St. John",
    nickname: "Lechero",
    occupation: ["Chef des détenus à Sona"],
    status: "Décédé",
    description:
      "Chef des prisonniers à Sona, Lechero exerce son autorité au sein de la prison et s’allie temporairement à Michael pour une évasion.",
    imageUrl:
      "https://i.pinimg.com/originals/6c/cb/ae/6ccbae2e53f1b65aa8620bdd06fc0093.jpg",
  },
  {
    id: 19,
    firstName: "Henry ",
    lastName: "Pope",
    nickname: "None",
    occupation: ["Directeur de la prison de Fox River"],
    status: "En vie",
    description:
      "Directeur de Fox River, Pope est bienveillant et juste mais se retrouve tiraillé par sa loyauté envers Michael.",
    imageUrl:
      "https://i.pinimg.com/originals/76/75/fa/7675fac465f75b165986ab15325842f1.jpg",
  },
];

export default PBcharctere;
