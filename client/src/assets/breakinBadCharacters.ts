const breakinBadCharacters = [
  {
    id: 1,
    firstName: "Walter",
    lastName: "White",
    nickname: "Heisenberg",
    occupation: ["Professeur de chimie au lycée", "Roi de la méthamphétamine"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/564x/fc/db/84/fcdb8412f5f8f52c73a7d167bd3e3da4.jpg",
    description:
      "Ancien professeur de chimie, Walter se transforme en baron de la drogue pour assurer un avenir à sa famille.",
  },
  {
    id: 2,
    firstName: "Jesse",
    lastName: "Pinkman",
    nickname: "Cap n' Cook",
    occupation: ["Fabricant de méthamphétamine"],
    status: "Vivant",
    imageUrl:
      "https://i.pinimg.com/564x/3b/e1/d2/3be1d212d91df28b13f6ebb04d51b7ed.jpg",
    description:
      "Ancien élève de Walter, Jesse est un fabricant de drogue qui oscille entre le monde criminel et la rédemption.",
  },
  {
    id: 3,
    firstname: "Skyler",
    lastName: "White",
    nickname: "Sky",
    occupation: ["Comptable"],
    status: "Vivante",
    imageUrl:
      "https://i.pinimg.com/564x/af/59/4e/af594ec1c8a5339f1a3182c2b75a79ae.jpg",
    description:
      "Femme de Walter, Skyler tente de protéger sa famille tout en naviguant dans les secrets de son mari.",
  },
  {
    id: 4,
    firstname: "Hank",
    lastName: "Schrader",
    nickname: "ASAC Schrader",
    occupation: ["Agent de la DEA"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/564x/be/56/d0/be56d06993c0d08001c8ae0cb6b03cbe.jpg",
    description:
      "Beau-frère de Walter et agent de la DEA, Hank mène une lutte acharnée contre le crime sans savoir ce qui se cache sous son nez.",
  },
  {
    id: 5,
    firstname: "Saul",
    lastName: "Goodman",
    nickname: "Goodman",
    occupation: ["Avocat"],
    status: "Vivant",
    imageUrl:
      "https://i.pinimg.com/564x/c8/8a/c3/c88ac3d2cce05c184e652f341ffc5af4.jpg",
    description:
      "Avocat véreux, Saul aide les criminels à échapper à la loi avec des méthodes peu orthodoxes.",
  },
  {
    id: 6,
    firstname: "Gus",
    lastName: "Fring",
    nickname: "Le Patron du Poulet",
    occupation: [
      "Propriétaire de Los Pollos Hermanos",
      "Distributeur de méthamphétamine",
    ],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/564x/71/c3/64/71c3646ae8158efa14ff5315a9995125.jpg",
    description:
      "Homme d'affaires respectable en apparence, Gus cache un empire de la drogue sophistiqué et impitoyable.",
  },
  {
    id: 7,
    firstname: "Mike",
    lastName: "Ehrmantraut",
    nickname: "Mike",
    occupation: ["Homme de main", "Enquêteur privé"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/736x/16/6e/62/166e62151fbb08e3c1f1daa636224db7.jpg",
    description:
      "Ancien policier, Mike est un homme de main méthodique et loyal, prêt à tout pour protéger sa famille.",
  },
  {
    id: 8,
    firstname: "Marie",
    lastName: "Schrader",
    nickname: "Marie",
    occupation: ["Technologue en radiologie"],
    status: "Vivante",
    imageUrl:
      "https://i.pinimg.com/564x/5c/5d/87/5c5d875eb5810965a9d6748c16911d2f.jpg",
    description:
      "Sœur de Skyler et épouse de Hank, Marie est souvent impliquée dans des situations dramatiques malgré elle.",
  },
  {
    id: 9,
    firstname: "Todd",
    lastName: "Alquist",
    nickname: "Ricky Hitler",
    occupation: ["Assistant de laboratoire", "Exécuteur"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/564x/3a/be/91/3abe91936ebab5f0ecd0818ed8da08c9.jpg",
    description:
      "Todd est un personnage troublant, mêlant obéissance et cruauté froide dans ses activités criminelles.",
  },
  {
    id: 10,
    firstname: "Lydia",
    lastName: "Rodarte-Quayle",
    nickname: "Lydia",
    occupation: [
      "Coordinatrice logistique",
      "Distributrice de méthamphétamine",
    ],
    status: "Décédée",
    imageUrl:
      "https://i.pinimg.com/564x/84/af/94/84af94ee7ed5f7d5d7d6d55cb2489c82.jpg",
    description:
      "Femme d'affaires, Lydia est une alliée précieuse mais paranoïaque dans le trafic de drogue.",
  },
  {
    id: 11,
    firstname: "Jane",
    lastName: "Margolis",
    nickname: "Jane",
    occupation: ["Tatoueuse"],
    status: "Décédée",
    imageUrl:
      "https://i.pinimg.com/564x/cf/c0/a3/cfc0a3a104b8fe80088397c4314814aa.jpg",
    description:
      "Petite amie de Jesse, Jane est une jeune femme rebelle mais vulnérable, qui lutte contre ses propres démons.",
  },
  {
    id: 12,
    firstname: "Tuco",
    lastName: "Salamanca",
    nickname: "Tuco",
    occupation: ["Dealer de drogue"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/736x/1c/50/e0/1c50e0feb3019f317bddc12940372370.jpg",
    description:
      "Imprévisible et violent, Tuco est un membre redouté du cartel de la drogue.",
  },
  {
    id: 13,
    firstname: "Hector",
    lastName: "Salamanca",
    nickname: "Tio",
    occupation: ["Exécuteur", "Associé du cartel"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/736x/49/8d/1c/498d1c178affd622e533469e98b06f98.jpg",
    description:
      "Tio est un ancien homme de main impitoyable du cartel, connu pour sa rancune envers Gus.",
  },
  {
    id: 14,
    firstname: "Victor",
    lastName: "",
    nickname: "Victor",
    occupation: ["Exécuteur de Gus"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/736x/f7/cc/a2/f7cca239d18ee4f3096de2d465bb65c5.jpg",
    description:
      "Homme de main loyal de Gus, Victor exécute sans hésitation les tâches les plus sombres de l'empire de Fring.",
  },
  {
    id: 15,
    firstname: "Gale",
    lastName: "Boetticher",
    nickname: "Gale",
    occupation: ["Chimiste"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/736x/cc/e9/b6/cce9b61cc24e8dc313ae06ed04e312ba.jpg",
    description:
      "Gentil et passionné par la chimie, Gale est un idéaliste tragiquement entraîné dans le monde du crime.",
  },
  {
    id: 16,
    firstname: "Steven",
    lastName: "Gomez",
    nickname: "Gomie",
    occupation: ["Agent de la DEA"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/736x/d4/a1/a2/d4a1a2d36420a73ec7bdb180f1586169.jpg",
    description:
      "Partenaire fidèle de Hank, Steven est un agent de la DEA loyal et courageux.",
  },
  {
    id: 17,
    firstname: "Combo",
    lastName: "Ortega",
    nickname: "Combo",
    occupation: ["Dealer de drogue"],
    status: "Décédé",
    imageUrl:
      "https://static.wikia.nocookie.net/breakingbad/images/7/7c/2x11_-_Mandala_Combo.png/revision/latest?cb=20120724094730&path-prefix=es",
    description:
      "Ami de Jesse, Combo est impliqué dans le trafic de drogue avant de devenir victime de la violence du milieu.",
  },
  {
    id: 18,
    firstname: "Skinny",
    lastName: "Pete",
    nickname: "Skinny",
    occupation: ["Dealer de drogue"],
    status: "Vivant",
    imageUrl:
      "https://i.pinimg.com/736x/21/66/50/216650e679dd6f1ece0d820e4b87bf2f.jpg",
    description:
      "Loyal et parfois comique, Skinny Pete est un ami de Jesse et dealer de drogue.",
  },
  {
    id: 19,
    firstname: "Badger",
    lastName: "",
    nickname: "Badger",
    occupation: ["Dealer de drogue"],
    status: "Vivant",
    imageUrl:
      "https://i.pinimg.com/736x/84/e4/d0/84e4d00cf9469270eaf34b388cd41c17.jpg",
    description:
      "Avec un esprit léger et souvent maladroit, Badger est un ami de Jesse et un dealer fidèle.",
  },
  {
    id: 20,
    firstname: "Krazy-8",
    lastName: "",
    nickname: "Krazy-8",
    occupation: ["Dealer de drogue"],
    status: "Décédé",
    imageUrl:
      "https://i.pinimg.com/736x/9b/30/5b/9b305bfd258e52a91b7f9f763a4cfa28.jpg",
    description:
      "Dealer de drogue avec un pied dans le cartel, Krazy-8 est l'un des premiers adversaires de Walter.",
  },
];
