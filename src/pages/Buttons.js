export default function Buttons() {

    const btnType = ["primary" , "secondary", "tertiary", "ghost"]
    const btnSize = ["2xl", "xl", "l", "m", "s", "xs"]
    // const btnState = ["normal", "loading", "disabled", "disabled-noperm"]
    const btnValue = "button"

    return (
        
        <div className="grid gap-10">  
        
            <div className="grid gap-2">
                <h4 className="txt-capitalize txt-semibold">Button types</h4>
                <div className="bg-default-0 p-5 br-2 box-shadow grid gap-3">

                    <div className="grid-container">
                        <div className="col-xs-12 col-sm-2 flex flex-center-v">
                            <p className="txt-uppercase txt-semibold">value</p>
                        </div>
                        <div className="col-xs-12 col-sm-2 flex gap-3">
                            <button type="button" className="btn">{btnValue}</button>
                        </div>
                        <div className="col-xs-12 col-sm-8 flex flex-center-v">
                            <code>
                                &lt;button type="button" class="btn"&gt;{btnValue}&lt;/button&gt;
                            </code> 
                        </div>
                    </div>

                    <div className="grid-container">
                        <div className="col-xs-12 col-sm-2 flex flex-center-v">
                            <p className="txt-uppercase txt-semibold">icon & value</p>
                        </div>
                        <div className="col-xs-12 col-sm-2 flex gap-3">
                            <button type="button" className="btn">
                                <i className="i icon-menu-2"></i>
                                {btnValue}
                            </button>
                        </div>
                        <div className="col-xs-12 col-sm-8 flex flex-center-v">
                            <code>
                                &lt;button type="button" class="btn"&gt;&lt;i class="i icon-menu-2"&gt;&lt;/i&gt;{btnValue}&lt;/button&gt;
                            </code> 
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="col-xs-12 col-sm-2 flex flex-center-v">
                            <p className="txt-uppercase txt-semibold">Value & Dropdown</p>
                        </div>
                        <div className="col-xs-12 col-sm-2 flex gap-3">
                            <button type="button" className="btn">
                                {btnValue}
                                <i className="i icon-chevron-down"></i>
                            </button>
                        </div>
                        <div className="col-xs-12 col-sm-8 flex flex-center-v">
                            <code>
                                &lt;button type="button" class="btn"&gt;{btnValue}&lt;i class="i icon-chevron-down"&gt;&lt;/i&gt;&lt;/button&gt;
                            </code> 
                        </div>
                    </div>
            
                    <div className="grid-container">
                        <div className="col-xs-12 col-sm-2 flex flex-center-v">
                            <p className="txt-uppercase txt-semibold">Icon, Value & Dropdown</p>
                        </div>
                        
                        <div className="col-xs-12 col-sm-2 flex gap-3">
                            <button type="button" className="btn">
                                <i className="i icon-menu-2"></i>
                                {btnValue}
                                <i className="i  icon-chevron-down"></i>
                            </button>
                        </div>
                        <div className="col-xs-12 col-sm-8 flex flex-center-v">
                            <code>
                                &lt;button type="button" class="btn"&gt;&lt;i class="i icon-menu-2"&gt;&lt;/i&gt;{btnValue}&lt;i class="i icon-chevron-down"&gt;&lt;/i&gt;&lt;/button&gt;
                            </code> 
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="col-xs-12 col-sm-2 flex flex-center-v">
                            <p className="txt-uppercase txt-semibold">Icon</p>
                        </div>
                        <div className="col-xs-12 col-sm-2 flex gap-3">
                            <button type="button" className="btn btn-square">
                            <i className="i icon-home"></i>
                            </button>
                        </div>
                        <div className="col-xs-12 col-sm-8 flex flex-center-v">
                            <code>
                                &lt;button type="button" class="btn btn-square"&gt;&lt;i class="i icon-home"&gt;&lt;/i&gt;&lt;/button&gt;
                            </code> 
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="col-xs-12 col-sm-2 flex flex-center-v">
                            <p className="txt-uppercase txt-semibold">Icon/rounded</p>
                        </div>
                        <div className="col-xs-12 col-sm-2 flex gap-3">
                            <button type="button" className="btn btn-circle">
                            <i className="i icon-more-vertical"></i>
                            </button>
                        </div>
                        <div className="col-xs-12 col-sm-8 flex flex-center-v">
                            <code>
                                &lt;button type="button" class="btn btn-circle"&gt;&lt;i class="i icon-more-vertical"&gt;&lt;/i&gt;&lt;/button&gt;
                            </code> 
                        </div>
                    </div>
                </div>
            </div>


            {btnType.map( (type, i) =>
                    (
                        <div key={i} className="grid gap-2">
                            <h4 className="txt-capitalize txt-semibold">{type} Button</h4>
                            <div className="bg-default-0 p-5 br-2 box-shadow grid gap-3">
                            {
                                btnSize.map( (size, i) =>
                                    (
                                        <div key={i}>
                                            
                                            <div className="grid-container">
                                                <div className="col-xs-12 col-sm-1 flex flex-center-v">
                                                    <p className="txt-uppercase txt-semibold">{size}</p>
                                                </div>
                                                <div className="col-xs-12 col-sm-1 flex flex-center-v">
                                                    <code>.btn-{size}</code>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 flex gap-3">
                                                    <button className={`btn btn-${size} btn-${type}`}>
                                                        {btnValue}
                                                    </button>
                                                    {/* <button className={`btn btn-${size} btn-${type}`}>
                                                        <i className="i icon-menu-2"></i>{btnValue}
                                                    </button>
                                                    <button className={`btn btn-${size} btn-${type}`}>
                                                        {btnValue}<i className="i icon-chevron-down"></i>
                                                    </button>
                                                    <button className={`btn btn-${size} btn-${type}`}>
                                                        <i className="i icon-menu-2"></i>
                                                        {btnValue}
                                                        <i className="i icon-chevron-down "></i>
                                                    </button>
                                                    <button className={`btn btn-${size} btn-${type} btn-square`}>
                                                        <i className="i icon-home"></i>
                                                    </button>
                                                    <button className={`btn btn-${size} btn-${type} btn-circle`}>
                                                        <i className="i icon-more-vertical"></i>
                                                    </button> */}
                                                </div>
                                                <div className="col-xs-12 col-sm-4 flex flex-center-v">
                                                    <code>
                                                        &lt;button type="button" class="btn btn-{type} btn-{size}"&gt;{btnValue}&lt;/button&gt;
                                                    </code>
                                                </div>
                                            </div>  
                                        </div>
                                    ) 
                                )    
                            }    
                            </div>
                        </div>             
                    ) 
                ) 
                
            }
            {/* <div className="flex mt-5">
                <button className="btn btn-primary btn-m" type="button"><i className="i icon-menu-2"></i>Button</button>
                <button className="btn btn-primary btn-m btn-square" type="button"><i className="i icon-menu-2"></i></button>
                <button className="btn btn-primary btn-m btn-circle" type="button"><i className="i icon-menu-2"></i></button>
            </div> 
            <div className="flex mt-5">
                <button className="btn btn-secondary btn-m" type="button"><i className="i icon-menu-2"></i>Button</button>
                <button className="btn btn-secondary btn-m btn-square" type="button"><i className="i icon-menu-2"></i></button>
                <button className="btn btn-secondary btn-m btn-circle" type="button"><i className="i icon-menu-2"></i></button>
            </div>
            <div className="flex mt-5">
                <button className="btn btn-tertiary btn-m" type="button"><i className="i icon-menu-2"></i>Button</button>
                <button className="btn btn-tertiary btn-m btn-square" type="button"><i className="i icon-menu-2"></i></button>
                <button className="btn btn-tertiary btn-m btn-circle" type="button"><i className="i icon-menu-2"></i></button>
            </div>
            <div className="flex mt-5">
                <button className="btn btn-ghost btn-m" type="button"><i className="i icon-menu-2"></i>Button</button>
                <button className="btn btn-ghost btn-m btn-square" type="button"><i className="i icon-menu-2"></i></button>
                <button className="btn btn-ghost btn-m btn-circle" type="button"><i className="i icon-menu-2"></i></button>
            </div> */}
        </div>
    )
}