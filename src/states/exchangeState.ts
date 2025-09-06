import { create } from "zustand"
import { ApiExchangeData } from "../models/ApiExchangeData"
import { getExchangeRates } from "../api/ExchangeRateApi"
import { saveToLocalStorage } from "../helpers/storageHelper"
import { EXCHANGE_RATE_KEY } from "../constants"

type StateAction = {
    loadExchangeData: () => void
    setExchangeData: (payload: ApiExchangeData) => void
}

type StateData = {
    exchangeData?: ApiExchangeData
    isLoadingData: boolean
}

const useExchangeState = create<StateData & StateAction>((set) => ({
  exchangeData: undefined,
  isLoadingData: false,
  loadExchangeData: async () => {
    set ({ isLoadingData: true })
    const response = await getExchangeRates()
    if (response) {
      set({ exchangeData: response })
      saveToLocalStorage(EXCHANGE_RATE_KEY, response)
    }
    set ({ isLoadingData: false })
  },
  setExchangeData: (payload: ApiExchangeData) => {
    set({ exchangeData: payload })
  }
}))

export default useExchangeState