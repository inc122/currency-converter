import FormTitle from "../componnets/FormTitle"
import Panel from "../componnets/Panel"
import useCurrenciesState from "../states/currenciesState"
import Divider from "../componnets/Divider"
import { useEffect, useMemo, useState } from "react"
import { getExchangeRate, getInverseRate } from "../helpers/exchangeHelper"
import useExchangeState from "../states/exchangeState"
import { round } from "../helpers/numberHelper"
import { checkCurrency } from "../helpers/currencyHelper"

const ResultPanel = () => {

    const { fromCurrency, toCurrency, value } = useCurrenciesState()
    const { exchangeData } = useExchangeState()

    const [result, setResult] = useState(0)

    const exchangeRate = useMemo(() => {
        if (!exchangeData) return 0
        return round(getExchangeRate(exchangeData, fromCurrency, toCurrency))
    }, [exchangeData, fromCurrency, toCurrency])

    const inverseRate = useMemo(() => {
        if (!exchangeData) return 0
        return round(getInverseRate(exchangeData, fromCurrency, toCurrency))
    }, [exchangeData, fromCurrency, toCurrency])

    const isFromCurrencyValid = useMemo(() => {
        if (!exchangeData) return false
        return checkCurrency(fromCurrency, exchangeData)
    }, [fromCurrency, exchangeData])

    const isToCurrencyValid = useMemo(() => {
        if (!exchangeData) return false
        return checkCurrency(toCurrency, exchangeData)
    }, [toCurrency, exchangeData])

    useEffect(() => {
        if (exchangeData) {
            const res = getExchangeRate(exchangeData, fromCurrency, toCurrency) * value
            setResult(round(res))
        }
    }, [fromCurrency, toCurrency, value, exchangeData])

    return (    
        <Panel className="w-full lg:w-[336px]">
            <FormTitle className="text-[18px]">Conversion result</FormTitle>
            {(isFromCurrencyValid && isToCurrencyValid) ? (
                <>
                    <div className="flex flex-col items-center mt-[24px] h-[48px]">
                        <p className="text-[24px] font-bold">
                            {toCurrency.symbolNative}
                            {result}
                        </p>
                        <p className="text-[12px] text-neutral-500">1 {fromCurrency.code} =</p>
                    </div>
                    <Divider />
                    <div className="flex justify-between mb-[12px]">
                        <p className="text-[12px] text-neutral-500 font-semibold">Exchange Rate</p>
                        <p className="text-[12px] text-black font-semibold">1 {fromCurrency.code} = {exchangeRate} {toCurrency.code}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[12px] text-neutral-500 font-semibold">Inverse Rate</p>
                        <p className="text-[12px] text-black font-semibold">1 {toCurrency.code} = {inverseRate} {fromCurrency.code}</p>
                    </div>
                </>
            ) : 
                <div className="flex flex-col items-center justify-center mt-[20px]">
                    <p className="text-[14px] text-red-700 font-semibold">Invalid currency</p>
                    {!isFromCurrencyValid && <p className="text-[14px] text-red-700">No data for {fromCurrency.code} - {fromCurrency.name}</p>}
                    {!isToCurrencyValid && <p className="text-[14px] text-red-700">No data for {toCurrency.code} - {toCurrency.name}</p>}
                </div>
            }
            <Divider />
            <p className="px-[12px] py-[8px] bg-neutral-50 rounded-sm text-[12px] text-neutral-500 text-center">Rates are for informational purposes only and may not reflect real-time market rates</p>
        </Panel>    
    )
}

export default ResultPanel