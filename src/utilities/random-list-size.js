export const getRandomInt = (range) => {
    return [
        Math.floor((Math.random() * range) / 4),
        Math.floor(Math.random() * (range - range / 4) + range / 4),
    ];
};
