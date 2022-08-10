import { TabTitle } from "../utils/functions"
import ContentBox from "./components/ContentBox"
import Heading from "./components/Heading"

export default function Alerts() {

    TabTitle('Alerts')
   
    return (
    <>
        <Heading title="Alerts" />
        <ContentBox>
            <Alert type="default" icon="icon-info" />
            <Alert type="info" icon="icon-download" />
            <Alert type="success" icon="icon-vico-done" />
            <Alert type="warning" icon="icon-vico-warning" />
            <Alert type="error" icon="icon-vico-error" />
        </ContentBox>
    </>
    )
}

function Alert(props) {
    return (
        <div className="grid-container">
            <div className="col-xs-12 col-sm-6">
                <span className={`alert alert-${props.type}`}>
                    <i className={`i ${props.icon}`}></i>
                    <span className="alert-text">
                        <strong>{props.type} Alert</strong> with <a href="./#5">text link</a>
                    </span>
                </span>
            </div>
        </div>
    )

}