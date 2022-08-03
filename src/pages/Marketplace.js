
export default function Marketplace() {

    let style = {
        backgroundColor : "hsl(var(--clr-default-100), 0.8)"
    }

    return (
        <>
        <div className="container">
            <div className="grid-container">
                <div className="col-sm-8 col-sm-offset-3">
                    <h1 className="fz-display-l">On-demand Online Tutoring.<br />Tutors & Students Matched.</h1>
                    <p className="subtitle txt-default-450 mt-4"><span className="txt-mp-gradient">1218 Completed Sessions</span> AND COUNTING</p>
                </div>
            </div>
        </div>
        
        {/* <img src={require('../img/preview-home.jpg')} alt="" /> */}

        <div className="container mt-10">
            <div className="grid-container">
                <div className="col-sm-8 col-sm-offset-3">
                    <div className="blur-s ph-11 pt-11 pb-9 br-6" style={ style }>
                        <div className="grid-container">
                            <div className="col-sm-4">
                                <a href="#a" className="btn btn-tertiary btn-xl full-width">sa</a>
                            </div>
                            <div className="col-sm-4">
                                <a href="#a" className="btn btn-tertiary btn-xl full-width">sa</a>
                            </div>
                            <div className="col-sm-4">
                                <a href="#a" className="btn btn-tertiary btn-xl full-width">sa</a>
                            </div>
                        </div>
                        <div className="flex flex-center-h mt-6">
                            <a href="#a" className="btn btn-primary btn-xl bg-mp-gradient">All categories</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-10">
            <div className="grid-container">
                <div className="col-sm-8 col-sm-offset-3">
                    <a href="#s" className="avatar avatar-2xl">MJ</a>
                    <a href="#s" className="avatar avatar-xl">MJ</a>
                    <a href="#s" className="avatar avatar-l">MJ</a>
                    <a href="#s" className="avatar avatar-m">MJ</a>
                    <a href="#s" className="avatar avatar-s">MJ</a>
                    <a href="#s" className="avatar avatar-xs">MJ</a>
                </div>
            </div>
        </div>

        

        </>
    )
}