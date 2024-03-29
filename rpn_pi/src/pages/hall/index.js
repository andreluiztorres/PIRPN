import React from "react";
import { Link } from "react-router-dom";
import {Card, Row, Col, Input, Button, CardBody, CardHeader, Label} from 'reactstrap'
import FotoTeste from '../../assets/images/FotoTeste.jpg'
import { Search, LogIn, Lock } from 'react-feather';
import Avatar from 'react-avatar';
import YouTube from 'react-youtube';


const Hall = () => {

    const listaSala = [ 
        {
        Id: 1,
        Nome: 'Sala 1',
        Descricao: "O jogo utiliza a condição vampírica, imortal e amaldiçoada, como plano de fundo para explorar temas como moralidade, depravação, humanidade (ou a apreciação da condição humana em sua ausência), salvação e horror pessoal.",
        },

        {
        Id: 2,
        Nome:' Sala 2',
        Descricao: "Sala de jogo nunmero 2",
        Privado: true,
        },

        {
        Id: 3,
        Nome: 'Sala 3',
        Descricao: "Sala de jogo nunmero 3",
        Privado: false,
        },

        {
        Id: 4,
        Nome: 'Sala 4',
        Descricao: 'Sala de jogo nunmero 4',
        Privado: true,
        },

        {
        Id: 5,
        Nome: 'Sala 5',
        Descricao: "Sala de jogo nunmero 5",
        Privado: true,
        },

        {
        Id: 6,
        Nome: 'Sala 6',
        Descricao: "Sala de jogo nunmero 6",
        Privado: false,
        }
    ]
            
 
    const listaItens = listaSala.map( (f) => 
    
    <Card className='CardLista'>
        <CardBody>
            <Row>
                <Col>
                <div style={{marginLeft: "10px", fontWeight: '700', fontSize: '13px'}}>
                Sala: {f.Nome}
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div style={{marginLeft: "10px",marginRight: "10px", fontSize: '12px', textAlign: 'justify'}}>
                Descrição: {f.Descricao}
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div style={{display: 'flex',justifyContent: 'end', marginLeft: "10px",marginRight: "10px", fontSize: '12px', textAlign: 'justify'}}>
                <Lock hidden={f.Privado != true ? '' : 'hidden'} size='14px' style={{marginRight: '15px', marginTop: '10px'}} /><Button color='danger' size='sm'>ENTRAR <LogIn size="14px" /></Button>
                </div>
                </Col>
            </Row>
        </CardBody>
    </Card>

    )

  


    return(
        
        <><br />
<Card className="BarrSup" style={{background: "#4e2779", height: "60px", boxShadow: '5px 5px 5px #000', marginLeft: '-20px' }}>
<div className='Avatar'><Avatar size="90" round={true} facebook-id="invalidfacebookusername" src={FotoTeste} /></div>
    <Row>
        <Col sm='9'></Col>
        <Col sm='2'><div style={{display: 'flex', justifyContent: 'end', marginTop: '5px', color: '#fff'}}><Col><Col><h5><div style={{display: 'flex', justifyContent: 'end'}}><strong>André Luiz Torres</strong></div></h5></Col><Col><div style={{display: 'flex', justifyContent: 'end', marginTop: '-13px'}}><h6>andre.torres.ti@gmail.com</h6></div></Col></Col></div></Col>
        <Col sm='1'></Col>
    </Row>
</Card>
<Row>
    <Col sm='4'>
    <Card className='Card' style={{ marginLeft: '30px'}}>
            <CardHeader style={{color: '#fff', fontWeight: 'bold', padding: '10px'}}>
                <Row>
                    <Col sm='8'>
                    <Input
                id='search'
                name='search'
                type='text'
                placeholder='Nome da Sala ...'
                >
                </Input>
                </Col>
                <Col sm='4'>
                <Button color='danger'>
                    Criar Sala
                </Button>
                </Col>
                </Row>
            </CardHeader>
            
            <CardBody style={{padding: '10px'}} ><br />
            {listaItens}
            </CardBody>
        </Card>
    </Col>
    <Col sm='8' >
        <Card className='Card' style={{ marginTop: '45px'}}>
            <CardHeader style={{color: '#fff', fontWeight: 'bold', padding: '10px', marginLeft: '10px'}}><h4><strong> Entenda como jogar ? </strong></h4></CardHeader>
            <CardBody style={{padding: '20px'}} ><YouTube></YouTube><br />
            <div style={{display: "flex", justifyContent: "center"}}><Button color='danger' size='lg'>Jogue Agora</Button></div>
            </CardBody>
        </Card>
        <br />
        <Card className='Card' style={{ marginTop: '5px'}}>
            <CardHeader style={{color: '#fff', fontWeight: 'bold', padding: '10px', marginLeft: '10px'}}><h3><strong> O que é RPN ? </strong></h3></CardHeader>
            <CardBody style={{padding: '20px'}} ><Input
            name='textoInicial'
            id='textoInicial'
            type='textarea'
            value='A sigla RPG, oriunda da expressão em inglês “Role Playing Game”, define um estilo de jogo em que as pessoas interpretam seus personagens, criando narrativas, histórias e um enredo guiado por uma delas, que geralmente leva o nome de mestre do jogo.'
            style={{padding: '20px', height: "200px"}}
            disabled
            >
            </Input><br />
            <div style={{display: "flex", justifyContent: "center"}}><Button color='danger' size='lg'>Jogue Agora</Button></div>
            </CardBody>
        </Card>
    </Col>
</Row>

        </>        
    
    )
}

export default Hall