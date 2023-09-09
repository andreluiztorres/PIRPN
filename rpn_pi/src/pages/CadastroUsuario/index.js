import React from 'react'
import {
    Card,
    Row,
    Col,
    Input,
    Button,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Form,
    FormGroup,
    Label,
    FormText
} from 'reactstrap'
import "../CadastroUsuario/CadastroUsuario.css"


const CadastroUsuario = () => {
    return (
        <>
            <div className='BarrSup'>
                <h1>Cadastre-se</h1>
            </div>

            <div className='ContentCadastro'>
                <Card style={{
                    padding:'30px',
                    justifyContent:'center',
                    borderRadius:'40px',
                    margin:'10px',
                    width: '50%',
                    backgroundColor:"#4e2779",
                    color:"#fff",
                }
                }>
                <Form>

                    
                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="username" style={{
                                    marginTop:'20px',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    Username:
                                </Label>
                                <Input id="username" name="email" placeholder="Digite um username!" type="username" required/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="Email">
                                    E-mail:
                                </Label>
                                <Input id="Email" name="Email" placeholder="Digite seu E-mail!" type="email" required/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}></Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="EmailConfirm">
                                    Confirme seu E-mail:
                                </Label>
                                <Input id="EmailConfirm" name="EmailConfirm" placeholder="Digite novamente seu e-mail!" required/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">
                                    Senha:
                                </Label>
                                <Input id="Password" name="Password" placeholder="Digite uma senha!" required type='password'/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}></Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="PasswordConfirm">
                                    Confirme sua Senha:
                                </Label>
                                <Input id="PasswordConfirm" name="PasswordConfirm" placeholder='Confirme sua senha!' type='password'/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={3}></Col>
                        <Col md={12}>
                            <FormGroup style={{textAlign:'center'}}>
                                <Label for="UserTerm" >
                                    Termos de uso
                                </Label>
                                <br></br>
                                <textarea id="termo" rows="10" cols="90">
                                    Termos de Uso do Site de Jogo 
                                    
                                    "Bem-vindo(a) ao nosso site de jogo! Antes de começar sua jornada emocionante, pedimos que você leia atentamente e compreenda nossos Termos de Uso. Ao acessar e utilizar nosso site, você concorda em cumprir os seguintes termos e condições:
                                    
                                    1. Uso Aceitável:
                                    Você concorda em usar nosso site apenas para fins legais e de acordo com todas as leis e regulamentos aplicáveis. Não é permitido usar o site para qualquer atividade ilegal, fraudulenta ou prejudicial.
                                    
                                    2. Idade Mínima:
                                    Você declara e garante que tem a idade mínima exigida por lei para acessar e usar nosso site. Se você for menor de idade, deve obter o consentimento de um responsável legal antes de utilizar nossos serviços.
                                    
                                    3. Conteúdo do Usuário:
                                    Ao interagir com nosso site, você concorda em não enviar, publicar ou compartilhar qualquer conteúdo que seja difamatório, ofensivo, obsceno, ilegal ou que viole os direitos de terceiros, incluindo direitos autorais e de propriedade intelectual.
                                    
                                    4. Propriedade Intelectual:
                                    Todos os direitos autorais, marcas registradas e outros direitos de propriedade intelectual relacionados ao conteúdo e design do site pertencem a nós ou aos nossos licenciadores. Você não está autorizado a copiar, modificar, distribuir ou explorar qualquer parte do site sem nossa permissão prévia por escrito.
                                    
                                    5. Atualizações e Modificações:
                                    Reservamo-nos o direito de fazer alterações, atualizações ou modificações no site, bem como nos Termos de Uso, a qualquer momento e sem aviso prévio. É sua responsabilidade revisar regularmente os termos para estar ciente de quaisquer mudanças.
                                    
                                    6. Responsabilidade por Danos:
                                    Você concorda em isentar-nos de qualquer responsabilidade por danos diretos, indiretos, incidentais, consequenciais ou especiais decorrentes do uso ou da incapacidade de usar nosso site, mesmo que tenhamos sido informados da possibilidade de tais danos.
                                    
                                    7. Encerramento de Conta:
                                    Reservamo-nos o direito de encerrar sua conta e acesso ao site a nosso critério, se você violar estes Termos de Uso ou se suspeitarmos de atividades fraudulentas, abusivas ou inadequadas.
                                    
                                    8. Privacidade:
                                    Nossa Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais. Ao usar nosso site, você concorda com nossa Política de Privacidade.
                                    
                                    9. Jurisdição e Lei Aplicável:
                                    Estes Termos de Uso são regidos pelas leis do [país/estado]. Qualquer disputa relacionada ao uso do site será sujeita à jurisdição exclusiva dos tribunais competentes na [cidade/estado/país].
                                    
                                    Ao clicar no botão "Aceitar" ou continuar a usar nosso site, você confirma que leu, entendeu e concorda com estes Termos de Uso. Caso não concorde com estes termos, por favor, não utilize nosso site.
                                    
                                    Obrigado por escolher nosso site de jogo! Divirta-se e aproveite a experiência."
                                </textarea>
                            </FormGroup>
                        </Col>
                    </Row>
                     <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <FormGroup check style={{textAlign:'center'}}>
                               <Input
                                    addon
                                    aria-label="Checkbox for following text input"
                                    type="checkbox"
                                />  
                                Li e Aceito os termos de Uso.
                                
                            </FormGroup>
                        </Col>

                    </Row>
                    <br />
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <FormGroup check style={{textAlign:'center'}}>
                                <Button style={{
                                    marginBottom:'20px'
                                }}>
                                    Cadastrar
                                </Button>
                            </FormGroup>
                            
                        </Col>
                    </Row>


                </Form>
                </Card>
            </div>

        </>
    )
}

export default CadastroUsuario
