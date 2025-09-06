import { ApiExchangeData } from "../models/ApiExchangeData";
import { Currency } from "../models/Currency";

export const checkCurrency = (currency: Currency, exchangeData: ApiExchangeData): boolean => {
    return exchangeData.rates[currency.code] !== undefined
}