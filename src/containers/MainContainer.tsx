import useExchangeState from "../states/exchangeState"
import AmounForm from "./AmounForm"
import AmounFormMobile from "./AmounFormMobile"
import FormHeader from "./FormHeader"
import ResultPanel from "./ResultPanel"
import ResultPanelMobile from "./ResultPanelMobile"

const MainContainer  = () => {

    const { isLoadingData } = useExchangeState()

    return (
        <>
            {/* Desktop area */}
            <div className="relative w-full lg:w-[1000px] items-center hidden sm:block">
                <FormHeader />
                <div className="w-full flex flex-col lg:flex-row gap-[30px] mt-[30px]">
                    <AmounForm />
                    <ResultPanel />
                </div>
                {isLoadingData && (
                    <div className="absolute flex items-center justify-center bg-white-tranparent top-0 left-0 right-0 bottom-0">
                        <p className="text-[18px] font-semibold">Loading...</p>
                    </div>
                )}
            </div>

            {/* Mobile area */}
            <div className="relative w-full h-full sm:hidden flex flex-col gap-[24px] items-center justify-center">
                <AmounFormMobile />
                <ResultPanelMobile />
            </div>
        </>
    )
}

export default MainContainer