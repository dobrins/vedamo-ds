import { TabTitle } from "../utils/functions"
import ContentBox from "./components/ContentBox"
import Heading from "./components/Heading"

const style1 = {
    "width" : "4em",
    "height" : "3em"
}

const style2 = {
    "width" : "4em",
    "height" : "2em"
}



export default function SpacingSystem() {
    TabTitle('Spacing System')
    return(
        <>
            <Heading title="Spacing System">
                <p>Some say that this bunch of code includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.</p>
            </Heading>
            <ContentBox title="Notation"></ContentBox>
            <ContentBox title="Margin">
                <div className="position-relative bg-warning-300 p-2 flex">
                    <Loop class="mt" />
                </div>
                <div className="position-relative bg-warning-300 p-2 grid">
                    <Loop class="ml" />
                </div>
            </ContentBox>
            <ContentBox title="Padding">
                <div className="position-relative bg-warning-300 p-2 flex">
                    <LoopPadding class="pt" />
                </div>
            </ContentBox>
        </>
    )
}

function InnerBox(props) {
    return(
        <div className={`flex flex-center bg-default-700 br-1 txt-default-0 txt-center fz-text-xs ${props.class}`}  style={style1}>.{props.class}</div>
    )
}

function InnerBoxPadding(props) {
    return(
        <div className={`bg-warning-600 br-1 pb-1 txt-default-0 txt-center ${props.class}`}>
            <div className="fz-text-xs flex flex-center bg-default-600 mh-1 br-1" style={style2}>.{props.class}</div>
        </div>
    )
}

function Loop(props) {
    return (
        [...Array(18)].map((e, i) => (
                <InnerBox class={`${props.class}-${i}`} key={i} />
            )
        ) 
    )
}

function LoopPadding(props) {
    return (
        [...Array(18)].map((e, i) => (
                <div>
                    <InnerBoxPadding class={`${props.class}-${i}`} key={i} />
                </div>
            )
        ) 
    )
}