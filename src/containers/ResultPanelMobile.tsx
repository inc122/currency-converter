import useCurrenciesState from "../states/currenciesState"
import { useEffect, useState } from "react"
import { getExchangeRate } from "../helpers/exchangeHelper"
import useExchangeState from "../states/exchangeState"
import { round } from "../helpers/numberHelper"

const ResultPanelMobile = () => {

    const { fromCurrency, toCurrency, value } = useCurrenciesState()
    const { exchangeData } = useExchangeState()

    const [result, setResult] = useState(0)

    useEffect(() => {
        if (exchangeData) {
            const res = getExchangeRate(exchangeData, fromCurrency, toCurrency) * value
            setResult(round(res))
        }
    }, [fromCurrency, toCurrency, value, exchangeData])

    return (    
        <div className="w-full">
            <p className="text-[16px]">{value}{fromCurrency.symbolNative} =</p>
            <p className="text-[42px]">{result} {toCurrency.symbolNative}</p>
        </div>    
    )
}

export default ResultPanelMobile