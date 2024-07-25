import Banner from '../../Img/comming_soon.svg'
function CommingSoon() {
    return (
        <div className="grid h-screen w-[99vw]">
            <div className="animate-fade-right animate-infinite animate-duration-[2500ms] animate-delay-0 animate-ease-in-out animate-alternate animate-fill-forwards m-auto">
                <img className="m-auto w-[80%]" src={Banner} alt="" />
                <h1 className="text-center text-3xl font-semibold">
                    Comming Soon !
                </h1>
            </div>
        </div>
    )
}

export default CommingSoon
