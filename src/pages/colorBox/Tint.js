export default function Tint(props) {

    let color = (props.value >=48) ? "hsl(var(--txt-default-900))" : "";
   
    let style = {
        backgroundColor: `hsla(var(--clr-default-0) , ${props.value/100})`,
        color: `${color}`
    }

    return (
        <div class="flex flex-center-v gap-5">
            <div key={props.key} className="br-16 txt-default-0 flex flex-center txt-bold fz-text-xs tint-val" style={style}>
            {props.value}%
            </div>
            <code>hsla(var(--clr-default-0), {props.value/100})</code>
        </div>
    )
}