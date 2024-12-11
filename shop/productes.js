function onload() {
    document.getElementById('form').reset();
    addGames();
    searchGame();
}

function searchGame() {
    if (localStorage.getItem('load') == 'true') {
        localStorage.setItem('load', '')
        query = localStorage.getItem('query');
        console.log(query);

        if (query == 'hola') {
            console.log('tes');
        }

        for (q = 0; q < num_jocs; q++) {
            document.getElementById(q).style.display = 'none';

            if (jocs[q]["name"].toLowerCase().includes(query.toLowerCase())) {
                console.log(q + ' contains');
                document.getElementById(q).style.display = 'flex';
            }
        }
    }
}

jocs = {
    0: {
        src: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fstatic.prisa.com%2Fgamepedia%2Fimagenes%2F2023%2F7%2F14%2Fgame_cover%2F719758674.jpg?auth=f091ae560052c2cc5c9c62b30411e43f296107098467e9301e7853eb6074f282&width=140&height=210&smart=true",
        name: "EA Sports FC24",
        description: "EA Sports FC 24 és un videojoc de simulació de futbol associatiu desenvolupat per EA Vancouver i EA Romania i publicat per EA Sports. És el lliurament inaugural de la sèrie EA Sports FC, succeint a la sèrie de videojocs de la FIFA després que l'associació d'Electronic Arts amb FIFA conclogués amb FIFA 23. EA Sports FC 24 és la 31a entrega general dels jocs de simulació de futbol d'EA Sports i es va publicar el 29 de setembre de 2023 per a Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One i Xbox Series X/S.",
        color: "a",
        genere: "esports",
        any: 2023
    },
    1: {
        src: "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg",
        name: "The Legend of Zelda: Tears of the Kingdom",
        description: "The Legend of Zelda: Tears of the Kingdom és un joc d'acció i aventura del 2023 desenvolupat i publicat per Nintendo per a Nintendo Switch. El jugador controla Link mentre busca la princesa Zelda i lluita per evitar que Ganondorf destrueixi Hyrule. Tears of the Kingdom conserva la jugabilitat i l'ambientació de món obert del seu predecessor, Breath of the Wild (2017), i inclou nous entorns, com ara una àrea composta d'illes flotants al cel i una zona subterrània sota Hyrule coneguda com les Profunditats. El jugador té accés a diversos dispositius que ajuden en el combat o l'exploració i es poden utilitzar per construir vehicles.",
        color: "a",
        genere: "aventura",
        any: 2023
    },
    2: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzVaGZYUXmPuvVrr96zUhAUUFLV8MANcqXA&s",
        name: "Hogwarts Legacy",
        description: "Hogwarts Legacy és un joc de rol d'acció del 2023 desenvolupat per Avalanche Software i publicat per Warner Bros. Games sota el seu segell Portkey Games. Forma part de la franquícia Wizarding World, que té lloc un segle abans de les novel·les de Harry Potter. El jugador controla un estudiant inscrit a l'escola de bruixeria i bruixeria de Hogwarts que aprèn a manejar una gran varietat d'habilitats i objectes màgics. Amb l'ajuda de companys i professors, el protagonista s'embarca en un viatge per descobrir un antic secret amagat dins del món dels màgics.",
        color: "a",
        genere: "fantasia",
        any: 2023
    },
    3: {
        src: "https://i.pinimg.com/736x/b6/9a/ca/b69aca1082e2feafe717e5e80f600f71.jpg",
        name: "Super Mario Bros Wonder",
        description: "Super Mario Bros. Wonder és un joc de plataformes del 2023 desenvolupat i publicat per Nintendo per a Nintendo Switch. És el primer joc tradicional de Super Mario amb desplaçament lateral des de New Super Mario Bros. U (2012). El jugador controla Mario, Luigi i els seus amics mentre intenten aturar en Bowser, que planeja fer-se càrrec d'una nova terra coneguda com el Regne de les Flors després d'utilitzar la màgica Wonder Flower per fusionar-se amb el castell del regne.",
        color: "a",
        genere: "fantasia",
        any: 2023
    },
    4: {
        src: "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg",
        name: "Mario Kart 8",
        description: "Mario Kart 8 és un joc de carreres de karts del 2014 desenvolupat i publicat per Nintendo per a Wii U. Conserva la jugabilitat dels jocs anteriors de Mario Kart, amb els jugadors controlant un personatge de Mario en curses per pistes. Les pistes estan temàtiques al voltant de llocs de la sèrie Super Mario poblats amb potenciadors que ajuden els jugadors a obtenir avantatges en les curses. Es poden seleccionar diferents dificultats abans d'una carrera; dificultats més difícils fan que el joc sigui més ràpid. En les noves seqüències anti-gravetat, els jugadors condueixen per parets i sostres. Mario Kart 8 conté una varietat de modes de joc per a un sol jugador i locals i multijugador en línia, incloses les carreres Gran Premi i els modes de batalla basats en l'arena.",
        color: "blue",
        genere: "esports",
        any: 2014
    },
    5: {
        src: "https://fifauteam.com/images/covers/fifa23/standard-cg.webp",
        name: "FIFA 23",
        description: "FIFA 23 és un videojoc de futbol publicat per EA Sports. És la 30a i última entrega de la sèrie FIFA desenvolupada per EA Sports i llançada a tot el món el 30 de setembre de 2022 per a Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One i Xbox Series X/S.",
        color: "a",
        genere: "esports",
        any: 2022
    },
    6: {
        src: "https://i.etsystatic.com/35198957/r/il/39a9a9/5388247403/il_fullxfull.5388247403_lkuv.jpg",
        name: "Marvel's Spider-Man 2",
        description: "Marvel's Spider-Man 2 és un joc d'acció i aventura del 2023 desenvolupat per Insomniac Games i publicat per Sony Interactive Entertainment. Es basa en el personatge de Marvel Comics Spider-Man i presenta una narració inspirada en la seva mitologia de còmics de llarga durada que també es deriva de diverses adaptacions en altres mitjans. És la tercera entrada de la sèrie Marvel's Spider-Man, que actua com a seqüela de Marvel's Spider-Man (2018) i una continuació de Marvel's Spider-Man: Miles Morales (2020). La trama segueix a Peter Parker i Miles Morales mentre entren en conflicte amb Kraven el caçador, que transforma la ciutat de Nova York en un terreny de caça per a individus amb superpoder; i amb el simbiot extraterrestre Venom, que s'uneix a Peter i l'influeix negativament, amenaçant amb destruir les seves relacions personals.",
        color: "red",
        genere: "aventura",
        any: 2023
    },
    7: {
        src: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/14/gaming-gta5-cover.jpeg",
        name: "Grand Theft Auto V",
        description: "Grand Theft Auto V és un joc d'acció i aventura del 2013 desenvolupat per Rockstar North i publicat per Rockstar Games. És la setena entrada principal de la sèrie Grand Theft Auto, després del Grand Theft Auto IV de 2008, i la quinzena en general. Ambientada a l'estat fictici de San Andreas, basada al sud de Califòrnia, la història per a un sol jugador segueix tres protagonistes: el lladre de bancs retirat Michael De Santa (Ned Luke), el gàngster de carrer Franklin Clinton (Shawn Fonteno) i el traficant de drogues i pistoler Trevor Philips. (Steven Ogg) i els seus intents de cometre atracaments sota la pressió d'una agència governamental corrupta i de poderosos criminals. Els jugadors recorren lliurement el camp del món obert de San Andreas i la ciutat fictícia de Los Santos, amb seu a Los Angeles.",
        color: "a",
        genere: "accio",
        any: 2013
    },
    8: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLLEVPeMlz2k8sZcIAAxSC9zlYreyan3ksA&s",
        name: "Nintendo Switch Sports",
        description: "Nintendo Switch Sports és un videojoc de simulació esportiva del 2022 produït per Nintendo per a Nintendo Switch. És la seqüela de Wii Sports Club (2014) com a part de la subsèrie Wii Sports, la mateixa de la sèrie de jocs de Wii, així com el primer a substituir el títol \"Wii\". El joc inclou vuit esports: voleibol, bàdminton, bitlles, golf, futbol, ​​xambara, tennis i bàsquet. Llançat el 29 d'abril de 2022, Nintendo Switch Sports va rebre crítiques generalment diverses de la crítica i ha venut més de 13,11 milions de còpies, cosa que el converteix en un dels jocs de Nintendo Switch més venuts.",
        color: "blue",
        genere: "esports",
        any: 2022
    },
    9: {
        src: "https://static.posters.cz/image/750/posters/super-mario-odyssey-collage-i50045.jpg",
        name: "Super Mario Odyssey",
        description: "Super Mario Odyssey és un joc de plataformes del 2017 desenvolupat i publicat per Nintendo per a Nintendo Switch. Una entrada a la sèrie Super Mario, segueix en Mario i el seu nou aliat Cappy, un barret sensible que permet a Mario controlar altres personatges i objectes, mentre viatgen per diversos regnes per salvar la princesa Peach dels plans de matrimoni forçat de Bowser, el némesi de Mario. En contrast amb la jugabilitat lineal de les entrades anteriors, el joc torna al joc de plataformes 3D principalment obert que es presenta a Super Mario 64 i Super Mario Sunshine.",
        color: "red",
        genere: "puzzle",
        any: 2017
    },
    10: {
        src: "https://static.electronicfirst.com/products/thumbnail_1713190393_661d35f97ce23.webp",
        name: "Helldivers 2",
        description: "Helldivers 2 és un joc de trets en tercera persona cooperatiu del 2024 desenvolupat per Arrowhead Game Studios i publicat per Sony Interactive Entertainment per a la consola PlayStation 5 i Windows. El joc és la seqüela directa de Helldivers, un shooter de dalt a baix del 2015.",
        color: "yellow",
        genere: "accio",
        any: 2024
    },
    11: {
        src: "https://storage.googleapis.com/pod_public/1300/216712.jpg",
        name: "Elden Ring",
        description: "Elden Ring és un joc de rol d'acció del 2022 desenvolupat per FromSoftware. Va ser dirigit per Hidetaka Miyazaki amb la construcció del món proporcionada per l'escriptor de fantasia nord-americà George R. R. Martin. Va ser publicat per a PlayStation 4, PlayStation 5, Windows, Xbox One i Xbox Series X/S el 25 de febrer al Japó per FromSoftware i internacionalment per Bandai Namco Entertainment. Ambientat a Lands Between, els jugadors controlen un personatge personalitzable en una missió per reparar l'Elden Ring i convertir-se en el nou Elden Lord.",
        color: "yellow",
        genere: "fantasia",
        any: 2022
    },
    12: {
        src: "https://upload.wikimedia.org/wikipedia/en/c/c7/Dragon%27s_Dogma_2_cover_art.jpg",
        name: "Dragon's Dogma II",
        description: "Dragon's Dogma 2 és un videojoc de rol d'acció del 2024 desenvolupat i publicat per Capcom. La seqüela de Dragon's Dogma (2012), el joc està ambientat en un món de fantasia paral·lel al primer joc. Els jugadors controlen un personatge personalitzable a través del món obert del joc mentre cacen un drac que els va escollir com els \"Arisen\" enmig d'un conflicte geopolític completant missions i guanyant nou equipament en el camí amb l'ajuda d'aliats coneguts com \"Peons\".",
        color: "red",
        genere: "rpg",
        any: 2024
    },
    13: {
        src: "https://file.booster.gearupportal.com/file/64c375e2f609d1dd8ba9e13cZbAzBf4z03.png?fop=imageView/2/w/280/f/webp",
        name: "Tekken 8",
        description: "Tekken 8 (en japonès: 鉄拳8) és un joc de lluita del 2024 desenvolupat per Bandai Namco Studios i Arika i publicat per Bandai Namco Entertainment. És el vuitè llançament de cànon (i la desena entrada general) de la sèrie Tekken i el primer que debuta en sistemes domèstics en lloc d'arcades. Les proves del joc es van dur a terme a partir del juliol de 2023 abans que el joc final es va llançar per a PlayStation 5, Windows i Xbox Series X/S el 26 de gener de 2024.",
        color: "red",
        genere: "esports",
        any: 2024
    },
    14: {
        src: "https://store.ubisoft.com/on/demandware.static/-/Sites-masterCatalog/default/dwbb35741f/images/large/6295077a27efc536e38350a0.jpg",
        name: "Skull and Bones",
        description: "Skull and Bones (també coneguda com The Order, Order 322 o The Brotherhood of Death) és una societat secreta d'estudiants de grau superior a la Universitat de Yale a New Haven, Connecticut. Skull and Bones, la societat de classe sènior més antiga de la universitat, s'ha convertit en una institució cultural coneguda pels seus poderosos antics alumnes i les seves teories de conspiració.",
        color: "yellow",
        genere: "aventura",
        any: 2024
    },
    15: {
        src: "https://media.wired.com/photos/5f6cf5ec6f32a729dc0b3a89/master/w_1600%2Cc_limit/Culture_inline_Hades_PackArt.jpg",
        name: "Hades",
        description: "Hades és un joc de rol d'acció roguelike del 2020 desenvolupat i publicat per Supergiant Games. Va ser llançat per a macOS, Nintendo Switch i Windows després d'un llançament d'accés anticipat el desembre de 2018. Més tard es va llançar per a PlayStation 4, PlayStation 5, Xbox One i Xbox Series X/S l'agost de 2021 i es va llançar per a iOS a Març de 2024 a través de Netflix Games.",
        color: "red",
        genere: "rpg",
        any: 2020
    },
    16: {
        src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdEylWwe-sxdLRgJBaAe_XA2_BMmjNpS9icygzUhoR5-HRb9Jo",
        name: "NBA 2K25",
        description: "NBA 2K25 és un joc esportiu del 2024 desenvolupat per Visual Concepts i publicat per 2K, basat en la National Basketball Association (NBA). És la 26a entrega de la sèrie NBA 2K i és la successora de NBA 2K24 (2023). El joc es va llançar per a Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One i Xbox Series X/S el 6 de setembre de 2024.",
        color: "red",
        genere: "esports",
        any: 2024
    },
    17: {
        src: "https://preview.redd.it/fc-25-standard-cover-v0-19e17zsww2dd1.jpeg?width=640&crop=smart&auto=webp&s=d9129e6dbe0b8801366f26fc86c85ff228c0649a",
        name: "EA Sports FC25",
        description: "EA Sports FC 25 és un videojoc de futbol publicat per EA Sports. És la segona entrega de la sèrie EA Sports FC i la 32a entrega general dels jocs de simulació de futbol d'EA Sports. El joc va ser desenvolupat per EA Sports i es va llançar a tot el món el 27 de setembre de 2024 per a Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One i Xbox Series X/S. Els usuaris que van reservar l'edició definitiva del joc van poder jugar-hi el 20 de setembre de 2024.",
        color: "green",
        genere: "esports",
        any: 2024
    },
    18: {
        src: "https://egy4gamers.com/storage/2024/04/stellar-blade-1.jpg",
        name: "Stellar Blade",
        description: "Stellar Blade és un videojoc d'acció-aventura i hack and slash del 2024 desenvolupat per Shift Up i publicat per Sony Interactive Entertainment. Els jugadors prenen el control de la protagonista, Eve, mentre s'embarca en una missió per salvar la humanitat d'una guerra implacable contra criatures monstruoses en un futur llunyà. Al llarg del seu viatge, l'Eve s'uneix al seu equip i altres supervivents mentre lluiten per recuperar la Terra.",
        color: "blue",
        genere: "aventura",
        any: 2024
    },
    19: {
        src: "https://cdn2.steamgriddb.com/grid/4c8b428157ffb8f7c8968adf83c7aab8.png",
        name: "Diablo IV",
        description: "Diablo IV és un joc de rol d'acció en línia del 2023 desenvolupat i publicat per Blizzard Entertainment. És la quarta entrega principal de la sèrie Diablo. Anunciat a la BlizzCon 2019, el joc es va llançar el 5 de juny de 2023 per a PlayStation 4 i PlayStation 5, Xbox One i Xbox Series X i S i Microsoft Windows. Els jugadors creen un personatge d'una de les sis classes jugables (bàrbar, druida, nigromant, canalla, bruixot o nascut de l'espirit) i fan servir les seves habilitats per completar missions a través del combat.",
        color: "red",
        genere: "rpg",
        any: 2023
    },
    20: {
        src: "https://i.redd.it/xdiokxacfnr91.jpg",
        name: "Dead Space",
        description: "Dead Space és un joc de terror de supervivència del 2023 desenvolupat per Motive Studio i publicat per Electronic Arts. Un remake del joc homònim de 2008 desenvolupat per EA Redwood Shores, és el primer llançament de la sèrie Dead Space des de Dead Space 3 de 2013. Igual que el joc original, està ambientat en una nau espacial minera envaïda per monstres mortals anomenats Necromorphs. arran del descobriment d'un artefacte anomenat Marcador. El jugador controla l'enginyer Isaac Clarke mentre navega per la nau espacial i lluita contra els Necromorfs mentre lluita amb una psicosi creixent.",
        color: "a",
        genere: "terror",
        any: 2023
    },
    21: {
        src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Resident_Evil_2_Remake.jpg/220px-Resident_Evil_2_Remake.jpg",
        name: "Resident Evil 2 Remake",
        description: "Resident Evil 2 és un joc de terror de supervivència del 2019 desenvolupat i publicat per Capcom. Un remake del joc Resident Evil 2 de 1998, es va llançar per a PlayStation 4, Windows i Xbox One el gener de 2019 i per a Amazon Luna, PlayStation 5, Xbox Series X/S i Nintendo Switch el 2022. Versions per a iOS, iPadOS, i macOS estan programats per ser llançats el desembre de 2024. Els jugadors controlen l'oficial de policia novell Leon S. Kennedy i l'estudiant universitària Claire Redfield mentre intenten escapar de Raccoon City durant un brot de zombis.",
        color: "red",
        genere: "terror",
        any: 2019
    },
    22: {
        src: "https://upload.wikimedia.org/wikipedia/en/c/c9/Call_of_Duty_Black_Ops_6_Key_Art.png",
        name: "Call of Duty Black Ops 6",
        description: "Call of Duty: Black Ops 6 és un videojoc de trets en primera persona del 2024 desenvolupat conjuntament per Treyarch i Raven Software i publicat per Activision. És la vint-i-una entrega de la sèrie Call of Duty i és la setena entrada principal de la subsèrie Black Ops, després de Call of Duty: Black Ops Cold War (2020). Ambientada durant l'Operació Tempesta del Desert, la història per a un jugador de Black Ops 6 segueix als agents de la CIA Troy Marshall i Frank Woods mentre reuneixen un equip d'agents per caçar Pantheon, un grup paramilitar amb vincles encoberts amb l'agència.",
        color: "orange",
        genere: "accio",
        any: 2024
    },
    23: {
        src: "https://assets.vg247.com/current//2018/05/red_dead_redemption_2_cover_art_1.jpg",
        name: "Red Dead Redemption 2",
        description: "Red Dead Redemption 2 és un joc d'acció i aventura del 2018 desenvolupat i publicat per Rockstar Games. El joc és la tercera entrada de la sèrie Red Dead i una preqüela del joc de 2010 Red Dead Redemption. La història està ambientada en una representació fictícia dels Estats Units el 1899 i segueix les gestes d'Arthur Morgan, un proscrit i membre de la banda de Van der Linde, que ha de fer front a la decadència del salvatge oest mentre intenta sobreviure contra les forces governamentals. , colles rivals i altres adversaris. El joc es presenta a través de perspectives en primera i tercera persona, i el jugador pot recórrer lliurement el seu món obert interactiu. Els elements de joc inclouen tiroteigs, robatoris, caça, passejades a cavall, interacció amb personatges que no són jugadors i mantenir la qualificació d'honor del personatge mitjançant decisions i actes morals. Un sistema de recompenses regula la resposta de les forces de l'ordre i dels caçadors de recompenses als crims comesos pel jugador.",
        color: "red",
        genere: "aventura",
        any: 2018
    },
    24: {
        src: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
        name: "God of War (2018)",
        description: "God of War és un joc d'acció i aventura del 2018 desenvolupat per Santa Monica Studio i publicat per Sony Interactive Entertainment. El joc es va llançar per a PlayStation 4 l'abril de 2018, amb un port de Windows llançat el gener de 2022. És la vuitena entrega de la sèrie God of War, la vuitena cronològicament i la seqüela de God of War III del 2010.",
        color: "red",
        genere: "aventura",
        any: 2018
    },
    25: {
        src: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg",
        name: "God of War Ragnarök",
        description: "God of War Ragnarök és un joc d'acció i aventura del 2022 desenvolupat per Santa Monica Studio i publicat per Sony Interactive Entertainment. Va ser llançat a tot el món el 9 de novembre de 2022, tant per a PlayStation 4 com per a PlayStation 5, marcant el primer llançament entre generacions de la sèrie God of War, i es va llançar per a Windows el 19 de setembre de 2024. És la novena entrega de la sèrie, la novena cronològicament i la seqüela de God of War del 2018. Basat lliurement en la mitologia nòrdica, el joc està ambientat a l'antiga Escandinàvia i compta amb el protagonista de la sèrie, Kratos, i el seu fill adolescent, Atreus. Concloent l'era nòrdica de la sèrie, la història segueix els esforços de Kratos i Atreus per evitar que els nou regnes fossin destruïts per Ragnarök, l'esdeveniment escatològic que és central a la mitologia nòrdica i que es va predir que passaria al joc anterior després que Kratos matés els Aesir. déu Baldur.",
        color: "blue",
        genere: "aventura",
        any: 2022
    },
    26: {
        src: "https://i.pinimg.com/736x/10/2a/9b/102a9b6f3f5d2ef4ac22838b42e85f37.jpg",
        name: "Clash Royale",
        description: "Clash Royale és un videojoc d'estratègia en temps real desenvolupat i publicat per Supercell. El joc combina elements de jocs de cartes col·leccionables, defensa de torres i camp de batalla en línia multijugador. El joc es va llançar a nivell mundial el 2 de març de 2016. Clash Royale va assolir ingressos de mil milions de dòlars en menys d'un any al mercat. En tres anys, Clash Royale va obtenir ingressos de 2.500 milions de dòlars segons l'empresa d'intel·ligència de mercat Sensor Tower. És el primer spin-off de Clash of Clans.",
        color: "blue",
        genere: "estrategia",
        any: 2016
    },
    27: {
        src: "https://i.pinimg.com/736x/5e/06/06/5e0606fa24129d51e2fda7608e9b079a.jpg",
        name: "Subway Surfers",
        description: "Subway Surfers és un joc mòbil de corredors sense fi del 2012 que està desenvolupat conjuntament per Kiloo i SYBO Games, empreses privades amb seu a Dinamarca. Està disponible a les plataformes iOS, Android, HarmonyOS, Amazon Fire Tablet i Windows Phone i utilitza el motor de joc Unity. En el joc, els jugadors fan el paper de joves grafiters, liderats per Jake que, en ser atrapat en l'acte d'etiquetar un lloc de ferrocarril del metro, corre per les vies del ferrocarril per escapar de l'inspector i el seu gos. Mentre corren, agafen monedes d'or, power-ups i molts altres articles alhora que esquiven les col·lisions amb trens i altres objectes. També poden saltar a dalt dels trens i navegar amb hoverboards per evadir la captura fins que el personatge xoca contra un obstacle, és atrapat per l'inspector o és atropellat per un tren, moment en què acaba el joc. Els esdeveniments especials, com ara Season Hunt i altres, com ara els esdeveniments d'aniversari del joc, el Super Runners Challenge i el Rivals Challenge, poden donar lloc a recompenses i personatges dins del joc. També amb punts i claus poden comprar diferents vestits i personatges.",
        color: "red",
        genere: "aventura",
        any: 2012
    },
    28: {
        src: "https://interfaceingame.com/wp-content/uploads/clash-of-clans/clash-of-clans-cover-375x500.jpg",
        name: "Clash of Clans",
        description: "Clash of Clans és un videojoc d'estratègia per a mòbils gratuït del 2012 desenvolupat i publicat Supercell. El joc es va llançar per a plataformes iOS el 2 d'agost de 2012 i a Google Play per a Android el 7 d'octubre de 2013.\nEl joc està ambientat en un món persistent de temàtica fantàstica on el jugador és el cap d'un poble. Clash of Clans encarrega als jugadors de construir el seu propi poble utilitzant els recursos obtinguts en atacar els pobles d'altres jugadors amb tropes, guanyar recompenses, comprar-los amb medalles o produir-los al seu propi poble. Els jugadors poden unir-se per crear clans (grups de fins a cinquanta jugadors) que després poden participar en Clan Wars junts, donar i rebre tropes i xerrar entre ells. Els jugadors també poden construir un poble del clan anomenat capital del clan.",
        color: "yellow",
        genere: "estrategia",
        any: 2012
    },
    29: {
        src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ccd11b3-da82-40c6-a648-7ff3d4b1e1a1/dfp2v2b-07ab7caf-8421-4607-b715-69af2eded2e3.jpg/v1/fill/w_1280,h_1811,q_75,strp/pokedex___pokemon_go_cover_by_lporter1986_dfp2v2b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzhjY2QxMWIzLWRhODItNDBjNi1hNjQ4LTdmZjNkNGIxZTFhMVwvZGZwMnYyYi0wN2FiN2NhZi04NDIxLTQ2MDctYjcxNS02OWFmMmVkZWQyZTMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1drflOUfR-hx2tupPKE5Bi93hTYMTd6BDpDn3pnoUqc",
        name: "Pokémon Go",
        description: "Pokémon Go (estilitzat com Pokémon GO) és un joc mòbil de realitat augmentada (RA) del 2016, que forma part de la franquícia Pokémon, desenvolupat i publicat per Niantic en col·laboració amb Nintendo i The Pokémon Company per a dispositius iOS i Android. Utilitza dispositius mòbils amb GPS per localitzar, capturar, entrenar i lluitar contra Pokémon virtuals, que semblen com si estiguessin a la ubicació real del jugador. El joc és gratuït; utilitza un model de negoci freemium combinat amb publicitat local i admet compres des de l'aplicació per a articles addicionals dins del joc. El joc es va llançar amb unes 150 espècies de Pokémon, que havien augmentat a unes 870 a finals de 2024.",
        color: "blue",
        genere: "aventura",
        any: 2016
    }

    /*plantilla: {
        src: "",
        name: "",
        description: "",
        color: "",
        genere: "",
        any: 
    }*/
}

num_jocs = 30; // Últim número +1

function addGames() {
    list = document.getElementById('product_list');

    console.log(jocs.length);

    for (i = 0; i < num_jocs; i++) {
        console.log(i);
        div = document.createElement('article');
        title = document.createElement('p');
        p = document.createElement('p');
        span = document.createElement('span');

        div.style.backgroundImage = 'url("' + jocs[i]['src'] + '")';
        div.setAttribute('decoding', 'async');
        title.innerText = jocs[i]['name'];
        p.innerText = jocs[i]['description'];
        span.innerText = 'close';

        div.classList.add(jocs[i]['genere']);
        div.classList.add(jocs[i]['color']);
        div.classList.add('product_hover');
        div.id = i;
        title.classList.add('title');
        p.classList.add('description');
        span.classList.add('material-symbols-outlined');

        div.appendChild(span);
        div.appendChild(p);
        div.appendChild(title);
        list.appendChild(div);
    }
}

function filter(name) {
    for (i = 0; i < num_jocs; i++) {
        if (name == 'accio') {
            document.getElementsByClassName('accio')[i].classList.toggle('hide');
        } else if (name == 'aventura') {
            document.getElementsByClassName('aventura')[i].classList.toggle('hide');
        } else if (name == 'rpg') {
            document.getElementsByClassName('rpg')[i].classList.toggle('hide');
        } else if (name == 'terror') {
            document.getElementsByClassName('terror')[i].classList.toggle('hide');
        } else if (name == 'fantasia') {
            document.getElementsByClassName('fantasia')[i].classList.toggle('hide');
        } else if (name == 'puzzle') {
            document.getElementsByClassName('puzzle')[i].classList.toggle('hide');
        } else if (name == 'esports') {
            document.getElementsByClassName('esports')[i].classList.toggle('hide');
        } else if (name == 'estrategia') {
            document.getElementsByClassName('estrategia')[i].classList.toggle('hide');
        }
    }
}

function resetFilter() {
    for (i = 0; i < num_jocs; i++) {
        document.getElementById(i).classList.remove('hide');
    }
}

function floatingFilter(name) {
    if (name == 'show') {
        document.getElementById('form').style.setProperty('left', '24px', 'important');
        document.getElementById('form').style.setProperty('width', '400px', 'important');
        document.getElementById('arrow_floating_filter').style.display = 'none';
        document.getElementById('cross_floating_filter').style.display = 'flex';
    } else if (name == 'hide') {
        document.getElementById('form').style.setProperty('left', '-20%', 'important');
        document.getElementById('form').style.setProperty('width', '0', 'important');
        document.getElementById('arrow_floating_filter').style.display = 'flex';
        document.getElementById('cross_floating_filter').style.display = 'none';
    }
}

// Expand block

document.getElementById('product_list').addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() == 'article') {
        e.target.classList.remove('product_hover');
        e.target.style = 'position: absolute; width: 90%; height: 90%; top: 5%; left: 5%; z-index: 999999999; cursor: auto;';
        e.target.querySelector('p.title').style = 'opacity: 1; left: 40px; top: 40px; font-size: 3em; transition: none; margin-right: 120px;';
        e.target.querySelector('p.description').style = 'display: flex; opacity: 1; left: 40px; top: 180px; font-size: 1.5em; transition: none; text-align: justify;';
        e.target.querySelector('span').style = 'display: flex;';

        if (e.target.classList.contains('blue')) {
            e.target.style.background = 'linear-gradient(-45deg, #2A3663 0%, #605EA1 100%)';
        } else if (e.target.classList.contains('red')) {
            e.target.style.background = 'linear-gradient(-45deg, #A0153E 0%, #E72929 100%)';
        } else if (e.target.classList.contains('green')) {
            e.target.style.background = 'linear-gradient(-45deg, #1F4529 0%, #859F3D 100%)';
        } else if (e.target.classList.contains('yellow')) {
            e.target.style.background = 'linear-gradient(-45deg, #A66E38 0%, #FFB200 100%)';
        } else if (e.target.classList.contains('orange')) {
            e.target.style.background = 'linear-gradient(-45deg, #CB6040 0%, #EC8305 100%)';
        } else {
            e.target.style.background = 'linear-gradient(-45deg, #3C3D37 0%, #939185 100%)';
        }
    }

    parent = e.target.parentNode;
    if (e.target.tagName.toLowerCase() == 'span') {
        parent.classList.add('product_hover');
        parent.style = 'position: relative; flex: 1 1 180px; z-index: none;';
        parent.style.setProperty('background-image', 'url("' + jocs[parent.id]['src'] + '")');
        parent.querySelector('p.title').style = 'position: absolute; font-size: 16px; transition: .3s;';
        parent.querySelector('p.description').style = 'display: none;';
        parent.querySelector('span').style = 'display: none;';
    }
})
