export default function Heading(props) {

    return (
        <>
            {props.title && <h4>{props.title}</h4>}
            {props.children && 
            <div className="grid-container mt-4">
                <div className="col-xs-12 col-sm-8 col-m-6">
                    {props.children}
                </div>  
            </div>
            }
        </>
    )
}