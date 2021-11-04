import React from "react";
import { Link } from "react-router-dom";
import {Card, Row, Col, Input, Button, CardBody, CardHeader, Label} from 'reactstrap'
import LogoRPN from '../../assets/images/LogoRPN.png'
import { Search, LogIn, Lock } from 'react-feather';
import Avatar from 'react-avatar';
import YouTube from 'react-youtube';
import { Slide } from 'react-slideshow-image';
 
const termos = "Bem-vindo à RPN Games! Nossa política de privacidade explica quais informações a RPN Games coleta quando você visita ou usa os Serviços da RPN, bem como as formas como podemos usá-las ou compartilhá-las. Estamos apenas descrevendo nossas próprias práticas – esta política não se aplica a terceiros que não controlamos e nem fazem parte de nosso grupo, inclusive outras empresas com as quais você possa interagir nos Serviços da RPN ou por meio deles (consulte Sites e Serviços de Terceiros), A RPN Games, Inc. está sediada em Los Angeles. A RPN Games, Inc. e suas subsidiárias fazem parte de um grupo global de empresas afiliadas de jogos, com escritórios e operações em todo o mundo (consulte Processamento Internacional de Dados).Quando dizemos “RPN Games” (ou coisas semelhantes como “nós” ou “nos”), estamos nos referindo à pessoa jurídica RPN Games ou, quando aplicável, às empresas que controlam e são responsáveis por suas informações (consulte Fale Conosco para saber quem é). Quando dizemos Serviços da RPN, queremos dizer quaisquer jogos, sites, aplicativos e serviços vinculados a esta política, independentemente de como você os acessa, utiliza ou se envolve conosco, inclusive por meio de dispositivos móveis ou offline, como por telefone. O uso que você fizer dos Serviços da RPN também está sujeito aos Termos de Serviço em sua região (inclusive suas disposições sobre limitações de indenização por danos, resolução de conflitos e aplicação da lei regente). Leia esta política na íntegra a fim de garantir que você a compreenda. Você também deve ler os Termos de Serviço com atenção, e certificar-se de ter entendido e concordado com eles antes de utilizar os Serviços da RPN. Recomendamos que você use os recursos interativos desta política para guiá-lo. Elaboramos resumos para identificar rapidamente os principais assuntos discutidos em várias seções. Contudo, esses resumos destinam-se apenas a simplificar as coisas, sendo que a política deve ser lida completamente, pois ela se sobrepõe em caso de ambiguidade ou conflitos (não deixe de ler com atenção a coisa toda!). . Clique nos links Saiba Mais para obter mais detalhes sobre tópicos específicos que lhe interessam. Para percorrer as seções, use os links Voltar ao Início e o Índice abaixo. Em caso de dúvidas quanto a alguma parte da política, envie suas perguntas através do Fale Conosco."
const Cadastro = () => {
    return (
        <><br />
<Card className="BarrSup" style={{background: "#4e2779", height: "60px", boxShadow: '5px 5px 5px #000', marginLeft: '-20px' }}>
    <Row>
        <Col sm="7"></Col>
        <Col sm="5">
            <div style={{marginTop: "12px", marginRight: "10px"}}>
            <Row>
            <Col sm="10"></Col>
            <Col sm="2"><Button type='button' color='danger'>Voltar</Button></Col>
            </Row>
            </div>
            </Col>
    </Row>
</Card>
<Row>
    <Col sm='3'></Col>
    <Col sm='6' >
        <Card className='Card'>
            <CardHeader style={{color: '#fff', fontWeight: 'bold', padding: '10px', marginLeft: '10px'}}><h4><strong> Cadastro: </strong></h4></CardHeader>
            <CardBody style={{padding: '20px'}} ><br />
            <Input className="form-control" type="text" name="nome" id="nome" placeholder="Nome" /><p/>
            <Input className="form-control" type="text" name="email" id="email" placeholder="Email" /><p/>
            <Input className="form-control" type="password" name="senha" id="senha" placeholder="Senha" /><p/>
            <Input className="form-control" type="password" name="confirmaSenha" id="confirmaSenha" placeholder="Confirmar Senha" /><p/>
            <Input className="form-control" type="textarea"placeholder={termos} style={{height: '150px'}}></Input><p/>
            <Input type="checkbox" Label="Li e concordo com os termos"></Input><p/>
            <div style={{display: "flex", justifyContent: "center"}}><Button color='danger' size='lg'>Finalizar</Button></div>
            </CardBody>
        </Card>
    </Col>
    <Col sm='3'></Col>
</Row>
        </>        
    )
}

export default Cadastro