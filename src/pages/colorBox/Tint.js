export default function Tint(props) {

    let color 
    if(props.code < 250) {
        color = (props.value >=48) ? "hsl(var(--clr-default-900))" : "hsl(var(--clr-default-0))";
    } else {
        color = (props.value >=48) ? "hsl(var(--clr-default-0))" : "hsl(var(--clr-default-900))";
    }

    
   
    let style = {
        backgroundColor: `hsla(var(--clr-default-${props.code}) , ${props.value/100})`,
        color: `${color}`
    }

    return (
        <div class="flex flex-center-v gap-5">
            <div 
                key={props.key} 
                className="br-16 txt-default-900 flex flex-center txt-bold fz-text-xs tint-val" 
                style={style}>
                    {props.value}%
            </div>
           
            <code>hsla(var(--clr-default-{props.code}), {props.value/100})</code>
        </div>
    )
}