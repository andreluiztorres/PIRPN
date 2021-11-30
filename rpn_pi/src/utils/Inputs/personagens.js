import { useState } from "react";
import api from "../../services/api";

const inputPersonagens = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [personagens, setPersonagens] = useState([]);

  var usuario = localStorage.getItem("id");
  api
    .get("personagem/iduser/" + usuario)
    .then((response) => setPersonagens(response.data));

  const listaPersonagens = personagens.map((r) => (
    <option key={r.id} value={r.id}>
      {r.nome}
    </option>
  ));

  return <>{listaPersonagens}</>;
};

export default inputPersonagens;
