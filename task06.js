function createCube(size) {
    let retorno = ''
    for (let i=1; i<=size; i++) {
        retorno += ' '.repeat(size-i)
        retorno += '/\\'.repeat(i)
        retorno += '_\\'.repeat(size)
        retorno += '\n'
    }
    for (let i=size; i>0; i--) {
        retorno += ' '.repeat(size-i)
        retorno += '\\/'.repeat(i)
        retorno += '_/'.repeat(size)
        retorno += ( i>1 ? '\n' : '' )
    }
    return retorno
}

module.exports = createCube