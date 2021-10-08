import React from "react";
import {Card, Row, Col, Input, Button} from 'reactstrap'

const Home = () => {

    return (
        <>
<Card style={{background: "#4e2779", height: "60px"}}>
    <Row>
        <Col sm="7"></Col>
        <Col sm="5">
            <div style={{marginTop: "12px", marginRight: "10px"}}>
            <Row>
            <Col sm="5"><Input
            id="usuario"
            name="usuario"
            type="text"
            >
            </Input></Col>
            <Col sm="5"><Input
            id="usuario"
            name="usuario"
            type="text"
            >
            </Input></Col>
            <Col sm="2"><Button>Login</Button></Col>
            </Row>
            </div>
            </Col>
    </Row>
</Card>
        </>        
    )

}

export default Home