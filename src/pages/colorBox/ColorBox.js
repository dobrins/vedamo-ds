export default function ColorBox(props) {

    const colorItem = props.code.map( (code, i) => 
        <div key={i} className="br-1">
            <div className="grid-container bg-default-0">
                
                <div className={`bg-${props.title}-${code.code} p-5 txt-shadow col-xs-3 flex flex-center fz-display-s txt-bold txt-default-0`} >
                    {code.code}
                </div>
            
                <div className=" p-2 col-xs-9">
                    For backgrounds:  <code>.bg-{props.title}-{code.code}</code>
                    <br />
                    For text color: <code>.txt-{props.title}-{code.code}</code>
                    <br />
                    CSS custom property: <code>--clr-{props.title}-{code.code}</code>
                    <br />
                    In CSS set the color: <code>hsl(var(--clr-{props.title}-{code.code}))</code>
                </div>
            </div>
        </div>
        )

    return (
        <div className="mb-10">
            <h5 className="mb-5 txt-capitalize">{props.desc}: <span className="txt-bold">{props.title}</span></h5>
        
            <section className="grid color ">
                { colorItem }
            </section>
        </div>
    )
}