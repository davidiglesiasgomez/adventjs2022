function decorateTree(base) {
    function decoration(a, b) {
        if (a === b) {
            return a;
        }
        return ['B', 'P', 'R'].filter(e => e != a && e != b)[0]
    }
    let lineas = base.split(' ').length-1
    let retorno = [base]
    let linea = ''
    for (let i=lineas; i>0; i--) {
        linea = ''
        for (let j=0; j<i; j++) {
            linea += decoration(retorno[0][2*j], retorno[0][2*j+2]) + ' '
        }
        retorno.unshift(linea.trim())
    }
    return retorno
}

module.exports = decorateTree