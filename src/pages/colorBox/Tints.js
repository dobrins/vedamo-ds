import Tint from "./Tint"

export default function Tints(props) {

    function Tints(props, code) {
        const tints = props.map((number) =>
  
            <Tint   key={number.toString()}
                    value={number}
                    code={code}
             />
          
        );
        return (
            <>
            {tints}
            </>
        )
    }

    function bgColor(code) {
        if(code < 250) {
            return 'bg-default-900'
        } else {
            return 'bg-default-100'
        }
    }

    const colorItem = props.code.map(code => 
        <>
            <div className="grid-container mt-10">
                <div className="col-xs-3">
                    <h5 className="txt-uppercase txt-semibold">Tint {code.code}</h5>
                    <p className="txt-uppercase txt-semibold txt-default-500">Opacity levels</p>
                    <div className={` br-2 mt-10 p-5 col-xs-3 flex flex-center fz-display-s txt-shadow txt-bold txt-default-0 bg-default-${code.code}`}>
                       {code.code}
                    </div>
                </div>
                <div className="col-xs-9">
                    <div className={`${bgColor(code.code)} p-5 br-2 tints grid gap-2`}>
                        {Tints(props.value, code.code)}
                    </div>
                </div>
            </div>
        </>    
    )

    return colorItem 
        
}