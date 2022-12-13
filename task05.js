function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let combinaciones = [...giftsCities
        .reduce((x, y) => x.concat(x.map(x => [y].concat(x))), [[]])]
    combinaciones = combinaciones.filter((a) => a.length<=maxCities).map((a) => a.reduce((acc, el) => acc+el, 0)).filter((a) => a<=maxGifts)
    return Math.max(...combinaciones)
}

module.exports = getMaxGifts