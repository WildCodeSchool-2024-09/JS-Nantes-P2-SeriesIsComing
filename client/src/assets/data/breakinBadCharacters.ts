const breakinBadCharacters = [
  {
    id: 1,
    firstName: "Walter",
    lastName: "White",
    nickname: "Heisenberg",
    about: "Professeur de chimie au lycée",
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
    about: "Fabricant de méthamphétamine",

    imageUrl:
      "https://i.pinimg.com/564x/3b/e1/d2/3be1d212d91df28b13f6ebb04d51b7ed.jpg",
    description:
      "Ancien élève de Walter, Jesse est un fabricant de drogue qui oscille entre le monde criminel et la rédemption.",
  },
  {
    id: 3,
    firstName: "Skyler",
    lastName: "White",
    nickname: "Sky",
    about: "Comptable",
    imageUrl:
      "https://i.pinimg.com/564x/af/59/4e/af594ec1c8a5339f1a3182c2b75a79ae.jpg",
    description:
      "Femme de Walter, Skyler tente de protéger sa famille tout en naviguant dans les secrets de son mari.",
  },
  {
    id: 4,
    firstName: "Hank",
    lastName: "Schrader",
    nickname: "ASAC Schrader",
    about: "Agent de la DEA",
    imageUrl:
      "https://i.pinimg.com/564x/be/56/d0/be56d06993c0d08001c8ae0cb6b03cbe.jpg",
    description:
      "Beau-frère de Walter et agent de la DEA, Hank mène une lutte acharnée contre le crime sans savoir ce qui se cache sous son nez.",
  },
  {
    id: 5,
    firstName: "Saul",
    lastName: "Goodman",
    nickname: "Goodman",
    about: "Avocat",
    imageUrl:
      "https://i.pinimg.com/564x/c8/8a/c3/c88ac3d2cce05c184e652f341ffc5af4.jpg",
    description:
      "Avocat véreux, Saul aide les criminels à échapper à la loi avec des méthodes peu orthodoxes.",
  },
  {
    id: 6,
    firstName: "Gus",
    lastName: "Fring",
    nickname: "Le Patron du Poulet",
    about: "Propriétaire de Los Pollos Hermanos",
    imageUrl:
      "https://i.pinimg.com/564x/71/c3/64/71c3646ae8158efa14ff5315a9995125.jpg",
    description:
      "Homme d'affaires respectable en apparence, Gus cache un empire de la drogue sophistiqué et impitoyable.",
  },
  {
    id: 7,
    firstName: "Mike",
    lastName: "Ehrmantraut",
    nickname: "Mike",
    about: "Homme de main",
    imageUrl:
      "https://i.pinimg.com/736x/16/6e/62/166e62151fbb08e3c1f1daa636224db7.jpg",
    description:
      "Ancien policier, Mike est un homme de main méthodique et loyal, prêt à tout pour protéger sa famille.",
  },
  {
    id: 8,
    firstName: "Marie",
    lastName: "Schrader",
    nickname: "Marie",
    about: "Technologue en radiologie",
    imageUrl:
      "https://i.pinimg.com/564x/5c/5d/87/5c5d875eb5810965a9d6748c16911d2f.jpg",
    description:
      "Sœur de Skyler et épouse de Hank, Marie est souvent impliquée dans des situations dramatiques malgré elle.",
  },
  {
    id: 9,
    firstName: "Todd",
    lastName: "Alquist",
    nickname: "Ricky Hitler",
    about: "Assistant de laboratoire",
    imageUrl:
      "https://i.pinimg.com/564x/3a/be/91/3abe91936ebab5f0ecd0818ed8da08c9.jpg",
    description:
      "Todd est un personnage troublant, mêlant obéissance et cruauté froide dans ses activités criminelles.",
  },
  {
    id: 10,
    firstName: "Lydia",
    lastName: "Rodarte-Quayle",
    nickname: "Lydia",
    about: "Coordinatrice logistique",
    imageUrl:
      "https://i.pinimg.com/564x/84/af/94/84af94ee7ed5f7d5d7d6d55cb2489c82.jpg",
    description:
      "Femme d'affaires, Lydia est une alliée précieuse mais paranoïaque dans le trafic de drogue.",
  },
  {
    id: 11,
    firstName: "Jane",
    lastName: "Margolis",
    nickname: "Jane",
    about: "Tatoueuse",
    imageUrl:
      "https://i.pinimg.com/564x/cf/c0/a3/cfc0a3a104b8fe80088397c4314814aa.jpg",
    description:
      "Petite amie de Jesse, Jane est une jeune femme rebelle mais vulnérable, qui lutte contre ses propres démons.",
  },
  {
    id: 12,
    firstName: "Tuco",
    lastName: "Salamanca",
    nickname: "Tuco",
    about: "Dealer de drogue",
    imageUrl:
      "https://i.pinimg.com/736x/1c/50/e0/1c50e0feb3019f317bddc12940372370.jpg",
    description:
      "Imprévisible et violent, Tuco est un membre redouté du cartel de la drogue.",
  },
  {
    id: 13,
    firstName: "Hector",
    lastName: "Salamanca",
    nickname: "Tio",
    about: "Exécuteur",
    imageUrl:
      "https://i.pinimg.com/736x/49/8d/1c/498d1c178affd622e533469e98b06f98.jpg",
    description:
      "Tio est un ancien homme de main impitoyable du cartel, connu pour sa rancune envers Gus.",
  },
  {
    id: 14,
    firstName: "Victor",
    lastName: undefined,
    nickname: "Victor",
    about: "Exécuteur de Gus",
    imageUrl:
      "https://i.pinimg.com/736x/f7/cc/a2/f7cca239d18ee4f3096de2d465bb65c5.jpg",
    description:
      "Homme de main loyal de Gus, Victor exécute sans hésitation les tâches les plus sombres de l'empire de Fring.",
  },
  {
    id: 15,
    firstName: "Gale",
    lastName: "Boetticher",
    nickname: "Gale",
    about: "Chimiste",
    imageUrl:
      "https://i.pinimg.com/736x/cc/e9/b6/cce9b61cc24e8dc313ae06ed04e312ba.jpg",
    description:
      "Gentil et passionné par la chimie, Gale est un idéaliste tragiquement entraîné dans le monde du crime.",
  },
  {
    id: 16,
    firstName: "Steven",
    lastName: "Gomez",
    nickname: "Gomie",
    about: "Agent de la DEA",
    imageUrl:
      "https://i.pinimg.com/736x/d4/a1/a2/d4a1a2d36420a73ec7bdb180f1586169.jpg",
    description:
      "Partenaire fidèle de Hank, Steven est un agent de la DEA loyal et courageux.",
  },
  {
    id: 17,
    firstName: "Combo",
    lastName: "Ortega",
    nickname: "Combo",
    about: "Dealer de drogue",
    imageUrl:
      "https://static.wikia.nocookie.net/international-entertainment-project/images/4/4a/Christian_Ortega_(Breaking_Bad).png",
    description:
      "Ami de Jesse, Combo est impliqué dans le trafic de drogue avant de devenir victime de la violence du milieu.",
  },
  {
    id: 18,
    firstName: "Skinny",
    lastName: "Pete",
    nickname: "Skinny",
    about: "Dealer de drogue",
    imageUrl:
      "https://i.pinimg.com/736x/21/66/50/216650e679dd6f1ece0d820e4b87bf2f.jpg",
    description:
      "Loyal et parfois comique, Skinny Pete est un ami de Jesse et dealer de drogue.",
  },
  {
    id: 19,
    firstName: "Badger",
    lastName: undefined,
    nickname: "Badger",
    about: "Dealer de drogue",
    imageUrl:
      "https://i.pinimg.com/736x/84/e4/d0/84e4d00cf9469270eaf34b388cd41c17.jpg",
    description:
      "Avec un esprit léger et souvent maladroit, Badger est un ami de Jesse et un dealer fidèle.",
  },
  {
    id: 20,
    firstName: "Krazy-8",
    lastName: undefined,
    nickname: "Krazy-8",
    about: "Dealer de drogue",
    imageUrl:
      "https://i.pinimg.com/736x/9b/30/5b/9b305bfd258e52a91b7f9f763a4cfa28.jpg",
    description:
      "Dealer de drogue avec un pied dans le cartel, Krazy-8 est l'un des premiers adversaires de Walter.",
  },
];

export default breakinBadCharacters;
