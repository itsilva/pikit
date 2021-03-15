/**
 * Data Model Interfaces
 */
import { TeamBase, Team } from "../../models/team/team.interface";
import { Teams } from "../../models/team/teams.interface";

/**
 * In-Memory Store
 *
 * -> Remove this After database Connection, this
 * is used only for testing the logic
 */
const teams: Teams = {
    1: {
        id: 1,
        name: "Glazedelivery",
        shoppers: {
            1: {
                name: "DummyShopper",
            },
            2: {
                name: "SecondDummyShopper",
            },
            3: {
                name: "ThirdDummyShopper",
            },
        },
        slots: {
            1: {
                start: "08:00",
                end: "08:30",
                shoppers: [],
                isAvailable: true,
            },
            2: {
                start: "08:30",
                end: "09:00",
                shoppers: [],
                isAvailable: true,
            },
            3: {
                start: "09:00",
                end: "09:30",
                shoppers: [],
                isAvailable: true,
            },
            4: {
                start: "09:30",
                end: "10:00",
                shoppers: [],
                isAvailable: true,
            },
            5: {
                start: "10:00",
                end: "10:30",
                shoppers: [],
                isAvailable: true,
            },
            6: {
                start: "10:30",
                end: "11:00",
                shoppers: [],
                isAvailable: true,
            },
            7: {
                start: "11:00",
                end: "11:30",
                shoppers: [],
                isAvailable: true,
            },
            8: {
                start: "11:30",
                end: "12:00",
                shoppers: [],
                isAvailable: true,
            },
            9: {
                start: "12:30",
                end: "13:00",
                shoppers: [],
                isAvailable: true,
            },
            10: {
                start: "13:00",
                end: "13:30",
                shoppers: [],
                isAvailable: true,
            },
            11: {
                start: "13:30",
                end: "14:00",
                shoppers: [],
                isAvailable: true,
            },
            12: {
                start: "14:00",
                end: "14:30",
                shoppers: [],
                isAvailable: true,
            },
            13: {
                start: "14:30",
                end: "15:00",
                shoppers: [],
                isAvailable: true,
            },
            14: {
                start: "15:00",
                end: "15:30",
                shoppers: [],
                isAvailable: true,
            },
            15: {
                start: "15:30",
                end: "16:00",
                shoppers: [],
                isAvailable: true,
            },
            16: {
                start: "16:00",
                end: "16:30",
                shoppers: [],
                isAvailable: true,
            },
            17: {
                start: "16:30",
                end: "17:00",
                shoppers: [],
                isAvailable: true,
            },
            18: {
                start: "17:00",
                end: "17:30",
                shoppers: [],
                isAvailable: true,
            },
            19: {
                start: "17:30",
                end: "18:00",
                shoppers: [],
                isAvailable: true,
            },
            20: {
                start: "18:00",
                end: "18:30",
                shoppers: [],
                isAvailable: true,
            },
            21: {
                start: "18:30",
                end: "19:00",
                shoppers: [],
                isAvailable: true,
            },
            22: {
                start: "19:00",
                end: "19:30",
                shoppers: [],
                isAvailable: true,
            },
            23: {
                start: "19:30",
                end: "20:00",
                shoppers: [],
                isAvailable: true,
            },
            24: {
                start: "20:00",
                end: "20:30",
                shoppers: [],
                isAvailable: true,
            },
            25: {
                start: "20:30",
                end: "21:00",
                shoppers: [],
                isAvailable: true,
            },
            26: {
                start: "21:00",
                end: "21:30",
                shoppers: [],
                isAvailable: true,
            },
            27: {
                start: "21:30",
                end: "22:00",
                shoppers: [],
                isAvailable: true,
            },
        },
    },
    2: {
        id: 2,
        name: "FasToGrabIt",
        shoppers: {
            1: {
                name: "DummyShopper",
            },
            2: {
                name: "SecondDummyShopper",
            },
            3: {
                name: "ThirdDummyShopper",
            },
            4: {
                name: "FourthDummyShopper",
            },
            5: {
                name: "FifthDummyShopper",
            },
        },
        slots: {
            1: {
                start: "08:00",
                end: "08:30",
                shoppers: [],
                isAvailable: true,
            },
            2: {
                start: "08:30",
                end: "09:00",
                shoppers: [],
                isAvailable: true,
            },
            3: {
                start: "09:00",
                end: "09:30",
                shoppers: [],
                isAvailable: true,
            },
            4: {
                start: "09:30",
                end: "10:00",
                shoppers: [],
                isAvailable: true,
            },
            5: {
                start: "10:00",
                end: "10:30",
                shoppers: [],
                isAvailable: true,
            },
            6: {
                start: "10:30",
                end: "11:00",
                shoppers: [],
                isAvailable: true,
            },
            7: {
                start: "11:00",
                end: "11:30",
                shoppers: [],
                isAvailable: true,
            },
            8: {
                start: "11:30",
                end: "12:00",
                shoppers: [],
                isAvailable: true,
            },
            9: {
                start: "12:30",
                end: "13:00",
                shoppers: [],
                isAvailable: true,
            },
            10: {
                start: "13:00",
                end: "13:30",
                shoppers: [],
                isAvailable: true,
            },
            11: {
                start: "13:30",
                end: "14:00",
                shoppers: [],
                isAvailable: true,
            },
            12: {
                start: "14:00",
                end: "14:30",
                shoppers: [],
                isAvailable: true,
            },
            13: {
                start: "14:30",
                end: "15:00",
                shoppers: [],
                isAvailable: true,
            },
            14: {
                start: "15:00",
                end: "15:30",
                shoppers: [],
                isAvailable: true,
            },
            15: {
                start: "15:30",
                end: "16:00",
                shoppers: [],
                isAvailable: true,
            },
            16: {
                start: "16:00",
                end: "16:30",
                shoppers: [],
                isAvailable: true,
            },
            17: {
                start: "16:30",
                end: "17:00",
                shoppers: [],
                isAvailable: true,
            },
            18: {
                start: "17:00",
                end: "17:30",
                shoppers: [],
                isAvailable: true,
            },
            19: {
                start: "17:30",
                end: "18:00",
                shoppers: [],
                isAvailable: true,
            },
            20: {
                start: "18:00",
                end: "18:30",
                shoppers: [],
                isAvailable: true,
            },
            21: {
                start: "18:30",
                end: "19:00",
                shoppers: [],
                isAvailable: true,
            },
            22: {
                start: "19:00",
                end: "19:30",
                shoppers: [],
                isAvailable: true,
            },
            23: {
                start: "19:30",
                end: "20:00",
                shoppers: [],
                isAvailable: true,
            },
            24: {
                start: "20:00",
                end: "20:30",
                shoppers: [],
                isAvailable: true,
            },
            25: {
                start: "20:30",
                end: "21:00",
                shoppers: [],
                isAvailable: true,
            },
            26: {
                start: "21:00",
                end: "21:30",
                shoppers: [],
                isAvailable: true,
            },
            27: {
                start: "21:30",
                end: "22:00",
                shoppers: [],
                isAvailable: true,
            },
        },
    },
    3: {
        id: 3,
        name: "UltraShoppers",
        shoppers: {
            1: {
                name: "DummyShopper",
            },
            2: {
                name: "SecondDummyShopper",
            },
            3: {
                name: "ThirdDummyShopper",
            },
            4: {
                name: "FourthDummyShopper",
            },
            5: {
                name: "FifthDummyShopper",
            },
        },
        slots: {
            1: {
                start: "08:00",
                end: "08:30",
                shoppers: [],
                isAvailable: true,
            },
            2: {
                start: "08:30",
                end: "09:00",
                shoppers: [],
                isAvailable: true,
            },
            3: {
                start: "09:00",
                end: "09:30",
                shoppers: [],
                isAvailable: true,
            },
            4: {
                start: "09:30",
                end: "10:00",
                shoppers: [],
                isAvailable: true,
            },
            5: {
                start: "10:00",
                end: "10:30",
                shoppers: [],
                isAvailable: true,
            },
            6: {
                start: "10:30",
                end: "11:00",
                shoppers: [],
                isAvailable: true,
            },
            7: {
                start: "11:00",
                end: "11:30",
                shoppers: [],
                isAvailable: true,
            },
            8: {
                start: "11:30",
                end: "12:00",
                shoppers: [],
                isAvailable: true,
            },
            9: {
                start: "12:30",
                end: "13:00",
                shoppers: [],
                isAvailable: true,
            },
            10: {
                start: "13:00",
                end: "13:30",
                shoppers: [],
                isAvailable: true,
            },
            11: {
                start: "13:30",
                end: "14:00",
                shoppers: [],
                isAvailable: true,
            },
            12: {
                start: "14:00",
                end: "14:30",
                shoppers: [],
                isAvailable: true,
            },
            13: {
                start: "14:30",
                end: "15:00",
                shoppers: [],
                isAvailable: true,
            },
            14: {
                start: "15:00",
                end: "15:30",
                shoppers: [],
                isAvailable: true,
            },
            15: {
                start: "15:30",
                end: "16:00",
                shoppers: [],
                isAvailable: true,
            },
            16: {
                start: "16:00",
                end: "16:30",
                shoppers: [],
                isAvailable: true,
            },
            17: {
                start: "16:30",
                end: "17:00",
                shoppers: [],
                isAvailable: true,
            },
            18: {
                start: "17:00",
                end: "17:30",
                shoppers: [],
                isAvailable: true,
            },
            19: {
                start: "17:30",
                end: "18:00",
                shoppers: [],
                isAvailable: true,
            },
            20: {
                start: "18:00",
                end: "18:30",
                shoppers: [],
                isAvailable: true,
            },
            21: {
                start: "18:30",
                end: "19:00",
                shoppers: [],
                isAvailable: true,
            },
            22: {
                start: "19:00",
                end: "19:30",
                shoppers: [],
                isAvailable: true,
            },
            23: {
                start: "19:30",
                end: "20:00",
                shoppers: [],
                isAvailable: true,
            },
            24: {
                start: "20:00",
                end: "20:30",
                shoppers: [],
                isAvailable: true,
            },
            25: {
                start: "20:30",
                end: "21:00",
                shoppers: [],
                isAvailable: true,
            },
            26: {
                start: "21:00",
                end: "21:30",
                shoppers: [],
                isAvailable: true,
            },
            27: {
                start: "21:30",
                end: "22:00",
                shoppers: [],
                isAvailable: true,
            },
        },
    },
    4: {
        id: 4,
        name: "ToDeleteForTesting",
        shoppers: {
            1: {
                name: "DummyShopper",
            },
            2: {
                name: "SecondDummyShopper",
            },
            3: {
                name: "ThirdDummyShopper",
            },
            4: {
                name: "FourthDummyShopper",
            },
            5: {
                name: "FifthDummyShopper",
            },
        },
        slots: {
            1: {
                start: "08:00",
                end: "08:30",
                shoppers: [],
                isAvailable: true,
            },
            2: {
                start: "08:30",
                end: "09:00",
                shoppers: [],
                isAvailable: true,
            },
            3: {
                start: "09:00",
                end: "09:30",
                shoppers: [],
                isAvailable: true,
            },
            4: {
                start: "09:30",
                end: "10:00",
                shoppers: [],
                isAvailable: true,
            },
            5: {
                start: "10:00",
                end: "10:30",
                shoppers: [],
                isAvailable: true,
            },
            6: {
                start: "10:30",
                end: "11:00",
                shoppers: [],
                isAvailable: true,
            },
            7: {
                start: "11:00",
                end: "11:30",
                shoppers: [],
                isAvailable: true,
            },
            8: {
                start: "11:30",
                end: "12:00",
                shoppers: [],
                isAvailable: true,
            },
            9: {
                start: "12:30",
                end: "13:00",
                shoppers: [],
                isAvailable: true,
            },
            10: {
                start: "13:00",
                end: "13:30",
                shoppers: [],
                isAvailable: true,
            },
            11: {
                start: "13:30",
                end: "14:00",
                shoppers: [],
                isAvailable: true,
            },
            12: {
                start: "14:00",
                end: "14:30",
                shoppers: [],
                isAvailable: true,
            },
            13: {
                start: "14:30",
                end: "15:00",
                shoppers: [],
                isAvailable: true,
            },
            14: {
                start: "15:00",
                end: "15:30",
                shoppers: [],
                isAvailable: true,
            },
            15: {
                start: "15:30",
                end: "16:00",
                shoppers: [],
                isAvailable: true,
            },
            16: {
                start: "16:00",
                end: "16:30",
                shoppers: [],
                isAvailable: true,
            },
            17: {
                start: "16:30",
                end: "17:00",
                shoppers: [],
                isAvailable: true,
            },
            18: {
                start: "17:00",
                end: "17:30",
                shoppers: [],
                isAvailable: true,
            },
            19: {
                start: "17:30",
                end: "18:00",
                shoppers: [],
                isAvailable: true,
            },
            20: {
                start: "18:00",
                end: "18:30",
                shoppers: [],
                isAvailable: true,
            },
            21: {
                start: "18:30",
                end: "19:00",
                shoppers: [],
                isAvailable: true,
            },
            22: {
                start: "19:00",
                end: "19:30",
                shoppers: [],
                isAvailable: true,
            },
            23: {
                start: "19:30",
                end: "20:00",
                shoppers: [],
                isAvailable: true,
            },
            24: {
                start: "20:00",
                end: "20:30",
                shoppers: [],
                isAvailable: true,
            },
            25: {
                start: "20:30",
                end: "21:00",
                shoppers: [],
                isAvailable: true,
            },
            26: {
                start: "21:00",
                end: "21:30",
                shoppers: [],
                isAvailable: true,
            },
            27: {
                start: "21:30",
                end: "22:00",
                shoppers: [],
                isAvailable: true,
            },
        },
    },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Team[]> => Object.values(teams);
export const find = async (id: number): Promise<Team> => teams[id];

export const create = async (newTeam: TeamBase): Promise<Team> => {
    const id = new Date().valueOf();

    teams[id] = {
        id,
        ...newTeam,
    };

    return teams[id];
};

export const update = async (
    id: number,
    updateTeam: TeamBase
): Promise<Team | null> => {
    const team = await find(id);

    if (!team) {
        return null;
    }

    teams[id] = { id, ...updateTeam };

    return teams[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const team = await find(id);

    if (!team) {
        return null;
    }

    delete teams[id];
};
