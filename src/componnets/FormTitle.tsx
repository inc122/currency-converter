
interface IProps {
    children: string
    className?: string
}

const FormTitle = ({ children, className }: IProps) => {
    return (
        <p className={`${className} sm:text-[12px] text-[16px] sm:font-semibold leading-[100%]`}>{children}</p>
    )
}

export default FormTitle