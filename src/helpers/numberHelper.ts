export const round = (val: number): number => {
    let result = Math.round(val * 100) / 100
    if (result === 0) {
        result = Math.round(val * 10000) / 10000
    }

    return result
}