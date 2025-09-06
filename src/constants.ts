import { Currency } from "./models/Currency";
import CurrensyList from "./resources/currencies.json"

export const DefaultFromCurrency: Currency = CurrensyList[0]
export const DefaultToCurrency: Currency = CurrensyList[2]

export const CurrencyDataApiURL = "https://api.fxratesapi.com/latest"
export const RefreshCurrencyIntervalMs = 1000 * 60 * 5 // 5min

export const FROM_CURRENCY_STORAGE_KEY = 'key_currency_from'
export const TO_CURRENCY_STORAGE_KEY = 'key_currency_to'
export const AMOUNT_STORAGE_KEY = 'key_amount'
export const EXCHANGE_RATE_KEY = 'key_exchange_key'

