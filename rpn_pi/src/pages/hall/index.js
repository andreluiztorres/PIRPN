/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Input,
  Button,
  CardBody,
  CardHeader,
  Toast,
} from "reactstrap";
import FotoTeste from "../../assets/images/FotoTeste.jpg";
import { LogIn, Lock } from "react-feather";
import Avatar from "react-avatar";
import YouTube from "react-youtube";
import { Slide } from "react-slideshow-image";
import api from "../../services/api";
import LogoRPN from "../../assets/images/LogoRPN.png";
import { ToastContainer, toast } from "react-toastify";

const opts = {
  height: "390",
  width: "800",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

let Personagens = [
  {
    id: 1,
    descricao: "Guerreiro",
    img: "https://i0.wp.com/orbedosdragoes.com/wp-content/uploads/2017/06/DD5-Guerreiro.jpg?resize=515%2C1000",
  },
  {
    id: 2,
    descricao: "Mago",
    img: "https://i.pinimg.com/originals/d3/99/0f/d3990fcd8a2620b06a25df0fa4d11b15.png",
  },
  {
    id: 3,
    descricao: "Arqueiro",
    img: "https://i2.wp.com/orbedosdragoes.com/wp-content/uploads/2020/05/dd5-arquetipo-de-patrilheiro-arqueiro-da-floresta-alta.jpg?ssl=1",
  },
  {
    id: 4,
    descricao: "Orc",
    img: "https://vistapointe.net/images/orc-wallpaper-11.jpg",
  },
  {
    id: 5,
    descricao: "Barbaro",
    img: "https://i.pinimg.com/originals/1e/aa/49/1eaa4959d22dae85ad3dac39a50649bc.jpg",
  },
];

const Hall = () => {
  const [listaSala, setListaSala] = useState([]);
  const [nomeSala, setNomeSala] = useState("");
  const [senhaSala, setSenhaSala] = useState("");
  const [senhaSalaAcesso, setSenhaSalaAcesso] = useState("");
  const [descricaoSala, setDescricaoSala] = useState("");
  const history = useHistory();

  const buscaSalas = () => {
    api.get("/sala").then((response) => {
      console.log(response.data);
      setListaSala(response.data);
    });
  };

  const criaSala = () => {
    const dadosSala = {
      nome: nomeSala,
      senha: senhaSala,
      descricao: descricaoSala,
    };
    if (nomeSala === "" || descricaoSala === "") {
      toast.error("Usuario e Descrição devem ser preenchidos !");
    }
    api.post("sala/cadastrar", dadosSala).then((response) => {
      history.push("/Sala");
    });
  };

  const acessarSalas = (dados) => {
    console.log(dados)
      if(dados.senha === senhaSalaAcesso){
        localStorage.setItem("idSala", dados.idSala);
        localStorage.setItem("nomeSala", dados.tituloSala);
        history.push("/Sala");
      }else{
        toast.error("Senha incorreta !");
      }
  };

  useEffect(() => {
    buscaSalas();
  }, []);

  const listaItens = listaSala.map((f) => (
    <Card className="CardLista">
      <CardBody>
        <Row>
          <Col>
            <div
              style={{
                marginLeft: "10px",
                fontWeight: "700",
                fontSize: "13px",
              }}
            >
              Sala: {f.nome}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                fontSize: "12px",
                textAlign: "justify",
              }}
            >
              Descrição: {f.descricao}
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginLeft: "10px",
                marginRight: "10px",
                fontSize: "12px",
                textAlign: "justify",
              }}
            >
              <Input
                placeholder="Senha da Sala"
                type={f.senha !== "" ? "password" : "hidden"}
                onChange={(e) => setSenhaSalaAcesso(e.target.value)}
              ></Input>
              <Lock
                hidden={f.senha !== "" ? "" : "hidden"}
                size="14px"
                style={{
                  marginRight: "15px",
                  marginTop: "10px",
                  marginLeft: "15px",
                }}
              />
              <Button color="danger" size="sm" onClick={() => acessarSalas({senha: f.senha, idSala: f._id, tituloSala: f.nome})}>
                ENTRAR <LogIn size="14px" />
              </Button>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  ));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <ToastContainer theme="dark" />
        <img
          style={{ position: "absolute", marginTop: "-19px", width: "150px" }}
          src={LogoRPN}
        ></img>
      </div>
      <br />
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
            style={{boxShadow: "5px 5px 5px black"}}
            facebook-id="invalidfacebookusername"
            src={
              "https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"
            }
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
        <Col sm="4">
          <Card className="Card" style={{ marginLeft: "30px"}}>
            <CardHeader
              style={{ color: "#fff", fontWeight: "bold", padding: "10px" }}
            >
              <Row>
                <Col sm="8">
                  <Input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Nome da Sala ..."
                    onChange={(e) => setNomeSala(e.target.value)}
                  ></Input>
                </Col>
                <Col sm="4">
                  <Input
                    id="search"
                    name="search"
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setSenhaSala(e.target.value)}
                  ></Input>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm="8">
                  <Input
                    id="search"
                    name="search"
                    type="textarea"
                    style={{ height: 70 }}
                    placeholder="Descrição"
                    onChange={(e) => setDescricaoSala(e.target.value)}
                  ></Input>
                </Col>
                <Col sm="4">
                  <Button
                    color="danger"
                    style={{ height: 70 }}
                    onClick={criaSala}
                    block
                  >
                    Criar Sala
                  </Button>
                </Col>
                <Col sm="12"></Col>
              </Row>
            </CardHeader>

            <CardBody style={{ padding: "10px", marginTop: "-50px" }}>
              <br />
              {listaItens}
            </CardBody>
          </Card>
        </Col>
        <Col sm="8">
          <Card className="Card" style={{ marginTop: "45px" }}>
            <CardHeader
              style={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                marginLeft: "10px",
              }}
            >
              <h4>
                <strong> Entenda como jogar ? </strong>
              </h4>
            </CardHeader>
            <CardBody style={{ display: "flex", justifyContent: "center" }}>
              <YouTube videoId="amiNCKwzh7s" opts={opts}></YouTube>
              <br />
            </CardBody>
          </Card>
          <br />
          <Card className="Card" style={{ marginTop: "5px" }}>
            <CardHeader
              style={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                marginLeft: "10px",
              }}
            >
              <h3>
                <strong> Galeria de Players </strong>
              </h3>
            </CardHeader>
            <CardBody>
              <div className="slide-container">
                <Slide>
                  {Personagens.map((slideImage, index) => (
                    <div
                      style={{ padding: "30px", marginTop: "-30px" }}
                      className="each-slide"
                      key={index}
                    >
                      <div
                        style={{
                          backgroundImage: "url(" + slideImage.img + ")",
                          backgroundSize: "cover",
                          overflow: "hidden",
                          height: "50px",
                          padding: "400px",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            color: "Black",
                            fontSize: "35px",
                            fontFamily: "fantasy",
                            fontWeight: "bold",
                            marginTop: "-370px",
                            marginLeft: "-45px",
                          }}
                        >
                          {slideImage.descricao}
                        </span>
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Hall;
