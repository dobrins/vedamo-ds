import { TabTitle } from "../utils/functions"
import ContentBox from "./components/ContentBox"

export default function Grid() {

    TabTitle('Grid')

    return (
    <ContentBox title="Grid">
        <GridItems rows={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        <GridItems rows={[2, 2, 2, 2, 2, 2]} />
        <GridItems rows={[3, 3, 3, 3]} />
        <GridItems rows={[4, 4, 4]} />
        <GridItems rows={[6, 6]} />
        <GridItems rows={[12]} />

        <GridItems rows={[1, 11]} />
        <GridItems rows={[2, 10]} />
        <GridItems rows={[3, 9]} />
        <GridItems rows={[4, 8]} />
        <GridItems rows={[5, 7]} />
        <GridItems rows={[6, 6]} />
        <GridItems rows={[7, 5]} />
        <GridItems rows={[8, 4]} />
        <GridItems rows={[9, 3]} />
        <GridItems rows={[10, 2]} />
        <GridItems rows={[11, 1]} />

        <div className="grid-container mt-10">
            <div className="col-l-3 col-l-offset-5 bg-default-300">1</div>
            {/* <div className="col-l-3 bg-default-300">2</div> */}
        </div>

    </ContentBox>
    )
}

function GridItem(props) {
    return (
        <div className={`col-xs-12 col-sm-${props.class} bg-default-300 p-1 br-1 fz-text-xs `}><code>.col-*-{props.class}</code></div>
    )  
} 

function GridItems(props) {
    const getRows = () => {
        let content = [];
        let cols = 12 / props.rows
        let arr = props.rows;     
      
        const array = arr.map((item, i) => {
            content.push(
               <GridItem key={i} class={item} />
            )
        })

        return  content;
    }

    return (
        <div className="grid-container">
            {getRows()}
        </div>
    )  
}