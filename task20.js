function howManyReindeers(reindeerTypes, gifts) {
    const calcularRenos = (weight) => {
        reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)

        reindeerTypes.forEach((_, i) => {
            reindeerTypes[i].num = 0
        })

        let carry = weight
        reindeerTypes.forEach((e, i, a) => {
            let sum = a.filter((_, j) => j>=i).reduce((acc, e2) => acc + e2.weightCapacity, 0)
            if (e.weightCapacity > carry) return
            let factor = ~~(carry / sum)
            carry = carry % sum
            for (let j=i; j<reindeerTypes.length; j++) {
                reindeerTypes[j].num = reindeerTypes[j].num + factor
            }
        });

        return reindeerTypes.map((reindeer) => {
            return {
                type: reindeer.type,
                num: reindeer.num || 0
            }
        }).filter(e => e.num != 0)
    }

    return gifts.map(gift => {
        return {
            country: gift.country,
            reindeers: calcularRenos(gift.weight)
        }
    })
}

module.exports = howManyReindeers