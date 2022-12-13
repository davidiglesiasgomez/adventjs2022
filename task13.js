function getFilesToBackup(lastBackup, changes) {
    const files = changes.filter((e) => e[1] > lastBackup)
    const clean = [...new Set(files.map((e) => e[0]))]
    const order = clean.sort((a, b) => a-b)
    return order
}

module.exports = getFilesToBackup