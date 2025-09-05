
interface IProps {
    children: string
}

const Title = ({ children }: IProps) => {
    return (
        <p className='text-[32px] font-semibold leading-[100%]'>{children}</p>
    )
}

export default Title