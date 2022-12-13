function countHours(year, holidays) {
    const dia = (e) => (new Date(year + '-' + e.replace('/', '-'))).getDay()
    const dias = holidays.map(e => dia(e))
    const days = dias.filter(e => e>0 && e<6)
    return 2 * days.length
}

module.exports = countHours