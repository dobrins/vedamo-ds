export default function ColorBox(props) {

    const colorItem = props.code.map( (code, i) => 
        <div key={i} className="br-1">
            <div className={`bg-${props.title}-${code.code} p-5`} ></div>
            <div className="bg-default-0 p-2">
                {code.code}
            </div>
        </div>
        )

    return (
        <div>
            <h4>{props.desc} - {props.title}</h4>
        
            <section className="grid color">
                { colorItem }
            </section>
        </div>
    )
}