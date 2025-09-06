interface IProps {
    color?: string
}

const ArrowLeftSVG = ({ color }: IProps) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M4.58334 11H17.4167M4.58334 11L10.0833 16.5M4.58334 11L10.0833 5.5" 
                stroke={color ?? "black"}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
    )
}

export default ArrowLeftSVG
