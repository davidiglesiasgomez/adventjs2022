function distributeGifts(packOfGifts, reindeers) {
    const regalos = packOfGifts.reduce((acc, regalo) => acc + regalo.length, 0)
    const renos = reindeers.reduce((acc, reno) => acc + 2 * reno.length, 0)
    return Math.trunc(renos/regalos)
}

module.exports = distributeGifts