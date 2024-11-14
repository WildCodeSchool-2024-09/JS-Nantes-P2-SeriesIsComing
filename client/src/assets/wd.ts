const walkingDead = [
  {
    id: 1,
    firstName: "Rick",
    lastName: "Grimes",
    nickname: undefined,
    about: "Chef du groupe, shérif",
    description:
      "Rick Grimes est un ancien shérif qui devient le leader du groupe de survivants après l'épidémie. Son sens du devoir et sa détermination sont ce qui le pousse à protéger son groupe à tout prix.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.F2_VvElPCTtBnqEr7EcY5wHaHa?w=900&h=900&rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    firstName: "Daryl",
    lastName: "Dixon",
    nickname: undefined,
    about: "Rôdeur, chasseur",
    description:
      "Daryl Dixon est un expert en survie, connu pour ses talents de chasseur et sa maîtrise de l'arbalète. Au début un solitaire, il devient progressivement l'un des membres les plus fiables du groupe.",
    imageUrl:
      "https://th.bing.com/th/id/R.5bfb5ea7a358a5de966f762e4a86460e?rik=9IiFIInZ3QSjSg&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    firstName: "Michonne",
    lastName: undefined,
    nickname: undefined,
    about: "Guerrière, membre du groupe",
    description:
      "Michonne est une guerrière redoutable, connue pour ses compétences en combat à l'épée et son intelligence stratégique. Elle rejoint le groupe de survivants et devient l'une de ses plus grandes alliées.",
    imageUrl:
      "https://th.bing.com/th/id/R.becb3fd0d9850f086017d8beaf2a4679?rik=bOO94Q9vybOjbA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f35600000%2fThe-Walking-Dead-the-walking-dead-35648028-1600-1200.jpg&ehk=Xgl0qYw%2fRLOGsQaG8QOV5LAo%2b2gz4xSU5kLYQTxP72E%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    firstName: "Glenn",
    lastName: "Rhee",
    nickname: undefined,
    about: "Membre du groupe, ex-pizza",
    description:
      "Glenn est un ancien livreur de pizza qui devient l'un des plus courageux et intelligents membres du groupe. Son optimisme et sa capacité à faire face aux défis font de lui un personnage clé de la série.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.SuGxG7fFg5YjRgzGVdzEqAHaJ4?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    firstName: "Carol",
    lastName: "Peletier",
    nickname: undefined,
    about: "Mère, guerrière",
    description:
      "Carol commence la série en tant que femme soumise et mère de famille, mais évolue pour devenir une redoutable guerrière. Elle s'affirme au fur et à mesure de la série et joue un rôle essentiel dans la survie du groupe.",
    imageUrl:
      "https://th.bing.com/th/id/R.9f237afa356cf3a2608c132d6c4b8ece?rik=W9LEKiFi%2bcBrJw&riu=http%3a%2f%2fstarcasm.net%2fwp-content%2fuploads%2f2013%2f10%2fThe_Walking_Dead_season_4_Carol_Portrait.jpg&ehk=3PJ7puZCMKKyiMb22iUf2W%2flzo5cu%2bluzzwOt%2fWxC%2fY%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 6,
    firstName: "Negan",
    lastName: undefined,
    nickname: undefined,
    about: "Antagoniste, leader des Sauveurs",
    description:
      "Négan est le leader sadique et charismatique des Sauveurs. Son arme de prédilection est une batte de baseball enroulée de fil barbelé, qu'il appelle Lucille. Bien qu'il soit l'antagoniste principal pendant plusieurs saisons, il connaît une certaine rédemption.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.dK4aoHFQwc6ZysuR3_caUAAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    firstName: "Carl",
    lastName: "Grimes",
    nickname: undefined,
    about: "Fils de Rick Grimes",
    description:
      "Carl est le fils de Rick Grimes. Il évolue énormément tout au long de la série, devenant plus mature et courageux, tout en portant le poids de l'apocalypse sur ses épaules.",
    imageUrl:
      "https://th.bing.com/th/id/R.c8220a9e7e609d6764cd81eb01b5e314?rik=9hVNaMs2ks71BQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f38400000%2fCarl-Grimes-the-walking-dead-38462024-842-854.jpg&ehk=NHkmFpAHGI7P4sDJnyKNic%2foV4odGsLQdKWRcX9LbT0%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 8,
    firstName: "Maggie",
    lastName: "Greene",
    nickname: undefined,
    about: "Membre du groupe, ex-agricultrice",
    description:
      "Maggie Greene est l'épouse de Glenn et l'une des survivantes les plus fortes. Après la mort de son mari, elle devient un leader au sein du groupe, notamment en dirigeant la communauté d'Hilltop.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.XKAlq2NmARg1P-kp2dq1xwHaJ4?rs=1&pid=ImgDetMain",
  },
  {
    id: 9,
    firstName: "Beth",
    lastName: "Greene",
    nickname: undefined,
    about: "Membre du groupe, sœur de Maggie",
    description:
      "Beth Greene est la sœur de Maggie et une des membres les plus pacifiques du groupe. Elle traverse une grande évolution, passant d'une jeune fille naïve à une femme forte et indépendante.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.SrOvHrMCOQ41JFzLQbNIDgHaJ4?rs=1&pid=ImgDetMain",
  },
  {
    id: 10,
    firstName: "The Governor",
    lastName: undefined,
    nickname: undefined,
    about: "Antagoniste, leader de Woodbury",
    description:
      "Le Gouverneur est l'un des antagonistes les plus mémorables de la série. Charismatique mais totalement dénué de morale, il dirige la ville de Woodbury et se heurte à Rick et ses compagnons.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/walkingdead/images/5/52/The-governor-the-walking-dead_0.png/revision/latest?cb=20150308064703",
  },
  {
    id: 11,
    firstName: "Eugene",
    lastName: "Porter",
    nickname: undefined,
    about: "Scientifique, membre du groupe",
    description:
      "Eugene est un scientifique qui prétend avoir trouvé un remède contre l'épidémie. Bien qu'il ait initialement menti, il devient un membre précieux du groupe grâce à ses compétences et sa créativité.",
    imageUrl:
      "https://www.statesidestills.com/prodimages/mcdermitt_josh_the_walking_dead_57935l.jpg",
  },
  {
    id: 12,
    firstName: "Rosita",
    lastName: "Espinosa",
    nickname: undefined,
    about: "Membre du groupe, ex-militaire",
    description:
      "Rosita est une ancienne militaire. Elle est loyale et courageuse, participant activement à la protection du groupe et à la lutte contre les menaces extérieures.",
    imageUrl:
      "https://th.bing.com/th/id/R.12a8dad46390befab5e4e656a4200000?rik=prK6%2bH8v60Gxjg&riu=http%3a%2f%2fpm1.narvii.com%2f6665%2f0a37f1812e17c76329112a651ab8585bafd3fe3e_00.jpg&ehk=L9ffbHQUlz3uR9ZYQYsuZfooVPA7twIJmu7N8pjTyVY%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 13,
    firstName: "Abraham",
    lastName: "Ford",
    nickname: undefined,
    about: "Ancien militaire, membre du groupe",
    description:
      "Abraham est un militaire brutal mais avec un sens de l'humour unique. Il devient un membre important du groupe, particulièrement en raison de ses compétences de combat et de survie.",
    imageUrl:
      "https://assets.skybound.com/wp-content/uploads/2015/01/12214003/the-walking-dead-season-5-b-abraham-cudlitz-494.jpg",
  },
  {
    id: 14,
    firstName: "T-Dog",
    lastName: undefined,
    nickname: undefined,
    about: "Membre du groupe",
    description:
      "T-Dog est un membre du groupe qui se distingue par sa loyauté et son calme. Bien qu'il ne soit pas l'un des personnages les plus centraux, il est apprécié des autres survivants.",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31f56fb1-8f30-4995-ab53-ab34e8fbda68/d5gp4vz-e45a874a-7e62-4bde-ada3-7c77c7cc9071.jpg/v1/fill/w_773,h_1033,q_70,strp/the_walking_dead__t_dog__hdr_re_edit_by_roypyper_d5gp4vz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMiIsInBhdGgiOiJcL2ZcLzMxZjU2ZmIxLThmMzAtNDk5NS1hYjUzLWFiMzRlOGZiZGE2OFwvZDVncDR2ei1lNDVhODc0YS03ZTYyLTRiZGUtYWRhMy03Yzc3YzdjYzkwNzEuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.L1XQPezQG_YwQUH_z_CNeweEd731E8CU8KA0WWjC1EY",
  },
  {
    id: 15,
    firstName: "Sasha",
    lastName: "Williams",
    nickname: undefined,
    about: "Membre du groupe, ancienne militaire",
    description:
      "Sasha est une ancienne militaire avec un esprit fort et déterminé. Elle se distingue par sa capacité à faire face aux situations extrêmes.",
    imageUrl:
      "https://th.bing.com/th/id/R.41f6ce896822e11f23e1a2b88b5a2e85?rik=QPNiLpcAMYLovw&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fwalkingdead%2fimages%2f7%2f75%2fSashaWilliamsSeason6B.png%2frevision%2flatest%3fcb%3d20160121233525&ehk=GACImLTt7iWwX9bTBDk6I4JeZwwMcUlMlGzZrN71v3U%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 16,
    firstName: "Aaron",
    lastName: undefined,
    nickname: undefined,
    about: "Membre du groupe, recruteur",
    description:
      "Aaron est un recruteur pour la communauté d'Alexandria. Il joue un rôle clé en aidant à accueillir les nouveaux survivants et en soutenant la sécurité du groupe.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.yhBYv7SsXhD8lRHo8dHLNAHaJ4?rs=1&pid=ImgDetMain",
  },
  {
    id: 17,
    firstName: "Tara",
    lastName: "Chambler",
    nickname: undefined,
    about: "Membre du groupe",
    description:
      "Tara est une ancienne soldate qui se joint au groupe après avoir été sauvée. Elle se distingue par son côté optimiste et sa volonté de toujours protéger les autres.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/thewalkingdead/images/8/86/22222039_1098316366938025_5098813747359420090_n_(2).jpg/revision/latest?cb=20171012012656&path-prefix=es",
  },
  {
    id: 18,
    firstName: "Enid",
    lastName: undefined,
    nickname: undefined,
    about: "Membre du groupe, ancienne survivante solitaire",
    description:
      "Enid est une jeune survivante qui rejoint le groupe d'Alexandria. Son caractère introverti et ses talents de survie font d'elle un personnage intrigant et utile.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/walkingdead/images/2/2a/Season_eight_enid.png/revision/latest?cb=20180308061346",
  },
  {
    id: 19,
    firstName: "Dwight",
    lastName: undefined,
    nickname: undefined,
    about: "Membre du groupe, ancien Sauveur",
    saisons: "Saison 6 à 10",
    description:
      "Dwight est un ancien membre des Sauveurs qui cherche à se racheter après avoir été une partie de la violence de Négan. Il joue un rôle clé dans les événements de la série.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/walkingdead/images/1/17/Season_eight_dwight.png/revision/latest?cb=20171215180812&path-prefix=pl",
  },
  {
    id: 20,
    firstName: "Shane",
    lastName: "Walsh",
    nickname: undefined,
    about: "Ancien partenaire de Rick, antagoniste",
    description:
      "Shane Walsh est un ancien partenaire de Rick, devenu un des premiers antagonistes de la série. Sa relation avec Lori, la femme de Rick, et son attitude violente l'amènent à se retrouver en conflit avec le groupe.",
    imageUrl:
      "https://vignette.wikia.nocookie.net/moviemorgue/images/8/8b/Shane.png/revision/latest?cb=20131007194458",
  },
];

export default walkingDead;
