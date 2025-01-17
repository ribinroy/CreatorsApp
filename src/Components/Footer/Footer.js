import React from "react"
import { Container } from "react-bootstrap"
import "./Footer.scss"

function Footer(){

    return (
        <footer className="footerWrap">
            <Container className="noPadding">
                <div className="firstSection">
                    <div className="textWrap">
                        <h2>
                            Start growing with CreatorsApp today!
                        </h2>
                        <p>
                            We would love you help to make this the best product out there.
                            <br/>Shoot us a DM at <a href="mailto:hello@creatorsapp.com">hello@creatorsapp.com</a>
                        </p>
                    </div>
                    <div className="contactsWrap">
                        <div className="contactsHeading">CONTACT</div>
                        <a className="contactEmail" href="mailto:hello@creatorsapp.com">hello@creatorsapp.com</a>
                        <a className="contactEmail" href="mailto:jobs@creatorsapp.com">jobs@creatorsapp.com</a>
                    </div>
                </div>
                <div className="secondSection">
                    <div className="socialNetworkWrap">
                        <a href="/#" className="socialIcon">FB</a>
                        <a href="/#" className="socialIcon">TW</a>
                        <a href="/#" className="socialIcon">IG</a>
                    </div>
                    <a className="creatorsAppLogo" href="/#Home"><span className="mockTextHide">.</span><span></span></a>
                </div>
            </Container>
        </footer>
    )

}

export default Footer