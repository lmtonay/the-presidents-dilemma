"use client";

import {
  FaUsers,
  FaFileAlt,
  FaArrowUp,
  FaVoteYea,
  FaRegCalendarAlt,
  FaMicrophone,
  FaTimesCircle,
  FaVideo,
  FaListAlt
} from "react-icons/fa";
import { ActionButton } from "./actionButtons";

const parliamentButtons: ActionButton[] = [
  {
    name: "See Members",
    icon: FaUsers,
    onClick: () => {
      /* Function to see the members of Parliament */
    },
  },
  {
    name: "See Bills",
    icon: FaFileAlt,
    onClick: () => {
      /* Function to view the bills */
    },
  },
  {
    name: "Rise Bill",
    icon: FaArrowUp,
    onClick: () => {
      /* Function to rise a bill */
    },
  },
  {
    name: "Vote Bill",
    icon: FaVoteYea,
    onClick: () => {
      /* Function to vote on a bill */
    },
  },
  {
    name: "Call Session",
    icon: FaRegCalendarAlt,
    onClick: () => {
      /* Function to call a session */
    },
  },
  {
    name: "Session Calendar",
    icon: FaRegCalendarAlt,
    route: "/session-calendar", // Route to the session calendar page
  },
  {
    name: "Give Speech",
    icon: FaMicrophone,
    onClick: () => {
      /* Function to give a speech */
    },
  },
  {
    name: "Terminate Parliament",
    icon: FaTimesCircle,
    onClick: () => {
      /* Function to terminate Parliament */
    },
  },
  {
    name: "Watch Debate",
    icon: FaVideo,
    onClick: () => {
      /* Function to watch a debate */
    },
  },
  {
    name: "View Records",
    icon: FaListAlt,
    route: "/records", // Route to a page with records or logs (could be voting records, etc.)
  },
];

export default parliamentButtons;
