function getGiftsToRefill(a1, a2, a3) {
    return [...new Set(a1), ...new Set(a2), ...new Set(a3)].filter((x, i, a) => a.filter((el) => el===x ).length === 1)
}

module.exports = getGiftsToRefill