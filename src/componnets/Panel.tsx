import { JSX } from "react"

interface IProps {
    children?: JSX.Element | JSX.Element[] | never[]
    className?: string
}

const Panel = ({ children, className: classname }: IProps) => {
    return (
        <div className={`${classname} p-[20px] rounded-lg border border-neutral-300`}>
            {children}
        </div>
    )
}

export default Panel