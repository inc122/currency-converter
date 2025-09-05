import { useEffect } from "react"
import useOnlineState from "../states/onlineState"

const OnlineStateManager = () => {

    const { setIsOnline } = useOnlineState()

    const callback = () => {
        setIsOnline(navigator.onLine)
    }

    useEffect(() => {
        window.addEventListener('online', callback);
        window.addEventListener('offline', callback);
        return () => {
            window.removeEventListener('online', callback);
            window.removeEventListener('offline', callback);
        };
    }, [])

    return <></>
}

export default OnlineStateManager