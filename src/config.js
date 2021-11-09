const layersOrder = [
    {name: 'base', number: 1},
    {name: 'hair', number: 7},
    {name: 'eyes', number: 12},
    {name: 'mouth', number: 8}
];

const format = {
    width: 500,
    height: 500
};

const rarity = [
    {key: "", val: "common"},
//    {key: "_u", val: "uncommon"},
//    {key: "_r", val: "rare"},
//    {key: "_e", val: "epic"},
//    {key: "_l", val: "legendary"}
];

const defaultEdition = 100;

module.exports = {layersOrder, format, rarity, defaultEdition};