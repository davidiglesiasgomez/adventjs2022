function checkJump(heights) {
    if (heights.length === 0) {
        return false
    }

    let estado = ''
    return heights.every((v, i, a) => {
        if (estado === '' && i === a.length-1) {
            return false
        }
        if (estado === 'subiendo' && i === a.length-1) {
            return false
        }
        if (estado === 'bajando' && i === a.length-1) {
            return true
        }
        if (estado === '' && v > a[i+1]) {
            return false
        }
        if (estado === '' && v < a[i+1]) {
            estado = 'subiendo'
            return true
        }
        if (estado === 'subiendo' && v <= a[i+1]) {
            estado = 'subiendo'
            return true
        }
        if (estado === 'subiendo' && v > a[i+1]) {
            estado = 'bajando'
            return true
        }
        if (estado === 'bajando' && v < a[i+1]) {
            return false
        }
        if (estado === 'bajando' && v > a[i+1]) {
            estado = 'bajando'
            return true
        }
        return true
    })
}

module.exports = checkJump