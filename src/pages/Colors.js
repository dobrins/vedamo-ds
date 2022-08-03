import ColorBox from "./colorBox/ColorBox"

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

const getShadow = () => {
    let content = [];
        for( let i = 0, len = 1; i < len; i=i+.04 ) {

            // i = i.toFixed(2)

        let style = {
            backgroundColor: `hsla(var(--clr-default-1000) , ${i.toFixed(2)})`
        }

      content.push(
        <div key={i} className="br-1">
            <div style={style} >{i.toFixed(2)}</div>
            <div className="bg-default-0 p-2">
                {i.toFixed(2)}
            </div>
        </div>
      );
    }
    return content;
  };

export default function Colors() {
    return (
        <>
            <ColorBox code={clrMain.code} title={clrMain.title} desc={clrMain.desc} />
            <ColorBox code={clrDefault.code} title={clrDefault.title} desc={clrDefault.desc} />
            <ColorBox code={clrSuccess.code} title={clrSuccess.title} desc={clrSuccess.desc} />
            <ColorBox code={clrWarning.code} title={clrWarning.title} desc={clrWarning.desc} />
            <ColorBox code={clrError.code} title={clrError.title} desc={clrError.desc} />
            <ColorBox code={clrInfo.code} title={clrInfo.title} desc={clrInfo.desc} />

            <div className="grid-container mt-12">
            
            <div className="col-lg-9 col-xs-12">
                <section className="grid color">
                {getShadow()}
                </section>
            </div>
            </div>

        </>
    )
}