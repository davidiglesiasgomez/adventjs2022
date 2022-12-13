function checkPart(part) {
    part = part.split('')

    function checkPalindromo(a){
        let length=a.length/2
        return a.slice(0, length).reverse().join('')==a.slice(-length).join('')
    }

    if (checkPalindromo(part)) {
        return true
    }

    for (let i=0; i<part.length; i++) {
        let slice = part.filter((v, j) => ( j==i ? false : true ))
        if (checkPalindromo(slice)) {
            return true
        }
    }

    return false
}

module.exports = checkPart