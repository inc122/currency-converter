import moment from "moment"
import Label from "../componnets/Label"
import Tag from "../componnets/Tag"
import Title from "../componnets/Title"
import useExchangeState from "../states/exchangeState"
import ClockSVG from "../svg/ClockSVG"
import RefreshSVG from "../svg/RefreshSVG"
import WifiSVG from "../svg/WifiSVG"

const FormHeader = () => {

    const { exchandeData } = useExchangeState()

    return (
        <div>
            <div className="flex flex-col gap-[10px] items-center">
                <Title>Currency converter</Title>
                <Label className="font-medium">Get real-time exchange rates</Label>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-[8px] mt-[30px] items-center justify-center">
                <Tag 
                    variant="ok" 
                    icon={<WifiSVG />}>
                        Online
                </Tag>
                <Tag
                    variant="transparent"
                    icon={<ClockSVG />}>
                        {`Last updated: ${moment(exchandeData?.date).format('DD/MM/YYYY hh:mm a')}`}
                </Tag>
                <button>
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