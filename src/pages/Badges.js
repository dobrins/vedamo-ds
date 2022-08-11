import { TabTitle } from "../utils/functions"
import ContentBox from "./components/ContentBox"
import Heading from "./components/Heading"

TabTitle('Badges')

const classes = [
    { class: "fz-display-l"     ,   size: "48px"        }, 
    { class: "fz-display-m"     ,   size: "36px"        }, 
    { class: "fz-display-s"     ,   size: "30px"        },
    { class: "fz-display-xs"    ,   size: "24px"        },
    { class: "fz-text-xl"       ,   size: "20px"        },
    { class: "fz-text-l"        ,   size: "18px"        },
    { class: "fz-text-m"        ,   size: "16px"        },
    { class: "fz-text-s"        ,   size: "14px"        },
    { class: "fz-text-xs"       ,   size: "12px"        }
];

export default function Badges() {
    return(
        <>
            <Heading title="Badges">
                <p>About Badges and how to use them - can be mixed with icons library</p>
            </Heading>         
            <ContentBox title="Variants">
                
                
                <p>Only text</p>
                <div className="bg-default-100 p-2">
                    <code>
                        &lt;span class="badge"&gt;Badge&lt;/span&gt;<br />
                        &lt;span class="badge badge-primary"&gt;Badge&lt;/span&gt;<br />
                        &lt;span class="badge badge-warning"&gt;Badge&lt;/span&gt;<br />
                        &lt;span class="badge badge-error"&gt;Badge&lt;/span&gt;<br />
                        &lt;span class="badge badge-info"&gt;Badge&lt;/span&gt;
                    </code>
                </div>
                <div class="fz-display-xs flex">
                    <Badge text="Badge" /> 
                    <Badge class-="badge-primary" text="Badge" />
                    <Badge class-="badge-warning" text="Badge" />
                    <Badge class-="badge-error" text="Badge" />
                    <Badge class-="badge-info" text="Badge" />
                </div>
            
                <p className="mt-5">With icon + text</p>
                <div className="bg-default-100 p-2">
                    <code>
                    &lt;span class="badge"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;Badge&lt;/span&gt;<br />
                        &lt;span class="badge badge-primary"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;Badge&lt;/span&gt;<br />
                        &lt;span class="badge badge-warning"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;Badge&lt;/span&gt;<br />
                        &lt;span class="badge badge-error"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;Badge&lt;/span&gt;<br />
                        &lt;span class="badge badge-info"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;Badge&lt;/span&gt;
                    </code>
                 </div>
                <div className="fz-display-xs flex">
                    <Badge icon="icon-vico-key" text="Badge" /> 
                    <Badge class_="badge-primary" icon="icon-vico-key" text="Badge" />
                    <Badge class_="badge-warning" icon="icon-vico-key" text="Badge" />
                    <Badge class_="badge-error" icon="icon-vico-key" text="Badge" />
                    <Badge class_="badge-info" icon="icon-vico-key" text="Badge" />
                </div>
                <p className="mt-5">Only icon</p>
                <div className="bg-default-100 p-2">
                    <code>
                    &lt;span class="badge badge-circle"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;&lt;/span&gt;<br />
                        &lt;span class="badge badge-primary badge-circle"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;&lt;/span&gt;<br />
                        &lt;span class="badge badge-warning badge-circle"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;&lt;/span&gt;<br />
                        &lt;span class="badge badge-error badge-circle"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;&lt;/span&gt;<br />
                        &lt;span class="badge badge-info badge-circle"&gt;&lt;i class="i icon-vico-key"&gt;&lt;/i&gt;&lt;/span&gt;
                    </code>
                 </div>
                <div className="fz-display-xs flex">
                    <Badge class_="badge-circle" icon="icon-vico-key" /> 
                    <Badge class_="badge-primary badge-circle" icon="icon-vico-key" />
                    <Badge class_="badge-warning badge-circle" icon="icon-vico-key" />
                    <Badge class_="badge-error badge-circle" icon="icon-vico-key" />
                    <Badge class_="badge-info badge-circle" icon="icon-vico-key" />
                </div>
                
            </ContentBox> 
            <ContentBox title="Sizes">
                <p>Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>
                <div className="grid">
                    {classes.map( (h, i) =>
                            (
                                <>
                                    <p key={i} className={`${h.class}`}>
                                    {h.size}. Example text <Badge icon="icon-paperclip" text="Badge" />
                                    </p>
                                </>
                            ) 
                        ) 
                    }
                </div>
            </ContentBox>
        </>    
    )
}

function Badge(props) { 
    
    return(
        <span className={`badge ${props.class_}`}>
            {props.icon && <i className={`i ${props.icon}`}></i>}
            {props.text && `Badge`}
        </span>
    )
}
