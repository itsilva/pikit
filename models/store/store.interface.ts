export interface BaseStore {
    name: String,
    address: String,
    type: String,
    schedule: Object,
    isOpen: Boolean
}

export interface Store extends BaseStore {
    id: number;
}
