import { useEffect } from "react"
import { RefreshCurrencyIntervalMs } from "../constants"
import useExchangeState from "../states/exchangeState"

const ExchangeRateManager = () => {

    const { loadExchangeData } = useExchangeState()

    useEffect(() => {
        loadExchangeData()
        const interval = setInterval(() => {
            loadExchangeData()
        }, RefreshCurrencyIntervalMs)
        return () => clearInterval(interval)
    }, [])

    return <></>
}

export default ExchangeRateManager