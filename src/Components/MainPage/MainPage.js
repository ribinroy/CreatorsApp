import React from "react"
import "./MainPage.scss"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';

function FloatingIcon(props){
    debugger;
    const left = props.left?props.left+"%":"auto";
    const right = props.right?props.right+"%":"auto";
    const top = props.top?props.top+"%":"auto";
    const bottom = props.bottom?props.bottom+"%":"auto";
    return <div className={"absoluteFlyingIcon " + props.class} style={{left: left, bottom: bottom, top: top, right: right}}>{props.name}</div>
}

function MainPageComponent(){
    return (
        <div className="onePage">
            <Container className="flexRow">
                <FloatingIcon class={"Aesthetics"} left={10} top={10}/>
                <FloatingIcon class={"PuppyEmoji"} left={31} top={9}/>
                <FloatingIcon class={"ClipBoard"} left={50} top={7}/>
                <FloatingIcon class={"Puppy"} right={10} top={8}/>
                <FloatingIcon class={"Money"} left={10}/>
                <FloatingIcon class={"Search"} left={10}/>
                <FloatingIcon class={"Drink"} left={10}/>
                <FloatingIcon class={"BirthdayPup"} left={10}/>
                <FloatingIcon class={"Car"} left={10}/>
                <FloatingIcon class={"WheelChair"} left={10}/>
                <FloatingIcon class={"Monitor"} left={10}/>
                <FloatingIcon class={"Burger"} left={10}/>
                <FloatingIcon class={"Mobile"} left={10}/>
                <FloatingIcon class={"Lady"} left={10}/>
                
                <div className="mainContentWrap">
                    <h1 data-aos="fade-in" data-aos-duration="500" data-aos-delay="100">
                        An all in one health and finance app for creators
                    </h1>
                    <p className="alignCenter subTextWrap" data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">
                        There've never been a time like this; A time where an app would be a lover, to people like you. We are making it more handy to control the money you make and the life you live.
                    </p>
                    <button className="register" data-aos="fade-in" data-aos-duration="500" data-aos-delay="400">
                        Register for early access
                    </button>
                </div>
                <div className="bottomContentWrap" data-aos="fade-in" data-aos-duration="600" data-aos-delay="500" data-aos-offset="-100">
                    <h4>We partner with the best</h4>
                    <div className="partnersWrap"></div>
                </div>
            </Container>
        </div>
    )
}

export default MainPageComponent;