const stores = [
    {
        id: 1,
        name: "Pingo Doce",
        address: "E.N. 109 - Esgueira, 3800-042, Aveiro N.º 109",
        type: "supermaket",
        schedule: {
            open: "08:00",
            close: "22:00",
        },
        status: "open"
    },
    {
        id: 2,
        name: "Continente",
        address: "Estrada da Taboeira, Aveiro,",
        type: "market",
        schedule: {
            open: "09:30",
            close: "22:00",
        },
        status: "open"
    },
    {
        id: 3,
        name: "Mercadona",
        address: "Alameda Silva Rocha 29, Aveiro",
        type: "supermaket",
        schedule: {
            open: "08:00",
            close: "21:00",
        },
        status: "open"
    },
];

module.exports = stores;