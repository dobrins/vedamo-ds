import { TabTitle } from "../utils/functions"
import Heading from "./components/Heading";

export default function Shadows() {

    TabTitle('Box Shadows')

    const classes = [
        { class: "bs-none"}, 
        { class: "bs-xs"}, 
        { class: "bs-s"}, 
        { class: "bs-m"}, 
        { class: "bs-l"}, 
        { class: "bs-xl"},
        { class: "bs-2xl"},
        { class: "bs-3xl"}
    ];
   
    return (
        <>
            <Heading title="Box Shadows">
                <p>Shadows allow you to add depth and realism to designs by positioning elements on a z-axis.</p>
            </Heading>
            <div className="contentBox bg-default-50">  
                <div className="bg-default-100 p-2">
                    <code>
                        {classes.map( (h, i) =>
                                (
                                    <>
                                    &lt;div class="{h.class}"&gt;...&lt;/div&gt;<br />
                                    </>
                                ) 
                            ) 
                        }
                    </code>

                </div>
                <div className="grid-container">
                    <ShadowItem class="bs-none" />
                    <ShadowItem class="bs-xs" />
                    <ShadowItem class="bs-s" />
                    <ShadowItem class="bs-m" />
                </div>
                <div className="grid-container">
                    <ShadowItem class="bs-l" />
                    <ShadowItem class="bs-xl" />
                    <ShadowItem class="bs-2xl" />
                    <ShadowItem class="bs-3xl" />
                </div>
            </div>
        </>
    )
}

function ShadowItem(props) {
    return (
        <div className="col-sm-3 col-xs-6 p-5">
            <div className={`p-5 bg-default-0   flex flex-center aspect-1 br-1 fz-text-xs ${props.class}`}><code>.{props.class}</code></div>
        </div>
    )  
}
