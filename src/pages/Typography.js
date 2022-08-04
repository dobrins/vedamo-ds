export default function Typography() {

    const h = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const classes = [
        "fz-hero-xl", 
        "fz-display-2xl", 
        "fz-display-xl", 
        "fz-display-l", 
        "fz-display-m", 
        "fz-display-s",
        "fz-display-xs",
        "fz-text-xl",
        "fz-text-l",
        "fz-text-m",
        "fz-text-s",
        "fz-text-xs"
    ];

    return (
        <>

        {h.map( (h, i) =>
                (
                    <>
                        <div key={i} className="grid-container">
                            <div className="col-xs-2">
                                <code>&lt;{h}&gt;&lt;{h}/&gt;</code>
                            </div>
                            <div className="col-xs-10">
                                <h1>{h}. It's a heading.</h1>
                            </div>
                        </div>
                    </>
                ) 
            ) 
        }


        {classes.map( (h, i) =>
                (
                    <>
                        <div key={i} className="grid-container">
                            <div className="col-xs-2">
                                <code>&lt;p className="{h}"&gt;&lt;p/&gt;</code>
                            </div>
                            <div className="col-xs-10">
                                <p className={h}>This HTML file is a fruit.</p>
                            </div>
                        </div>
                    </>
                ) 
            ) 
        }

        {/* <div class="grid-container" id="om">
            <div class="col-xs-2">
                <code>&lt;h1&gt;&lt;h1/&gt;</code>
            </div>
            <div class="col-xs-10">
                <h1>h1. This HTML file is a fruit.</h1>
            </div>
        </div> */}


        </>
    )
}