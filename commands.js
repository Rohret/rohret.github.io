var facebook = "https://www.facebook.com/adam.rohr.94";
var password = "fkcodes";
var linkedin = "https://www.linkedin.com/in/adam-r%C3%B6hr-90720ba1/";
var instagram = "https://www.instagram.com/adamrohr_/";
var github = "https://github.com/Rohret";

whoisadam = [
  "<br>",
  "Hej, Jag heter Adam Röhr!👋",
  "Jag är 24 år gammal och är inne på mitt femte och sista år på Karlstads universitet som",
  "civilingenjör inom datateknik.",
  "Utöver plugget så hänger jag med kompisar, gymmar eller umgås med min sambo. ",
  "Då jag slutade med innebandy förra året som jag har ägnat en stor del av mitt",
  "liv till, fick jag mycket extra tid som jag delvis kan lägga på att göra projekt likt denna webbsida.",
  "Back-end utveckling är det som varit mest i fokus under skolan och därav har jag mest",
  "kompetens inom det. Dock har jag på sidan av studierna lärt mig en del om front-end utveckling.",
  "Målet är att bli full-stack utvecklare och därav försöker jag lära mig alla delar.",
  "Det framgår ganska tydligt vart min kompetens ligger då jag har skapat en webbsida",
  "som liknar en terminal.😉",
  "De programmeringspråk jag är mest bekväm med är c och python. Med de sagt har jag",
  "också gjort projekt i java, c++, c#, swift, assembly och javascript (även HTML och CSS).",
  "Det bästa med den inriktning jag valt är problemlösandet.",
  "Jag tycker processen från att identifiera ett problem till att lösa det, är både kul och givande.",
  "Att bolla lösningar och problem med en grupp/team gör det ännu bättre!",
  "<br>",
];

openmail = [
  "<br>",
  '<p id="emailText">Öppnar e-post till contact@adamrohr.se... </p>',
  ,
  "<br>",
];

projects = ["<br>", "TODO....", "<br>"];

banner = [
  '<p id="startText">Adam Röhr (AR) Not A Corporation. Med ensamrätt.</p>',
  "<br>",
  "                        |                              ___      _                  ______      _          © 2022",
  "                    \\       /                         / _ \\    | |                 | ___ \\    | |         ",
  "                      .-'-.                          / /_\\ \\ __| | __ _ _ __ ___   | |_/ /___ | |__  _ __ ",
  "                 --  /     \\ --                      |  _  |/ _` |/ _` | '_ ` _  \\ |    // _ \\| '_ \\| '__|",
  "`~~^~^~^~^~^~^~^~^~^-=======-~^~^~^~~^~^~^~^~^~^~^~  | | | | (_| | (_| | | | | | | | |\\ \\ (_) | | | | |   ",
  "`~^_~^~^~-~^_~^~^_~-=========- -~^~^~^-~^~^_~^~^~^~  \\_| |_/\\__,_|\\__,_|_| |_| |_| \\_| \\_\\___/|_| |_|_|   ",
  "`~^~-~~^~^~-^~^_~^~~ -=====- ~^~^~-~^~_~^~^~~^~-~^~",
  "`~^~^~-~^~~^~-~^~~-~^~^~-~^~~^-~^~^~^-~^~^~^~^~~^~-~^~^~-~^~_~^~^~~^~-~^~ ~^~^~-~^~_~^~^~~^~-~^~ ~^~^~-~^~_~^~^~~^~-~^~ ",
  "<br>",
  '<span id="welcomeText">Välkommen till min interaktiva webbterminal!</span>',
  '<span id="welcomeText">För att få en lista med kommandon, skriv:</span> <span id="commandText">\'help\'</span><span class="color2">.</span>',
  '<span id="forMobile">OBS! Då detta är en terminal liknande webbsida </span>',
  '<span id="forMobile">fungerar det bäst på en dator!</span>',
];

onlyBanner = [
  "<br>",
  "                        |                              ___      _                  ______      _          © 2022",
  "                    \\       /                         / _ \\    | |                 | ___ \\    | |         ",
  "                      .-'-.                          / /_\\ \\ __| | __ _ _ __ ___   | |_/ /___ | |__  _ __ ",
  "                 --  /     \\ --                      |  _  |/ _` |/ _` | '_ ` _  \\ |    // _ \\| '_ \\| '__|",
  "`~~^~^~^~^~^~^~^~^~^-=======-~^~^~^~~^~^~^~^~^~^~^~  | | | | (_| | (_| | | | | | | | |\\ \\ (_) | | | | |   ",
  "`~^_~^~^~-~^_~^~^_~-=========- -~^~^~^-~^~^_~^~^~^~  \\_| |_/\\__,_|\\__,_|_| |_| |_| \\_| \\_\\___/|_| |_|_|   ",
  "`~^~-~~^~^~-^~^_~^~~ -=====- ~^~^~-~^~_~^~^~~^~-~^~",
  "`~^~^~-~^~~^~-~^~~-~^~^~-~^~~^-~^~^~^-~^~^~^~^~~^~-~^~^~-~^~_~^~^~~^~-~^~ ~^~^~-~^~_~^~^~~^~-~^~ ~^~^~-~^~_~^~^~~^~-~^~ ",
  "<br>",
];

help = [
  "<br>",
  '<span id="commandText">whoisadam</span>      Vem är Adam Röhr?',
  '<span id="commandText">social</span>         Alla sociala medier ',
  '<span id="commandText">projects</span>       Visa senaste projekten',
  '<span id="commandText">email</span>          Kontakta mig gärna!',
  '<span id="commandText">cv</span>             En länk till mitt CV',
  '<span id="commandText">banner</span>         Visar headern',
  '<span id="commandText">history</span>        Kommando historiken',
  '<span id="commandText">clear</span>          Rensar terminalen',
  "<br>",
];

commandnotfound = [
  "<br>",
  '<span id="notFound">Kommandot finns inte. Skriv: </span><span id="commandText">\'help\'</span><span id="notFound"> för att få en lista med alla kommandon.</span>',
];

openpdf = ["<br>", '<p id="emailText">Öppnar CV... </p>', "<br>"];

newline = ["<br>"];

social = [
  "<br>",
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/adamrohr' +
    "</a>",
  'github         <a href="' +
    github +
    '" target="_blank">github/rohret' +
    "</a>",
  'instagram      <a href="' +
    instagram +
    '" target="_blank">instagram/adamrohr_' +
    "</a>",
  'Facebook       <a href="' +
    facebook +
    '"target="_blank">Facebook/adamrohr' +
    "</a>",
  "<br>",
];
