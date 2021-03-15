/**
 * Data Model Interfaces
 */
import { BaseStore, Store } from "../../models/store/store.interface";
import { Stores } from "../../models/store/stores.interface";

/**
 * In-Memory Store
 * 
 * -> Remove this After database Connection, this
 * is used only for testing the logic
 */
const stores: Stores = {
    1: {
        id: 1,
        name: "Pingo Doce",
        address: "E.N. 109 - Esgueira, 3800-042, Aveiro N.º 109",
        type: "supermaket",
        schedule: {
            open: "08:00",
            close: "22:00",
        },
        isOpen: true,
    },
    2: {
        id: 2,
        name: "Continente",
        address: "Estrada da Taboeira, Aveiro,",
        type: "market",
        schedule: {
            open: "09:30",
            close: "22:00",
        },
        isOpen: true,
    },
    3: {
        id: 3,
        name: "Mercadona",
        address: "Alameda Silva Rocha 29, Aveiro",
        type: "supermaket",
        schedule: {
            open: "08:00",
            close: "21:00",
        },
        isOpen: true,
    },
}

/**
 * Service Methods
 */

export const findAll = async (): Promise<Store[]> => Object.values(stores);
export const find = async (id: number): Promise<Store> => stores[id];

export const create = async (newStore: BaseStore): Promise<Store> => {
    const id = new Date().valueOf();

    stores[id] = {
        id,
        ...newStore,
    };

    return stores[id];
};

export const update = async (
    id: number,
    updateStore: BaseStore
): Promise<Store | null> => {
    const store = await find(id);

    if (!store) {
        return null;
    }

    stores[id] = { id, ...updateStore };

    return stores[id];
};


export const remove = async  (id: number): Promise<null | void> => {
    const store = await find(id);

    if (!store) {
        return null
    };

    delete stores[id];
};

