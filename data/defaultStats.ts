import Stats from "@/schema/stats";

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

const defaultStats: Stats = {
  presidentInfo: {
    name: "",
    party: "",
    term: "2021-2025",
    money: 3000000,
    age: 35,
    partyName: "",
  },
  gameData: {
    date: "01.01.2021",
    day: 1,
  },
  countryInfo: {
    name: "",
    population: 171000000,
    area: 147570,
    capital: "",
    currency: "",
    continent: "",
    language: "",
  },
  support: {
    citizens: {
      conservative: 55,
      liberal: 45,
    },
    parliament: {
      democratic: 60,
      green: 35,
      nationalist: 40,
      islamist: 50,
      communist: 30,
      republican: 30,
      overall: 50,
    },
    military: {
      army: 75,
      airForce: 70,
      navy: 65,
    },
    international: {
      global: 60,
      eastern: 65,
      western: 55,
      middleEast: 70,
      unitedNations: 60,
      europeanUnion: 50,
      SAARC: 80,
      OIC: 75,
      ASEAN: 50,
      IMF: 55,
    },
  },
  moral: {
    approval: 55,
    happiness: 50,
    stability: 50,
    security: 60,
    economy: 55,
    healthcare: 45,
    education: 50,
    religion: 60,
    humanRights: 50,
    infrastructure: 50,
    technology: 50,
    environment: 40,
    crime: 50,
    corruption: 45,
  },
  finance: {
    treasury: 1000000000,
    income: 50000000,
    expense: 45000000,
    debt: 200000000,
    tax: {
      incomeTax: 10,
      corporateTax: 12,
      propertyTax: 10,
      salesTax: 8,
      importTax: 15,
      exportTax: 5,
    },
  },
};

const easyStats: Stats = {
  presidentInfo: {
    name: "",
    party: "",
    term: "2021-2025",
    money: 10000000, // A comfortable amount for a developed country leader.
    age: 42,
    partyName: "",
  },
  gameData: {
    date: "01.01.2021",
    day: 1,
  },
  countryInfo: {
    name: "",
    population: 65000000, // Smaller, well-developed population.
    area: 480000, // Well-planned large area.
    capital: "",
    currency: "",
    continent: "",
    language: "",
  },
  support: {
    citizens: {
      conservative: 70,
      liberal: 80,
    },
    parliament: {
      democratic: 70,
      green: 60,
      nationalist: 40,
      islamist: 58,
      communist: 15,
      republican: 67,
      overall: 70,
    },
    military: {
      army: 90,
      airForce: 90,
      navy: 90,
    },
    international: {
      global: 85,
      eastern: 80,
      western: 90,
      middleEast: 75,
      unitedNations: 85,
      europeanUnion: 80,
      SAARC: 75,
      OIC: 65,
      ASEAN: 70,
      IMF: 85,
    },
  },
  moral: {
    approval: 80,
    happiness: 85,
    stability: 85,
    security: 90,
    economy: 90,
    healthcare: 90,
    education: 90,
    religion: 60,
    humanRights: 85,
    infrastructure: 90,
    technology: 90,
    environment: 85,
    crime: 20,
    corruption: 15,
  },
  finance: {
    treasury: 7000000000,
    income: 1500000000,
    expense: 1000000000,
    debt: 500000000,
    tax: {
      incomeTax: 20,
      corporateTax: 15,
      propertyTax: 10,
      salesTax: 5,
      importTax: 5,
      exportTax: 2,
    },
  },
};

const toughStats: Stats = {
  presidentInfo: {
    name: "",
    party: "",
    term: "2021-2025",
    money: 500000,
    age: 40,
    partyName: "",
  },
  gameData: {
    date: "01.01.2021",
    day: 1,
  },
  countryInfo: {
    name: "",
    population: 30000000,
    area: 120000,
    capital: "",
    currency: "",
    continent: "",
    language: "",
  },
  support: {
    citizens: {
      conservative: 70,
      liberal: 30,
    },
    parliament: {
      nationalist: 65,
      islamist: 60,
      democratic: 40,
      communist: 30,
      green: 20,
      republican: 25,
      overall: 40,
    },
    military: {
      army: 50,
      airForce: 45,
      navy: 40,
    },
    international: {
      global: 40,
      eastern: 45,
      western: 35,
      middleEast: 50,
      unitedNations: 40,
      europeanUnion: 30,
      SAARC: 50,
      OIC: 55,
      ASEAN: 35,
      IMF: 25,
    },
  },
  moral: {
    approval: 40,
    happiness: 35,
    stability: 30,
    security: 40,
    economy: 30,
    healthcare: 25,
    education: 30,
    religion: 70,
    humanRights: 30,
    infrastructure: 20,
    technology: 25,
    environment: 20,
    crime: 60,
    corruption: 70,
  },
  finance: {
    treasury: 50000000,
    income: 10000000,
    expense: 15000000,
    debt: 100000000,
    tax: {
      incomeTax: 8,
      corporateTax: 10,
      propertyTax: 5,
      salesTax: 15,
      importTax: 25,
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
  president?: string,
  partyName?: string,
  country?: string,
  capital?: string
): Stats => {
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
  statsToReturn.countryInfo.currency = randomCountryData.currency;
  statsToReturn.countryInfo.continent = randomCountryData.continent;
  statsToReturn.countryInfo.language = randomCountryData.language;
  statsToReturn.presidentInfo.name = president || randomCountryData.president;

  // get a random party type and name. assign them to the stats. add country name prefix to party name
  const partyKeys = Object.keys(politicalParties);
  const randomPartyType = partyKeys[
    Math.floor(Math.random() * partyKeys.length)
  ] as keyof PoliticalParty;
  const randomPartyName =
    politicalParties[randomPartyType][
      Math.floor(Math.random() * politicalParties[randomPartyType].length)
    ];

  statsToReturn.presidentInfo.party = randomPartyType;
  statsToReturn.presidentInfo.partyName = partyName
    ? `${country || randomCountry} ${partyName}`
    : `${country || randomCountry} ${randomPartyName}`;

  return statsToReturn;
};
