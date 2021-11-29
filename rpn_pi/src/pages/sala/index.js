/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, memo, Fragment, useState } from "react";
import {
  Card,
  Row,
  Col,
  Input,
  Button,
  CardBody,
  CardHeader,
  Label,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import FotoTeste from "../../assets/images/FotoTeste.jpg";
import LogoRPN from "../../assets/images/LogoRPN.png";
import Ribbon from "../../assets/images/ribbonmedium.png";
import Map from "../../assets/images/map.png";
import Caveira from "../../assets/images/layerssmall.png";
import DivSup from "../../assets/images/headerskull.png";
import Avatar from "react-avatar";
import DadoD20 from "../../assets/d20";
import imgD20 from "../../assets/images/d20.png";
import { Airplay, Plus, UserPlus } from "react-feather";
import api from "../../services/api";

const TabsBasic = () => {
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            active={active === "1"}
            onClick={() => {
              toggle("1");
            }}
          >
            <span style={{ color: "#000", cursor: "poiter" }}>Atributos</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === "2"}
            onClick={() => {
              toggle("2");
            }}
          >
            <span style={{ color: "#000" }}> Perícias</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === "3"}
            onClick={() => {
              toggle("3");
            }}
          >
            <span style={{ color: "#000" }}>Ataques e Magias</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === "4"}
            onClick={() => {
              toggle("4");
            }}
          >
            <span style={{ color: "#000" }}> Equipamentos</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === "5"}
            onClick={() => {
              toggle("5");
            }}
          >
            <span style={{ color: "#000" }}>Caracteristicas</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={DivSup} style={{ width: "60%", height: "50%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "9px",
                    position: "absolute",
                    marginLeft: "60px",
                    marginTop: "9px",
                  }}
                >
                  FORÇA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "30px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "55px",
                  }}
                />
                <img style={{ width: "150px" }} src={Caveira}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "9px",
                    position: "absolute",
                    marginLeft: "52px",
                    marginTop: "9px",
                  }}
                >
                  DESTREZA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "30px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "55px",
                  }}
                />
                <img style={{ width: "150px" }} src={Caveira}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "9px",
                    position: "absolute",
                    marginLeft: "40px",
                    marginTop: "9px",
                  }}
                >
                  CONSTITUIÇÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "30px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "55px",
                  }}
                />
                <img style={{ width: "150px" }} src={Caveira}></img>
              </Col>
            </Row>
          </div>{" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "9px",
                    position: "absolute",
                    marginLeft: "43px",
                    marginTop: "9px",
                  }}
                >
                  INTELIGENCIA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "30px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "55px",
                  }}
                />
                <img style={{ width: "150px" }} src={Caveira}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "9px",
                    position: "absolute",
                    marginLeft: "47px",
                    marginTop: "9px",
                  }}
                >
                  SABEDORIA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "30px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "55px",
                  }}
                />
                <img style={{ width: "150px" }} src={Caveira}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "9px",
                    position: "absolute",
                    marginLeft: "54px",
                    marginTop: "9px",
                  }}
                >
                  CARISMA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "30px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "55px",
                  }}
                />
                <img style={{ width: "150px" }} src={Caveira}></img>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tabId="2"></TabPane>
        <TabPane tabId="3"></TabPane>
      </TabContent>
    </>
  );
};

const Sala = () => {
  const [hiddenD20, setHiddenD20] = useState(false);
  const [hiddenMap, setHiddenMap] = useState(false);
  const [chats, setChats] = useState([]);
  const [textoChat, setTextoChat] = useState("");
  const [temporizador, setTemporizador] = useState(true);
  const [quantchats, setQuantChats] = useState(0);
  const [valorD20, setValorD20] = useState(Math.floor(Math.random() * 20) + 1);

  const buscaMsg = () => {
    api
      .get("/chat/idsala/" + localStorage.getItem("idSala"))
      .then((response) => {
        setQuantChats(response.data.length);
        if (quantchats !== response.data.length) {
          setChats(response.data);
        }
      });
  };

  useEffect(() => {
    buscaMsg();
    console.log(chats);
  }, [temporizador]);

  setTimeout(() => {
    setTemporizador(!temporizador);
  }, 5000);

  const enviaMsg = () => {
    const novamsg = {
      idsala: localStorage.getItem("idSala"),
      texto: textoChat,
      nomepers: localStorage.getItem("NomePersonagem"),
      idusuario: localStorage.getItem("id"),
      datahora: null,
    };
    api.post("/chat/cadastrar", novamsg).then((res) => {
      console.log(res.data);
      setTextoChat("");
    });
  };

  const enviaMsgDado = () => {
    const novamsg = {
      idsala: localStorage.getItem("idSala"),
      texto: "Resultado rolagem de dado: " + valorD20,
      nomepers: localStorage.getItem("NomePersonagem"),
      idusuario: localStorage.getItem("id"),
      datahora: null,
    };
    api.post("/chat/cadastrar", novamsg).then((res) => {
      console.log(res.data);
      setTextoChat("");
    });
  };


  const imprimeMsg = chats.map((chat) => {
    return (
      <>
        <span key={chat._id}>
          {chat.nomepers}: {chat.texto}
        </span>
        <br />
        <br />
      </>
    );
  });

  return (
    <>
      <br />

      <div style={{ display: "flex", justifyContent: "left" }}>
        <img
          style={{
            position: "absolute",
            marginTop: "-35px",
            width: "130px",
            zIndex: 999,
          }}
          src={LogoRPN}
        ></img>
      </div>
      <Card
        className="BarrSup"
        style={{
          background: "#4e2779",
          height: "60px",
          boxShadow: "5px 5px 5px #000",
          marginLeft: "-20px",
        }}
      >
        <div className="Avatar">
          <Avatar
            size="90"
            round={true}
            style={{ boxShadow: "5px 5px 5px black" }}
            facebook-id="invalidfacebookusername"
            src="https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"
          />
        </div>
        <Row>
          <Col sm="9"></Col>
          <Col sm="2">
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "5px",
                color: "#fff",
              }}
            >
              <Col>
                <Col>
                  <h5>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <strong>{localStorage.getItem("nome")}</strong>
                    </div>
                  </h5>
                </Col>
                <Col>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "-13px",
                    }}
                  >
                    <h6>{localStorage.getItem("email")}</h6>
                  </div>
                </Col>
              </Col>
            </div>
          </Col>
          <Col sm="1"></Col>
        </Row>
      </Card>

      <Row>
        <Col sm="12">
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button
              title="ADICIONAR PERSSONAGEM"
              color="danger"
              style={{
                marginTop: "15px",
                marginRight: "10px",
                boxShadow: "5px 5px 5px black",
                zIndex: 9999,
                borderRadius: "40px",
                width: "40px",
                height: "40px",
              }}
            >
              <UserPlus style={{ marginTop: "5px" }} size="16px" />
            </Button>
            <Input
              onChange={(e) =>
                localStorage.setItem("NomePersonagem", e.target.value)
              }
              style={{
                marginTop: "35px",
                marginRight: "90px",
                zIndex: 9999,
                fontSize: "25px",
                width: "210px",
                height: "40px",
                fontFamily: "fantasy",
                border: "none",
                background: "rgba(255, 255, 255, 0.7)",
              }}
              type="select"
            >
              <option value="Lord Genesis" style={{ textAlign: "center" }}>
                Lord Genesis
              </option>
              <option value="VoldMort" style={{ textAlign: "center" }}>
                VoldMort
              </option>
            </Input>
            <img
              style={{ position: "absolute", zIndex: 9998, marginTop: "-28px" }}
              src={Ribbon}
            ></img>
          </div>
          <Card
            className="Card"
            style={{ marginTop: "-40px", marginLeft: "20px" }}
          >
            <CardHeader
              style={{ color: "#fff", fontWeight: "bold", padding: "10px" }}
            >
              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: "8px",
                  background: "#fff",
                }}
              >
                <div style={{ padding: "10px 280px 10px 10px" }}>
                  <Row>
                    <Col sm="3">
                      <Label
                        for="classe"
                        style={{ fontWeight: "bold", color: "#000" }}
                      >
                        Classe de Nível:
                      </Label>
                      <Input
                        type="text"
                        name="classe"
                        id="classe"
                        className="form-control"
                      />
                    </Col>
                    <Col sm="3">
                      <Label
                        for="classe"
                        style={{ fontWeight: "bold", color: "#000" }}
                      >
                        Antecedente:
                      </Label>
                      <Input
                        type="text"
                        name="classe"
                        id="classe"
                        className="form-control"
                      />
                    </Col>
                    <Col sm="3">
                      <Label
                        for="classe"
                        style={{ fontWeight: "bold", color: "#000" }}
                      >
                        Raça:
                      </Label>
                      <Input
                        type="text"
                        name="classe"
                        id="classe"
                        className="form-control"
                      />
                    </Col>
                    <Col sm="3">
                      <Label
                        for="classe"
                        style={{ fontWeight: "bold", color: "#000" }}
                      >
                        Pontos XP:
                      </Label>
                      <Input
                        type="text"
                        name="classe"
                        id="classe"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </CardHeader>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm="7">
          <Card
            className="Card"
            style={{ marginTop: "30px", marginLeft: "18px" }}
          >
            <CardHeader
              style={{ color: "#fff", fontWeight: "bold", padding: "10px" }}
            >
              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: "8px",
                  background: "#fff",
                  color: "#000",
                  height: "500px",
                }}
              >
                <TabsBasic></TabsBasic>
              </div>
            </CardHeader>
          </Card>
        </Col>
        <Col sm="5">
          <Card
            className="Card"
            style={{ marginTop: "30px", marginLeft: "-30px" }}
          >
            <CardHeader
              style={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                marginLeft: "10px",
              }}
            >
              <div
                style={{
                  visibility: hiddenD20 !== false ? "" : "hidden",
                  border: "1px solid #000",
                  borderRadius: "25px",
                  background: "#222",
                  position: "absolute",
                  zIndex: 9999,
                }}
              >
                <DadoD20 valor={valorD20} />
                <br />
                <Button
                  style={{ marginLeft: "65px" }}
                  color="danger"
                  onClick={() => {
                    setHiddenD20(!hiddenD20)
                    setValorD20(Math.floor(Math.random() * 20) + 1)
                    enviaMsgDado(valorD20)
                  }}
                >
                  Fechar
                </Button>
              </div>
              <div
                style={{
                  visibility: hiddenMap !== false ? "" : "hidden",
                  border: "1px solid #000",
                  borderRadius: "25px",
                  background: "#222",
                  position: "absolute",
                  zIndex: 9999,
                  marginLeft: "-500px",
                }}
              >
                <Button
                  style={{ position: "absolute" }}
                  color="danger"
                  onClick={() => setHiddenMap(!hiddenMap)}
                >
                  Fechar
                </Button>
                <img style={{ borderRadius: "15px" }} src={Map}></img>
                <br />
              </div>
              <img
                onClick={() => setHiddenD20(!hiddenD20)}
                style={{ width: "120px", borderRadius: "15px" }}
                src={imgD20}
              ></img>
              <img
                onClick={() => setHiddenMap(!hiddenMap)}
                style={{
                  height: "116px",
                  borderRadius: "15px",
                  marginLeft: "32px",
                }}
                src={Map}
              ></img>
            </CardHeader>
          </Card>
          <br></br>
          <Card
            className="Card"
            style={{ marginTop: "30px", marginLeft: "-30px" }}
          >
            <CardHeader
              style={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                marginLeft: "10px",
                marginTop: "-30px",
              }}
            >
              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: "8px",
                  background: "#fff",
                  color: "#000",
                  height: "345px",
                  marginLeft: "-8px",
                }}
              >
                <div
                  style={{
                    height: "289px",
                    padding: "15px",
                    whiteSpace: "normal",
                    transformOrigin: '50% 50%', 
                    transform: 'rotate(180deg)',
                    overflowY: 'auto',
                    direction: 'rtl',
                    textAlign: 'left',
                  }}
                >
                 <div style={{  
                   marginTop: '20px',
                   float: 'left',
                   width: '100%', 
                   transform: 'rotate(180deg)' }}>{imprimeMsg}</div>
                </div>
                <Row>
                  <Col sm="10">
                    <Input
                      type="textarea"
                      value={textoChat}
                      placeholder="Escreva aqui ..."
                      onChange={(e) => setTextoChat(e.target.value)}
                    ></Input>
                  </Col>
                  <Col sm="2">
                    <Button
                      disabled={textoChat === "" ? true : false}
                      block
                      style={{ height: "53px", marginLeft: "-28px" }}
                      size="sm"
                      color="danger"
                      onClick={() => enviaMsg()}
                    >
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </div>
            </CardHeader>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Sala;