const seriesData = [
  {
    id: "1",
    title: "Game of Thrones",
    dataSeries: [
      {
        id: 0,
        firstName: "Daenerys",
        lastName: "Targaryen",
        about: "Mother of Dragons",
        nickname: undefined,
        description:
          "Daenerys Targaryen, surnommée la Mère des Dragons, est une figure emblématique de Game of Thrones. Dernière héritière de la maison Targaryen, elle est déterminée, ambitieuse et dotée d'une forte volonté de justice. Elle se distingue par sa beauté argentée, sa compassion pour les opprimés, et son désir de reconquérir le trône de fer, tout en luttant pour ne pas sombrer dans la tyrannie.",
        imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
      },
      {
        id: 1,
        firstName: "Samwell",
        lastName: "Tarly",
        about: "Maester",
        nickname: undefined,
        description:
          "Samwell Tarly est un jeune homme érudit et bienveillant du monde de Game of Thrones, membre de la Garde de Nuit. Malgré son manque d'aptitudes physiques et son manque de confiance, il compense par une intelligence vive, une curiosité insatiable et une loyauté indéfectible envers ses amis, notamment Jon Snow.",
        imageUrl: "https://thronesapi.com/assets/images/sam.jpg",
      },
      {
        id: 2,
        firstName: "Jon",
        lastName: "Snow",
        about: "King of the North",
        nickname: undefined,
        description:
          "Jon Snow est un personnage courageux et honorable de Game of Thrones, élevé comme le fils illégitime de Ned Stark. Membre loyal de la Garde de Nuit, puis chef de celle-ci, il se distingue par son sens aigu de la justice et de la compassion, prêt à se sacrifier pour protéger le Nord et son peuple contre les menaces des Marcheurs Blancs.",
        imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
      },
      {
        id: 3,
        firstName: "Arya",
        lastName: "Stark",
        about: "No One",
        nickname: undefined,
        description:
          "Arya Stark est une jeune noble rebelle et farouche de Game of Thrones, animée par une soif de liberté et de vengeance. Après avoir échappé aux tragédies qui frappent sa famille, elle devient une combattante redoutable et sans pitié, maîtrisant l'art de l'assassinat auprès des Sans-Visage pour accomplir sa quête de justice.",
        imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
      },
      {
        id: 4,
        firstName: "Sensa",
        lastName: "Stark",
        about: "Lady of Winterfell",
        nickname: undefined,
        description:
          "Sensa Stark est l’aînée des filles Stark, évoluant de jeune fille naïve à femme forte et stratégique dans Game of Thrones. Après de nombreuses épreuves et trahisons, elle développe une grande résilience et une intelligence politique, devenant une leader respectée et la protectrice du Nord.",
        imageUrl: "https://thronesapi.com/assets/images/sansa-stark.jpeg",
      },
      {
        id: 5,
        firstName: "Brendon",
        lastName: "Stark",
        about: "Lord of Winterfell",
        nickname: undefined,
        description:
          "Bran Stark, le plus jeune fils de Ned Stark, passe d'un enfant curieux et aventurier à un être mystique et omniscient après un grave accident qui le rend infirme. Grâce à ses pouvoirs de Corneille à Trois Yeux, il acquiert la capacité de voir à travers le temps et l'espace, devenant un personnage clé dans la lutte contre les forces obscures.",
        imageUrl: "https://thronesapi.com/assets/images/bran-stark.jpg",
      },
      {
        id: 6,
        firstName: "Ned",
        lastName: "Stark",
        about: "Lord of Winterfell",
        nickname: undefined,
        description:
          "Ned Stark, seigneur de Winterfell et chef de la famille Stark, est un homme d'honneur et de droiture, guidé par un sens profond de la justice et de la loyauté. Fidèle à ses valeurs, il se retrouve rapidement en danger à Port-Réal, où sa franchise et son intégrité entrent en conflit avec les intrigues de la cour des Lannister.",
        imageUrl: "https://thronesapi.com/assets/images/ned-stark.jpg",
      },
      {
        id: 7,
        firstName: "Robert",
        lastName: "Baratheon",
        about: "Lord of the Seven Kingdoms",
        nickname: undefined,
        description:
          "Robert Baratheon, roi des Sept Couronnes, est un guerrier autrefois redoutable, célèbre pour avoir renversé la dynastie Targaryen. Cependant, son règne est marqué par l’ennui, la négligence, et un goût pour les plaisirs qui l’a éloigné de son ancienne fougue et de ses responsabilités royales, affaiblissant son pouvoir et créant des tensions à la cour.",
        imageUrl: "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
      },
      {
        id: 8,
        firstName: "Jamie",
        lastName: "Lannister",
        about: "Lord Commander of the Kingsguard",
        nickname: undefined,
        description:
          "Jaime Lannister, chevalier réputé et membre de la Garde Royale, est surnommé le « Régicide » pour avoir tué le roi fou Aerys Targaryen, un acte qui lui a valu à la fois gloire et mépris. D’une loyauté complexe, il oscille entre son devoir, son amour interdit pour sa sœur Cersei, et sa propre quête de rédemption.",
        imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg",
      },
      {
        id: 9,
        firstName: "Cersei",
        lastName: "Lannister",
        about: "Lady of Casterly Rock",
        nickname: undefined,
        description:
          "Cersei Lannister, reine ambitieuse et manipulatrice, est prête à tout pour protéger ses enfants et maintenir le pouvoir de sa famille. Connue pour son intelligence politique et sa cruauté, elle use de son charme et de sa détermination pour dominer ceux qui l'entourent, tout en dissimulant ses vulnérabilités profondes.",
        imageUrl: "https://thronesapi.com/assets/images/cersei.jpg",
      },
      {
        id: 10,
        firstName: "Catelyn",
        lastName: "Stark",
        about: "Lady of Winterfell",
        nickname: undefined,
        description:
          "Catelyn Stark, épouse de Ned Stark, est une mère déterminée et protectrice, prête à tout pour la sécurité de ses enfants. Son sens de l'honneur et de la justice la pousse à prendre des décisions difficiles, parfois imprudentes, alors qu'elle lutte contre la perte et la trahison tout au long de la série.",
        imageUrl: "https://thronesapi.com/assets/images/catelyn-stark.jpg",
      },
      {
        id: 11,
        firstName: "Robb",
        lastName: "Stark",
        about: "Lord of Winterfell",
        nickname: undefined,
        description:
          "Robb Stark, le fils aîné de Ned Stark, est un jeune homme courageux et charismatique qui prend rapidement les rênes de la maison Stark après la guerre de l’hiver. En tant que roi du Nord, il cherche à venger son père et à protéger sa famille, mais sa loyauté et ses décisions impulsives le conduiront à des choix tragiques.",
        imageUrl: "https://thronesapi.com/assets/images/robb-stark.jpg",
      },
      {
        id: 12,
        firstName: "Theon",
        lastName: "Greyjoy",
        about: "Captain of Sea Bitch",
        nickname: undefined,
        description:
          "Theon Greyjoy, élevé par les Stark après la capture de son père, est un personnage complexe tiraillé entre loyauté et quête de pouvoir. Cherchant à prouver sa valeur, il se rebelle contre les Stark et rejoint sa famille, mais ses actions le mènent à une chute dramatique, marquée par la trahison, la souffrance et la quête de rédemption.",
        imageUrl: "https://thronesapi.com/assets/images/theon.jpg",
      },
      {
        id: 13,
        firstName: "Joffrey",
        lastName: "Baratheon",
        about: "Lord of the Seven Kingdoms, Protector of the Realm",
        nickname: undefined,
        description:
          "Joffrey Baratheon est un roi cruel et sadique, dont le tempérament colérique et impulsif fait de lui l'un des personnages les plus détestés de Game of Thrones. Bien qu'il soit présenté comme le fils de Robert Baratheon, il est en réalité le fruit de l'inceste entre sa mère Cersei et son frère Jaime, ce qui nourrit son arrogance et sa brutalité, notamment envers les plus faibles et ses sujets.",
        imageUrl: "https://thronesapi.com/assets/images/joffrey.jpg",
      },
      {
        id: 14,
        firstName: "Tyrion",
        lastName: "Lannister",
        about: "Hand of the Queen",
        nickname: undefined,
        description:
          "Tyrion Lannister est un personnage brillant, rusé et souvent ironique, connu pour sa taille diminutive et son esprit acéré. Mal aimé par sa famille, en particulier son père, il se distingue par sa sagesse et sa capacité à naviguer dans les intrigues politiques de Westeros. Malgré sa stature, Tyrion fait preuve de courage et d'une profonde humanité, devenant l'un des personnages les plus complexes et appréciés de Game of Thrones.",
        imageUrl: "https://thronesapi.com/assets/images/tyrion-lannister.jpg",
      },
      {
        id: 15,
        firstName: "Sandor",
        lastName: "Clegane",
        about: "The Hound",
        nickname: undefined,
        description:
          "Sandor Clegane, surnommé Le Chien, est un guerrier impitoyable et brutal, redouté pour sa force et sa violence. Bien qu'il soit souvent vu comme un homme sans pitié, il révèle au fil de la série une personnalité plus complexe, marquée par un profond dégoût de lui-même et un sens caché de l'honneur. Son évolution, notamment son rapport avec Arya Stark, fait de lui un personnage fascinant et ambigu dans Game of Thrones.",
        imageUrl: "https://thronesapi.com/assets/images/the-hound.jpg",
      },
      {
        id: 16,
        firstName: "Petyr",
        lastName: "Baelish",
        about: "Littlefinger",
        nickname: undefined,
        description:
          "Petyr Baelish, surnommé Littlefinger, est un homme ambitieux et manipulateur, habile dans l'art de la politique et des intrigues. Ancien seigneur de Riverrun devenu maître des pièces, il utilise sa ruse et ses alliances pour gravir les échelons du pouvoir à Port-Réal. Malgré sa façade charmante, Littlefinger est un personnage perfide, prêt à tout pour atteindre ses objectifs personnels, y compris trahir ceux qui lui font confiance.",
        imageUrl: "https://thronesapi.com/assets/images/littlefinger.jpg",
      },
      {
        id: 17,
        firstName: "Davos",
        lastName: "Seaworth",
        about: "Hand of the King",
        nickname: undefined,
        description:
          "Davos Seaworth, surnommé le chevalier du sel, est un homme d'honneur et de loyauté, ancien contrebandier devenu fidèle serviteur de Stannis Baratheon. Son pragmatisme et son intégrité contrastent avec les intrigues politiques de la cour, et il se distingue par sa capacité à conseiller ses alliés avec sagesse tout en restant fidèle à ses principes.",
        imageUrl: "https://thronesapi.com/assets/images/davos-seaworth.png",
      },
      {
        id: 18,
        firstName: "Stannis",
        lastName: "Baratheon",
        about: "Lord of Dragonstone",
        nickname: undefined,
        description:
          "Stannis Baratheon est un homme rigide et déterminé, revendiquant le trône de fer après la mort de son frère Robert. Connu pour son sens du devoir et sa justice implacable, il se montre intransigeant dans sa quête de pouvoir, soutenu par la sorcière Melisandre, mais souvent perçu comme froid et inflexible, ce qui le rend impopulaire auprès de ses alliés.",
        imageUrl: "https://thronesapi.com/assets/images/stannis.jpg",
      },
      {
        id: 19,
        firstName: "Varys",
        lastName: undefined,
        about: "Master of Whisperers",
        nickname: undefined,
        description:
          "Varys, surnommé l'Eunuch ou l'araignée, est un maître des intrigues et des manipulations politiques à Westeros. D'origine modeste, il est devenu un conseiller puissant grâce à son réseau d'espions et à sa capacité à manipuler les événements en coulisses. Malgré sa nature mystérieuse et son absence de loyauté apparente, Varys agit souvent selon un idéal de stabilité et de justice pour le royaume, qu'il considère comme supérieur à toute autre ambition personnelle.  ",
        imageUrl: "https://thronesapi.com/assets/images/varys.jpg",
      },
      {
        id: 20,
        firstName: "Khal",
        lastName: "Drogo",
        about: "Khal",
        nickname: undefined,
        description:
          "Khal Drogo est un puissant chef Dothraki, un seigneur de guerre redouté et respecté. Il est connu pour sa grande force physique, son charisme et son autorité sur ses guerriers. Bien qu'initialement perçu comme brutal et implacable, son histoire se transforme lorsque sa relation avec Daenerys Targaryen évolue, montrant une facette plus complexe de son personnage.",
        imageUrl: "https://thronesapi.com/assets/images/khal-drogo.jpg",
      },
      {
        id: 21,
        firstName: "Margaery",
        lastName: "Tyrell",
        about: "Queen of the Seven Kingdoms",
        nickname: undefined,
        description:
          "Margaery Tyrell est une jeune et ambitieuse noble de la maison Tyrell, connue pour sa beauté, son charme et sa finesse politique. Elle cherche à renforcer l'influence de sa famille à travers ses mariages stratégiques, notamment avec les rois Renly Baratheon, Joffrey Baratheon et Tommen Baratheon. Margaery se distingue par son intelligence et sa capacité à naviguer dans les intrigues de la cour tout en restant populaire auprès du peuple.",
        imageUrl: "https://thronesapi.com/assets/images/margaery-tyrell.jpg",
      },
      {
        id: 22,
        firstName: "Ygritte",
        lastName: undefined,
        about: "Spearwife",
        nickname: undefined,
        description:
          "Ygritte est une redoutable guerrière des Sauvageons, connue pour son tempérament fougueux et son indépendance. Elle devient la compagne de Jon Snow, avec qui elle partage une passion intense et complexe. Fier membre du groupe des Free Folk, Ygritte incarne la liberté des peuples du nord et rejette les lois des royaumes de Westeros, tout en se montrant fidèle à ses convictions et à son peuple.",
        imageUrl: "https://thronesapi.com/assets/images/ygritte.jpg",
      },
      {
        id: 23,
        firstName: "Brienne",
        lastName: "Tarth",
        about: "Lady Brienne",
        nickname: undefined,
        description:
          "Brienne de Tarth est une chevalière loyale et courageuse, souvent perçue comme une outsider en raison de son apparence et de son caractère peu conventionnels. Dévouée à honorer son serment, elle est fidèle à ceux qu'elle protège, notamment à la famille Stark et à Lady Stark, et incarne les idéaux de l'honneur et de la justice. Sa force, son sens de l'honneur et sa détermination en font un personnage admirable, même face à l'adversité.",
        imageUrl: "https://thronesapi.com/assets/images/brienne-tarth.jpeg",
      },
      {
        id: 24,
        firstName: "Missandei",
        lastName: undefined,
        about: "Queen's Personal Advisor",
        nickname: undefined,
        description:
          "Missandei est une ancienne esclave originaire d'Essos, qui devient l'une des plus proches conseillères de Daenerys Targaryen. Dotée d'une grande intelligence et d'une grande sagesse, elle sert de traductrice et de conseillère, apportant un soutien précieux à Daenerys dans ses conquêtes et ses décisions. Son calme, sa loyauté et son dévouement font d'elle un personnage clé dans l'entourage de la Khaleesi.",
        imageUrl: "https://thronesapi.com/assets/images/missandei.jpeg",
      },
      {
        id: 25,
        firstName: "Gilly",
        lastName: undefined,
        about: "The Rabbit Keeper",
        nickname: undefined,
        description:
          "Gilly est une jeune femme d'origine sauvageonne, élevée au sein du peuple des Marcheurs libres. Elle rencontre Samwell Tarly à la Nuit Blanche, où elle devient l'une de ses plus proches alliées et finit par tomber amoureuse de lui. Malgré son passé difficile et son statut de fille de l'homme sauvage, Gilly fait preuve de courage et de dévouement, surtout en protégeant son fils, Mance Rayder. Elle est un personnage clé dans l'évolution de Samwell.",
        imageUrl: "https://thronesapi.com/assets/images/gilly.jpg",
      },
      {
        id: 26,
        firstName: "Viserys",
        lastName: "Targaryn",
        about: "King Viserys III",
        nickname: undefined,
        description:
          "Viserys Targaryen est le dernier membre survivant de la lignée royale des Targaryen, après la chute de son père et de son frère. Obsédé par la reconquête du Trône de Fer, il est arrogant, impétueux et cruel, prêt à tout pour retrouver son pouvoir, même à manipuler sa sœur Daenerys. Son caractère impulsif et son obsession pour la couronne le conduiront à sa perte, alors qu'il sous-estime les dangers qui l'entourent.",
        imageUrl: "https://thronesapi.com/assets/images/viserys-targaryan.jpg",
      },
      {
        id: 27,
        firstName: "Rickon",
        lastName: "Stark",
        about: "Prince",
        nickname: undefined,
        description:
          "Rickon Stark est le plus jeune fils de Ned Stark, né après les événements de la guerre de Robert. En raison de son jeune âge, il est peu présent dans l'histoire de *Game of Thrones*, n'apparaissant que brièvement avant la chute de sa maison. Après la mort de son père et la perte de son foyer, il s'exile au-delà du Mur, où il vit avec Osha, une ancienne servante des Stark. Son sort reste incertain dans la série, mais sa famille le considère comme un héritier potentiel du titre de seigneur de Winterfell.",
        imageUrl: "https://thronesapi.com/assets/images/rickon.jpg",
      },
      {
        id: 28,
        firstName: "Roose",
        lastName: "Bolton",
        about: "Lord of Dreadfort",
        nickname: undefined,
        description:
          "Roose Bolton est le seigneur de la Dreadfort et un des plus redoutés seigneurs du Nord. Cruel et impitoyable, il est connu pour ses méthodes brutales, notamment le flayage de ses ennemis, une pratique qu’il hérite de sa maison. Il se montre pragmatique et calculateur, prêt à trahir même ses alliés pour servir ses propres intérêts.",
        imageUrl: "https://thronesapi.com/assets/images/roose-bolton.jpg",
      },
      {
        id: 29,
        firstName: "Daario",
        lastName: "Naharis",
        about: "Commander of the Second Sons",
        nickname: undefined,
        description:
          "Daario Naharis est un mercenaire charismatique et audacieux, membre des Second Sons, une compagnie de soldats. Il devient l'un des conseillers et amants de Daenerys Targaryen, se distinguant par son habileté au combat et son allure séduisante. C'est un homme passionné, avec une loyauté complexe envers ceux qu'il sert.",
        imageUrl: "https://thronesapi.com/assets/images/daario.jpg",
      },
      {
        id: 30,
        firstName: "Shae",
        lastName: undefined,
        about: "Mistress",
        nickname: undefined,
        description:
          "Shae est une courtisane séduisante et rusée qui entretient une relation amoureuse avec Tyrion Lannister. Bien qu'elle commence comme une compagne de plaisir, son amour pour Tyrion évolue en une complicité plus profonde, mais elle se trouve rapidement impliquée dans les intrigues politiques, ce qui finit par entraîner sa chute tragique.",
        imageUrl: "https://thronesapi.com/assets/images/shae.jpg",
      },
      {
        id: 31,
        firstName: "Tommen",
        lastName: "Baratheon",
        about: "Prince",
        nickname: undefined,
        description:
          "Tommen Baratheon est le plus jeune fils de Cersei Lannister et, bien qu'il soit officiellement le roi des Sept Couronnes après la mort de son frère Joffrey, il est souvent manipulé par les adultes autour de lui. Doux, naïf et influençable, Tommen est un roi fragile, pris dans les intrigues politiques de sa mère et des autres puissants de la cour.",
        imageUrl: "https://thronesapi.com/assets/images/tommen.jpg",
      },
      {
        id: 32,
        firstName: "Gendry",
        lastName: "Baratheon",
        about: "Lord of Storm's End",
        nickname: undefined,
        description:
          "Gendry Baratheon est le fils illégitime du roi Robert Baratheon, élevé comme forgeron à Flea Bottom, sans savoir sa véritable origine. Courageux et résolu, il se distingue par sa grande habileté à travailler le métal et devient un allié précieux pour Arya Stark et ses compagnons. Bien qu'il soit un bâtard, il possède un potentiel royal en raison de ses liens avec la famille Baratheon.",
        imageUrl: "https://thronesapi.com/assets/images/gendry.jpg",
      },
      {
        id: 33,
        firstName: "Jorah",
        lastName: "Mormont",
        about: "Knight",
        nickname: undefined,
        description:
          "Jorah Mormont est un chevalier exilé de la maison Mormont, fidèle conseiller et protecteur de Daenerys Targaryen. Anciennement banni de Westeros pour avoir trahi son roi, il cherche à se racheter en servant Daenerys avec dévouement, malgré ses sentiments amoureux non réciproques. Son courage et sa loyauté font de lui un allié précieux, mais ses erreurs passées pèsent sur son honneur.",
        imageUrl: "https://thronesapi.com/assets/images/jorah-mormont.jpg",
      },
      {
        id: 34,
        firstName: "Robert",
        lastName: "Baratheon",
        about: "King",
        nickname: undefined,
        description:
          "Robert Baratheon est le roi des Sept Couronnes au début de *Game of Thrones*, connu pour sa nature impulsive et son tempérament brutal. Ancien chef de la rébellion qui a renversé la dynastie Targaryen, il est devenu un monarque déçu et désenchanté, accablé par les intrigues politiques et une vie de décadence. Malgré son apparence de roi fort, son règne est marqué par l'instabilité et la lutte pour le pouvoir.",
        imageUrl: "https://thronesapi.com/assets/images/king-robert.jpg",
      },
      {
        id: 35,
        firstName: "Ramsey",
        lastName: "Bolton",
        about: "The Bastard of Bolton",
        nickname: undefined,
        description:
          "Ramsay Bolton, anciennement Ramsay Snow, est un personnage sadique et cruel dans *Game of Thrones*. Fils illégitime de Roose Bolton, il devient un seigneur redouté, connu pour ses tortures impitoyables et sa manipulation. Sa quête de pouvoir et son plaisir à infliger de la souffrance font de lui l'un des antagonistes les plus détestés de la série.",
        imageUrl: "https://thronesapi.com/assets/images/ramsey-bolton.jpg",
      },
      {
        id: 36,
        firstName: "Talisa",
        lastName: "Stark",
        about: "Queen Consort",
        nickname: undefined,
        description:
          "Talisa Stark, née Maegyr, est la femme de Robb Stark. Médecin d'origine noble, elle devient un personnage clé dans la guerre des Cinq Rois. Connue pour sa gentillesse et son courage, elle joue un rôle important dans la vie de Robb, avant de tragiquement périr lors du tristement célèbre Red Wedding.",
        imageUrl: "https://thronesapi.com/assets/images/talisa-stark.jpg",
      },
      {
        id: 37,
        firstName: "Jeor",
        lastName: "Mormont",
        about: "Lord Commander of the Knight's Watch",
        nickname: undefined,
        description:
          "Jeor Mormont est le seigneur de la Maison Mormont et commandant de la Garde de Nuit au début de la série *Game of Thrones*. Homme respecté et courageux, il est un mentor pour Jon Snow et incarne l'honneur et la loyauté. Son leadership au-delà du Mur et sa détermination à défendre l'humanité contre les menaces surnaturelles font de lui une figure marquante de l'histoire.",
        imageUrl:
          "https://thronesapi.com/assets/images/lord-commander-mormont.jpg",
      },
      {
        id: 38,
        firstName: "The High Sparrow",
        lastName: undefined,
        about: "High Septon",
        nickname: undefined,
        description:
          "Le High Sparrow est un personnage clé de la dernière saison de *Game of Thrones*, incarnant un leader religieux charismatique et radical. À la tête des Sparrows, un mouvement de fervents religieux, il cherche à imposer une moralité stricte à la société de Westeros, prenant rapidement le contrôle de la capitale et défiant l'autorité des Lannister. Son ascension met en lumière sa ruse et sa capacité à manipuler les autres au nom de la foi.",
        imageUrl: "https://thronesapi.com/assets/images/the-high-sparrow.jpg",
      },
      {
        id: 39,
        firstName: "Oberyn",
        lastName: "Martell",
        about: "Red Viper of Dorne",
        nickname: undefined,
        description:
          "Oberyn Martell, prince de Dorne, est un personnage flamboyant, connu pour sa vivacité d'esprit et son tempérament impulsif. Il est animé par un désir de vengeance envers les Lannister pour la mort de sa sœur, Elia, lors de la rébellion de Robert Baratheon. Charmant, séduisant et audacieux, Oberyn se distingue également par sa maîtrise du combat et son rôle crucial dans la saison 4 de *Game of Thrones*.",
        imageUrl: "https://thronesapi.com/assets/images/red-viper.jpg",
      },
      {
        id: 40,
        firstName: "Melisandre",
        lastName: undefined,
        about: "The Red Woman",
        nickname: undefined,
        description:
          "Melisandre, la Sorcière Rouge, est une prêtresse du Seigneur de la Lumière et une conseillère influente de Stannis Baratheon. Dotée de pouvoirs magiques, elle utilise des visions prophétiques et des rituels occultes pour guider ses actions, souvent en sacrifiant des innocents pour ses croyances. Mystérieuse et énigmatique, elle joue un rôle clé dans les événements surnaturels de *Game of Thrones*.",
        imageUrl: "https://thronesapi.com/assets/images/melisandre.jpg",
      },
      {
        id: 41,
        firstName: "Jagen",
        lastName: "H'ghar",
        about: "Faceless Men of Braavos",
        nickname: undefined,
        description:
          " Jaqen H'ghar est un mystérieux assassin membre des Sans-Visage, un groupe d'assassins d'Essos. D'origine braavosi, il porte plusieurs visages au cours de la série et incarne le concept de la mort sous différentes formes, servant les Dieux Anciens en tuant pour rétablir l'équilibre. C'est un maître dans l'art de changer d'identité et d'accomplir des missions secrètes.",
        imageUrl: "https://thronesapi.com/assets/images/jaqen-hghar.jpg",
      },
      {
        id: 42,
        firstName: "Tywin",
        lastName: "Lannister",
        about: "Lord Paramount of Westerlands",
        nickname: undefined,
        description:
          "Tywin Lannister est le patriarche impitoyable et stratégique de la famille Lannister dans *Game of Thrones*. Souverain du Royaume des Montagnes, il est un maître manipulateur, guidé par un sens aigu du devoir familial et de la préservation du pouvoir. Son autorité imposante et son esprit calculateur font de lui un des personnages les plus redoutés de Westeros.",
        imageUrl: "https://thronesapi.com/assets/images/tywin-lannister.jpg",
      },
      {
        id: 43,
        firstName: "Ellaria",
        lastName: "Sand",
        about: "Paramour of Prince Oberyn Martell",
        nickname: undefined,
        description:
          "Ellaria Sand est la maîtresse passionnée d'Oberyn Martell et une figure clé de la maison Martell dans *Game of Thrones*. Connue pour sa force, son charisme et son désir de venger la mort de son amant, elle est une femme audacieuse et déterminée, prête à tout pour défendre sa famille et ses convictions.",
        imageUrl: "https://thronesapi.com/assets/images/ellaria-sand.jpg",
      },
      {
        id: 44,
        firstName: "Tormund",
        lastName: "Giantsbane",
        about: "Free Folk Warrior",
        nickname: undefined,
        description:
          "Tormund Giantsbane est un chef audacieux et charismatique des Sauvageons, connu pour sa bravoure et son tempérament fougueux. Fier et loyal, il est également un redoutable combattant et un défenseur passionné de son peuple, tout en entretenants des liens forts avec Jon Snow et les autres membres du groupe.",
        imageUrl: "https://thronesapi.com/assets/images/tormund-giantsbane.jpg",
      },
      {
        id: 45,
        firstName: "Yara",
        lastName: "Greyjoy",
        about: "Lady of the Iron Islands",
        nickname: undefined,
        description:
          "Yara Greyjoy, fille de Balon Greyjoy, est une capitaine intrépide et une guerrière redoutable. Forte, indépendante et résolue, elle défie les attentes placées sur elle en tant que femme dans un monde dominé par les hommes, tout en restant loyale à sa famille et ses ambitions.",
        imageUrl: "https://thronesapi.com/assets/images/yara-greyjoy.jpg",
      },
      {
        id: 46,
        firstName: "Euron",
        lastName: "Greyjoy",
        about: "King of the iron Islands",
        nickname: undefined,
        description:
          "Euron Greyjoy est un pirate impitoyable et ambitieux, frère de Balon et Yara Greyjoy, qui aspire à conquérir le trône des Îles de Fer. Connu pour sa cruauté et sa ruse, il n'hésite pas à manipuler et à trahir pour atteindre ses objectifs, notamment en s'alliant avec Cersei Lannister. Sa soif de pouvoir est alimentée par un charisme sombre et une absence totale de scrupules.",
        imageUrl: "https://thronesapi.com/assets/images/euron-greyjoy.jpg",
      },
      {
        id: 47,
        firstName: "Wylis",
        lastName: "Hodor",
        about: "Servant of House Stark",
        nickname: undefined,
        description:
          "Wylis, mieux connu sous le nom de Hodor, est un personnage tragique de *Game of Thrones*. Il est un géant doux et loyal, au service de la famille Stark, connu pour sa phrase répétée Hodor. Ce comportement découle d’un événement dévastateur lié au voyage dans le temps de Bran Stark, qui révèle l’origine de son nom et de son état mental. Hodor incarne la simplicité et le sacrifice héroïque.  ",
        imageUrl: "https://thronesapi.com/assets/images/hodor.jpg",
      },
      {
        id: 48,
        firstName: "Pycelle",
        lastName: "Unknown",
        about: "Grand Maester of the Seven Kingdoms",
        nickname: undefined,
        description:
          "Pycelle est un membre influent du conseil restreint de Robert Baratheon et un maître des potions au service de la cour. Bien que son apparence frêle et vieillissante cache sa véritable nature, il est un manipulateur rusé, jouant souvent double jeu pour maintenir sa position. Sa loyauté apparente dissimule un esprit opportuniste et calculateur, prêt à servir ses propres intérêts.",
        imageUrl: "https://thronesapi.com/assets/images/pycelle.jpg",
      },
      {
        id: 49,
        firstName: "Grey",
        lastName: "Worm",
        about: "Commander of the Unsullied",
        nickname: undefined,
        description:
          "Grey Worm est le commandant des Immaculés, l'élite des esclaves soldats de Daenerys Targaryen. Fier et discipliné, il incarne la loyauté et la bravoure, combattant sans relâche pour sa reine. Bien que marqué par son passé d'esclave, il développe des liens profonds avec ses camarades et une relation amoureuse avec Missandei.",
        imageUrl: "https://thronesapi.com/assets/images/greyworm.jpg",
      },
      {
        id: 50,
        firstName: "Olenna",
        lastName: "Tyrell",
        about: "Queen of Thorns",
        nickname: undefined,
        description:
          "Olenna Tyrell, surnommée La Reine des Épines, est la matriarche astucieuse et impitoyable de la maison Tyrell. Connue pour son esprit acéré et sa capacité à manipuler les événements à son avantage, elle joue un rôle clé dans la politique du Royaume des Sept Couronnes, n'hésitant pas à prendre des décisions radicales pour protéger sa famille et ses intérêts.",
        imageUrl: "https://thronesapi.com/assets/images/olenna-tyrell.jpg",
      },
      {
        id: 51,
        firstName: "Qyburn",
        lastName: undefined,
        about: "Former maester of the Citadel",
        nickname: undefined,
        description:
          "Qyburn est un ancien maître chirurgien déchu, réputé pour ses méthodes non conventionnelles et son obsession pour la science de la vie et de la mort. Au service des Lannister, il se distingue par ses expériences macabres et sa loyauté envers Cersei, usant de pratiques interdites pour renforcer son pouvoir et sa position.",
        imageUrl: "https://thronesapi.com/assets/images/qyburn.jpg",
      },
      {
        id: 52,
        firstName: "Lord",
        lastName: "Bronn",
        about: "Lord of Highgarden",
        nickname: undefined,
        description:
          "Bronn est un mercenaire rusé et pragmatique, connu pour son sens de l'humour acerbe et sa loyauté conditionnelle. Il se lie d'amitié avec Tyrion Lannister, dont il devient le garde du corps, et profite de ses compétences au combat pour gravir les échelons sociaux, toujours en quête de richesse et de pouvoir.",
        imageUrl: "https://thronesapi.com/assets/images/bronn.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "The Walking Dead",
    dataSeries: [
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
    ],
  },
  {
    id: "3",
    title: "Breaking Bad",
    dataSeries: [
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
    ],
  },
  {
    id: "4",
    title: "Prison Break",
    dataSeries: [
      {
        id: 0,
        firstName: "Michael ",
        lastName: "Scofield",
        nickname: "None",
        about: "Ingénieur",
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
        about: "Condamné à mort",
        description:
          "Condamné à tort pour meurtre, Lincoln est prêt à tout pour prouver son innocence. Son lien avec Michael est au cœur de l’intrigue.",
        imageUrl:
          "https://live.staticflickr.com/3384/3511731116_531a29c12d.jpg",
      },
      {
        id: 2,
        firstName: "Sara ",
        lastName: "Tancredi",
        nickname: "None",
        about: "Médecin de Fox River",
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
        about: "Criminel",
        description:
          "Psychopathe manipulateur, T-Bag est un personnage imprévisible qui rejoint l'évasion pour ses propres intérêts. Cruel et redouté des autres détenus.",
        imageUrl: "https://pbs.twimg.com/media/FxH3eUVXgAAl9sB.jpg",
      },
      {
        id: 4,
        firstName: "Fernando ",
        lastName: "Sucre",
        nickname: "None",
        about: "Compagnon de cellule de Michael",
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
        about: "Agent du FBI",
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
        about: "Ancien militaire",
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
        about: "Agent de la Compagnie",
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
        about: "Gardien en chef de Fox River",
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
        about: "Chef mafieux",
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
        about: "Ancien étudiant",
        description:
          "Surnommé Haywire, Charles est mentalement instable et obsédé par les tatouages de Michael, ajoutant de l’imprévu au plan d’évasion.",
        imageUrl: "https://storage.canalblog.com/80/89/265088/11078190_o.jpg",
      },
      {
        id: 11,
        firstName: "David ",
        lastName: "Apolskis",
        nickname: "Tweener",
        about: "Petit voleur",
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
        about: "Fils de Lincoln",
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
        about: "Compagne de Lincoln",
        description:
          "Elle devient la petite amie de Lincoln et son soutien inconditionnel dans ses luttes contre la Compagnie.",
        imageUrl: "https://vainkeurz.com/wp-content/uploads/2022/10/16-1.png",
      },
      {
        id: 14,
        firstName: "Gretchen ",
        lastName: "Morgan",
        nickname: "None",
        about: "Agent de la Compagnie",
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
        about: "Détenu à Sona",
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
        about: "Agent du gouvernement",
        description:
          "Agent gouvernemental ambigu, Self collabore avec Michael mais son intégrité est mise en question par ses actions.",
        imageUrl:
          "https://static.tvtropes.org/pmwiki/pub/images/DonSelf_5319.jpg",
      },
      {
        id: 17,
        firstName: "Christina ",
        lastName: "Scofield",
        nickname: "None",
        about: "Membre de la Compagnie",
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
        about: "Chef des détenus à Sona",
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
        about: "Directeur de la prison de Fox River",
        description:
          "Directeur de Fox River, Pope est bienveillant et juste mais se retrouve tiraillé par sa loyauté envers Michael.",
        imageUrl:
          "https://i.pinimg.com/originals/76/75/fa/7675fac465f75b165986ab15325842f1.jpg",
      },
    ],
  },
];

export default seriesData;
