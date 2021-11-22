/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Input,
  Button,
  CardBody,
  CardHeader,
  Label,
} from "reactstrap";
import LogoRPN from "../../assets/images/LogoRPN.png";
import { toast, ToastContainer } from "react-toastify";
import api from "../../services/api";

const termosTXT =
  "Bem-vindo à RPN Games! Nossa política de privacidade explica quais informações a RPN Games coleta quando você visita ou usa os Serviços da RPN, bem como as formas como podemos usá-las ou compartilhá-las. Estamos apenas descrevendo nossas próprias práticas – esta política não se aplica a terceiros que não controlamos e nem fazem parte de nosso grupo, inclusive outras empresas com as quais você possa interagir nos Serviços da RPN ou por meio deles (consulte Sites e Serviços de Terceiros), A RPN Games, Inc. está sediada em Los Angeles. A RPN Games, Inc. e suas subsidiárias fazem parte de um grupo global de empresas afiliadas de jogos, com escritórios e operações em todo o mundo (consulte Processamento Internacional de Dados).Quando dizemos “RPN Games” (ou coisas semelhantes como “nós” ou “nos”), estamos nos referindo à pessoa jurídica RPN Games ou, quando aplicável, às empresas que controlam e são responsáveis por suas informações (consulte Fale Conosco para saber quem é). Quando dizemos Serviços da RPN, queremos dizer quaisquer jogos, sites, aplicativos e serviços vinculados a esta política, independentemente de como você os acessa, utiliza ou se envolve conosco, inclusive por meio de dispositivos móveis ou offline, como por telefone. O uso que você fizer dos Serviços da RPN também está sujeito aos Termos de Serviço em sua região (inclusive suas disposições sobre limitações de indenização por danos, resolução de conflitos e aplicação da lei regente). Leia esta política na íntegra a fim de garantir que você a compreenda. Você também deve ler os Termos de Serviço com atenção, e certificar-se de ter entendido e concordado com eles antes de utilizar os Serviços da RPN. Recomendamos que você use os recursos interativos desta política para guiá-lo. Elaboramos resumos para identificar rapidamente os principais assuntos discutidos em várias seções. Contudo, esses resumos destinam-se apenas a simplificar as coisas, sendo que a política deve ser lida completamente, pois ela se sobrepõe em caso de ambiguidade ou conflitos (não deixe de ler com atenção a coisa toda!). . Clique nos links Saiba Mais para obter mais detalhes sobre tópicos específicos que lhe interessam. Para percorrer as seções, use os links Voltar ao Início e o Índice abaixo. Em caso de dúvidas quanto a alguma parte da política, envie suas perguntas através do Fale Conosco.";
const Cadastro = () => {
  const [nickname, setNickname] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmaSenha, setConfirmaSenha] = React.useState("");
  const [termos, setTermos] = React.useState(false);
  const history = useHistory();

  const Cadastrar = () => {
    if (senha === confirmaSenha) {
      if (
        nome !== "" &&
        nickname !== "" &&
        email !== "" &&
        senha !== "" &&
        confirmaSenha !== ""
      ) {
        const dados = {
          nick: nickname,
          nome: nome,
          email: email,
          senha: senha,
        };
        api.post("/usuario/cadastrar", dados).then((r) => {
          toast.success(r.data.mensagem);
          history.push("/");
        });
      } else {
        toast.error("Preencha todos os campos!");
      }
      return;
    } else {
      toast.error("As senhas não conferem!");
    }
  };

  return (
    <>
      <div id="container">
        <ToastContainer theme="dark" />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ position: "absolute", marginTop: "-35px", width: "150px" }}
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
        <Row>
          <Col sm="7"></Col>
          <Col sm="5">
            <div style={{ marginTop: "12px", marginRight: "10px" }}>
              <Row>
                <Col sm="12"></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col sm="3"></Col>
        <Col sm="6">
          <Card className="Card">
            <CardHeader
              style={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px 0px 0px 10px",
                marginLeft: "10px",
              }}
            >
              <h4>
                <strong> Cadastro: </strong>
              </h4>
            </CardHeader>
            <CardBody style={{ padding: "0px 20px 20px 20px" }}>
              <br />
              <Input
                className="form-control"
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
              />
              <p />
              <Input
                className="form-control"
                type="text"
                name="nick"
                id="nick"
                placeholder="Nick do Usuário"
                onChange={(e) => setNickname(e.target.value)}
              />
              <p />
              <Input
                className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p />
              <Input
                className="form-control"
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
              />
              <p />
              <Input
                className="form-control"
                type="password"
                name="confirmaSenha"
                id="confirmaSenha"
                placeholder="Confirmar Senha"
                onChange={(e) => setConfirmaSenha(e.target.value)}
              />
              <p />
              <Input
                className="form-control"
                readOnly="readOnly"
                type="textarea"
                value={termosTXT}
                rows="10"
                cols="60"
                style={{ height: "150px" }}
              ></Input>
              <p />
              <Label from="check">
                <span style={{ color: "#fff" }}>
                  Li e Concordo com os termos: _{" "}
                </span>
              </Label>
              <Input
                type="checkbox"
                name="chek"
                id="check"
                onClick={() => setTermos(!termos)}
              ></Input>
              <p />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  color="danger"
                  size="lg"
                  disabled={termos === false ? "disabled" : ""}
                  onClick={() => Cadastrar()}
                >
                  Finalizar
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </>
  );
};

export default Cadastro;
