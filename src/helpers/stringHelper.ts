export const normalizeStringNumber = (val: string): string => {
    val = val.replace(/[^\d,\\.]+/g, '')
    return val
}