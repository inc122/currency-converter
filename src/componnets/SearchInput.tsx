import { ChangeEvent, useState } from "react"
import SearchSVG from "../svg/SearchSVG"

interface IProps {
    onChanged?: (v: string) => void
}

const SearchInput = ({ onChanged }: IProps) => {

    const [focused, setFocused] = useState(false)

    const handleFilterTextChanged = (event: ChangeEvent<HTMLInputElement>) => {
        onChanged?.(event.target.value)
    }
    
    return (
        <div className={`rounded-xs border-[3px] border-transparent ${focused ? ' !border-blue-50' : '' }`}>
            <div className={`flex gap-[8px] items-center rounded-xs px-[12px] py-[8px] border-[1px] border-neutral-300 ${focused ? ' !border-blue-400' : '' }`}>
                <SearchSVG color={focused ? 'black' : '#737373'} />
                <input 
                    placeholder="Search currency"
                    onChange={handleFilterTextChanged}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="outline-none flex-1" />
            </div>
        </div>
    )
}

export default SearchInput