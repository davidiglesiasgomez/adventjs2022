function howManyReindeers(reindeerTypes, gifts) {
    const comprobarCoincidenciaValor = (valor, pesos, iteracion) => {

        // console.log('valor', valor, 'iteracion', iteracion, 'reduce', iteracion.reduce((acc, e, i) => {
        //     return acc + e * pesos[i]
        // }, 0))

        return valor == iteracion.reduce((acc, e, i) => {
            return acc + e * pesos[i]
        }, 0)
    }

    const comprobarOrdenCorrecto = (iteracion) => {
        return !iteracion.some((e, i, a) => {
            if (a[i+1] === undefined) return false
            return e > a[i+1]
        })
    }

    const restarUnidad = (maximos, iteracion) => {
        let carry=1
        iteracion = iteracion.reverse().map((e, i) => {
            if (carry == 1 && e-1 < 0) {
                carry = 1
                return maximos[i]
            } else if (carry == 1) {
                carry = 0
                return e-1
            }
            carry = 0
            return e
        }).reverse()
        return iteracion
    }

    const calcularRenos = (weight) => {
        // console.log('reindeerTypes', reindeerTypes)
        // console.log('weight', weight)

        let pesos = reindeerTypes.map(reindeer => reindeer.weightCapacity)

        let maximos = reindeerTypes.map(reindeer => ~~(weight/reindeer.weightCapacity))
        // let maximos = reindeerTypes.map(reindeer => reindeer.weightCapacity)
        // console.log('maximos', maximos)

        let iteracion = maximos
        while (iteracion.some(e => e != 0)) {
            iteracion = restarUnidad(maximos, iteracion)
            if (!comprobarOrdenCorrecto(iteracion)) {
                continue
            }
            if (!comprobarCoincidenciaValor(weight, pesos, iteracion)) {
                continue
            }
            // console.log('iteracion', iteracion)
            break;
        }

        return reindeerTypes.map((reindeer, i) => {
            return {
                type: reindeer.type,
                num: iteracion[i]
            }
        }).filter(e => e.num != 0)
    }

    return gifts.map(gift => {
        // console.log(gift)
        return {
            country: gift.country,
            reindeers: calcularRenos(gift.weight)
        }
    })
}

// const reindeerTypes = [
//     { type: 'Nuclear', weightCapacity: 50 },
//     { type: 'Electric', weightCapacity: 10 },
//     { type: 'Gasoline', weightCapacity: 5 },
//     { type: 'Diesel', weightCapacity: 1 }
// ]
// const gifts = [
//     { country: 'Spain', weight: 30 },
//     // { country: 'France', weight: 17 },
//     // { country: 'Italy', weight: 50 }
// ]
// console.log('howManyReindeers', howManyReindeers(reindeerTypes, gifts)[0])

module.exports = howManyReindeers