import AmounForm from "./AmounForm"
import FormHeader from "./FormHeader"
import ResultPanel from "./ResultPanel"

const MainContainer  = () => {
    return (
        <div className="w-full lg:w-[1000px] items-center">
            <FormHeader />
            <div className="w-full flex flex-col lg:flex-row gap-[30px] mt-[30px]">
                <AmounForm />
                <ResultPanel />
            </div>
        </div>
    )
}

export default MainContainer