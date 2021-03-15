export interface TeamBase {
    name: String,
    shoppers: Object,
    slots: Object
}

export interface Team extends TeamBase {
    id: number;
}
