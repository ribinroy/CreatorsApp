import React, { useState } from "react"
import "./Features.scss"
import { Container } from 'react-bootstrap';
import Pricing from '../Pricing/Pricing.js';

function HealthContents(){
    return (
            <div className="healthContentsWrap inherit">
                <article className="featureContentItemWrap" article="1">
                    <div className="featureContentHeadingWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <h5>HEALTH BENEFIT</h5>
                        <h3>Access to 24/7 Medical Hotline</h3>
                    </div>
                    <div className="featureContentImageWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                        <div className="featureImage" style={{ backgroundImage: `url(${require("../../shared/Images/Health Items/First.png")})`}} alt="Health Benefit 1"></div>
                    </div>
                    <div className="featureContentDesciprionWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        {/* <p>Get a well personalized and proper diagnosis for your body and soul. You have work to do and we know that, that's why we are here to help you.</p> */}
                        <div className="flexRowOnlyOnMobile">
                            <ul>
                                <li>Video chat</li>
                                <li>No Co-Pay</li>
                                <li>On your time</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="featureContentItemWrap rightAlignedImage" article="2">
                    <div className="featureContentHeadingWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <h5>HEALTH BENEFIT</h5>
                        <h3>Health Benefits That Covers For The Whole Family</h3>
                    </div>
                    <div className="featureContentImageWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                        <div className="featureImage" style={{ backgroundImage: `url(${require("../../shared/Images/Health Items/Second.png")})`}} alt="Health Benefit 2"></div>
                    </div>
                    <div className="featureContentDesciprionWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        {/* <p>Get a well personalized and proper diagnosis for your body and soul. You have work to do and we know that, that's why we are here to help you.</p> */}
                        <div className="flexRowOnlyOnMobile">
                            <ul>
                                <li>Whole family coverage</li>
                                <li>Medical concierge</li>
                                <li>Prescription card</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="featureContentItemWrap" article="3">
                    <div className="featureContentHeadingWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <h5>HEALTH BENEFIT</h5>
                        <h3>Monitor Your Health With Your Own Portal</h3>
                    </div>
                    <div className="featureContentImageWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                        <div className="featureImage" style={{ backgroundImage: `url(${require("../../shared/Images/Health Items/Third.png")})`}} alt="Health Benefit 3"></div>
                    </div>
                    <div className="featureContentDesciprionWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        {/* <p>Get a well personalized and proper diagnosis for your body and soul. You have work to do and we know that, that's why we are here to help you.</p> */}
                        <div className="flexRowOnlyOnMobile">
                            <ul>
                                <li>Health History</li>
                                <li>Medications</li>
                                <li>Additional Benefits</li>
                            </ul>
                        </div>
                        <div className="specialInfoWrap">
                            <div className="specialInfo">Coming soon to the store</div>
                            <div className="specialIconsWrap">
                                <div className="appleIcon iconDiv"></div>
                                <div className="androidIcon iconDiv"></div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="featureContentItemWrap rightAlignedImage" article="4">
                    <div className="featureContentHeadingWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <h5>HEALTH BENEFIT</h5>
                        <h3>Mobile Health Features For Your Pets</h3>
                    </div>
                    <div className="featureContentImageWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                        <div className="featureImage" style={{ backgroundImage: `url(${require("../../shared/Images/Health Items/Forth.png")})`}} alt="Health Benefit 4"></div>
                    </div>
                    <div className="featureContentDesciprionWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        {/* <p>Get a well personalized and proper diagnosis for your body and soul. You have work to do and we know that, that's why we are here to help you.</p> */}
                        <div className="flexRowOnlyOnMobile">
                            <ul>
                                <li>Whole family coverage</li>
                                <li>Medical conceirge</li>
                                <li>Presciption card</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="featureContentItemWrap centerAlignedFeature" article="5">
                    <div className="featureContentHeadingWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <h5>HEALTH BENEFIT</h5>
                        <h3>Get medications through virtual visits</h3>
                    </div>
                    <div className="featureContentImageWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                        <div className="featureImage" style={{ backgroundImage: `url(${require("../../shared/Images/Health Items/Fifth.png")})`}} alt="Health Benefit 5"></div>
                    </div>
                    {/* <div className="featureContentDesciprionWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <p>Get a well personalized and proper diagnosis for your body and soul. You have work to do and we know that, that's why we are here to help you.</p>
                    </div> */}
                </article>
            </div>
    )
}

function FinanceContents(){
    return (
            <div className="financeContentsWrap inherit">
                <article className="featureContentItemWrap centerAlignedFeature" article="1">
                    <div className="featureContentHeadingWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <h5>FINANCE BENEFIT</h5>
                        <h3>Seamless And Swift Payment Method</h3>
                    </div>
                    <div className="featureContentImageWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                        <div className="featureImage" style={{ backgroundImage: `url(${require("../../shared/Images/Finance Items/First.png")})`}} alt="Finance Benefit 1"></div>
                    </div>
                    {/* <div className="featureContentDesciprionWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <p>Get a well personalized and proper diagnosis for your body and soul. You have work to do and we know that, that's why we are here to help you.</p>
                    </div> */}
                </article>
                <article className="featureContentItemWrap rightAlignedImage centerAlignedFeature" article="2">
                    <div className="featureContentHeadingWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <h5>FINANCE BENEFIT</h5>
                        <h3>Spreadsheet That Is Smarter Than A Spreadsheet.</h3>
                    </div>
                    <div className="featureContentImageWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                        <div className="featureImage" style={{ backgroundImage: `url(${require("../../shared/Images/Finance Items/Second.png")})`}} alt="Finance Benefit 2"></div>
                    </div>
                    {/* <div className="featureContentDesciprionWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <p>Get a well personalized and proper diagnosis for your body and soul. You have work to do and we know that, that's why we are here to help you.</p>
                    </div> */}
                </article>
                <article className="featureContentItemWrap centerAlignedFeature" article="3">
                    <div className="featureContentHeadingWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        <h5>FINANCE BENEFIT</h5>
                        <h3>Create Professional Ready-To-Go Invoices For Free</h3>
                    </div>
                    <div className="featureContentImageWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                        <div className="featureImage" style={{ backgroundImage: `url(${require("../../shared/Images/Finance Items/Third.png")})`}} alt="Finance Benefit 3"></div>
                    </div>
                    <div className="featureContentDesciprionWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="0"  data-aos-offset="15">
                        {/* <p>Get a well personalized and proper diagnosis for your body and soul. You have work to do and we know that, that's why we are here to help you.</p> */}
                        <div className="specialInfoWrap">
                            <div className="specialInfo">Get it on</div>
                            <div className="specialIconsWrap">
                                <div className="appleIcon iconDiv"></div>
                                <div className="androidIcon iconDiv"></div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
    )
}

function JoinPrivateBeta(){
    const [isFormOpened, changeFormOpened] = useState(false);
    const [email, changeEmail] = useState("");
    const [nickName, changeNickName] = useState("");
    const [whatYouDo, changeWhatYouDo] = useState("");
    const [registerCompeted, changeRegisterCompeted] = useState(false);
    
    

    return (
        <section className="finalSection">
            <div className="halfPage firstHalf" id="Registration">
                <div className="absoluteFlyingIcon popCorn" data-aos="zoom-out-down" data-aos-duration="900" data-aos-delay="170"></div>
                <div className="absoluteFlyingIcon briefCase" data-aos="zoom-out-up" data-aos-duration="900" data-aos-delay="170"></div>
                <div className="absoluteFlyingIcon beer" data-aos="zoom-out-left" data-aos-duration="900" data-aos-delay="170"></div>
                <div className="absoluteFlyingIcon cookies" data-aos="zoom-out-right" data-aos-duration="900" data-aos-delay="170"></div>
                <h1 data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100">
                    Creators should earn and live.
                </h1>
            </div>
            <div className="joinFooter" data-aos="fade-in" data-aos-duration="700" data-aos-delay="100" data-aos-offset="10">
                <div className="joinUpperDetailsWrap">
                    <div className="joinMainText">Join our Private Beta</div>
                    <div className="joinSubText">Join a bunch of your friends on our waitlist</div>
                    <div className={"joinArrow " + (isFormOpened?"active":"") + (registerCompeted?" hideArrow":"")} onClick={() => changeFormOpened(!isFormOpened)}></div>
                </div>
                <form className={"joinerFormWrap " + ((isFormOpened && !registerCompeted)?"active":"")}>
                    <label className="joinerInputRelativeWrap">
                        <input id="email" className={"joinerInput " + (email === ""?"":"filled")} type="email" name="Email" onChange={e => changeEmail(e.target.value)}/>
                        <div htmlFor="email" className="joinerInputLabel">You@example.com</div>
                    </label>
                    <label className="joinerInputRelativeWrap">
                        <input id="Nickname" className={"joinerInput " + (nickName === ""?"":"filled")}  type="text" name="Nickname" onChange={e => changeNickName(e.target.value)}/>
                        <div htmlFor="Nickname" className="joinerInputLabel">Nickname</div>
                    </label>
                    <label className="joinerInputRelativeWrap">
                        <input id="WhatYouDo" className={"joinerInput " + (whatYouDo === ""?"":"filled")}  type="text" name="WhatYouDo" onChange={e => changeWhatYouDo(e.target.value)}/>
                        <div htmlFor="WhatYouDo" className="joinerInputLabel">What do you do</div>
                    </label>
                    <button className="joinerSubmitButton" type="submit" onClick={(e) => {e.preventDefault(); changeRegisterCompeted(true);}}>Let's do this</button>
                    <p>
                        No unsolicited emails. No spam. No hits, just updates
                    </p>
                </form>
                {registerCompeted && <div className="registeredPrompt">
                    <p>
                        Awesome! Keep an eye on your email, we'll reach
                    </p>
                </div>}
            </div>
            <Pricing />
            <div className="halfPage secondHalf">
                <p data-aos="zoom-in" data-aos-duration="850" data-aos-delay="170" data-aos-offset="-5">
                    FINANCE BENEFIT
                </p>
                <h1 data-aos="zoom-in" data-aos-duration="850" data-aos-delay="100" data-aos-offset="-5">
                    Free Forever
                </h1>
                <div className="iconsWrap">
                    <div className="iconItem Circled" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="200" data-aos-offset="-5"></div>
                    <div className="iconItem Sound" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="250" data-aos-offset="-5"></div>
                </div>
            </div>
        </section>
    )
}
function Features(){
    const [selectedFeature, changeFeatureSelection] = useState("Health");

    return(
        <section className="reactiveHeight">
            <Container>
                <h2 data-aos="fade-in" data-aos-duration="850" data-aos-delay="0">Our Features</h2>
                <div className={"featureSelectionWrap is" + (selectedFeature)}>
                    <div className="featureType healthFeature" onClick={() => changeFeatureSelection("Health")}>
                        <div className="featureTypeContent" data-aos="fade-right" data-aos-duration="850" data-aos-delay="0">
                            <h3>Health</h3>
                        </div>
                    </div>
                    <div className="featureType financeFeature" onClick={() => changeFeatureSelection("Finance")}>
                        <div className="featureTypeContent" data-aos="fade-left" data-aos-duration="850" data-aos-delay="0">
                            <h3>Finance</h3>
                        </div>
                    </div>
                </div>
                {selectedFeature === "Health"
                    ? <HealthContents />
                    : <FinanceContents />
                }
                <JoinPrivateBeta />
            </Container>
        </section>
    )
}

export default Features;