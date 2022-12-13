function fitsInOneBox(boxes) {
    return boxes
        .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h)
        .every((box, i) => {
            if (i === boxes.length - 1) return true
            const next = boxes[i + 1]
            return next.l > box.l && next.w > box.w && next.h > box.h
        })
}

module.exports = fitsInOneBox