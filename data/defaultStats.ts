import Stats from "@/schema/stats";
import { Parliament } from "@/schema/stats";

type Country = {
  capital: string;
  president: string;
  currency: string;
  continent: string;
  language: string;
};

type PoliticalParty = {
  nationalist: string[];
  islamist: string[];
  democratic: string[];
  communist: string[];
  green: string[];
  republican: string[];
};

const easyStats: Stats = {
  presidentInfo: {
    name: "John Doe",
    party: "Liberal Party",
    term: "2021-2025",
    money: 500000000,
    age: 50,
    partyName: "Liberal Party",
  },
  gameData: {
    date: "01.01.2021",
    day: 1,
    new: true,
    difficulty: "easy",
  },
  countryInfo: {
    name: "Developedland",
    population: 70000000,
    area: 300000,
    capital: "Developed City",
    currency: "Developed Dollar",
    continent: "Europe",
    language: "English",
  },
  support: {
    citizens: {
      conservative: 40,
      liberal: 80,
    },
    parliament: {
      democratic: 90,
      green: 60,
      nationalist: 30,
      islamist: 20,
      communist: 10,
      republican: 10,
    },
    judiciary: {
      supremeCourt: 80,
      highCourt: 75,
    },
    military: {
      army: 80,
      airForce: 85,
      navy: 75,
    },
    international: {
      global: 80,
      eastern: 50,
      western: 85,
      middleEast: 60,
      unitedNations: 85,
      europeanUnion: 90,
      SAARC: 70,
      OIC: 60,
      ASEAN: 75,
      IMF: 90,
    },
  },
  moral: {
    approval: 85,
    happiness: 85,
    stability: 80,
    security: 90,
    economy: 80,
    healthcare: 90,
    education: 90,
    religion: 60,
    humanRights: 85,
    infrastructure: 90,
    technology: 80,
    environment: 80,
    tourism: 85,
    culture: 80,
    crime: 20,
    corruption: 10,
  },
  finance: {
    treasury: 200000000000,
    income: 15000000000,
    expense: 12000000000,
    debt: 5000000000,
    tax: {
      incomeTax: 25,
      corporateTax: 22,
      propertyTax: 10,
      salesTax: 10,
      importTax: 5,
      exportTax: 5,
    },
  },
};

const defaultStats: Stats = {
  presidentInfo: {
    name: "",
    party: "",
    term: "2021-2025",
    money: 250000000,
    age: 50,
    partyName: "",
  },
  gameData: {
    date: "01.01.2021",
    day: 1,
    new: true,
    difficulty: "normal",
  },
  countryInfo: {
    name: "",
    population: 100000000,
    area: 231942,
    capital: "",
    currency: "",
    continent: "",
    language: "",
  },
  support: {
    citizens: {
      conservative: 60,
      liberal: 60,
    },
    parliament: {
      democratic: 50,
      green: 50,
      nationalist: 50,
      islamist: 50,
      communist: 50,
      republican: 50,
    },
    judiciary: {
      supremeCourt: 60,
      highCourt: 60,
    },
    military: {
      army: 60,
      airForce: 60,
      navy: 60,
    },
    international: {
      global: 60,
      eastern: 60,
      western: 60,
      middleEast: 60,
      unitedNations: 60,
      europeanUnion: 60,
      SAARC: 60,
      OIC: 60,
      ASEAN: 60,
      IMF: 60,
    },
  },
  moral: {
    approval: 60,
    happiness: 60,
    stability: 60,
    security: 60,
    economy: 60,
    healthcare: 60,
    education: 60,
    religion: 60,
    humanRights: 60,
    infrastructure: 60,
    technology: 60,
    environment: 60,
    tourism: 60,
    culture: 60,
    crime: 40,
    corruption: 40,
  },
  finance: {
    treasury: 100000000000,
    income: 5000000000,
    expense: 5000000000,
    debt: 20000000000,
    tax: {
      incomeTax: 15,
      corporateTax: 15,
      propertyTax: 15,
      salesTax:15,
      importTax: 15,
      exportTax:15,
    },
  },
};

const toughStats: Stats = {
  presidentInfo: {
    name: "Ahmed Ali",
    party: "Nationalist Party",
    term: "2021-2025",
    money: 10000000,
    age: 45,
    partyName: "Nationalist Party",
  },
  gameData: {
    date: "01.01.2021",
    day: 1,
    new: true,
    difficulty: "tough",
  },
  countryInfo: {
    name: "Less Developedland",
    population: 200000000,
    area: 500000,
    capital: "Underdeveloped City",
    currency: "Poorland Currency",
    continent: "Africa",
    language: "Local Language",
  },
  support: {
    citizens: {
      conservative: 60,
      liberal: 40,
    },
    parliament: {
      democratic: 20,
      green: 10,
      nationalist: 60,
      islamist: 50,
      communist: 20,
      republican: 20,
    },
    judiciary: {
      supremeCourt: 40,
      highCourt: 35,
    },
    military: {
      army: 50,
      airForce: 40,
      navy: 30,
    },
    international: {
      global: 40,
      eastern: 50,
      western: 30,
      middleEast: 70,
      unitedNations: 20,
      europeanUnion: 10,
      SAARC: 15,
      OIC: 60,
      ASEAN: 25,
      IMF: 10,
    },
  },
  moral: {
    approval: 40,
    happiness: 30,
    stability: 40,
    security: 50,
    economy: 30,
    healthcare: 20,
    education: 25,
    religion: 80,
    humanRights: 30,
    infrastructure: 25,
    technology: 20,
    environment: 30,
    tourism: 10,
    culture: 50,
    crime: 80,
    corruption: 70,
  },
  finance: {
    treasury: 5000000000,
    income: 200000000,
    expense: 500000000,
    debt: 20000000000,
    tax: {
      incomeTax: 5,
      corporateTax: 10,
      propertyTax: 5,
      salesTax: 10,
      importTax: 15,
      exportTax: 10,
    },
  },
};

const countriesWithDetails: { [key: string]: Country } = {
  Avaloria: {
    continent: "Europe",
    capital: "Glorindale",
    president: "Frederick P. Carlisle",
    currency: "Avalorian Taka",
    language: "English",
  },
  Belmonte: {
    continent: "Europe",
    capital: "Montcairn",
    president: "Sebastian L. Hawthorne",
    currency: "Belmontian Taka",
    language: "English",
  },
  Clytherion: {
    continent: "Europe",
    capital: "Lytharia",
    president: "Theodore W. Ellesmere",
    currency: "Clytherian Taka",
    language: "English",
  },
  Westmarch: {
    continent: "Europe",
    capital: "Elderhaven",
    president: "Alexander R. Grayson",
    currency: "Westmarchian Taka",
    language: "English",
  },
  Florindale: {
    continent: "Europe",
    capital: "Rosemere",
    president: "Jonathan M. Whitaker",
    currency: "Florindalian Taka",
    language: "English",
  },

  AlQamar: {
    continent: "Asia",
    capital: "Lunaris",
    president: "Omar H. Al-Farouqi",
    currency: "AlQamarian Taka",
    language: "Arabic",
  },
  Zafaris: {
    continent: "Asia",
    capital: "Nouras",
    president: "Zayd M. Al-Khazraji",
    currency: "Zafarian Taka",
    language: "Arabic",
  },
  Nuristan: {
    continent: "Asia",
    capital: "Shamabad",
    president: "Khalid T. Safar",
    currency: "Nuristani Taka",
    language: "Pashto",
  },
  Qasimir: {
    continent: "Asia",
    capital: "Azmaran",
    president: "Ayman R. Al-Qassimi",
    currency: "Qasimiri Taka",
    language: "Arabic",
  },
  Bahrun: {
    continent: "Asia",
    capital: "Darwazah",
    president: "Farid I. Al-Najjar",
    currency: "Bahruni Taka",
    language: "Arabic",
  },

  Indralok: {
    continent: "Asia",
    capital: "Varanipur",
    president: "Arjun V. Chatterjee",
    currency: "Indralokian Taka",
    language: "Hindi",
  },
  Rashmipur: {
    continent: "Asia",
    capital: "Nalanda",
    president: "Rajesh P. Mehra",
    currency: "Rashmipuri Taka",
    language: "Hindi",
  },
  Dharmasena: {
    continent: "Asia",
    capital: "Sanghapur",
    president: "Ishaan R. Nair",
    currency: "Dharmasenian Taka",
    language: "Hindi",
  },
  Pakravan: {
    continent: "Asia",
    capital: "Karimnagar",
    president: "Abdul Karim Qureshi",
    currency: "Pakravani Taka",
    language: "Urdu",
  },
  Suryadesh: {
    continent: "Asia",
    capital: "Prabhasagar",
    president: "Mohammed Z. Hasan",
    currency: "Suryadeshi Taka",
    language: "Hindi",
  },

  Takeshima: {
    continent: "Asia",
    capital: "Hanasaka",
    president: "Takeshi S. Nakamura",
    currency: "Takeshiman Taka",
    language: "Japanese",
  },
  Jinwa: {
    continent: "Asia",
    capital: "Sungye",
    president: "Yong-Jin H. Park",
    currency: "Jinwan Taka",
    language: "Korean",
  },
  Sungnam: {
    continent: "Asia",
    capital: "Gwanseong",
    president: "Chen Wei-Lin",
    currency: "Sungnami Taka",
    language: "Korean",
  },
  Hanlorei: {
    continent: "Asia",
    capital: "Lingzhen",
    president: "Haruto M. Takahashi",
    currency: "Hanlorean Taka",
    language: "Mandarin",
  },
  Ryukoshi: {
    continent: "Asia",
    capital: "Kazuhara",
    president: "Min-Jae R. Kwon",
    currency: "Ryukoshian Taka",
    language: "Japanese",
  },

  Akariba: {
    continent: "Africa",
    capital: "Mwanzi",
    president: "Kwame O. Adebayo",
    currency: "Akaribian Taka",
    language: "Swahili",
  },
  Zubaland: {
    continent: "Africa",
    capital: "Goromoro",
    president: "Ndidi U. Okonkwo",
    currency: "Zubalian Taka",
    language: "Swahili",
  },
  Nyasora: {
    continent: "Africa",
    capital: "Kalinda",
    president: "Juma I. Mbwana",
    currency: "Nyasoran Taka",
    language: "Swahili",
  },
  Bantuva: {
    continent: "Africa",
    capital: "Makunga",
    president: "Amara S. Ndlovu",
    currency: "Bantuvian Taka",
    language: "Swahili",
  },
  Marekeni: {
    continent: "Africa",
    capital: "Sondari",
    president: "Thabo Z. Kumalo",
    currency: "Marekenian Taka",
    language: "Swahili",
  },

  CostaVerde: {
    continent: "South America",
    capital: "Puerto Verde",
    president: "Carlos E. Velasquez",
    currency: "CostaVerdean Taka",
    language: "Spanish",
  },
  Montarico: {
    continent: "South America",
    capital: "Sierra Roja",
    president: "Javier M. Montenegro",
    currency: "Montarican Taka",
    language: "Spanish",
  },
  SierraAzul: {
    continent: "South America",
    capital: "Cielo Azul",
    president: "Andrés F. Guzmán",
    currency: "SierraAzulian Taka",
    language: "Spanish",
  },
  Valentora: {
    continent: "South America",
    capital: "Florencia",
    president: "Esteban R. Delgado",
    currency: "Valentorian Taka",
    language: "Spanish",
  },
  Solterra: {
    continent: "South America",
    capital: "Luzmarina",
    president: "Raul T. Espinosa",
    currency: "Solterrian Taka",
    language: "Spanish",
  },

  Volkovia: {
    continent: "Europe",
    capital: "Petrograd",
    president: "Ivan V. Petrov",
    currency: "Volkovian Taka",
    language: "Russian",
  },
  Krasnovia: {
    continent: "Europe",
    capital: "Vladrosk",
    president: "Dmitry K. Volkov",
    currency: "Krasnovian Taka",
    language: "Russian",
  },
  Dragovost: {
    continent: "Europe",
    capital: "Zarnograd",
    president: "Miroslav N. Dragović",
    currency: "Dragovostian Taka",
    language: "Serbian",
  },
  Belogradia: {
    continent: "Europe",
    capital: "Novo Belov",
    president: "Bogdan R. Ionescu",
    currency: "Belogradian Taka",
    language: "Serbian",
  },
  Novgorand: {
    continent: "Europe",
    capital: "Staryev",
    president: "Aleksandar T. Novak",
    currency: "Novgorandian Taka",
    language: "Russian",
  },

  Thanapura: {
    continent: "Asia",
    capital: "Angkoran",
    president: "Phuong T. Nguyen",
    currency: "Thanapurian Taka",
    language: "Khmer",
  },
  Kampurak: {
    continent: "Asia",
    capital: "Phnom Raya",
    president: "Aung K. Than",
    currency: "Kampuraki Taka",
    language: "Khmer",
  },
  Singalaya: {
    continent: "Asia",
    capital: "Meraputra",
    president: "Somchai R. Chaiyaphum",
    currency: "Singalayan Taka",
    language: "Malay",
  },
  Javanara: {
    continent: "Asia",
    capital: "Surabumi",
    president: "Dewi H. Sukarno",
    currency: "Javanaran Taka",
    language: "Javanese",
  },
  Banyapura: {
    continent: "Asia",
    capital: "Dewanagari",
    president: "Siti N. Rahim",
    currency: "Banyapuran Taka",
    language: "Indonesian",
  },

  Turanesia: {
    continent: "Oceania",
    capital: "Koranos",
    president: "Tahu M. Whitestone",
    currency: "Turanesian Taka",
    language: "English",
  },
  Maraloka: {
    continent: "Oceania",
    capital: "Lunapulu",
    president: "Chaska W. Redbear",
    currency: "Maralokian Taka",
    language: "English",
  },
  Paluquay: {
    continent: "Oceania",
    capital: "Arianque",
    president: "Aponivi J. Rainwater",
    currency: "Paluquayan Taka",
    language: "English",
  },
  Islador: {
    continent: "Oceania",
    capital: "Havenport",
    president: "Kiona P. Greycloud",
    currency: "Isladorean Taka",
    language: "English",
  },
  Oceandria: {
    continent: "Oceania",
    capital: "Nautilus",
    president: "Ahiga S. Swiftwind",
    currency: "Oceandrian Taka",
    language: "English",
  },

  Ahonui: {
    continent: "Oceania",
    capital: "Mahiko",
    president: "Carlos E. Velasquez",
    currency: "Ahonui Taka",
    language: "Bangla",
  },
};

const politicalParties: PoliticalParty = {
  nationalist: [
    "Vanguard",
    "Patriotic Front",
    "Sovereignty Movement",
    "Nationalist Alliance",
    "Homeland Guardians",
  ],
  islamist: [
    "Unity Movement",
    "Shariah Party",
    "Brotherhood",
    "FJ Coalition",
    "Caliphate Party",
  ],
  democratic: [
    "Progress Party",
    "United Democratic Front",
    "Liberal Movement",
    "People's Alliance",
    "Freedom and Reform Party",
  ],
  communist: [
    "Liberation Front",
    "Workers' Party",
    "Red Banner Movement",
    "Socialist Unity Party",
    "Communist Vanguard",
  ],
  green: [
    "Future Party",
    "Environmental Movement",
    "Eco-Alliance",
    "Sustainable Progress Party",
    "Green Horizon Movement",
  ],
  republican: [
    "Alliance",
    "Conservative Unity Party",
    "Traditionalist Front",
    "Patriot's Coalition",
    "Liberty Party",
  ],
};

export const getStats = (
  difficulty: string,
  options?: {
    president?: string;
    partyName?: string;
    country?: string;
    capital?: string;
    presidentAge?: number;
    partyType?: string;
    continent?: string;
    language?: string;
    currency?: string;
  }
): Stats => {
  const {
    president,
    partyName,
    country,
    capital,
    presidentAge,
    partyType,
    continent,
    language,
    currency,
  } = options || {};
  let statsToReturn: Stats;

  switch (difficulty) {
    case "easy":
      statsToReturn = easyStats;
      break;
    case "tough":
      statsToReturn = toughStats;
      break;
    default:
      statsToReturn = defaultStats;
  }

  // pick a random country, president and capital and assign them to the stats
  const countryKeys = Object.keys(countriesWithDetails);
  const randomCountry =
    countryKeys[Math.floor(Math.random() * countryKeys.length)];
  const randomCountryData = countriesWithDetails[randomCountry];
  statsToReturn.countryInfo.name = country || randomCountry;
  statsToReturn.countryInfo.capital = capital || randomCountryData.capital;
  statsToReturn.presidentInfo.name = president || randomCountryData.president;
  statsToReturn.countryInfo.continent =
    continent || randomCountryData.continent;
  statsToReturn.countryInfo.language = language || randomCountryData.language;
  statsToReturn.countryInfo.currency = currency || randomCountryData.currency;

  const partyKeys = Object.keys(politicalParties);
  const randomPartyType = partyKeys[
    Math.floor(Math.random() * partyKeys.length)
  ] as keyof PoliticalParty;
  const randomPartyName =
    politicalParties[randomPartyType][
      Math.floor(Math.random() * politicalParties[randomPartyType].length)
    ];

  statsToReturn.presidentInfo.party = partyType || randomPartyType;
  statsToReturn.presidentInfo.partyName = partyName
    ? `${country || randomCountry} ${partyName}`
    : `${country || randomCountry} ${randomPartyName}`;

  statsToReturn.support.parliament[partyType as keyof Parliament || randomPartyType as keyof Parliament] = 90;

  statsToReturn.presidentInfo.age =
    presidentAge || Math.floor(Math.random() * 45) + 35;

  return statsToReturn;
};
