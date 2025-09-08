interface IProps {
    color?: string
}

const ArrowLeftRightSVG = ({ color }: IProps) => {
    return (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M16.25 12.75H2.75M16.25 12.75L14 15M16.25 12.75L14 10.5M5 7.5L2.75 5.25M2.75 5.25L5 3M2.75 5.25H16.25" 
                stroke={color ?? "black"}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
    )
}

export default ArrowLeftRightSVG
