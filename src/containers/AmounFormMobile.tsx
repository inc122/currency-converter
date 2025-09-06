import { ChangeEvent, useEffect, useState } from "react"
import FormTitle from "../componnets/FormTitle"
import useCurrenciesState from "../states/currenciesState"
import SwapSVG from "../svg/SwapSVG"
import { useDebounce } from "../hooks/useDebounce"
import { getFromLocalStorage, saveToLocalStorage } from "../helpers/storageHelper"
import { AMOUNT_STORAGE_KEY } from "../constants"
import { normalizeStringNumber } from "../helpers/stringHelper"
import CurrencyPickerMobile from "../componnets/CurrencyPickerMobile"
import ArrowLeftRightSVG from "../svg/ArrowLeftRightSVG"

const AmounFormMobile = () => {

    const [inputValue, setInputValue]= useState('')
    const { fromCurrency, toCurrency, setValue, setFromCurrency, setToCurrency, swapCurrencies } = useCurrenciesState()
    const debouncedInput = useDebounce(inputValue, 250)

    const handleValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
        let val = event.target.value

        val = normalizeStringNumber(val)
        setInputValue(val)
        saveToLocalStorage(AMOUNT_STORAGE_KEY, val)
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

    useEffect(() => {
        const storedAmount = getFromLocalStorage<number>(AMOUNT_STORAGE_KEY)
        if (storedAmount) setInputValue(storedAmount.toString())
    }, [])

    return (    
        <div className="h-fit w-full">
            <div className="flex gap-[12px] mt-[24px] mb-[16px]">
                <div className="flex-1">
                    <FormTitle className="mb-[8px]">From</FormTitle>
                    <CurrencyPickerMobile value={fromCurrency} onChanged={setFromCurrency} />
                </div>
                <button 
                    className="flex items-center rounded-xs justify-center w-[42px] h-[42px] hover:bg-neutral-100 self-end"
                    onClick={swapCurrencies}>
                    <ArrowLeftRightSVG />
                </button>
                <div className="flex-1">
                    <FormTitle className="mb-[8px]">To</FormTitle>
                    <CurrencyPickerMobile value={toCurrency} onChanged={setToCurrency} />
                </div>
            </div>
            <FormTitle>Amount</FormTitle>
            <input 
                className="w-full mt-[8px] text-[16px] rounded-xs p-[12px] border bg-white outline-none"
                value={inputValue} 
                onChange={handleValueChanged}/>
        </div>    
    )
}

export default AmounFormMobile