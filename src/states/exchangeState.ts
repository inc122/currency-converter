import { create } from "zustand"
import { ApiExchangeData } from "../models/ApiExchangeData"
import { getCurrencies } from "../api/CurrencyApi"

type StateAction = {
    loadExchangeData: () => void
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
    const response = await getCurrencies()
    if (response) {
      set({ exchangeData: response })
    }
    set ({ isLoadingData: false })
  },
}))

export default useExchangeState