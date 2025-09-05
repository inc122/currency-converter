import FormTitle from "../componnets/FormTitle"
import Panel from "../componnets/Panel"
import useCurrenciesState from "../states/currenciesState"
import Divider from "../componnets/Divider"
import { useEffect, useMemo, useState } from "react"
import { getExchangeRate, getInverseRate } from "../helpers/exchangeHelper"
import useExchangeState from "../states/exchangeState"

const ResultPanel = () => {

    const { fromCurrency, toCurrency, value } = useCurrenciesState()
    const { exchangeData } = useExchangeState()

    const [result, setResult] = useState(0)

    const exchangeRate = useMemo(() => {
        if (!exchangeData) return 0
        return Math.round(getExchangeRate(exchangeData, fromCurrency, toCurrency) * 100) / 100
    }, [exchangeData, fromCurrency, toCurrency])

    const inverseRate = useMemo(() => {
        if (!exchangeData) return 0
        return Math.round(getInverseRate(exchangeData, fromCurrency, toCurrency) * 100) / 100
    }, [exchangeData, fromCurrency, toCurrency])

    useEffect(() => {
        if (exchangeData) {
            const res = getExchangeRate(exchangeData, fromCurrency, toCurrency) * value
            setResult(Math.round(res * 100) / 100)
        }
    }, [fromCurrency, toCurrency, value, exchangeData])

    return (    
        <Panel classname="w-full lg:w-[336px]">
            <FormTitle className="text-[18px]">Conversion result</FormTitle>
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
            <Divider />
            <p className="px-[12px] py-[8px] bg-neutral-50 rounded-sm text-[12px] text-neutral-500 text-center">Rates are for informational purposes only and may not reflect real-time market rates</p>
        </Panel>    
    )
}

export default ResultPanel