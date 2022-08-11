import { TabTitle } from "../utils/functions"
import ContentBox from "./components/ContentBox"
import Heading from "./components/Heading"

TabTitle('Blur')

export default function Blur() {
    return(
        <>
            <Heading title="Blur">
                <p>Background blurs are often used stylistically in modern UI design. However, just like shadows, they allow you to add depth and realism to designs by positioning elements on a z-axis. </p>
            </Heading>
            <ContentBox title="Sizes">
                <div class="bg-default-100 p-2">
                    <code>
                        &lt;div class="blur-s"&gt;...&lt;/div&gt;<br />
                        &lt;div class="blur-m"&gt;...&lt;/div&gt;<br />
                        &lt;div class="blur-l"&gt;...&lt;/div&gt;<br />
                        &lt;div class="blur-lx"&gt;...&lt;/div&gt;
                    </code>
                </div>
                <div className="octopus ph-14">
                    <div className="grid-container">
                        <div className="col-xs-12 col-sm-4 col-sm-offset-3 p-5"><BlurItem class="blur-s" /></div>
                        <div className="col-xs-12 col-sm-4 p-5"><BlurItem class="blur-m" /></div>
                    </div>
                    <div className="grid-container">
                        <div className="col-xs-12 col-sm-4 col-sm-offset-3 p-5"><BlurItem class="blur-l" /></div>
                        <div className="col-xs-12 col-sm-4 p-5"><BlurItem class="blur-xl" /></div>
                    </div>
                </div>
            </ContentBox>
        </>    
    )
}

function BlurItem(props) {
    return(
        <div className={`aspect-1 flex flex-center br-2 ${props.class}`}>
            <strong className="fz-display-m">{props.class}</strong>
        </div>
    )
}