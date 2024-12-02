export type Country = {
  capital: string;
  president: string;
  currency: string;
  continent: string;
  language: string;
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

export default countriesWithDetails;
