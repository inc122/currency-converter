export const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalStorage = <T>(key: string): T | undefined => {
    const storageData = localStorage.getItem(key)
    if (storageData) {
        return JSON.parse(storageData) as T
    } else {
        return undefined
    }
}