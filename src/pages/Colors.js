import { TabTitle } from "../utils/functions"
import ColorBox from "./colorBox/ColorBox"
// import Tint from "./colorBox/Tint"
import Tints from "./colorBox/Tints"

const clrMain = {
    title : 'main',
    desc: 'Primary',
    code : [
        { code : 100 },
        { code : 200 },
        { code : 300 },
        { code : 400 },
        { code : 500 },
        { code : 600 },
        { code : 700 },
        { code : 800 },
        { code : 900 }
    ]
}

const clrDefault = {
    title : 'default',
    desc: 'Primary',
    code : [
        { code : 0 },
        { code : 50 },
        { code : 100 },
        { code : 150 },
        { code : 200 },
        { code : 250 },
        { code : 300 },
        { code : 350 },
        { code : 400 },
        { code : 450 },
        { code : 500 },
        { code : 550 },
        { code : 600 },
        { code : 650 },
        { code : 700 },
        { code : 750 },
        { code : 800 },
        { code : 850 },
        { code : 900 },
        { code : 1000 }
    ]
}

const clrWarning = {
    title : 'warning',
    desc: 'Secondary',
    code : [
        { code : 100 },
        { code : 200 },
        { code : 300 },
        { code : 400 },
        { code : 600 },
        { code : 900 }
    ]
}

const clrError = {
    title : 'error',
    desc: 'Secondary',
    code : [
        { code : 100 },
        { code : 200 },
        { code : 300 },
        { code : 400 },
        { code : 600 },
        { code : 900 }
    ]
}

const clrInfo = {
    title : 'info',
    desc: 'Secondary',
    code : [
        { code : 100 },
        { code : 200 },
        { code : 300 },
        { code : 400 },
        { code : 600 },
        { code : 900 }
    ]
}

const clrSuccess = {
    title : 'success',
    desc: 'Secondary',
    code : [
        { code : 100 },
        { code : 200 },
        { code : 300 },
        { code : 400 },
        { code : 600 },
        { code : 900 }
    ]
}

const tints = [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 92, 96];

export default function Colors() {

    TabTitle('Colors')

    return (
        <>  
            <ColorBox code={clrMain.code} title={clrMain.title} desc={clrMain.desc} />
            <ColorBox code={clrDefault.code} title={clrDefault.title} desc={clrDefault.desc} />
            <ColorBox code={clrSuccess.code} title={clrSuccess.title} desc={clrSuccess.desc} />
            <ColorBox code={clrWarning.code} title={clrWarning.title} desc={clrWarning.desc} />
            <ColorBox code={clrError.code} title={clrError.title} desc={clrError.desc} />
            <ColorBox code={clrInfo.code} title={clrInfo.title} desc={clrInfo.desc} />

            <h5>Primary: <span className="txt-bold">Default Opacity Levels</span></h5>
            <Tints code={clrDefault.code} value={tints} />
        </>
    )
}