import { useCallback, useEffect, useRef, useState } from "react"
import Label from "./Label"
import CloseSVG from "../svg/CloseSVG"
import CurrencyList from "../resources/currencies.json"
import SearchInput from "./SearchInput"
import { Currency } from "../models/Currency"
import CheckSVG from "../svg/CheckSVG"
import ChevronSVG from "../svg/ChevronSVG"
import ArrowLeftSVG from "../svg/ArrowLeftSVG"
import RadioCheckedSVG from "../svg/RadioCheckedSVG"
import RadioSVG from "../svg/RadioSVG"

interface IProps {
    value: Currency
    onChanged: (c: Currency) => void
}

const CurrencyPickerMobile = ({ value, onChanged }: IProps) => {

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
            setFilteredData(CurrencyList.filter(c => c.code === value.code))
        } else {
            setFilteredData(CurrencyList.filter(c => c.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) || c.code.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())))
        }
    }, [filterText, value.code])

    return (
        <div className="w-full">
            <button className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-xs bg-neutral-400" onClick={() => setShowModal(v => !v)}>
                <img className="w-[30px] h-[20px] border rounded-2xs" src={value.flagSrc} alt="flag" />
                <p className="text-black text-[16px] leading-[100%] mr-auto">{value.code}</p>
                <ChevronSVG />
            </button>
            {showModal && (
                <div className="fixed top-0 right-0 left-0 bottom-0 bg-neutral-50 rounded-sm ">
                    <div className="flex gap-[12px] bg-white px-[20px] py-[16px]">
                        <button onClick={() => setShowModal(false)}><ArrowLeftSVG /></button>
                        <p className="text-[20px] font-bold">Currency Select</p>
                    </div>
                    <div className="p-[20px] h-[calc(100%-62px-20px)]">
                        <SearchInput onChanged={setFilterText} />
                        <div className="max-h-[calc(100%-42px)] overflow-auto mt-[16px] bg-neutral-250 rounded-xs">
                            {filteredData.map(d => {
                                const selected = value.code === d.code
                                return (
                                    <button 
                                        key={d.name} 
                                        className={`flex items-center gap-[12px] p-[16px] w-full rounded-xs hover:bg-neutral-100 cursor-pointer ${selected ? 'bg-neutral-400' : ''}`}
                                        onClick={() => handleItemSelected(d)}>
                                        <img className="w-[30px] h-[20px] border rounded-2xs" src={d.flagSrc} alt="flag" />
                                        <p className="text-black text-[16px] leading-[100%] mr-auto">{d.code} - {d.name}</p>
                                        {selected ? <RadioCheckedSVG /> : <RadioSVG />}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CurrencyPickerMobile