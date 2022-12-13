function wrapping(gifts) {
    return gifts.map(gift => '*'.repeat(2+gift.length) + '\n' + '*' + gift + '*' + '\n' + '*'.repeat(2+gift.length))
}

module.exports = wrapping