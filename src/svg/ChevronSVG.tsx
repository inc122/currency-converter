interface IProps {
    color?: string
}

const ChevronSVG = ({ color }: IProps) => {
    return (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M5 6.75L9.5 11.25L14 6.75" 
                stroke={color ?? "black"}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
    )
}

export default ChevronSVG
