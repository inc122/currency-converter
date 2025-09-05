
interface IProps {
    children: string
    className?: string
}

const Label = ({ children, className }: IProps) => {
    return (
        <p className={`${className} text-[14px] text-neutral-500`}>{children}</p>
    )
}

export default Label