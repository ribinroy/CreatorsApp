import React from "react"
import "./MainPage.scss"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';

function MainPageComponent(){
    return (
        <div className="onePage">
            <Container className="flexRow">
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
                
                <div className="mainContentWrap">
                    <h1 data-aos="fade-in" data-aos-duration="500" data-aos-delay="100">
                        An all in one health and finance app for creators
                    </h1>
                    <p className="alignCenter subTextWrap" data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">
                        There've never been a time like this; A time where an app would be a lover, to people like you. We are making it more handy to control the money you make and the life you live.
                    </p>
                    <button className="register" data-aos="fade-in" data-aos-duration="500" data-aos-delay="400" data-aos-offset="-100">
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