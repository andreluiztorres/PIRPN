/* eslint-disable no-unused-vars */
import React from "react";

import d20_1 from "../images/d20_1.gif";
import d20_2 from "../images/d20_2.gif";
import d20_3 from "../images/d20_3.gif";
import d20_4 from "../images/d20_4.gif";
import d20_5 from "../images/d20_5.gif";
import d20_6 from "../images/d20_6.gif";
import d20_7 from "../images/d20_7.gif";
import d20_8 from "../images/d20_8.gif";
import d20_9 from "../images/d20_9.gif";
import d20_10 from "../images/d20_10.gif";
import d20_11 from "../images/d20_11.gif";
import d20_12 from "../images/d20_12.gif";
import d20_13 from "../images/d20_13.gif";
import d20_14 from "../images/d20_14.gif";
import d20_15 from "../images/d20_15.gif";
import d20_16 from "../images/d20_16.gif";
import d20_17 from "../images/d20_17.gif";
import d20_18 from "../images/d20_18.gif";
import d20_19 from "../images/d20_19.gif";
import d20_20 from "../images/d20_20.gif";

const dadoD20 = (valor) => {
  console.log(valor);
  switch (valor.valor) {
    case 1:
      return <img src={d20_1} alt="d20" />;
    case 2:
      return <img src={d20_2} alt="d20" />;
    case 3:
      return <img src={d20_3} alt="d20" />;
    case 4:
      return <img src={d20_4} alt="d20" />;
    case 5:
      return <img src={d20_5} alt="d20" />;
    case 6:
      return <img src={d20_6} alt="d20" />;
    case 7:
      return <img src={d20_7} alt="d20" />;
    case 8:
      return <img src={d20_8} alt="d20" />;
    case 9:
      return <img src={d20_9} alt="d20" />;
    case 10:
      return <img src={d20_10} alt="d20" />;
    case 11:
      return <img src={d20_11} alt="d20" />;
    case 12:
      return <img src={d20_12} alt="d20" />;
    case 13:
      return <img src={d20_13} alt="d20" />;
    case 14:
      return <img src={d20_14} alt="d20" />;
    case 15:
      return <img src={d20_15} alt="d20" />;
    case 16:
      return <img src={d20_16} alt="d20" />;
    case 17:
      return <img src={d20_17} alt="d20" />;
    case 18:
      return <img src={d20_18} alt="d20" />;
    case 19:
      return <img src={d20_19} alt="d20" />;
    case 20:
      return <img src={d20_20} alt="d20" />;
    default:
      return <img src={d20_1} alt="d20" />;
  }
 
};

export default dadoD20;
