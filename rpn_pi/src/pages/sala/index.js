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
  Form,
} from "reactstrap";
import FotoTeste from "../../assets/images/FotoTeste.jpg";
import LogoRPN from "../../assets/images/LogoRPN.png";
import Ribbon from "../../assets/images/ribbonmedium.png";
import Map from "../../assets/images/map.png";
import Caveira from "../../assets/images/layerssmall.png";
import DivSup from "../../assets/images/headerskull.png";
import Nome_ficha from "../../assets/images/nome-ficha.png";
import Ficha_bonus from "../../assets/images/ficha-bonus.png";
import Ficha_dano from "../../assets/images/ficha-dano.png";
import Caracteristicas from "../../assets/images/caracteristicas.png";
import Equipamentos from "../../assets/images/equipamentos.png";
import Equipamentos2 from "../../assets/images/equipamentos2.png";
import Ferramentaria from "../../assets/images/ferramentaria.png";
import Avatar from "react-avatar";
import DadoD20 from "../../assets/d20";
import imgD20 from "../../assets/images/d20.png";
import pericias from "../../assets/images/pericias.png";
import { Airplay, Plus, UserPlus } from "react-feather";
import api from "../../services/api";
import inputPersonagens from "../../utils/Inputs/personagens";


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
                    fontSize: "15px",
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
                    fontSize: "15px",
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
                    fontSize: "15px",
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
                    fontSize: "15px",
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
                    fontSize: "15px",
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
                    fontSize: "15px",
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
        <TabPane tabId="2">
        <div style={{ overflowY: "auto", height: "445px" }}>
          <div style={{ display: "flex", justifyContent: "center",marginTop:"15px"}}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "44px",
                    marginTop: "137px",
                  }}
                >
                  ACROBRACIA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "48px",
                    marginTop: "135px",
                  }}
                >
                  ARCANISMO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "50px",
                    marginTop: "137px",
                  }}
                >
                  ATLETISMO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
            </Row>
          </div>{" "}
          <div style={{ display: "flex", justifyContent: "center", marginTop:"25px",}}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "53px",
                    marginTop: "137px",
                  }}
                >
                  ATUAÇÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "58px",
                    marginTop: "138px",
                  }}
                >
                  BLEFAR
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "45px",
                    marginTop: "137px",
                  }}
                >
                  FURTIVIDADE
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
            </Row>
          </div>

          <div style={{ display: "flex", justifyContent: "center",marginTop:"15px"}}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "54px",
                    marginTop: "137px",
                  }}
                >
                  HISTÓRIA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "45px",
                    marginTop: "137px",
                  }}
                >
                  INTIMIDAÇÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "55px",
                    marginTop: "137px",
                  }}
                >
                  INTUIÇÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
            </Row>
          </div>{" "}
          <div style={{ display: "flex", justifyContent: "center", marginTop:"25px",}}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "40px",
                    marginTop: "136px",
                  }}
                >
                  INVESTIGAÇÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "35px",
                    marginTop: "135px",
                  }}
                >
                  LIDAR C.ANIMAIS
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "53px",
                    marginTop: "137px",
                  }}
                >
                  MEDICINA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
            </Row>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop:"25px",}}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "50px",
                    marginTop: "137px",
                  }}
                >
                  NATUREZA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "47px",
                    marginTop: "137px",
                  }}
                >
                  PERCEPÇÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "47px",
                    marginTop: "137px",
                  }}
                >
                  PERSUASÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
            </Row>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop:"25px",}}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "33px",
                    marginTop: "135px",
                  }}
                >
                  PRESTIDIGITAÇÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "53px",
                    marginTop: "138px",
                  }}
                >
                  RELIGIÃO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    position: "absolute",
                    marginLeft: "35px",
                    marginTop: "135px",
                  }}
                >
                  SOBREVIVÊNCIA
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    border: "none",
                    borderRadius: "50px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "53px",
                  }}
                />
                <img style={{ width: "170px" }} src={pericias}></img>
              </Col>
            </Row>
          </div>

        </div>
        </TabPane>
        <TabPane tabId="3">

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontFamily: "fantasy",
                    fontSize: "20px",
                    position: "absolute",
                    marginLeft: "-25px",
                    marginTop: "-1px",
                  }}
                >
                 NOME
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "150px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "-80px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "200px", marginLeft: "-100px", marginTop: "25px" }} src={Nome_ficha}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "17px",
                    fontFamily: "fantasy",
                    position: "absolute",
                    marginLeft: "28px",
                    marginTop: "-1px",
                  }}
                >
                  BONUS
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    height: "40px",
                    border: "none",
                    borderRadius: "10px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "32px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "85px", marginTop: "20px", marginLeft: "10px"}} src={Ficha_bonus}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "17px",
                    fontFamily: "fantasy",
                    position: "absolute",
                    marginLeft: "70px",
                    marginTop: "0px",
                  }}
                >
                  DANO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "35px",
                    border: "none",
                    borderRadius: "40px",
                    position: "absolute",
                    marginTop: "48px",
                    marginLeft: "70px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "180px", marginTop: "25px"}} src={Ficha_dano}></img>
              </Col>
            </Row>
          </div>{" "}

          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontFamily: "fantasy",
                    fontSize: "20px",
                    position: "absolute",
                    marginLeft: "-25px",
                    marginTop: "-1px",
                  }}
                >
                 NOME
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "150px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "-80px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "200px", marginLeft: "-100px", marginTop: "25px" }} src={Nome_ficha}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "17px",
                    fontFamily: "fantasy",
                    position: "absolute",
                    marginLeft: "28px",
                    marginTop: "-1px",
                  }}
                >
                  BONUS
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    height: "40px",
                    border: "none",
                    borderRadius: "10px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "32px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "85px", marginTop: "20px", marginLeft: "10px"}} src={Ficha_bonus}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "17px",
                    fontFamily: "fantasy",
                    position: "absolute",
                    marginLeft: "70px",
                    marginTop: "0px",
                  }}
                >
                  DANO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "35px",
                    border: "none",
                    borderRadius: "40px",
                    position: "absolute",
                    marginTop: "48px",
                    marginLeft: "70px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "180px", marginTop: "25px"}} src={Ficha_dano}></img>
              </Col>
            </Row>
          </div>{" "}

          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontFamily: "fantasy",
                    fontSize: "20px",
                    position: "absolute",
                    marginLeft: "-25px",
                    marginTop: "-1px",
                  }}
                >
                 NOME
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "150px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "40px",
                    marginLeft: "-80px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "200px", marginLeft: "-100px", marginTop: "25px" }} src={Nome_ficha}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "17px",
                    fontFamily: "fantasy",
                    position: "absolute",
                    marginLeft: "28px",
                    marginTop: "-1px",
                  }}
                >
                  BONUS
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "40px",
                    height: "40px",
                    border: "none",
                    borderRadius: "10px",
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "32px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "85px", marginTop: "20px", marginLeft: "10px"}} src={Ficha_bonus}></img>
              </Col>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "17px",
                    fontFamily: "fantasy",
                    position: "absolute",
                    marginLeft: "70px",
                    marginTop: "0px",
                  }}
                >
                  DANO
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "35px",
                    border: "none",
                    borderRadius: "40px",
                    position: "absolute",
                    marginTop: "48px",
                    marginLeft: "70px",
                    boxShadow: "1px 1px 1px .5px",
                  }}
                />
                <img style={{ width: "180px", marginTop: "25px"}} src={Ficha_dano}></img>
              </Col>
            </Row>
          </div>{" "}
      </TabPane>
      <TabPane tabId="4">
      <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={DivSup} style={{ width: "60%", height: "50%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Row>
            <img style={{ width: "400px", marginLeft: "320px", marginTop: "50px", borderRadius: "25px" }} src={Ferramentaria}></img>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "initial",
                    position: "absolute",
                    marginLeft: "370px",
                    marginTop: "-55px",
                  }}
                >
                  FERRAMENTARIA
                </span>
                  
                <img style={{ width: "130px", marginLeft: "-8px", marginTop: "-350px" }} src={Equipamentos}></img>
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
                </span>
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "50px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "-307px",
                    marginLeft: "-212px",
                    boxShadow: "1px 1px 1px 1px grey",
                  }}
                />
                 <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "50px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "-247px",
                    marginLeft: "-212px",
                    boxShadow: "1px 1px 1px 1px grey",
                  }}
                />
                 <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "50px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "-188px",
                    marginLeft: "-212px",
                    boxShadow: "1px 1px 1px 1px grey",
                  }}
                />
                <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "50px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "-128px",
                    marginLeft: "-212px",
                    boxShadow: "1px 1px 1px 1px grey",
                  }}
                />
                  <Input
                  type="text"
                  style={{
                    fontSize: "15px",
                    width: "50px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "-68px",
                    marginLeft: "-212px",
                    boxShadow: "1px 1px 1px 1px grey",
                  }}
                />

                <Input
                  type="textarea"
                  style={{
                    fontSize: "15px",
                    width: "159px",
                    height: "180px",
                    border: "none",
                    borderRadius: "15px",
                    position: "absolute",
                    marginTop: "-203px",
                    marginLeft: "-113px",
                    boxShadow: "2px 2px 2px 2px grey",
                  }}
                />
                <img style={{ width: "200px", WebkitBorderRadius: "20px", boxShadow: "5px 5px 5px grey", marginTop: "-352px",marginLeft: "-134px" }} src={Equipamentos2}></img>
              </Col>
              </Row>
          </div>
      </TabPane>

      <TabPane tabId="5">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={DivSup} style={{ width: "60%", height: "50%" }} />
        </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
          </div>
            <Row>
              <Col sm="4">
                <span
                  style={{
                    fontSize: "20px",
                    fontFamily: "fantasy",
                    position: "absolute",
                    marginLeft: "125px",
                    marginTop: "40px",
                  }}
                >
                  CARACTERISTICAS
                </span>
                <Input
                  type= "textarea"
                  style={{
                    fontSize: "15px",
                    width: "235px",
                    height: "200px",
                    border: "none",
                    borderRadius: "20px",
                    position: "absolute",
                    marginTop: "80px",
                    marginLeft: "90px",
                    boxShadow: "1px 1px 1px 1px black",
                  }}
                />

                <span
                  style={{
                    fontSize: "20px",
                    fontFamily: "fantasy",
                    position: "absolute",
                    marginLeft: "445px",
                    marginTop: "40px",
                    
                  }}
                >
                  HABILIDADES
                </span>
                <Input
                  type="textarea"
                  style={{
                    fontSize: "15px",
                    width: "235px",
                    height: "200px",
                    border: "none",
                    borderRadius: "20px",
                    position: "absolute",
                    marginTop: "80px",
                    marginLeft: "380px",
                    boxShadow: "1px 1px 1px 1px black",
                  }}
                />
                <img style={{ width: "600px", marginLeft: "50px", marginTop: "0px" }} src={Caracteristicas}></img>
              </Col>
            </Row>            
      </TabPane>
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
  const [cardCadastro, setCardCadastro] = useState(false);
  const [nomePerssonagemDigitado, setNomePerssonagemDigitado] = useState("");
  const [personagens, setPersonagens] = useState([]);
  

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

  const cadastraPerssonagem = () => {
    var body = {
      "iduser": localStorage.getItem("id"),
      "nome": nomePerssonagemDigitado,
      "classenivel": "",
      "antecedente": "",
      "raca": "",
      "pontosxp": 1,
      "pontosatributo": 25,
      "forca": 0,
      "destreza": 0,
      "constituicao": 0,
      "inteligencia": 0,
      "sabedoria": 0,
      "carisma": 0
    };

  api.post('personagem/cadastrar', body).then((res) => {
    console.log(res.data);
    setCardCadastro(false);
  });
  }

  
   useEffect(() => {
    var usuario = localStorage.getItem("id");
    api
      .get("personagem/iduser/" + usuario)
      .then((response) => setPersonagens(response.data));

   }, [])

   const listaPersonagens = personagens.map((r) => (
    <option key={r.id} value={r.id}>
      {r.nome}
    </option>
  ));
    

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
              onClick={() => setCardCadastro(!cardCadastro)}
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
            <div style={{display: cardCadastro === true ? 'flex': 'none', zIndex: 9999}}><Card style={{background: "green", width: "250px", height: "110px", border: "2px solid #000", borderRadius: "15px", position: "absolute"}}>
              <Row>
              <Col sm="12">
              <Input 
              type="text"
              name="nomePerssonagem"
              id="nomePerssonagem"
              placeholder="Nome da perssonagem..."
              onChange={(e) => setNomePerssonagemDigitado(e.target.value)}
              style={{width: "90%", height: "30px", marginTop: "15px", marginLeft: "10px", borderRadius: "10px", border: "1px solid"}}
              />
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                <div style={{marginTop: '15px', display: 'flex', justifyContent: "center", zIndex: 9999}}>
                  <Button onClick={() => cadastraPerssonagem()}  color='danger'>Cadastrar</Button> <Button onClick={() => setCardCadastro(!cardCadastro)} color='danger' style={{marginLeft: '15px'}}>Cancelar</Button>
                </div>
                </Col>
              </Row>
              </Card></div>
            <Input
              onChange={(e) =>
                localStorage.setItem("NomePersonagem", e.target.value)
              }
              style={{
                marginTop: "35px",
                marginRight: "90px",
                zIndex: 9998,
                fontSize: "25px",
                width: "210px",
                height: "40px",
                fontFamily: "fantasy",
                textAlign: "center",
                border: "none",
                background: "rgba(255, 255, 255, 0.7)",
              }}
              type="select"
            >
             {listaPersonagens}
            </Input>
            <img
              style={{ position: "absolute", zIndex: 9996, marginTop: "-28px" }}
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
