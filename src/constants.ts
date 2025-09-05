import { Currency } from "./models/Currency";
import CurrensyList from "./resources/currencies.json"

export const DefaultFromCurrency: Currency = CurrensyList[0]
export const DefaultToCurrency: Currency = CurrensyList[2]

export const CurrencyDataApiURL = "https://api.fxratesapi.com/latest"
export const RefreshCurrencyIntervalMs = 1000 * 60 * 5 // 5min
export const RefreshNetworkStateIntervalMs = 100000 * 10 // 10sec