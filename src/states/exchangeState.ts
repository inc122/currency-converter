import { create } from "zustand"
import { Currency } from "../models/Currency"
import { DefaultFromCurrency, DefaultToCurrency } from "../constants"
import { ApiExchangeData } from "../models/ApiExchangeData"
import { getExchangeRate } from "../helpers/exchangeHelper"

type StateAction = {
    setValue: (payload: number) => void
    setFromCurrency: (payload: Currency) => void
    setToCurrency: (payload: Currency) => void
    swapCurrencies: () => void
    setExchangeData: (payload: ApiExchangeData) => void
}

type StateData = {
    fromCurrency: Currency
    toCurrency: Currency
    exchandeData?: ApiExchangeData
    result: number
    value: number
}

const getExchange = (value: number, fromCurrency: Currency, toCurrency: Currency, exchandeData?: ApiExchangeData): number => {
  if (!exchandeData) return 0

  const result = getExchangeRate(exchandeData, fromCurrency, toCurrency) * value
  
  return Math.round(result * 100) / 100
}

const useExchangeState = create<StateData & StateAction>((set) => ({
  fromCurrency: DefaultFromCurrency,
  toCurrency: DefaultToCurrency,
  exchandeData: undefined,
  result: 0,
  value: 0,
  setValue: (payload: number) => set((state) => { 
    const result = getExchange(payload, state.fromCurrency, state.toCurrency, state.exchandeData)
    return { value: payload, result }
  }),
  setFromCurrency: (payload: Currency) => set((state) => { 
    const result = getExchange(state.value, payload, state.toCurrency, state.exchandeData)
    return { fromCurrency: payload, result }
  }),
  setToCurrency: (payload: Currency) => set((state) => {
    const result = getExchange(state.value, state.fromCurrency, payload, state.exchandeData)
    return { toCurrency: payload, result }
  }),
  swapCurrencies: () => set((state) => {
    const result = getExchange(state.value, state.toCurrency, state.fromCurrency, state.exchandeData)
    return {
      fromCurrency: state.toCurrency,
      toCurrency: state.fromCurrency,
      result
    }
  }),
  setExchangeData: (payload: ApiExchangeData) => set((state) => {
    const result = getExchange(state.value, state.fromCurrency, state.toCurrency, payload)
    return {
      exchandeData: payload,
      result
    }
  })
}))

export default useExchangeState