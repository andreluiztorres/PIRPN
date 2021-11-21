/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import  { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {Card, Row, Col, Input, Button, CardBody, CardHeader} from 'reactstrap'
import LogoRPN from '../../assets/images/LogoRPN.png'
import api from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dadosUsr, setDadosUsr] = useState([]);
    const history = useHistory();
    const redireciona = () => {
    if(password !== dadosUsr[0].senha){
        toast.error("Nick ou Senha incorreta")
    }else{
        localStorage.setItem('nome', dadosUsr[0].nome);
        localStorage.setItem('nick', dadosUsr[0].nick);
        localStorage.setItem('id', dadosUsr[0].id);
        localStorage.setItem('email', dadosUsr[0].email);
        return (history.push("/Hall"));
    }
    }
    
    const ConfereDadodos = (dados) => {
    api.get('usuario/nick/' + email)
    .then(r => {
        if(password !== r.data.senha){
            toast.error("Nick ou Senha incorreta")
        }else{
            localStorage.setItem('nome', r.data.nome);
            localStorage.setItem('nick', r.data.nick);
            localStorage.setItem('id', r.data.id);
            localStorage.setItem('email', r.data.email);
            return (history.push("/Hall"));
        }    
    }).catch(e => {   toast.error("Nick ou Senha incorreta") })
        ;
    }

    return (
        <><div id="container"><ToastContainer theme="dark" /></div><br />
<Card className="BarrSup" style={{background: "#4e2779", height: "60px", boxShadow: '5px 5px 5px #000', marginLeft: '-20px' }}>
    <Row>
        <Col sm="7"></Col>
        <Col sm="5">
            <div style={{marginTop: "12px", marginRight: "10px"}}>
            <Row>
            <Col sm="4"><Input
            id="usuario"
            name="usuario"
            type="text"
            placeholder="Nick"
            onChange={(e) => setEmail(e.target.value)}
            >
            </Input></Col>
            <Col sm="4"><Input
            id="usuario"
            name="usuario"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            >
            </Input></Col>
            <Col sm="2"><Button color='danger' onClick={() => ConfereDadodos(email)}>Login</Button></Col>
            <Col sm="2"><Link onClick={() => history.push("/Cadastro")}><div style={{textAlign: "center", fontSize: '13px', marginLeft: "-20px"}}><strong>Cadastrar Agora</strong></div></Link></Col>
            </Row>
            </div>
            </Col>
    </Row>
</Card>
<Row>
    <Col sm='6'><div style={{display: "flex", justifyContent: "center"}}><img src={LogoRPN} style={{width: "80%"}} /></div></Col>
    <Col sm='6' >
        <Card className='Card'>
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

export default Home