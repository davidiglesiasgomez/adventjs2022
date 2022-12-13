function countTime(leds) {
    let contador = 0
    while (!leds.every((x) => x === 1)) {
        let ultimo = leds[leds.length - 1]
        for (let i=leds.length - 1; i>=0; i--) {
            leds[i] = ( ( i > 0 ? leds[i - 1] === 1 : ultimo ) ? 1 : leds[i] )
        }
        contador += 7
    }
    return contador
}

module.exports = countTime;
