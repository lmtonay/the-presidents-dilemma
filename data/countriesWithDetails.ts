export type Country = {
  capital: string;
  currency: string;
  continent: string;
  language: string;
};

const countriesWithDetails: { [key: string]: Country } = {
  Avaloria: {
    continent: "Europe",
    capital: "Glorindale",
    currency: "Avalorian Taka",
    language: "English",
  },
  Belmonte: {
    continent: "Europe",
    capital: "Montcairn",
    currency: "Belmontian Taka",
    language: "English",
  },
  Clytherion: {
    continent: "Europe",
    capital: "Lytharia",
    currency: "Clytherian Taka",
    language: "English",
  },
  Westmarch: {
    continent: "Europe",
    capital: "Elderhaven",
    currency: "Westmarchian Taka",
    language: "English",
  },
  Florindale: {
    continent: "Europe",
    capital: "Rosemere",
    currency: "Florindalian Taka",
    language: "English",
  },

  AlQamar: {
    continent: "Asia",
    capital: "Lunaris",
    currency: "AlQamarian Taka",
    language: "Arabic",
  },
  Zafaris: {
    continent: "Asia",
    capital: "Nouras",
    currency: "Zafarian Taka",
    language: "Arabic",
  },
  Nuristan: {
    continent: "Asia",
    capital: "Shamabad",
    currency: "Nuristani Taka",
    language: "Pashto",
  },
  Qasimir: {
    continent: "Asia",
    capital: "Azmaran",
    currency: "Qasimiri Taka",
    language: "Arabic",
  },
  Bahrun: {
    continent: "Asia",
    capital: "Darwazah",
    currency: "Bahruni Taka",
    language: "Arabic",
  },

  Indralok: {
    continent: "Asia",
    capital: "Varanipur",
    currency: "Indralokian Taka",
    language: "Hindi",
  },
  Rashmipur: {
    continent: "Asia",
    capital: "Nalanda",
    currency: "Rashmipuri Taka",
    language: "Hindi",
  },
  Dharmasena: {
    continent: "Asia",
    capital: "Sanghapur",
    currency: "Dharmasenian Taka",
    language: "Hindi",
  },
  Pakravan: {
    continent: "Asia",
    capital: "Karimnagar",
    currency: "Pakravani Taka",
    language: "Urdu",
  },
  Suryadesh: {
    continent: "Asia",
    capital: "Prabhasagar",
    currency: "Suryadeshi Taka",
    language: "Hindi",
  },

  Takeshima: {
    continent: "Asia",
    capital: "Hanasaka",
    currency: "Takeshiman Taka",
    language: "Japanese",
  },
  Jinwa: {
    continent: "Asia",
    capital: "Sungye",
    currency: "Jinwan Taka",
    language: "Korean",
  },
  Sungnam: {
    continent: "Asia",
    capital: "Gwanseong",
    currency: "Sungnami Taka",
    language: "Korean",
  },
  Hanlorei: {
    continent: "Asia",
    capital: "Lingzhen",
    currency: "Hanlorean Taka",
    language: "Mandarin",
  },
  Ryukoshi: {
    continent: "Asia",
    capital: "Kazuhara",
    currency: "Ryukoshian Taka",
    language: "Japanese",
  },

  Akariba: {
    continent: "Africa",
    capital: "Mwanzi",
    currency: "Akaribian Taka",
    language: "Swahili",
  },
  Zubaland: {
    continent: "Africa",
    capital: "Goromoro",
    currency: "Zubalian Taka",
    language: "Swahili",
  },
  Nyasora: {
    continent: "Africa",
    capital: "Kalinda",
    currency: "Nyasoran Taka",
    language: "Swahili",
  },
  Bantuva: {
    continent: "Africa",
    capital: "Makunga",
    currency: "Bantuvian Taka",
    language: "Swahili",
  },
  Marekeni: {
    continent: "Africa",
    capital: "Sondari",
    currency: "Marekenian Taka",
    language: "Swahili",
  },

  CostaVerde: {
    continent: "South America",
    capital: "Puerto Verde",
    currency: "CostaVerdean Taka",
    language: "Spanish",
  },
  Montarico: {
    continent: "South America",
    capital: "Sierra Roja",
    currency: "Montarican Taka",
    language: "Spanish",
  },
  SierraAzul: {
    continent: "South America",
    capital: "Cielo Azul",
    currency: "SierraAzulian Taka",
    language: "Spanish",
  },
  Valentora: {
    continent: "South America",
    capital: "Florencia",
    currency: "Valentorian Taka",
    language: "Spanish",
  },
  Solterra: {
    continent: "South America",
    capital: "Luzmarina",
    currency: "Solterrian Taka",
    language: "Spanish",
  },

  Volkovia: {
    continent: "Europe",
    capital: "Petrograd",
    currency: "Volkovian Taka",
    language: "Russian",
  },
  Krasnovia: {
    continent: "Europe",
    capital: "Vladrosk",
    currency: "Krasnovian Taka",
    language: "Russian",
  },
  Dragovost: {
    continent: "Europe",
    capital: "Zarnograd",
    currency: "Dragovostian Taka",
    language: "Serbian",
  },
  Belogradia: {
    continent: "Europe",
    capital: "Novo Belov",
    currency: "Belogradian Taka",
    language: "Serbian",
  },
  Novgorand: {
    continent: "Europe",
    capital: "Staryev",
    currency: "Novgorandian Taka",
    language: "Russian",
  },

  Thanapura: {
    continent: "Asia",
    capital: "Angkoran",
    currency: "Thanapurian Taka",
    language: "Khmer",
  },
  Kampurak: {
    continent: "Asia",
    capital: "Phnom Raya",
    currency: "Kampuraki Taka",
    language: "Khmer",
  },
  Singalaya: {
    continent: "Asia",
    capital: "Meraputra",
    currency: "Singalayan Taka",
    language: "Malay",
  },
  Javanara: {
    continent: "Asia",
    capital: "Surabumi",
    currency: "Javanaran Taka",
    language: "Javanese",
  },
  Banyapura: {
    continent: "Asia",
    capital: "Dewanagari",
    currency: "Banyapuran Taka",
    language: "Indonesian",
  },

  Turanesia: {
    continent: "Oceania",
    capital: "Koranos",
    currency: "Turanesian Taka",
    language: "English",
  },
  Maraloka: {
    continent: "Oceania",
    capital: "Lunapulu",
    currency: "Maralokian Taka",
    language: "English",
  },
  Paluquay: {
    continent: "Oceania",
    capital: "Arianque",
    currency: "Paluquayan Taka",
    language: "English",
  },
  Islador: {
    continent: "Oceania",
    capital: "Havenport",
    currency: "Isladorean Taka",
    language: "English",
  },
  Oceandria: {
    continent: "Oceania",
    capital: "Nautilus",
    currency: "Oceandrian Taka",
    language: "English",
  },

  Ahonui: {
    continent: "Oceania",
    capital: "Mahiko",
    currency: "Ahonui Taka",
    language: "Bangla",
  },
};

export default countriesWithDetails;
