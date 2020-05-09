import React, {Component} from "react"
import "./NavigationBar.scss"
import { Col, Container, Row } from 'react-bootstrap';

class NavigationBar extends Component{
    constructor(){
        super()
        this.state = {
            loaded: false,
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div className="navBarMainWrap">
                <Container>
                    <Row>
                        <Col lg={1} className="d-none d-lg-block"></Col>
                        <Col xs={10} lg={2}>
                            <div className="creatorsAppLogo"></div>
                        </Col>
                        <Col xs={0} lg={5} className="d-none d-lg-block"></Col>
                        <Col xs={0} lg={1} className="d-none d-lg-block">
                            <div className="navMainItem">Say Hi</div>
                        </Col>
                        <Col xs={0} lg={1} className="d-none d-lg-block">
                            <div className="navMainItem">Pricing</div>
                        </Col>
                        <Col xs={0} lg={1} className="d-none d-lg-block">
                            <div className="navMainItem">Register</div>
                        </Col>
                        <Col xs={0} lg={1} className="d-none d-lg-block"></Col>
                        <Col xs={2} className="d-lg-none d-xs-block">X</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NavigationBar