import { TabTitle } from "../utils/functions"
import ContentBox from "./components/ContentBox"
import Heading from "./components/Heading"


TabTitle('Position')

const classes = [
    { class: "static"}, 
    { class: "relative"}, 
    { class: "absolute"}, 
    { class: "fixed"}, 
    { class: "sticky"}
];

const style = {
    'height' : "200px",
    'max-width' : "400px",
    'margin' : '2rem'
}

const style1 = {
    "width" : "2.5em",
    "height" : "2.5em"
}

export default function Position() {
    return(
        <>
            <Heading title="Position">
                <p>Use these shorthand utilities for quickly configuring the position of an element.</p>
            </Heading>
            <ContentBox title="Position values">
                <div className="bg-default-100 p-2">
                    <code>
                        {classes.map( (h, i) =>
                                (
                                    <>
                                    &lt;div class="position-{h.class}"&gt;...&lt;/div&gt;<br />
                                    </>
                                ) 
                            ) 
                        }
                    </code>

                </div>
            </ContentBox>

            <ContentBox title="Arrange elements">
                <>
                    <p>Arrange elements easily with the edge positioning utilities. The format is {`{`}<code>property</code>{`}`}-{`{`}<code>position</code>{`}`}.</p>
                    <p>Where <i>property</i> is one of:</p>
                    <ul>
                        <li><i className="i icon-arrow-right"></i> <code>top</code> - for the vertical top position</li>
                        <li><i className="i icon-arrow-right"></i> <code>start</code> - for the horizontal left position (in LTR)</li>
                        <li><i className="i icon-arrow-right"></i> <code>bottom</code> - for the vertical bottom position</li>
                        <li><i className="i icon-arrow-right"></i> <code>end</code> - for the horizontal right position (in LTR)</li>
                    </ul>

                    <p>Where <i>position</i> is one of:</p>
                    <ul>
                        <li><i className="i icon-arrow-right"></i> <code>0</code>  - for 0 edge position</li>
                        <li><i className="i icon-arrow-right"></i> <code>50</code>  - for 50 edge position</li>
                        <li><i className="i icon-arrow-right"></i> <code>100</code>  - for 100 edge position</li>
                    </ul>

                    <div className="position-relative bg-warning-300 p-2" style={style}>
                        <InnerBox class="top-0 start-0" />
                        <InnerBox class="bottom-0 start-0" />
                        <InnerBox class="bottom-0 end-0" />
                        <InnerBox class="top-0 end-0" />
                        <InnerBox class="bottom-50 end-50" />
                        <InnerBox class="top-50 start-50" />                    
                    </div>

                    <div className="bg-default-100 p-2">
                        <code>
                            &lt;div class="position-relative"&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-0 start-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-0 end-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-50 start-50"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute bottom-50 end-50"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute bottom-0 start-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute bottom-0 end-0"&gt;&lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                        </code>
                    </div>
                </>
            </ContentBox>
            <ContentBox title="Center elements">
                <>
                    <div className="grid-container mt-4 ">
                        <div className="col-xs-12 col-sm-8 col-m-6 grid gap-6">
                            <p>In addition, you can also center the elements with the transform utility class <code>.translate-middle</code>.</p>
                            <p>This class applies the transformations <code>translateX(-50%)</code> and <code>translateY(-50%)</code> to the element which, in combination with the edge positioning utilities, allows you to absolute center an element.</p>
                        </div>
                    </div>
                    
                    <div className="position-relative bg-warning-300 p-2" style={style}>
                        <InnerBox class="translate-middle top-0 start-0" />
                        <InnerBox class="translate-middle top-0 start-50" />
                        <InnerBox class="translate-middle top-0 start-100" />
                        <InnerBox class="translate-middle top-50 start-0" />
                        <InnerBox class="translate-middle top-50 start-50" />
                        <InnerBox class="translate-middle top-50 start-100" />
                        <InnerBox class="translate-middle top-100 start-0" />
                        <InnerBox class="translate-middle top-100 start-50" />
                        <InnerBox class="translate-middle top-100 start-100" />   
                    </div>
                    <div className="bg-default-100 p-2">
                        <code>
                            &lt;div class="position-relative"&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-0 start-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-0 start-50"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-0 start-100"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-50 start-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-50 start-50"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-50 start-100"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-100 start-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-100 start-50"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute translate-middle top-100 start-100"&gt;&lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                        </code>
                    </div>
                    <p>By adding <code>.translate-middle-x</code> or <code>.translate-middle-y</code> classes, elements can be positioned only in horizontal or vertical direction.</p>
                    <div className="position-relative bg-warning-300 p-2" style={style}>
                        <InnerBox class="top-0 start-0" />
                        <InnerBox class="top-0 start-50 translate-middle-x" />
                        <InnerBox class="top-0 end-0" />
                        <InnerBox class="top-50 start-0 translate-middle-y" />
                        <InnerBox class="top-50 start-50 translate-middle" />
                        <InnerBox class="top-50 end-0 translate-middle-y" />
                        <InnerBox class="bottom-0 start-0" />
                        <InnerBox class="bottom-0 start-50 translate-middle-x" />
                        <InnerBox class="bottom-0 end-0" />
                    </div>
                    <div className="bg-default-100 p-2">
                        <code>
                            &lt;div class="position-relative"&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-0 start-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-0 start-50 translate-middle-x"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-0 end-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-50 start-0 translate-middle-y"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-50 start-50 translate-middle"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute top-50 end-0 translate-middle-y"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute bottom-0 start-0"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute bottom-0 start-50 translate-middle-x"&gt;&lt;/div&gt;<br />
                            &nbsp;&nbsp;&nbsp; &lt;div class="position-absolute bottom-0 end-0"&gt;&lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                        </code>
                    </div>
                </>
            </ContentBox>
            
        </>   
    )
}

function InnerBox(props) {
    return(
        <div className={`bg-default-700 br-1 position-absolute ${props.class}`} style={style1}></div>
    )
}