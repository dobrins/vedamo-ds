export default function Typography() {

    const h = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const classes = [
        { class: "fz-hero-xl"       ,   size: "96px"        }, 
        { class: "fz-display-2xl"   ,   size: "72px"        }, 
        { class: "fz-display-xl"    ,   size: "60px"        }, 
        { class: "fz-display-l"     ,   size: "48px"        }, 
        { class: "fz-display-m"     ,   size: "36px"        }, 
        { class: "fz-display-s"     ,   size: "30px"        },
        { class: "fz-display-xs"    ,   size: "24px"        },
        { class: "fz-text-xl"       ,   size: "20px"        },
        { class: "fz-text-l"        ,   size: "18px"        },
        { class: "fz-text-m"        ,   size: "16px"        },
        { class: "fz-text-s"        ,   size: "14px"        },
        { class: "fz-text-xs"       ,   size: "12px"        }
    ];

    

    return (
        <>
            <h5>Primary font: <span className="txt-bold">INTER</span></h5>
            <p><a href="https://fonts.google.com/specimen/Inter?query=inter#standard-styles" target="_blank" className="txt-bold">Inter</a> is our primary Font Family.It's open Google Font and is used for “Text”, “Display” and “Hero” type of heading/paragraph sizing. </p>
            <h6 class="mt-10">Sizes</h6>
            <div className="contentBox">
                {classes.map( (h, i) =>
                        (
                            <>
                                <div key={i} className="grid-container">
                                    <div className="col-xs-2">
                                        <code>.{h.class}</code>
                                    </div>
                                    <div className="col-xs-10">
                                    {h.size}
                                    </div>
                                </div>
                            </>
                        ) 
                    ) 
                }
            </div>
            <h6 class="mt-10">Size examples</h6>
            <div className="contentBox">
                <div className="bg-default-100 p-2">
                    <code>
                        {classes.map( (h, i) =>
                                (
                                    <>
                                    &lt;p class="{h.class}"&gt;...&lt;/p&gt;<br />
                                    </>
                                ) 
                            ) 
                        }
                    </code>
                </div>
                {classes.map( (h, i) =>
                        (
                            <>
                                <div key={i} className="grid-container">
                                    <div className="col-xs-2">
                                        {h.class.substring(3)}
                                    </div>
                                    <div className={`col-xs-10 ${h.class}`}>
                                    {h.size}
                                    </div>
                                </div>
                            </>
                        ) 
                    ) 
                }
            </div>
        </>
    )
}