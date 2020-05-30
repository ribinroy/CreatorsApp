import React, { useState, useEffect} from "react"
import "./NavigationBar.scss"
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NavigationBar(){
    const [isHamburgerClicked, hamBurgerClicked] = useState(false);
    const [menuLinks] = useState([{name:"Say Hi", link: "/#"},
                                    {name:"Pricing", link: "/#"},
                                    {name:"Register", link: "/#"}]);

    useEffect(() => {
        // componentdidmount
        AOS.init({
            duration : 2000
        })
    })

    return (
        <div>
            <nav className="navBarMainWrap" data-aos="fade-down" data-aos-duration="500">
                <Container>
                    <Row>
                        {!isHamburgerClicked &&
                            <Col lg={1} className="d-none d-lg-block"></Col>
                        }
                        {!isHamburgerClicked &&
                            <Col xs={10} lg={2}>
                                <div className="creatorsAppLogo"></div>
                            </Col>
                        }
                        {!isHamburgerClicked &&
                            <Col xs={0} lg={5} className="d-none d-lg-block"></Col>
                        }
                        {!isHamburgerClicked && menuLinks.map((value,  index) => {
                            return <Col xs={0} lg={1} className="d-none d-lg-block">
                                        <a href={value.link}  className="navMainItem">{value.name}</a>
                                    </Col>
                        })}
                        {!isHamburgerClicked &&
                            <Col xs={0} lg={1} className="d-none d-lg-block"></Col>
                        }

                        {isHamburgerClicked &&
                            <Col xs={2} className="d-lg-none d-xs-block "></Col>
                        }
                        {isHamburgerClicked && 
                            <Col xs={8} className="d-lg-none d-xs-block flexRow mobNavOpen">
                               {
                                   menuLinks.map((value,  index) => {
                                            return <a href={value.link}  className="navMobileItem">{value.name}</a>
                                            })
                                }
                            </Col>
                        }
                        <Col xs={2} className="d-lg-none d-xs-block hamburgerIconWrap" onClick={() => hamBurgerClicked(!isHamburgerClicked)}>
                            <div className={"hamburgerIcon " + (isHamburgerClicked ? 'active' : '')}></div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </div>
    )
}
export default NavigationBar;