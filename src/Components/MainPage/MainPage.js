import React from "react"
import "./MainPage.scss"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { Container} from 'react-bootstrap';

function MainPageComponent(){
    return (
        <div className="onePage" id="Home">
            <Container className="flexRow">
                <div className="mainContentWrap" data-aos="fade-in" data-aos-duration="650" data-aos-delay="100">
                    <div data-aos="zoom-out-down" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Monitor"></div>
                    <div data-aos="zoom-out-right" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon WheelChair"></div>
                    <div data-aos="zoom-out-left" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Car"></div>
                    <div data-aos="zoom-out-down" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon BirthdayPup"></div>
                    <div data-aos="zoom-out-right" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Drink"></div>
                    <div data-aos="zoom-out-left" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Search"></div>
                    <div data-aos="zoom-out-right" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Money"></div>
                    <div data-aos="zoom-out-left" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Puppy"></div>
                    <div data-aos="zoom-out-up" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon ClipBoard"></div>
                    <div data-aos="zoom-out-left" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon PuppyEmoji"></div>
                    <div data-aos="zoom-out-right" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Aesthetics"></div>
                    <div data-aos="zoom-out-down" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Burger"></div>
                    <div data-aos="zoom-out-left" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Mobile"></div>
                    <div data-aos="zoom-out-up" data-aos-duration="900" data-aos-offset="-200" data-aos-delay="400" className="absoluteFlyingIcon Lady"></div>
                    
                    <h1>
                        All-in-one<br/>app for creators
                    </h1>
                    {/* <p className="alignCenter subTextWrap">
                        There've never been a time like this; A time where an app would be a lover, to people like you. We are making it more handy to control the money you make and the life you live.
                    </p> */}
                    <a className="register button" href="#Registration">
                        Sign up now
                    </a>
                </div>
                {/* <div className="bottomContentWrap" data-aos="fade-in" data-aos-duration="800" data-aos-delay="500" data-aos-offset="-100">
                    <h4 data-aos="fade-in" data-aos-duration="850" data-aos-delay="0">We partner with the best</h4>
                    <div className="partnersWrap">
                        <div md={3} lg={3} xs={6} className="partnerLogo" style={{ backgroundImage: `url(${require("../../shared/Images/Partners/Logo1.png")})`}} data-aos="fade-in" data-aos-duration="850" data-aos-delay="100"></div>
                        <div md={3} lg={3} xs={6} className="partnerLogo" style={{ backgroundImage: `url(${require("../../shared/Images/Partners/Logo2.png")})`}} data-aos="fade-in" data-aos-duration="850" data-aos-delay="200"></div>
                        <div md={3} lg={3} xs={6} className="partnerLogo" style={{ backgroundImage: `url(${require("../../shared/Images/Partners/Logo3.png")})`}} data-aos="fade-in" data-aos-duration="850" data-aos-delay="300"></div>
                        <div md={3} lg={3} xs={6} className="partnerLogo" style={{ backgroundImage: `url(${require("../../shared/Images/Partners/Logo4.png")})`}} data-aos="fade-in" data-aos-duration="850" data-aos-delay="400"></div>
                    </div>
                </div> */}
            </Container>
        </div>
    )
}

export default MainPageComponent;