"use client";


import { statsStore } from "@/store/stats-store";
import { IconType } from "react-icons";
import {
  FaMoneyBillWave,
  FaRoad,
  FaLandmark,
  FaBusAlt,
  FaTools,
  FaUniversity,
  FaHome,
  FaTractor,
  FaTree,
  FaUmbrellaBeach,
  FaFutbol,
  FaMicroscope,
  FaBriefcase,
  FaFighterJet,
  FaExclamationTriangle,
  FaUserSecret,
  FaShieldAlt,
  FaGavel,
  FaBook,
  FaFileAlt,
  FaHandshake,
  FaBalanceScale,
  FaGlobe,
  FaBuilding,
  FaHandsHelping,
  FaMap,
  FaHeart,
  FaChurch,
  FaTheaterMasks,
  FaUsers,
  FaMicrophoneAlt,
  FaRocket,
  FaRandom,
  FaUserCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import { PiSpinnerFill } from "react-icons/pi";
import { MdFiberNew } from "react-icons/md";

export type ActionButton = {
  name: string;
  icon: IconType;
  onClick?: () => void;
  route?: string;
};

export type ActionButtons = {
  governance: ActionButton[];
  "economy and infrastructure": ActionButton[];
  "military and defense": ActionButton[];
  "foreign relations": ActionButton[];
  "social and cultural": ActionButton[];
  "chaos and misc": ActionButton[];
  "game actions": ActionButton[];
};

const actionButtons: ActionButtons = {
  "game actions": [
    {
      name: "New Game",
      icon: MdFiberNew,
      onClick: () => {
        statsStore.getState().restartGame();
      },
    },
  ],
  governance: [
    {
      name: "Parliament",
      icon: FaLandmark,
      route: "/parliament",
    },
    {
      name: "Secretariat",
      icon: FaUniversity,
      onClick: () => {},
    },
    {
      name: "Judiciary",
      icon: FaBalanceScale,
      onClick: () => {},
    },
    {
      name: "Constitution",
      icon: FaBook,
      onClick: () => {},
    },
    {
      name: "Laws",
      icon: FaGavel,
      onClick: () => {},
    },
    {
      name: "Ordinances",
      icon: FaFileAlt,
      onClick: () => {},
    },
  ],
  "economy and infrastructure": [
    {
      name: "Economy",
      icon: FaMoneyBillWave,
      onClick: () => {},
    },
    {
      name: "Trade",
      icon: FaHandshake,
      onClick: () => {},
    },
    {
      name: "Infrastructure",
      icon: FaRoad,
      onClick: () => {},
    },
    {
      name: "Resources",
      icon: FaTools,
      onClick: () => {},
    },
    {
      name: "Housing",
      icon: FaHome,
      onClick: () => {},
    },
    {
      name: "Transport",
      icon: FaBusAlt,
      onClick: () => {},
    },
    {
      name: "Monuments",
      icon: FaLandmark,
      onClick: () => {},
    },
    {
      name: "Research",
      icon: FaMicroscope,
      onClick: () => {},
    },
    {
      name: "Employment",
      icon: FaBriefcase,
      onClick: () => {},
    },
  ],
  "military and defense": [
    {
      name: "Military Forces",
      icon: FaFighterJet,
      onClick: () => {},
    },
    {
      name: "Defense Contracts",
      icon: FaHandshake,
      onClick: () => {},
    },
    {
      name: "Declare Emergency",
      icon: FaExclamationTriangle,
      onClick: () => {},
    },
    {
      name: "Spy Network",
      icon: FaUserSecret,
      onClick: () => {},
    },
    {
      name: "Border Security",
      icon: FaShieldAlt,
      onClick: () => {},
    },
    {
      name: "Rebel Management",
      icon: FaGavel,
      onClick: () => {},
    },
  ],
  "foreign relations": [
    {
      name: "Alliances",
      icon: FaHandshake,
      onClick: () => {},
    },
    {
      name: "Treaties",
      icon: FaBalanceScale,
      onClick: () => {},
    },
    {
      name: "UN Affairs",
      icon: FaGlobe,
      onClick: () => {},
    },
    {
      name: "Embassies",
      icon: FaBuilding,
      onClick: () => {},
    },
    {
      name: "Foreign Aid",
      icon: FaHandsHelping,
      onClick: () => {},
    },
    {
      name: "Annexation",
      icon: FaMap,
      onClick: () => {},
    },
  ],
  "social and cultural": [
    {
      name: "Education",
      icon: FaUniversity,
      onClick: () => {},
    },
    {
      name: "Healthcare",
      icon: FaHeart,
      onClick: () => {},
    },
    {
      name: "Religion",
      icon: FaChurch,
      onClick: () => {},
    },
    {
      name: "Culture and Arts",
      icon: FaTheaterMasks,
      onClick: () => {},
    },
    {
      name: "Public Engagement",
      icon: FaUsers,
      onClick: () => {},
    },
    {
      name: "Agriculture",
      icon: FaTractor,
      onClick: () => {},
    },
    {
      name: "Environment",
      icon: FaTree,
      onClick: () => {},
    },
    {
      name: "Tourism",
      icon: FaUmbrellaBeach,
      onClick: () => {},
    },
    {
      name: "Sports",
      icon: FaFutbol,
      onClick: () => {},
    },
  ],
  "chaos and misc": [
    {
      name: "Spin the Wheel",
      icon: PiSpinnerFill,
      onClick: () => {},
    },
    {
      name: "Eccentric Policies",
      icon: FaRegTimesCircle,
      onClick: () => {},
    },
    {
      name: "Outrageous Speech",
      icon: FaMicrophoneAlt,
      onClick: () => {},
    },
    {
      name: "Personal Interests",
      icon: FaUserCircle,
      onClick: () => {},
    },
    {
      name: "Secret Projects",
      icon: FaRocket,
      onClick: () => {},
    },
    {
      name: "Random Events",
      icon: FaRandom,
      onClick: () => {},
    },
  ],
};

export default actionButtons;
