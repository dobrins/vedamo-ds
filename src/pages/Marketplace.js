import { TabTitle } from "../utils/functions"

TabTitle('Marketplace')

const ahref = '#/marketplace';

export default function Marketplace() {

    let style = {
        backgroundColor : "hsl(var(--clr-default-100), 0.8)",
        position: "relative",
        zIndex: "1",
        marginBottom: "-80px"
    }


    return (
        <>
        <div className="container-m mt-15">
            <div className="grid-container">
                <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                    <h1 className="hero-title txt-semibold">On-demand Online Tutoring.<br />Tutors & Students Matched.</h1>
                    <p className="subtitle txt-default-450 mt-4"><span className="txt-mp-gradient">1218 Completed Sessions</span> AND COUNTING</p>
                </div>
            </div>
        </div>

        <div className="container-m">
            <div className="grid-container">
                <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                    <div className="top-categories blur-s br-6" style={ style }>
                        <p className="txt-uppercase fz-text-xs txt-semibold txt-default-600">Top categories</p>
                        <div className="grid-container mt-3">
                            <div className="col-sm-4 col-xs-12">
                                <a href={ahref} className="btn btn-tertiary btn-xl full-width">Languages</a>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <a href={ahref} className="btn btn-tertiary btn-xl full-width">Mathematics</a>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <a href={ahref} className="btn btn-tertiary btn-xl full-width">Programming</a>
                            </div>
                        </div>
                        <div className="flex flex-center-h mt-6">
                            <a href={ahref} className="btn btn-primary btn-xl bg-mp-gradient full-width-m">All categories</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="slider">
	        <div className="slide-track">
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
            </div>
        </div>

        <div className="slider">
	        <div className="slide-track slide-track-right slide-track-bottomGradient">
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
                <div className="slide">
                    <CardTeacher /> 
                </div>
            </div>
        </div>

        <div className="bg-default-100 mt-10 pv-15">
            <div className="container-m">
                <div className="grid-container">
                    <div className="col-xs-12 col-sm-4 col-sm-offset-3">
                        <span className="txt-mp-gradient txt-semibold">LATEST TUTORS</span>
                        <p className="fz-display-m txt-semibold">Featured tutors for your growth</p>
                    </div>
                </div>
                <CardSection />
                <CardSection />
                <CardSection />
                <div className="pt-13 flex flex-center">
                    <button className="btn btn-primary btn-xl bg-mp-gradient">Find a Tutor</button>
                </div>
            </div>
        </div>

        <div className="bg-default-0 mt-10 pv-15">
            <div className="grid-container">
                <div className="col-sm-8 col-sm-offset-3">
                    <div className="flex flex-column">
                        <p className="subtitle txt-mp-gradient-dark txt-center">how it works</p>
                        <h5 className="fz-display-m txt-semibold txt-center">Find the perfect Tutors in 3 simple steps</h5>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

function CardSection(props) {
    return(
        <>
            <div className="grid-container">
                <div className="mv-10 col-xs-12 col-sm-8 col-sm-offset-3">
                    <div className="divider"></div>
                </div>
            </div>
            <div className="grid-container">
                <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                    <div className="flex flex-center-v">
                        <p className="fz-text-xl txt-semibold flex-1">Languages</p>
                        <a href={ahref} className="btn btn-tertiary">See all<i className="i icon-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="grid-container mt-9">
                <div className="col-sm-6 col-sm-offset-3">
                    <Card />
                </div>
            </div>
            <div className="grid-container mt-4">
                <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                    <div className="flex gap-1">
                        <a href={ahref} className="btn btn-tertiary btn-xs btn-square"><i className="i icon-chevron-left"></i></a>
                        <a href={ahref} className="btn btn-tertiary btn-xs btn-square"><i className="i icon-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

function Card(props) {
    return(
        <div className="bg-default-0 p-8 br-3 bs-2xl">
            <div className="flex gap-7">
                <a href={ahref} className="avatar avatar-3xl">MJ</a>
                <div className="flex-1">
                    <div className="flex gap-1">
                        <span className="badge badge-primary">English</span>
                        <span className="badge badge-primary">Nestinaria</span>
                    </div>
                    <p className="txt-bold fz-text-xl mt-2">Andrew The Botanic</p>
                    <p className="txt-default-550 mt-4">A short sen tence-like paragraph sharing more about the tutors' background.</p>
                    <button className="btn btn-tertiary btn-xs mt-3">English</button>
                </div>
                <div className="flex flex-center">
                    <div className="flex flex-vertical">
                        <span className="fz-display-m txt-bold">$35</span>
                        <span className="fz-text-s txt-default-550">/1 hr session</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CardTeacher(props) {

    let style = {
        backgroundImage : "url(https://baconmockup.com/640/360)",
        backgroundSize: "cover"
    }

    return (
        <div className="ph-5">
            <div className="br-4 bg-main-200 teacher-card" style={style}>
                <div className="flex flex-center-v teacher-card-name">
                    <div className="avatar avatar-2xl bs-xl avatar-border">
                        <img src='https://avataaars.io/?avatarStyle=Transparent&facialHairType=MoustacheFancy' alt="" />
                    </div>
                    <span className="txt-default-0 txt-medium fz-text-s">Mata Kosmata</span>
                </div>
                <a href={ahref} className="teacher-card-name-link">123</a>
            </div>
        </div>
    )
}