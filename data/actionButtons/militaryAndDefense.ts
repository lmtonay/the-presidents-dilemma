import {
    FaFighterJet,
    FaExclamationTriangle,
    FaUserSecret,
    FaShieldAlt,
    FaGavel,
    FaHandshake,
    FaWindowClose,
} from "react-icons/fa";
import { statsStore } from "@/store/stats-store";

import { executeAction } from "@/lib/gameFunctions";

export default function getMilitaryAndDefense() {
    return [
        {
            name: "Military Forces",
            icon: FaFighterJet,
            onClick: () => { },
        },
        {
            name: "Defense Contracts",
            icon: FaHandshake,
            onClick: () => { },
        },
        {
            name: statsStore.getState().stats.countryInfo.emergency?.active ? "End Emergency" : "Declare Emergency",
            icon: statsStore.getState().stats.countryInfo.emergency?.active ? FaWindowClose : FaExclamationTriangle,
            description: statsStore.getState().stats.countryInfo.emergency?.active ? "Ending the national emergency will restore the parliament and constitution. The military will be withdrawn." : "Declaring a national emergency will suspend the parliament and constitution. The military will be deployed to maintain law and order.",
            onClick: () => {
                if (statsStore.getState().stats.countryInfo.emergency?.active) {
                    executeAction({
                        action: "End Emergency",
                        title: "Emergency Ended",
                        description: `The national emergency which was enacted from ${statsStore.getState().stats?.countryInfo?.emergency?.from} has been lifted. The military has been withdrawn and the parliament and constitution have been restored.`,
                        type: "emergency",
                        influence: {
                            support: {
                                military: { army: -4, navy: -3, airForce: -2 },
                                citizens: { liberal: +5, conservative: +2 },
                                parliament: {
                                    democratic: +5,
                                    republican: +3,
                                    nationalist: +2,
                                    communist: +1,
                                    green: +1,
                                },
                                judiciary: { supremeCourt: +5, highCourt: +3 },
                                international: {
                                    global: +2,
                                    eastern: +3,
                                    western: +5,
                                    middleEast: +1,
                                    unitedNations: +1,
                                },
                            },
                            countryInfo: {
                                emergency: {
                                    active: false,
                                    reason: "",
                                    from: "",
                                },
                            },
                            morale: {
                                rights: +5,
                                liberty: +4,
                                security: -2,
                                stability: -3,
                                approval: +3,
                                crime: +2,
                                happiness: +4,
                                tourism: +5,
                            },
                        },
                    })
                } else {
                    const reason = prompt(`Declaring a national emergency will suspend the parliament and constitution. The military will be deployed to maintain law and order. \n\nEnter the reason for declaring emergency:
                        `, "internal conflict") as string;

                    if (!reason) return;

                    executeAction({
                        action: "Declare Emergency",
                        title: "National Emergency",
                        description: `You have declared a national emergency due to ${reason}. The military has been deployed to maintain law and order. The parliament and constitution have been suspended.`,
                        type: "emergency",
                        influence: {
                            support: {
                                military: { army: 10, navy: 8, airForce: 7 },
                                citizens: { liberal: -8 },
                                parliament: {
                                    democratic: -10,
                                    republican: -8,
                                    nationalist: -5,
                                    communist: -3,
                                    green: -3,
                                    islamist: 1,
                                },
                                judiciary: { supremeCourt: -10, highCourt: -8 },
                                international: {
                                    global: -5,
                                    eastern: -6,
                                    western: -10,
                                    middleEast: -3,
                                    unitedNations: -3,
                                },
                            },
                            countryInfo: {
                                emergency: {
                                    active: true,
                                    reason: reason,
                                    from: statsStore.getState().stats.gameData.date,
                                },
                            },
                            morale: {
                                rights: -10,
                                liberty: -8,
                                security: 10,
                                stability: 5,
                                approval: -7,
                                crime: -3,
                                happiness: -5,
                                tourism: -10,
                            },
                        },
                    });
                }
            },
            audio: statsStore.getState().stats.countryInfo.emergency?.active ? "/audios/whistle.mp3" : "/audios/emergency.mp3"
        },
        {
            name: "Spy Network",
            icon: FaUserSecret,
            onClick: () => { },
        },
        {
            name: "Border Security",
            icon: FaShieldAlt,
            onClick: () => { },
        },
        {
            name: "Rebel Management",
            icon: FaGavel,
            onClick: () => { },
        },
    ];
}