export default function Alerts() {
    return (
    <>

    <div className="grid-container mt-5">
                    <div className="col-md-4">
                        <span className="alert alert-default">
                            <i className="i icon-info"></i>
                            <span className="alert-text">
                                <strong>Default Alert</strong> with <a href="#">text link</a></span>
                            </span>
                    </div>
                </div>

                <div className="grid-container mt-5">
                    <div className="col-md-4">
                        <span className="alert alert-info">
                            <i className="i icon-download"></i>
                            <span className="alert-text">
                                <strong>Info Alert</strong> with <a href="#">text link</a>
                            </span>
                        </span>
                    </div>
                </div>

                <div className="grid-container mt-5">
                    <div className="col-md-4">
                        <span className="alert alert-success">
                            <i className="i icon-vico-done"></i>
                            <span className="alert-text">
                                <strong>Success Alert</strong> with <a href="#">text link</a>
                            </span>
                        </span>
                    </div>
                </div>

                <div className="grid-container mt-5">
                    <div className="col-md-4">
                        <span className="alert alert-warning">
                            <i className="i icon-vico-warning"></i>
                            <span className="alert-text">
                                <strong>Warning Alert</strong> with <a href="#">text link</a>
                            </span>
                        </span>
                    </div>
                </div>

                <div className="grid-container mt-5">
                    <div className="col-md-4">
                        <span className="alert alert-error">
                            <i className="i icon-vico-error"></i>
                            <span className="alert-text">
                                <strong>Warning Alert</strong> with <a href="#">text link</a>
                            </span>
                        </span>
                    </div>
                </div>
    </>
    )
}