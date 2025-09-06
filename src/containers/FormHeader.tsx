import moment from "moment"
import Label from "../componnets/Label"
import Tag from "../componnets/Tag"
import Title from "../componnets/Title"
import ClockSVG from "../svg/ClockSVG"
import RefreshSVG from "../svg/RefreshSVG"
import WifiSVG from "../svg/WifiSVG"
import useOnlineState from "../states/onlineState"
import NoWifiSVG from "../svg/NoWifiSVG"
import useExchangeState from "../states/exchangeState"

const FormHeader = () => {

    const { exchangeData, loadExchangeData } = useExchangeState()
    const { isOnline } = useOnlineState()

    return (
        <div>
            <div className="flex flex-col gap-[10px] items-center">
                <Title>Currency converter</Title>
                <Label className="font-medium">Get real-time exchange rates</Label>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-[8px] mt-[30px] items-center justify-center">
                <Tag 
                    variant={isOnline ? 'ok' : 'error'} 
                    icon={isOnline ? <WifiSVG /> : <NoWifiSVG />}>
                        {isOnline ? 'Online' : 'Offline'}
                </Tag>
                <Tag
                    variant="transparent"
                    icon={<ClockSVG />}>
                        {`${isOnline ? 'Last updated:' : 'Using cached artes from'} ${moment(exchangeData?.date).format('DD/MM/YYYY hh:mm a')}`}
                </Tag>
                <button onClick={loadExchangeData}>
                    <Tag 
                        variant="info"
                        icon={<RefreshSVG />}>
                            Refresh rates
                    </Tag>
                </button>
            </div>
        </div>
    )
}

export default FormHeader