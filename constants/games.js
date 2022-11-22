const games = [
  {
    id: 0,
    name: "defaultgame",
    displayName: "defaultgame",
    tags: [],
    key: "_",
    price: {
      usd: 0,
      thb: 0,
    },
    description: "default description",
  },
  {
    id: 1,
    name: "smash-bro-ultimate",
    displayName: "Super Smash Bros: Ultimate",
    tags: [1],
    key: "b69ae49804c3ca6824fc4b5b177e713a",
    price: {
      usd: 59.9,
      thb: 1990,
    },
    description:
      "Fighters!\nAll past Super Smash Bros. fighters join the battle. Every single one!\n74 fightersplus DLC\nPokémon Trainer counts as one; number includes Echo Fighters.\nStages\nMore than 100 stages! Returning stages have been powered up and every stage has Battlefield and Final Destination versions.",
  },
  {
    id: 2,
    name: "forza-horizon-5",
    displayName: "Forza Horizon 5",
    tags: [2],
    key: "57b148ed401449b997061af1651b16d4",
    price: {
      usd: 59.99,
      thb: 1899,
    },
    description:
      "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.\nExplore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano. The diverse landscapes of Mexico are waiting to be explored.\nImmerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love. Meet new characters and choose the outcomes of their Horizon Story missions. Complete challenges to earn rewards and unlock new cars, events, and activities.\nExperience the thrill of driving hundreds of the world’s greatest cars. Collect, customize, and upgrade your fleet of cars,",
  },
  {
    id: 3,
    name: "fifa-23",
    displayName: "EA SPORTS™ FIFA 23",
    tags: [3],
    key: "40fed5d60f27f35b0ee2f30ea618fba8",
    price: {
      usd: 69.99,
      thb: 1899,
    },
    description:
      "EA SPORTS™ FIFA 23 innovates across the game, FOOTBALL INTELLIGENCE unlocks an unprecedented platform for gameplay realism, FIFA Ultimate Team™ offers more ways to build your dream squad, and EA SPORTS VOLTA returns the game to the street, with an authentic form of small-sided football.\nFIFA 23 innovates across the game, FOOTBALL INTELLIGENCE unlocks an unprecedented platform for gameplay realism, FIFA Ultimate Team™ offers more ways to build your dream squad, and EA SPORTS VOLTA returns the game to the street, with an authentic form of small-sided football.\nFIFA 23 innovates across the game, FOOTBALL INTELLIGENCE unlocks an unprecedented platform for gameplay realism, FIFA Ultimate Team™ offers more ways to build your dream squad, and EA SPORTS VOLTA returns the game to the street, with an authentic form of small-sided football.",
  },
  {
    id: 4,
    name: "portal-2",
    displayName: "Portal 2",
    tags: [4],
    key: "40fed5d60f27f35b0ee2f30ea618fba8",
    price: {
      usd: 9.99,
      thb: 220,
    },
    description:
      "Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.\nThe single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game.",
  },
  {
    id: 5,
    name: "crusader-kings-3",
    displayName: "Crusader Kings III",
    tags: [5, 6],
    key: "e3f36a6a8c9979d70c47a7d5182a1e2f",
    price: {
      usd: 49.99,
      thb: 749,
    },
    description:
      "Your legacy awaits. Choose your noble house and lead your dynasty to greatness in a Middle Ages epic that spans generations. War is but one of many tools to establish your reign, as real strategy requires expert diplomatic skill, mastery of your realm, and true cunning. Crusader Kings III continues the popular series made by Paradox Development Studio, featuring the widely acclaimed marriage of immersive grand strategy and deep, dramatic medieval roleplaying.",
  },
  {
    id: 6,
    name: "stardew-valley",
    displayName: "Stardew Valley",
    tags: [6],
    key: "161f44982f0fd4223f50e4aff23f07aa",
    price: {
      usd: 14.99,
      thb: 315,
    },
    description:
      "Stardew Valley is an open-ended country-life RPG with support for 1–4 players. You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
  },
  {
    id: 7,
    name: "minecraft",
    displayName: "Minecraft",
    tags: [7],
    key: "e3416675e3a20772d0b78f45f4ce995d",
    price: {
      usd: 29.99,
      thb: 1059,
    },
    description:
      "Minecraft is a game about placing blocks and going on adventures. Now you can explore amazing community-made maps, thrilling minigames and more! Survive online with friends on console, mobile, and Windows 10, or share the adventure at home in split-screen multiplayer. Available as a physical disc or digitally from the Xbox Store.",
  },
  {
    id: 8,
    name: "game-of-thrones-the-board-game",
    displayName: "A Game Of Thrones: The Board Game Digital Edition",
    tags: [5, 6],
    key: "d42d6d8d201f8db55d083dd1a8b31150",
    price: {
      usd: 16.99,
      thb: 599,
    },
    description:
      "A Game of Thrones: The Board Game is a game of conquest and betrayal set in the world of George R.R. Martin’s best-selling A Song of Ice and Fire novels. In the game, 3 to 6 players take on the roles of the noble Houses of Westeros, and vie for control of the Iron Throne. Players will choose their allegiances to one of the Great Houses of Westeros, such as Stark, Lannister, Baratheon, or Targaryen, and attempt to win the Iron Throne by advancing their agenda through the use of military strength, political influence, and economic power. The game is played on a map of Westeros, which is divided into 19 regions, each of which is controlled by a Great House. Players will move their armies and fleets around the board, attempting to gain control of the regions, and to win the support of the Great Houses of Westeros. The game is played over the course of seven rounds, and the player who has the most victory points at the end of the seventh round wins the game.",
  },
  {
    id: 9,
    name: "for-honor",
    displayName: "For Honor",
    tags: [1, 6],
    key: "40021c2df331dcfc40e5d085d00a1a44",
    price: {
      usd: 11.5,
      thb: 400,
    },
    description:
      "Enter the chaos of war as a bold Knight, a brutal Viking, or a deadly Samurai. Play the thrilling story campaign or fight in brutal PvP modes, now on new dedicated servers. Experience the thrill of the fight in For Honor, a brand-new game developed by Ubisoft Montreal for the PC, PlayStation®4 system, and Xbox One.",
  },
  {
    id: 10,
    name: "wrc-generations",
    displayName: "WRC Generations - The FIA WRC Official Game",
    tags: [2],
    key: "ef55a12431c06ee6d6937853ddb0a04c",
    price: {
      usd: 16.5,
      thb: 579,
    },
    description:
      "2022 will see the WRC transition to the hybrid era. This is a revolution for the rally world, significantly affecting performance, changing strategies and making drivers and teams adapt.\nIn terms of gameplay, new mechanics have been integrated to represent the demands of the hybrid engines. In order to win, you have to carefully manage your battery by adapting your engine mapping throughout the special stages you take part in.",
  },
  {
    id: 11,
    name: "f1r-22",
    displayName: "F1® 22",
    tags: [2],
    key: "13381ccd823e7fc0bf4e9fe59cca1487",
    price: {
      usd: 44.49,
      thb: 1599,
    },
    description:
      "Race the stunning, new cars of the Formula 1® 2022 season with the authentic lineup of all 20 drivers and 10 teams, and take control of your race experience with new immersive or broadcast race sequences. Create a team and take them to the front of the grid with new depth in the acclaimed My Team career mode, race head-to-head in split-screen or multiplayer, or change the pace by taking supercars from some of the sport’s biggest names to the track in our all-new Pirelli Hot Laps feature.",
  },
  {
    id: 12,
    name: "madden-nfl-23",
    displayName: "Madden NFL 23",
    tags: [3],
    key: "7b37ff7b76609013b5008c6b4ee543ef",
    price: {
      usd: 44.49,
      thb: 1599,
    },
    description:
      "Play your way into the history books in Madden NFL 23.\nControl your impact with every decision in all-new ways. Call the shots in Franchise with free agency and trade logic updates, play your way into the history books in Face of the Franchise: The League, and assemble the most powerful roster in all of Madden Ultimate Team™.",
  },
  {
    id: 13,
    name: "cs-go",
    displayName: "Counter-Strike: Global Offensive",
    tags: [0, 5],
    key: "4ead32603bb381696244c742f1f444ce",
    price: {
      usd: 6.69,
      thb: 239,
    },
    description:
      "'Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999,' said Doug Lombardi at Valve. 'For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. We're excited to continue the legacy.'",
  },
  {
    id: 14,
    name: "phasmophobia",
    displayName: "Phasmophobia",
    tags: [8],
    key: "d2cabfa6ec33b078bce3a38127199520",
    price: {
      usd: 6.69,
      thb: 239,
    },
    description:
      "Phasmophobia is a multiplayer (4-10 players) co-op horror game, where players are ghost hunters equipped with the latest ghost hunting technology. Players must work together to gather as much evidence as possible and escape the haunted location before their sanity gives out.",
  },
  {
    id: 15,
    name: "slender-fortress-2",
    displayName: "Slender Fortress 2",
    tags: [8],
    price: {
      usd: 2.99,
      thb: 100,
    },
    description:
      "Slender Fortress is composed of several maps, all different with a variety of bosses hunting the RED team down as they search for pages. However, the goal can differ, such as instead waiting for Escapes to arrive. All RED members, regardless of class, are heavily modified to fit Slender Fortress's gameplay. They all walk slowly, but can sprint under the limit of a stamina meter, are reduced only to their melee weapons, and wield a flashlight.",
  },
  {
    id: 16,
    name: "rust",
    displayName: "Rust",
    tags: [7],
    price: {
      usd: 4.59,
      thb: 147,
    },
    description:
      "No, it's not the programming language, Rust is a survival game developed by Facepunch Studios. Rust is a multiplayer-only survival video game developed and published by Facepunch Studios. The game was released for Microsoft Windows on February 8, 2018, with support for macOS and Linux planned in the future. A standalone version of the game, titled Rust: Console Edition, was released for PlayStation 4 and Xbox One on May 21, 2019.",
  },
  {
    id: 17,
    name: "nba-2k23",
    displayName: "NBA 2K23",
    tags: [3],
    key: "_",
    price: {
      usd: 41.5,
      thb: 1490,
    },
    description:
      "NBA 2K23 is the latest installment in the world-renowned, best-selling NBA 2K series, delivering an industry-leading sports video game experience. With extensive improvements upon its best-in-class graphics and gameplay, competitive and community online features, and deep, varied game modes, NBA 2K23 offers one-of-a-kind immersion into all facets of NBA basketball and culture - where Everything is Game.",
  },
  {
    id: 18,
    name: "football-manager-2023",
    displayName: "Football Manager 2023",
    tags: [3],
    key: "_",
    price: {
      usd: 40.69,
      thb: 1459,
    },
    description:
      "Football Manager 2023 is the latest release in the award-winning and record-breaking series. Putting you in the hot seat of any soccer club in more than 50 countries across the world, Football Manager 2023 is the closest thing to doing the job for real.",
  },
  {
    id: 19,
    name: "pga-tour-2k23",
    displayName: "PGA TOUR 2K23",
    tags: [3],
    key: "_",
    price: {
      usd: 41.99,
      thb: 1499,
    },
    description:
      "PGA TOUR 2K23 is the latest installment in the world-renowned, best-selling PGA TOUR series, delivering an industry-leading sports video game experience. With extensive improvements upon its best-in-class graphics and gameplay, competitive and community online features, and deep, varied game modes, PGA TOUR 2K23 offers one-of-a-kind immersion into all facets of golf and culture - where Everything is Game.",
  },
  {
    id: 20,
    name: "wwe-2k22",
    displayName: "WWE 2K22",
    tags: [1, 3],
    key: "_",
    price: {
      usd: 41.5,
      thb: 1490,
    },
    description:
      "WWE 2K22 is the latest installment in the world-renowned, best-selling WWE video game franchise and features cover Superstar Roman Reigns. WWE 2K22 will deliver fun, authentic and hard-hitting action, including the largest roster of playable characters in franchise history, a new grapple carry system, new weight detection, and significant gameplay improvements, in addition to returning fan-favorite features and game modes. WWE 2K22 will also feature key partnerships with the WWE and its global partners, including the return of the 2K Showcase mode, which will feature a story highlighting the career of Roman Reigns.",
  },
  {
    id: 21,
    name: "escape-simulator",
    displayName: "Escape Simulator",
    tags: [4],
    key: "_",
    price: {
      usd: 6.69,
      thb: 239,
    },
    description:
      "Escape Simulator is a first-person puzzler you can play solo or in an online co-op. Explore a growing set of highly interactive escape rooms. Move furniture, pick up and examine everything, smash pots and break locks! Supports community-made rooms through the level editor.",
  },
  {
    id: 22,
    name: "sid-meier's-civilization-vi",
    displayName: "Sid Meier’s Civilization® VI",
    tags: [5, 6],
    key: "_",
    price: {
      usd: 44.59,
      thb: 1600,
    },
    description:
      "Civilization VI offers new ways to engage with your world: cities now physically expand across the map, active research in technology and culture unlocks new potential, and competing leaders will pursue their own agendas based on their historical traits as you race for one of five ways to achieve victory in the game.",
  },
  {
    id: 23,
    name: "ghost-watchers",
    displayName: "Ghost Watchers",
    tags: [8],
    key: "_",
    price: {
      usd: 6.69,
      thb: 239,
    },
    description:
      "Ghost Watchers is a multiplayer horror game where you and your friends play as ghost hunters. You must work together to find and capture ghosts, and escape the haunted location before your sanity gives out.",
  },
  {
    id: 24,
    name: "dead-by-daylight",
    displayName: "Dead by Daylight",
    tags: [8],
    key: "_",
    price: {
      usd: 10.99,
      thb: 369,
    },
    description:
      "Dead by Daylight is an asymmetrical multiplayer horror game in which one crazed killer hunts down four survivors through a terrifying nightmarish world. Survivors play in third-person and have the advantage of better situational awareness. The Killer plays in first-person and is more focused on their prey. The survivors' goal in each encounter is to escape the Killing Ground without getting caught and sacrificed to the Entity. The Killer's goal is to sacrifice all of the Survivors to the Entity.",
  },
  {
    id: 25,
    name: "ark-survival-evolved",
    displayName: "ARK: Survival Evolved",
    tags: [7],
    key: "_",
    price: {
      usd: 8.99,
      thb: 289,
    },
    description:
      "ARK: Survival Evolved is an action-adventure survival video game developed and published by Studio Wildcard. The game is available for Microsoft Windows, macOS, Linux, PlayStation 4, Xbox One, Nintendo Switch, and Android, with a mobile version for iOS. It is set in the fictional Ark universe, where a planet-wide flood has wiped out most life on Earth, and the remaining survivors are struggling to survive on the ark",
  },
  {
    id: 26,
    name: "don't-starve-together",
    displayName: "Don't Starve Together",
    tags: [7],
    key: "_",
    price: {
      usd: 6.69,
      thb: 239,
    },
    description:
      "Don't Starve Together is the standalone multiplayer expansion of the uncompromising survival game Don't Starve. Now including Reign of Giants, Don't Starve Together is the uncompromising wilderness survival game full of science and magic. Enter a strange and unexplored world full of strange creatures, dangers, and surprises. Gather resources to craft items and structures that match your survival style. Play your way as you unravel the mysteries of this strange land.",
  },
  {
    id: 27,
    name: "unravel",
    displayName: "Unravel",
    tags: [7],
    key: "286eec3ab2ec1d6bacb6361a74b4ae30",
    price: {
      usd: 15.05,
      thb: 540,
    },
    description:
      "Unravel is a physics-based puzzle platformer starring Yarny, a character made from a single thread of yarn. Players guide Yarny through a series of levels, unraveling the world around him to solve puzzles and overcome obstacles. The game features a unique physics-based gameplay mechanic, where players can unravel Yarny to create bridges, ramps, and other objects to progress through the game.",
  },
  {
    id: 28,
    name: "the-past-within",
    displayName: "The Past Within",
    tags: [7],
    key: "2b7e5256d89b1e4b481bce53cac9c49c",
    price: {
      usd: 3.76,
      thb: 135,
    },
    description:
      "The Past Within is a first-person psychological horror game that takes place in a mysterious mansion. The player must explore the mansion and solve puzzles to find out what happened to the previous owner of the mansion.",
  },
  {
    id: 29,
    name: "human-fall-flat",
    displayName: "Human Fall Flat",
    tags: [7],
    key: "2b7e5256d89b1e4b481bce53cac9c49c",
    price: {
      usd: 2.63,
      thb: 94.5,
    },
    description:
      "Explore a world where puzzles are gigantic, and the challenges even bigger! Human has shrunk!",
  },
  {
    id: 30,
    name: "hogwarts-legacy",
    displayName: "Hogwarts Legacy",
    tags: [6, 7],
    key: "f241f4023df6233784c9ead350483e8a",
    price: {
      usd: 44.38,
      thb: 1590,
    },
    description:
      "Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.",
  },
  {
    id: 31,
    name: "coral-island",
    displayName: "Coral Island",
    tags: [5, 6, 7],
    key: "d2ebed4eaf58509dcc358e1782c38fea",
    price: {
      usd: 12.53,
      thb: 449,
    },
    description:
      "It’s time to leave big-city life in Pokyo behind and start a new chapter of your life on Coral Island!\nBe who you want and create the idyllic farm of your dreams, where you’ll tend crops, nurture animals, and build a bond with the natural world around you. Help revitalize the nearby town and its surrounding coral reefs, and forge relationships with a vibrant community of more than 70 fellow people who call Coral Island home. ",
  },
  {
    id: 32,
    name: "project-zomboid",
    displayName: "Project Zomboid",
    tags: [5],
    key: "a0aefe9779cc1c7141b59c2677ea37d9",
    price: {
      usd: 8.06,
      thb: 289,
    },
    description:
      "Project Zomboid is a zombie-infested, sandbox-style, massively multiplayer, survival horror game. It is a game of survival, exploration, and character development, set in a realistic and dangerous post-apocalyptic world. The game is currently in development by The Indie Stone, a small independent game development studio based in the UK.",
  },
  {
    id: 33,
    name: "assetto-corsa",
    displayName: "Assetto Corsa",
    tags: [2],
    key: "55262cb5ae43f54cb2328f9b56003b31",
    price: {
      usd: 8.06,
      thb: 289,
    },
    description:
      "Assetto Corsa is a racing simulator developed by Kunos Simulazioni. It features a wide variety of cars and tracks, and is considered to be one of the most realistic racing simulators available.",
  },
  {
    id: 34,
    name: "grand-prix-story",
    displayName: "Grand Prix Story",
    tags: [2],
    key: "e25915b3fec883526756d435264c2cff",
    price: {
      usd: 5.58,
      thb: 200,
    },
    description: "Grand",
  },
  {
    id: 35,
    name: "cities-skylines",
    displayName: "Cities: Skylines",
    tags: [5],
    key: "900bc885d7553375aec470198a9514f3",
    price: {
      usd: 19.5,
      thb: 699,
    },
    description:
      "Cities: Skylines is a city-building game developed by Colossal Order and published by Paradox Interactive. The game was released on March 10, 2015 for Microsoft Windows, OS X, and Linux. The game is a modern take on the classic city simulation. The game allows the player to create and control a city featuring many aspects of real-life cities, including zoning, public transport, taxation, and education.",
  },
  {
    id: 36,
    name: "going-medieval",
    displayName: "Going Medieval",
    tags: [5, 6],
    key: "de4667d1f44423b565b07a7bb14790fc",
    price: {
      usd: 8.89,
      thb: 319,
    },
    description:
      "Going Medieval is a medieval city builder game. The player must build a thriving city and defend it from the hordes of monsters that attack it. The game features a unique combat system where the player must use the environment to their advantage to defeat the monsters.",
  },
  {
    id: 37,
    name: "south-park-the-stick-of-truth",
    displayName: "South Park™: The Stick of Truth™",
    tags: [6, 7],
    key: "fb45615cea1183af03479d88ad4da5cd",
    price: {
      usd: 22.31,
      thb: 800,
    },
    description:
      "South Park: The Stick of Truth is a role-playing video game based on the American animated television series South Park. The game was developed by Obsidian Entertainment and published by Ubisoft. It was released for Microsoft Windows, PlayStation 3, and Xbox 360 on March 4, 2014.",
  },
  {
    id: 38,
    name: "cat-quest",
    displayName: "Cat Quest",
    tags: [6],
    key: "2b7e5256d89b1e4b481bce53cac9c49c",
    price: {
      usd: 8.06,
      thb: 289,
    },
    description:
      "Leap into a grand adventure in purrsuit of the evil Drakoth and your catnapped sister! Explore Felingard's huge overworld map, risk life and limb delving into dungeons for epic loot, and lend a paw to a furry cast of characters in a flurry of side quests.",
  },
  {
    id: 39,
    name: "cardfight-vanguard-dear-days",
    displayName: "Cardfight!! Vanguard Dear Days",
    tags: [5],
    key: "5dd2199ad68327cc76d583b057aee7d5",
    price: {
      usd: 35.15,
      thb: 1259.99,
    },
    description:
      "1-on-1 battle card game developed by Bushiroad and launched in February 2011.Localized in English, Chinese, Italian, Thai, Korean, etc., it's sold in 61 countries and regions worldwide, continuing to grow in popularity.\nIt also includes media such as animations and comics, and in 2021, on the project's 10th anniversary, the new series 'CARDFIGHT!! VANGUARD overDress' began.",
  },
  {
    id: 40,
    name: "the-forest-of-dizzling-rain",
    displayName: "The Forest of Drizzling Rain",
    tags: [8],
    key: "23678db5efde9ab46bce8c23a6d91b50",
    price: {
      usd: 6.94,
      thb: 249,
    },
    description:
      "First released on 'Freem!' October 11, 2013, the exploration horror game The Forest of Drizzling Rain is now coming to Steam with a full remake!\nPlaying as Shiori Kanzaki, you will get to enjoy her visit to Azakawa Village, right up until you are plunged into a world of fear.",
  },
  {
    id: 41,
    name: "the-sims-4",
    displayName: "The Sims 4",
    tags: [6],
    key: "3ce0cc53acc2d48ad12df7c3e9f4e973",
    price: {
      usd: 7.99,
      thb: 279,
    },
    description:
      "Create unique Sims, build dream homes, and let them live your way! Explore beautiful worlds with unique environments and travel to neighborhoods where you can visit venues and meet other interesting Sims. Be powerful and free, have fun, and play with life!",
  },
  {
    id: 42,
    name: "cod-black-ops-4",
    displayName: "Call of Duty®: Black Ops 4",
    tags: [0],
    key: "417a7c287e010a6282c1941695ba0173",
    price: {
      usd: 19.99,
      thb: 699,
    },
    description:
      "Call of Duty®: Black Ops 4 is the most robust, refined, and customizable PC shooter experience we've ever created. With a new level of online action across a variety of new weaponry, maps, and modes",
  },
  {
    id: 43,
    name: "dark-souls-3",
    displayName: "Dark Souls™ III",
    tags: [1],
    key: "86c0365998eb933cbd46eb29618befd6",
    price: {
      usd: 19.99,
      thb: 699,
    },
    description:
      "Dark Souls III continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Fans and newcomers alike will get lost in the games hallmark rewarding gameplay and immersive graphics. Now only embers remain...",
  },
  {
    id: 44,
    name: "100-hidden-frogs",
    displayName: "100 Hidden Frogs",
    tags: [4],
    key: "94aeaf4dd9017ca607cf618ce54fa754",
    price: {
      usd: 1.99,
      thb: 69,
    },
    description:
      "100 hidden frogs is a hidden object game in the magic forest setting. Black and white hand-drawn graphics in a cartoon style. It's a fun but challenging adventure.",
  },
  {
    id: 45,
    name: "battlefield-1",
    displayName: "Battlefield™ 1",
    tags: [0],
    key: "4af611459e304587fad046e4d760048f",
    price: {
      usd: 29.99,
      thb: 1099,
    },
    description:
      "Battlefield 1 is a first-person shooter video game developed by EA DICE and published by Electronic Arts. It is the fifteenth installment in the Battlefield series, and the first main entry in the series since Battlefield 4. The game was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on October 21, 2016.",
  },
  {
    id: 46,
    name: "rb6-siege",
    displayName: "Tom Clancy's Rainbow Six® Siege",
    tags: [0],
    key: "651313edaf974e07d2946e75dd181e4f",
    price: {
      usd: 15.99,
      thb: 540,
    },
    description:
      "Tom Clancy's Rainbow Six Siege is the latest installment of the acclaimed first-person shooter franchise developed by the renowned Ubisoft Montreal studio. The game puts heavy emphasis on environmental destruction and cooperation between players. The gameplay is divided into two phases: attacking and defending. During the attacking phase, players must breach the enemy's defenses using a variety of tactics and gadgets. During the defending phase, players must use their environment to their advantage in order to prevent the attackers from completing their objective. The game features a huge variety of maps, each with its own unique layout and design. The game also features a wide variety of characters, each with their own unique set of skills and abilities.",
  },
  {
    id: 47,
    name: "the-forest",
    displayName: "The Forest",
    tags: [8],
    key: "bea6ad1c3d800dfaa156cac68a2d4803",
    price: {
      usd: 8.99,
      thb: 289,
    },
    description:
      "The Forest is a first-person survival horror game developed by Endnight Games. The game is set in a forest environment and follows a plane crash survivor who must survive against cannibalistic mutants. The game features a crafting system, which allows the player to create weapons and tools to defend themselves against the mutants. The game also features a multiplayer mode, which allows up to eight players to play together in a co-operative mode. The game was released on Steam Early Access on March 2, 2014, and was released in full on August 30, 2018.",
  },
  {
    id: 48,
    name: "resident-evil-4",
    displayName: "Resident Evil 4",
    tags: [0, 8],
    key: "6e62ef56e66a7b6b334dcbcd268efd6c",
    price: {
      usd: 7.99,
      thb: 279,
    },
    description:
      "Resident Evil 4 is a third-person shooter survival horror game developed and published by Capcom. It was originally released for the GameCube in 2005, and has since been ported to multiple platforms, including PlayStation 4, Xbox One, Microsoft Windows, and Nintendo Switch. The game is the sixth installment in the Resident Evil series, and the first numbered entry since Resident Evil 2 in 1998. It follows the story of U.S. government agent Leon S. Kennedy, who is sent on a mission to rescue the President's daughter who has been kidnapped. While investigating the incident, he encounters a mysterious cult that worships a powerful entity known as Las Plagas.",
  },
  {
    id: 49,
    name: "call-of-duty-modern-warfare-2",
    displayName: "Call of Duty®: Modern Warfare® II",
    tags: [0],
    key: "6e62ef56e66a7b6b334dcbcd268efd6c",
    price: {
      usd: 69.99,
      thb: 2322,
    },
    description: "",
  },
  {
    id: 50,
    name: "apex-legend",
    displayName: "Apex Legends™",
    tags: [0, 5],
    key: "91171bb9b9434d8f00c8401abd4732b6",
    price: {
      usd: 19.99,
      thb: 399,
    },
    description: "",
  },
  {
    id: 51,
    name: "battlefield-2042",
    displayName: "Battlefield™ 2042",
    key: "9fdd51d02f8df924e213a9dfbfa59259",
    tags: [0],
    price: {
      usd: 45.99,
      thb: 1599,
    },
    description: "",
  },
  {
    id: 52,
    name: "left-4-dead-2",
    displayName: "Left 4 Dead 2",
    tags: [0, 8],
    key: "89390dc77d1428a4e14b4bb95823f969",
    price: {
      usd: 6.99,
      thb: 220,
    },
    description: "",
  },
  {
    id: 53,
    name: "fallout-4",
    displayName: "Fallout 4",
    tags: [0, 5, 6, 7],
    key: "eec18f794e3e1cdbb596129a3d192115",
    price: {
      usd: 24.59,
      thb: 660,
    },
    description: "",
  },
  {
    id: 54,
    name: "one-piece-pirate-warriors-4",
    displayName: "ONE PIECE: PIRATE WARRIORS 4",
    tags: [1, 6],
    key: "4b19100066dd837585e44aea6345bead",
    price: {
      usd: 70,
      thb: 1990,
    },
    description: "",
  },
  {
    id: 55,
    name: "tekken-7",
    displayName: "TEKKEN 7",
    tags: [1],
    key: "ghjmkhgfdvgbhjkhhj416546",
    price: {
      usd: 99.99,
      thb: 2690,
    },
    description: "",
  },
  {
    id: 56,
    name: "dragon-ball-fighter-z",
    displayName: "DRAGON BALL FighterZ",
    tags: [1],
    key: "cvxgf4h58j5h2g1f45gch8bj521fg4c",
    price: {
      usd: 79.99,
      thb: 1700,
    },
    description: "",
  },
];

export default games;
