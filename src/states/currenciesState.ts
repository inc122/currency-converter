import { create } from "zustand"
import { Currency } from "../models/Currency"
import { DefaultFromCurrency, DefaultToCurrency, FROM_CURRENCY_STORAGE_KEY, TO_CURRENCY_STORAGE_KEY } from "../constants"
import { saveToLocalStorage } from "../helpers/storageHelper"

type StateAction = {
    setFromCurrency: (payload: Currency) => void
    setToCurrency: (payload: Currency) => void
    swapCurrencies: () => void
    setValue: (payload: number) => void
}

type StateData = {
    fromCurrency: Currency
    toCurrency: Currency
    value: number
}

const useCurrenciesState = create<StateData & StateAction>((set) => ({
  fromCurrency: DefaultFromCurrency,
  toCurrency: DefaultToCurrency,
  value: 0,
  setFromCurrency: (payload: Currency) => set((state) => {
    saveToLocalStorage(FROM_CURRENCY_STORAGE_KEY, payload)
    return { fromCurrency: payload }
  }),
  setToCurrency: (payload: Currency) => set((state) => {
    saveToLocalStorage(TO_CURRENCY_STORAGE_KEY, payload)
    return { toCurrency: payload }
  }),
  swapCurrencies: () => set((state) => {
    return {
      fromCurrency: state.toCurrency,
      toCurrency: state.fromCurrency,
    }
  }),
  setValue: (payload: number) => set((state) => {
    return { value: payload }
  }),
}))

export default useCurrenciesState