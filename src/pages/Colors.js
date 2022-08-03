import ColorBox from "./colorBox/ColorBox"
import Tint from "./colorBox/Tint"

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

function Tints(props) {
    const tints = props.map((number) =>
      <Tint key={number.toString()}
                value={number} />
    );
    return tints
}

export default function Colors() {
    return (
        <>  
            
            <div className="mt-12 bg-default-900 p-5 br-2 tints grid gap-2">
                {Tints(tints)}   
            </div>
            
            
            <ColorBox code={clrMain.code} title={clrMain.title} desc={clrMain.desc} />
            <ColorBox code={clrDefault.code} title={clrDefault.title} desc={clrDefault.desc} />
            <ColorBox code={clrSuccess.code} title={clrSuccess.title} desc={clrSuccess.desc} />
            <ColorBox code={clrWarning.code} title={clrWarning.title} desc={clrWarning.desc} />
            <ColorBox code={clrError.code} title={clrError.title} desc={clrError.desc} />
            <ColorBox code={clrInfo.code} title={clrInfo.title} desc={clrInfo.desc} />
W
        </>
    )
}