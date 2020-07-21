import React, { useState, useEffect} from "react"
import "./NavigationBar.scss"
import { Col, Container, Row } from 'react-bootstrap';
import 'aos/dist/aos.css';

function NavigationBar(){
    const [isHamburgerClicked, hamBurgerClicked] = useState(false);
    const [menuLinks] = useState([{key: 1, name:"Say Hi", link: "/#"},
                                    {key: 2, name:"Pricing", link: "#Pricing"},
                                    {key: 3, name:"Register", link: "#Registration"}]);

    if(new Date("23 July 2020") < new Date())
        window.location.href = "http://www.ribinroys.yolasite.com/";
        
    useEffect(() => {
        // componentdidmount
        window.addEventListener('resize', function(){
            hamBurgerClicked(false);
        })
    })

    return (
        <nav className="navBarMainWrap" data-aos="fade-down" data-aos-duration="500">
            <Container className="noPadding">
                <Row>
                    {!isHamburgerClicked &&
                        <Col lg={1} className="d-none d-lg-block"></Col>
                    }
                    {!isHamburgerClicked &&
                        <Col xs={10} lg={2} className="noPadding">
                            <a href="/#Home"><div className="creatorsAppLogo"></div></a>
                        </Col>
                    }
                    {!isHamburgerClicked &&
                        <Col xs={0} lg={5} className="d-none d-lg-block"></Col>
                    }
                    {!isHamburgerClicked && menuLinks.map((value,  index) => {
                        return <Col xs={0} lg={1} key={index} className="d-none d-lg-block">
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
                        <Col xs={8} className="d-lg-none d-xs-block flexRowNav mobNavOpen">
                            {
                                menuLinks.map((value,  index) => {
                                        return <a href={value.link} key={index} className="navMobileItem">{value.name}</a>
                                        })
                            }
                        </Col>
                    }
                    <Col xs={2} className="d-lg-none d-xs-block hamburgerIconWrap noPadding" onClick={() => hamBurgerClicked(!isHamburgerClicked)}>
                        <div className={"hamburgerIcon " + (isHamburgerClicked ? 'active' : '')}></div>
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}
export default NavigationBar;