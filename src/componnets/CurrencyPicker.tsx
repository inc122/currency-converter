import { useCallback, useEffect, useRef, useState } from "react"
import Label from "./Label"
import CloseSVG from "../svg/CloseSVG"
import CurrencyList from "../resources/currencies.json"
import SearchInput from "./SearchInput"
import { Currency } from "../models/Currency"
import CheckSVG from "../svg/CheckSVG"

interface IProps {
    value: Currency
    onChanged: (c: Currency) => void
}

const CurrencyPicker = ({ value, onChanged }: IProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    const [showModal, setShowModal] = useState(false)
    const [filterText, setFilterText] = useState('')
    const [filteredData, setFilteredData] = useState<Currency[]>([])

    const handleItemSelected = useCallback((currency: Currency) => {
        onChanged(currency)
        setShowModal(false)
        setFilterText('')
    }, [onChanged])

    useEffect(() => {
        if (!filterText) {
            setFilteredData(CurrencyList)
        } else {
            setFilteredData(CurrencyList.filter(c => c.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) || c.code.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())))
        }
    }, [filterText, value.code])

    useEffect(() => {
        if (showModal) {
            dialogRef.current?.showModal()
            //scroll to selected element
            const targetElement = document.getElementById(value.code)
            targetElement?.scrollIntoView()
        } else {
            dialogRef.current?.close()
        }
    }, [showModal, value])

    return (
        <div className="w-full">
            <button className="w-full flex gap-[12px] px-[8px] py-[6px] rounded-xs bg-neutral-100 border border-neutral-300 hover:bg-neutral-50 cursor-pointer" onClick={() => setShowModal(v => !v)}>
                <div className="flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 w-[30px] h-[30px]">
                    <p className="text-blue-700 font-semibold text-[12px] max-w-[30px] overflow-hidden">{value.symbolNative}</p>
                </div>
                <div className="flex flex-col items-start gap-[2px]">
                    <p className="text-black font-semibold text-[14px] leading-[100%]">{value.code}</p>
                    <p className="text-neutral-500 text-[12px] leading-[100%]">{value.name}</p>
                </div>
            </button>
            {showModal && (
                <dialog ref={dialogRef} className="rounded-sm p-[16px] w-full lg:w-[440px] h-[450px] lg:h-[439px] flex flex-col gap-[12px]" onClose={() => setShowModal(false)}>
                    <div className="flex justify-between">
                        <p className="text-[16px] font-semibold">Select currency</p>
                        <button onClick={() => setShowModal(false)}><CloseSVG /></button>
                    </div>
                    <Label>Choose a currency from the list below or use the search bar to find a specific currency.</Label>
                    <SearchInput onChanged={setFilterText} />
                    <div className="flex-1 overflow-auto">
                        {filteredData.map(d => {
                            const selected = value.code === d.code
                            return (
                                <button 
                                    id={d.code}
                                    key={d.name} 
                                    className={`flex items-center gap-[12px] px-[8px] py-[12px] w-full rounded-xs hover:bg-neutral-100 cursor-pointer ${selected ? 'bg-neutral-100' : ''}`}
                                    onClick={() => handleItemSelected(d)}>
                                    <div className="flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 w-[30px] h-[30px]">
                                        <p className="text-blue-700 font-semibold text-[12px] max-w-[30px] overflow-hidden">{d.symbolNative}</p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[2px] mr-auto">
                                        <p className="text-black font-semibold text-[14px] leading-[100%]">{d.code}</p>
                                        <p className="text-neutral-500 text-[12px] leading-[100%]">{d.name}</p>
                                    </div>
                                    {selected && <CheckSVG />}
                                </button>
                            )
                        })}
                    </div>
                </dialog>
            )}
        </div>
    )
}

export default CurrencyPicker