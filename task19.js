function sortToys(toys, positions) {
    let retorno = {}
    positions.forEach((e, i) => {
        retorno[e] = toys[i]
    });
    return Object.values(retorno)
}

module.exports = sortToys