import React from "react";
import { Link } from "react-router-dom";
import {Card, Row, Col, Input, Button, CardBody, CardHeader, Label} from 'reactstrap'
import FotoTeste from '../../assets/images/FotoTeste.jpg'
import Ribbon from '../../assets/images/ribbonmedium.png'
import { Search, LogIn, Lock } from 'react-feather';
import Avatar from 'react-avatar';
import YouTube from 'react-youtube';
import { Slide } from 'react-slideshow-image';



const Sala = () => {

    return( 
    <><br/>
<Card className="BarrSup" style={{background: "#4e2779", height: "60px", boxShadow: '5px 5px 5px #000', marginLeft: '-20px' }}>
<div className='Avatar'><Avatar size="90" round={true} facebook-id="invalidfacebookusername" src={FotoTeste} /></div>
    <Row>
        <Col sm='9'></Col>
        <Col sm='2'><div style={{display: 'flex', justifyContent: 'end', marginTop: '5px', color: '#fff'}}><Col><Col><h5><div style={{display: 'flex', justifyContent: 'end'}}><strong>André Luiz Torres</strong></div></h5></Col><Col><div style={{display: 'flex', justifyContent: 'end', marginTop: '-13px'}}><h6>andre.torres.ti@gmail.com</h6></div></Col></Col></div></Col>
        <Col sm='1'></Col>
    </Row>
</Card>

<Row>
<Col sm='12'>
    <div style={{display: 'flex', justifyContent:'right'}}><img style={{position: 'absolute', zIndex: 9999, marginTop: '-28px'}} src={Ribbon}></img></div>
    <Card className='Card' style={{marginTop: '30px', marginLeft: '20px'}}>
            <CardHeader style={{color: '#fff', fontWeight: 'bold', padding: '10px'}}>
                
            </CardHeader>
            
            <CardBody style={{padding: '10px'}} ><br />
            
            </CardBody>
        </Card>
    </Col>
</Row>
<Row>
    <Col sm='7'>
    <Card className='Card'  style={{marginTop: '30px', marginLeft: '18px'}}>
            <CardHeader style={{color: '#fff', fontWeight: 'bold', padding: '10px'}}>
                
            </CardHeader>
            
            <CardBody style={{padding: '10px'}} ><br />
            
            </CardBody>
        </Card>
    </Col>
    <Col sm='5' >
        <Card className='Card' style={{marginTop: '30px', marginLeft: '-30px'}}>
            <CardHeader style={{color: '#fff', fontWeight: 'bold', padding: '10px', marginLeft: '10px'}}></CardHeader>
            <CardBody style={{display: 'flex', justifyContent: 'center'}} ><br />
           
            </CardBody>
        </Card>
        
    </Col>
</Row>

        </>        
    
    )
}

export default Sala