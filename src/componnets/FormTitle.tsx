
interface IProps {
    children: string
    className?: string
}

const FormTitle = ({ children, className }: IProps) => {
    return (
        <p className={`${className} text-[12px] font-semibold leading-[100%]`}>{children}</p>
    )
}

export default FormTitle