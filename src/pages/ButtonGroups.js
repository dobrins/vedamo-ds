import { TabTitle } from "../utils/functions"
import ContentBox from "./components/ContentBox"
import Heading from "./components/Heading"

export default function ButtonGroups() {

    TabTitle('Button Groups')

    return (
        <>
            <Heading title="Button Groups">
                <p>Button groups combine sets of buttons into toolbars or split buttons for more complex components.</p>
            </Heading>

            <ContentBox title="Variants">

                <div class="bg-default-100 p-2">
                <pre>
                    <code>
                        
                            &lt;div class="btn-group"&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" class="btn"&gt;Leading&lt;/button&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" class="btn"&gt;Middle&lt;/button&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" class="btn"&gt;Trailing&lt;/button&gt;<br />
                            &lt;/div&gt;
                    </code>
                        </pre>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-tertiary">Leading</button>
                    <button type="button" className="btn btn-tertiary">Middle</button>
                    <button type="button" className="btn btn-tertiary">Trailing</button>
 
                </div>
            </ContentBox>
        </>
        
    )
}