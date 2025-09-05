import { ChangeEvent, useEffect, useState } from "react"
import FormTitle from "../componnets/FormTitle"
import Panel from "../componnets/Panel"
import CurrencyPicker from "../componnets/CurrencyPicker"
import useCurrenciesState from "../states/currenciesState"
import SwapSVG from "../svg/SwapSVG"
import { useDebounce } from "../hooks/useDebounce"

const AmounForm = () => {

    const [inputValue, setInputValue]= useState('')
    const { fromCurrency, toCurrency, setValue, setFromCurrency, setToCurrency, swapCurrencies } = useCurrenciesState()
    const debouncedInput = useDebounce(inputValue, 250)

    const handleValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
        let val = event.target.value

        //normalize number value
        val = val.replace(/[^\d,\\.]+/g, '')
        setInputValue(val)
    }

    useEffect(() => {
        if (!debouncedInput) {
            setValue(0)
        } else {
            const parsedValue = Number.parseFloat(debouncedInput.replace(',','.'))
            if (!Number.isNaN(parsedValue))
                setValue(parsedValue)
        }
    }, [debouncedInput, setValue])

    return (    
        <Panel classname="flex-1 h-fit">
            <FormTitle>Amount</FormTitle>
            <input 
                className="w-full mt-[8px] rounded-xs p-[12px] border border-neutral-300 bg-neutral-50 text-center outline-none"
                value={inputValue} 
                onChange={handleValueChanged}/>
            <div className="flex gap-[12px] mt-[24px]">
                <div className="flex-1">
                    <FormTitle className="mb-[8px]">From</FormTitle>
                    <CurrencyPicker value={fromCurrency} onChanged={setFromCurrency} />
                </div>
                <button 
                    className="flex items-center rounded-xs justify-center w-[42px] h-[42px] hover:bg-neutral-100 self-end"
                    onClick={swapCurrencies}>
                    <SwapSVG />
                </button>
                <div className="flex-1">
                    <FormTitle className="mb-[8px]">To</FormTitle>
                    <CurrencyPicker value={toCurrency} onChanged={setToCurrency} />
                </div>
            </div>
        </Panel>    
    )
}

export default AmounForm