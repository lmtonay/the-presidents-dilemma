import { Events } from "@/schema/events";

export const dummyEvents : Events[] = [
  {
    date: "01.01.2021",
    day: "1",
    events: [
      {
        action: "Ordinance Issued",
        title: "Ban on LGBTQ+",
        description:
          "You have banned LGBTQ+ from your country through an ordinance.",
        influence: {
          support: {
            citizens: {
              conservative: 15,
              liberal: -10,
            },
            international: {
              western: -13,
              middleEast: 8,
              OIC: 13,
              unitedNations: -7,
              europeanUnion: -7,
            },
          },
          morale: {
            happiness: -5,
            religion: 7,
            stability: -3,
            approval: 3,
          },
        },
        type: "ordinance",
      },
      {
        action: "Import Completed",
        title: "Military Equipment",
        description:
          "You have successfully imported military equipment from Russia worth $1 billion.",
        influence: {
          support: {
            citizens: {
              conservative: 5,
              liberal: 2,
            },
            military: {
              army: 5,
              navy: 5,
              airForce: 5,
            },
            international: {
              eastern: 5,
              SAARC: 5,
              OIC: 5,
            },
            parliament: {
              democratic: 5,
              republican: 5,
            },
          },
          morale: {
            security: 5,
            approval: 5,
            stability: 5,
          },
          finance: {
            treasury: -1000000000,
            expense: 1000000000,
          },
        },
        type: "import",
      },
    ],
  },

  {
    date: "02.01.2021",
    day: "2",
    events: [
      {
        action: "Policy Announced",
        title: "Healthcare Reform",
        description:
          "You have announced a new healthcare reform policy aimed at providing universal healthcare.",
        influence: {
          support: {
            citizens: {
              conservative: -5,
              liberal: 10,
            },
            international: {
              western: 10,
              middleEast: -3,
              OIC: -3,
              unitedNations: 7,
              europeanUnion: 7,
            },
          },
          morale: {
            happiness: 10,
            religion: -2,
            stability: 5,
            approval: 8,
          },
        },
        type: "policy",
      },
      {
        action: "Trade Agreement Signed",
        title: "Trade Deal with China",
        description:
          "You have signed a new trade agreement with China, boosting economic ties.",
        influence: {
          support: {
            citizens: {
              conservative: 3,
              liberal: 3,
            },
            international: {
              eastern: 10,
              western: -5,
              SAARC: 5,
              OIC: 5,
            },
            parliament: {
              democratic: 5,
              republican: 5,
            },
          },
          morale: {
            economy: 10,
            approval: 5,
            stability: 5,
          },
          finance: {
            treasury: 500000000,
            income: 500000000,
          },
        },
        type: "trade",
      },
    ],
  },
];
