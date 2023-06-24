import "../scss/Main.scss"

export default function Main() {
    return <div className="main">
        <div className="videoscreen">
            <div className="container videoscreen__wrapper">
                <div className="videoscreen__mobilecontainer">
                    <div className="row">
                        <h2 className="videoscreen__title col-12 col-xl-6">
                            do <span className="videoscreen__title-yellow">not</span> ignore our lives
                        </h2>
                    </div>
                    <div className="row">
                        <h5 className="videoscreen__text col-12 col-xl-6">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt.
                        </h5>
                    </div>
                </div>
                <div className="row videoscreen__donate-wrapper">
                    <button className="videoscreen__donate col-12 col-sm-3">Donate</button>
                </div>
            </div>
        </div>
    </div>
}
