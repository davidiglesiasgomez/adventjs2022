function dryNumber(dry, numbers) {
    let retorno = []
    for (let i=1; i<=numbers; i++) {
        if (i.toString().includes(dry.toString())) {
            retorno.push(i)
        }
    }
    return retorno
}

module.exports = dryNumber