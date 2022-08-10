import { TabTitle } from "../utils/functions"
import ContentBox from "./components/ContentBox";
import Heading from "./components/Heading";

export default function BorderRadius() {

    TabTitle('Border Radius')

    const classes = [
        { class: "br-0", sizePx: "0", sizeRem: "0" },
        { class: "br-1", sizePx: "4", sizeRem: "0.25" },
        { class: "br-2", sizePx: "8", sizeRem: "0.5" },
        { class: "br-3", sizePx: "12", sizeRem: "0.75" },
        { class: "br-4", sizePx: "16", sizeRem: "1" },
        { class: "br-5", sizePx: "20", sizeRem: "1.25" },
        { class: "br-6", sizePx: "24", sizeRem: "1.5" },
        { class: "br-7", sizePx: "32", sizeRem: "2" },
        { class: "br-8", sizePx: "40", sizeRem: "2.5" },
        { class: "br-9", sizePx: "48", sizeRem: "3" },
        { class: "br-10", sizePx: "64", sizeRem: "4" },
        { class: "br-11", sizePx: "80", sizeRem: "5" },
        { class: "br-12", sizePx: "96", sizeRem: "6" },
        { class: "br-13", sizePx: "128", sizeRem: "8" },
        { class: "br-14", sizePx: "160", sizeRem: "10" },
        { class: "br-15", sizePx: "192", sizeRem: "12" },
        { class: "br-16", sizePx: "224", sizeRem: "14" },
        { class: "br-17", sizePx: "256", sizeRem: "16 " }
    ];

    return (
        <>  
            <Heading title="Border Radius">
                <p>Box container radius a.k.a. Border Radius is based on a predefined scale in px / rem. When a Box corner has radius applied it’s value must be belongs to <strong>0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256</strong>  in px or estimated scale in rem where 1rem = 16px base.</p>
            </Heading>

            <ContentBox title="Sizing">
                <div className="grid-container">
                    <div className="col-xs-3 col-sm-3 col-m-2 txt-semibold">Step</div>
                    <div className="col-xs-3 col-sm-3 col-m-2 txt-semibold">Class</div>
                    <div className="col-xs-3 col-sm-3 col-m-2 txt-semibold">Size in px</div>
                    <div className="col-xs-3 col-sm-3 col-m-2 txt-semibold">Size in rem</div>
                </div>
                {classes.map( (h, i) =>
                        (
                            <>
                                <div key={i} className="grid-container">
                                    <div className="col-xs-3 col-sm-3 col-m-2">
                                        {h.class.substring(3)}
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-m-2">
                                        <code>.{h.class}</code>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-m-2">
                                        {h.sizePx}px
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-m-2">
                                        {h.sizeRem}rem
                                    </div>
                                </div>
                            </>
                        ) 
                    ) 
                }
            </ContentBox>
            
            <ContentBox title="Variations">
                <BrItem pos={`All corners`} class={`br`} />
                <BrItem pos={`Top`} class={`brt`} />
                <BrItem pos={`Right`} class={`brr`} />
                <BrItem pos={`Bottom`} class={`brb`} />
                <BrItem pos={`Left`} class={`brl`} />
                <BrItem pos={`Top Left`} class={`brtl`} />
                <BrItem pos={`Top Right`} class={`brtr`} />
                <BrItem pos={`Bottom Right`} class={`brbr`} />
                <BrItem pos={`Bottom Left`} class={`brbl`} />
            </ContentBox>
        </>
    )
}

function BrItem(props) {
    return (
        <div>        
            <p>{props.pos}</p>
            <div className="grid-container">
                <div className="col-xs-12 col-m-3">
                    <div className={`bg-default-250 p-5 ${props.class}-3`}>
                        <code>.{props.class}-*</code>
                    </div>
                </div>
                <div className="col-xs-12 col-m-9">
                    <code>&lt;div class="{props.class}-5"&gt;...&lt;/div&gt;</code>
                </div>
            </div>
        </div>
    )
}