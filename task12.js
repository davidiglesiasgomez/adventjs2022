function selectSleigh(distance, sleighs) {
    let v = sleighs.sort((a, b) => b.consumption-a.consumption)
    .reduce((a, v) => ( !a && distance * v.consumption <= 20 ? v : a ), null)
    return ( v ? v.name : null )
}

module.exports = selectSleigh;