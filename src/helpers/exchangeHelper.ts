import { ApiExchangeData } from "../models/ApiExchangeData"
import { Currency } from "../models/Currency"

export const getExchangeRate = (exchandeData: ApiExchangeData, fromCurrency: Currency, toCurrency: Currency) => {
    const baseRate = exchandeData.rates[exchandeData.base] ?? 0
    const fromRate = exchandeData.rates[fromCurrency.code] ?? 0
    const toRate = exchandeData.rates[toCurrency.code] ?? 0

    const rate = (baseRate * toRate) / (baseRate * fromRate )
    return rate
}

export const getInverseRate = (exchandeData: ApiExchangeData, fromCurrency: Currency, toCurrency: Currency) => {
    const baseRate = exchandeData.rates[exchandeData.base] ?? 0
    const fromRate = exchandeData.rates[fromCurrency.code] ?? 0
    const toRate = exchandeData.rates[toCurrency.code] ?? 0

    const rate = 1 / ((baseRate * toRate) / (baseRate * fromRate ))
    return rate
}