function dryNumber(dry, numbers) {
    const list = [...Array(numbers+1).keys()]
    return list.filter(e => e.toString().includes(dry))
}

module.exports = dryNumber