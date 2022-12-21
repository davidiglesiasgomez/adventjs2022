function howManyReindeers(reindeerTypes, gifts) {
    const rotarRenos = (weight, renos) => {
    }

    const calcularRenos = (weight) => {
        let num = 0
        let resto = weight
        let initial = reindeerTypes.map(reindeer => {
            num = ~~(resto/reindeer.weightCapacity)
            resto = resto%reindeer.weightCapacity
            return {
                type: reindeer.type,
                num: num
            }
        })
        console.log('initial', initial)

        initial.some((e, i, a) => {
            if (a[i+1] === undefined) return false
            return e > a[i+1]
        })

        return initial
    }

    return gifts.map(gift => {
        console.log(gift)
        return {
            country: gift.country,
            reindeers: calcularRenos(gift.weight)
        }
    })
}

const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
]
const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
]
console.log('howManyReindeers', howManyReindeers(reindeerTypes, gifts)[0])

// module.exports = howManyReindeers