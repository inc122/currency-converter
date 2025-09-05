import { useEffect } from "react"
import { getCurrencies } from "../api/CurrencyApi"
import { RefreshCurrencyIntervalMs } from "../constants"
import useExchangeState from "../states/exchangeState"

const CurrencyManager = () => {

    const { setExchangeData } = useExchangeState()

    const refreshCurrencyData = () => {
        getCurrencies()
        .then((data) => {
            if (data) setExchangeData(data)
        })
    }

    useEffect(() => {
        refreshCurrencyData()
        const interval = setInterval(() => {
            refreshCurrencyData()
        }, RefreshCurrencyIntervalMs)
        return () => clearInterval(interval)
    }, [])

    return <></>
}

export default CurrencyManager