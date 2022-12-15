function getOptimalPath(path) {
    let paths = []
    let segmentos = []
    let temporal_paths = []
    let valores = []
    for (let i=0; i<path.length; i++) {
        segmentos = []
        temporal_paths = []
        for (let j=0; j<path[i].length; j++) {

            if (paths.length == 0) {
                paths.push([[j, i]])
                temporal_paths = paths
                continue
            }

            paths.forEach(element => {
                if (j != element.at(-1)[0] && j != 1+element.at(-1)[0]) {
                    return
                }
                segmentos = element.concat([[j, i]])
                temporal_paths = temporal_paths.concat([segmentos])
            })
        }
        paths = [...temporal_paths]
    }

    valores = paths.map(e1 => {
        return e1.reduce((acc, e2) => acc + path[e2[1]][e2[0]], 0)
    })

    return Math.min(...valores)
}

module.exports = getOptimalPath