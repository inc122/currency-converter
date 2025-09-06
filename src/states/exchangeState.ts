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
    error: boolean
}

const useExchangeState = create<StateData & StateAction>((set) => ({
  exchangeData: undefined,
  isLoadingData: false,
  error: false,
  loadExchangeData: async () => {
    set ({ isLoadingData: true })
    const response = await getExchangeRates()
    if (response) {
      set({ 
        exchangeData: response, 
        isLoadingData: false, 
        error: false 
      })
      saveToLocalStorage(EXCHANGE_RATE_KEY, response)
    } else {
      set({ 
        isLoadingData: false, 
        error: true 
      })
    }
  },
  setExchangeData: (payload: ApiExchangeData) => {
    set({ exchangeData: payload })
  }
}))

export default useExchangeState