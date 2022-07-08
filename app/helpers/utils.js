module.exports = {
    getRandomIntInclusive(min, max) {
        const roundedMin = Math.ceil(min);
        const roundedMax = Math.floor(max);
        return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
    },
};
