import { JSX, useMemo } from "react"

interface IProps {
    children: string
    icon?: JSX.Element
    variant: 'ok' | 'error' | 'info' | 'transparent'
}

const Tag = ({ children, icon, variant }: IProps) => {

    const containerStyle = useMemo(() => {
        switch (variant) {
            case 'ok': return 'border border-green-200 bg-green-50'
            case 'error': return 'border border-red-200 bg-red-50'
            case 'info': return 'border border-blue-200 bg-blue-50'
            default: return ''
        }
    }, [variant])

    const textColor = useMemo(() => {
        switch (variant) {
            case 'ok': return 'text-green-700'
            case 'error': return 'text-red-700'
            case 'info': return 'text-blue-700'
            default: return 'text-neutral-500'
        }
    }, [variant])

    return (
        <div className={`${containerStyle} px-[8px] py-[4px] flex items-center gap-[4px] rounded-xs`}>
            {icon}
            <p className={`${textColor} text-[12px] font-semibold`}>{children}</p>
        </div>
    )
}

export default Tag