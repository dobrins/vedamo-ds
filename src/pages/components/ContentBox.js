export default function ContentBox(props) {

    return (
        <>
            {props.title && <h6 class="mt-5">{props.title}</h6>}
            <div className="contentBox gap-6">
               {props.children}
            </div>
        </>
    )
}