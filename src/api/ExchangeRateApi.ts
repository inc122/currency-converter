import { CurrencyDataApiURL } from "../constants";
import { ApiExchangeData } from "../models/ApiExchangeData";

export const getExchangeRates = async (): Promise<ApiExchangeData | undefined> => {
    try {
        const data = await fetch(CurrencyDataApiURL)
        if (data.status === 200) {
            const result = await data.json() as ApiExchangeData
            return result
        } else {
            return undefined
        }
    }
    catch {
        console.error('ERROR')
    }
}