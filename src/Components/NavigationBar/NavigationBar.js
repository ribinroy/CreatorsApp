import React, {Component} from "react"
import "./NavigationBar.css"
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
                        <Col xs={10} lg={2}>Creators logo</Col>
                        <Col xs={0} lg={5} className="d-none d-lg-block"></Col>
                        <Col xs={0} lg={1} className="d-none d-lg-block">Say Hi</Col>
                        <Col xs={0} lg={1} className="d-none d-lg-block">Pricing</Col>
                        <Col xs={0} lg={1} className="d-none d-lg-block">Register</Col>
                        <Col xs={0} lg={1} className="d-none d-lg-block"></Col>
                        <Col xs={2} className="d-lg-none d-xs-block">X</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NavigationBar