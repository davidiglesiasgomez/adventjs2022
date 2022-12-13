function getCompleted(part, total) {

    const convertirSegundos = (a) => {
        let tmp = a.split(':');
        return Date.UTC(1970, 0, 1, tmp[0], tmp[1], tmp[2]) / 1000;
    }

    const maximoComunDivisorRecursivo = (a, b) => {
        // https://parzibyte.me/blog
        if (b === 0) return a;
        return maximoComunDivisorRecursivo(b, a % b);
    };

    part = convertirSegundos(part)
    total = convertirSegundos(total)
    const mcd = maximoComunDivisorRecursivo(part, total)

    return (part / mcd) + '/' + (total / mcd)
}

module.exports = getCompleted;