(this.webpackJsonprpn_pi=this.webpackJsonprpn_pi||[]).push([[0],{125:function(e,t,s){},195:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),i=s(43),r=s.n(i),n=(s(123),s(124),s(125),s(24)),o=s(8),l=s(7),d=s(196),j=s(197),x=s(198),p=s(199),b=s(200),m=s(201),h=s(202),g=s.p+"static/media/LogoRPN.afb203fe.png",O=s(110),u=s.n(O).a.create({baseURL:"https://webserviderpn.herokuapp.com/"}),f=s(16),y=s(44),v=s(0),S=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),O=r[0],S=r[1],C=Object(a.useState)([]),k=Object(l.a)(C,2),N=(k[0],k[1],Object(o.e)());return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{id:"container",children:Object(v.jsx)(f.a,{theme:"dark"})}),Object(v.jsx)("br",{}),Object(v.jsx)(d.a,{className:"BarrSup",style:{background:"#4e2779",height:"60px",boxShadow:"5px 5px 5px #000",marginLeft:"-20px"},children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"7"}),Object(v.jsx)(x.a,{sm:"5",children:Object(v.jsx)("div",{style:{marginTop:"12px",marginRight:"10px"},children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"4",children:Object(v.jsx)(p.a,{id:"usuario",name:"usuario",type:"text",placeholder:"Nick",onChange:function(e){return c(e.target.value)}})}),Object(v.jsx)(x.a,{sm:"4",children:Object(v.jsx)(p.a,{id:"usuario",name:"usuario",type:"password",placeholder:"Senha",onChange:function(e){return S(e.target.value)}})}),Object(v.jsx)(x.a,{sm:"2",children:Object(v.jsx)(b.a,{color:"danger",onClick:function(){u.get("usuario/nick/"+s).then((function(e){if(O===e.data.senha)return localStorage.setItem("nome",e.data.nome),localStorage.setItem("nick",e.data.nick),localStorage.setItem("id",e.data.id),localStorage.setItem("email",e.data.email),N.push("/Hall");f.b.error("Nick ou Senha incorreta")})).catch((function(e){f.b.error("Nick ou Senha incorreta")}))},children:"Login"})}),Object(v.jsx)(x.a,{sm:"2",children:Object(v.jsx)(n.c,{onClick:function(){return N.push("/Cadastro")},children:Object(v.jsx)("div",{style:{textAlign:"center",fontSize:"13px",marginLeft:"-20px"},children:Object(v.jsx)("strong",{children:"Cadastrar Agora"})})})})]})})})]})}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"6",children:Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)("img",{src:g,style:{width:"80%"}})})}),Object(v.jsx)(x.a,{sm:"6",children:Object(v.jsxs)(d.a,{className:"Card",children:[Object(v.jsx)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px",marginLeft:"10px"},children:Object(v.jsx)("h3",{children:Object(v.jsx)("strong",{children:" O que \xe9 RPN ? "})})}),Object(v.jsxs)(h.a,{style:{padding:"20px"},children:[Object(v.jsx)(y.a,{videoId:"kgRhJ5TU7xA",opts:{width:"100%",playerVars:{autoplay:1}}}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(b.a,{color:"danger",size:"lg",onClick:function(){return N.push("/Cadastro")},children:"Jogue Agora"})})]})]})})]})]})},C=(s.p,s(203)),k=s(204),N=s(46),w=s(115),T={height:"390",width:"800",playerVars:{autoplay:1}},L=[{id:1,descricao:"Arqueiro",img:"https://i2.wp.com/orbedosdragoes.com/wp-content/uploads/2020/05/dd5-arquetipo-de-patrilheiro-arqueiro-da-floresta-alta.jpg?resize=607%2C993"},{id:2,descricao:"Guerreiro",img:"https://i0.wp.com/orbedosdragoes.com/wp-content/uploads/2017/06/DD5-Guerreiro.jpg?resize=515%2C1000"},{id:3,descricao:"Mago",img:"https://i.pinimg.com/originals/05/40/05/05400592ac5ec9dc524baf6939b5609b.png"},{id:4,descricao:"Orc",img:"https://i.pinimg.com/736x/31/d4/f4/31d4f4fe850a119b3bbb0877929ebcce.jpg"},{id:5,descricao:"B\xe1rbaro",img:"https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_827,h_943/https://movimentorpg.com.br/wp-content/uploads/2018/12/old-barbarian.jpg"}],R=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),n=r[0],O=r[1],S=Object(a.useState)(""),R=Object(l.a)(S,2),z=R[0],I=R[1],A=Object(a.useState)(""),_=Object(l.a)(A,2),q=_[0],P=_[1],E=Object(a.useState)(""),W=Object(l.a)(E,2),F=W[0],G=W[1],M=Object(o.e)();Object(a.useEffect)((function(){u.get("/sala").then((function(e){console.log(e.data),c(e.data)}))}),[]);var D=s.map((function(e){return Object(v.jsx)(d.a,{className:"CardLista",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(j.a,{children:Object(v.jsx)(x.a,{children:Object(v.jsxs)("div",{style:{marginLeft:"10px",fontWeight:"700",fontSize:"13px"},children:["Sala: ",e.nome]})})}),Object(v.jsx)(j.a,{children:Object(v.jsx)(x.a,{children:Object(v.jsxs)("div",{style:{marginLeft:"10px",marginRight:"10px",fontSize:"12px",textAlign:"justify"},children:["Descri\xe7\xe3o: ",e.descricao]})})}),Object(v.jsx)("br",{}),Object(v.jsx)(j.a,{children:Object(v.jsx)(x.a,{children:Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"end",marginLeft:"10px",marginRight:"10px",fontSize:"12px",textAlign:"justify"},children:[Object(v.jsx)(p.a,{placeholder:"Senha da Sala",type:""!==e.senha?"password":"hidden",onChange:function(e){return P(e.target.value)}}),Object(v.jsx)(C.a,{hidden:""!==e.senha?"":"hidden",size:"14px",style:{marginRight:"15px",marginTop:"10px",marginLeft:"15px"}}),Object(v.jsxs)(b.a,{color:"danger",size:"sm",onClick:function(){var t;(t={senha:e.senha,idSala:e._id}).senha===q?(localStorage.setItem("idSala",t.idSala),M.push("/Sala")):f.b.error("Senha incorreta !")},children:["ENTRAR ",Object(v.jsx)(k.a,{size:"14px"})]})]})})})]})})}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(v.jsx)(f.a,{theme:"dark"}),Object(v.jsx)("img",{style:{position:"absolute",marginTop:"-19px",width:"150px"},src:g})]}),Object(v.jsx)("br",{}),Object(v.jsxs)(d.a,{className:"BarrSup",style:{background:"#4e2779",height:"60px",boxShadow:"5px 5px 5px #000",marginLeft:"-20px"},children:[Object(v.jsx)("div",{className:"Avatar",children:Object(v.jsx)(N.a,{size:"90",round:!0,style:{boxShadow:"5px 5px 5px black"},"facebook-id":"invalidfacebookusername",src:"https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"})}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"9"}),Object(v.jsx)(x.a,{sm:"2",children:Object(v.jsx)("div",{style:{display:"flex",justifyContent:"end",marginTop:"5px",color:"#fff"},children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(x.a,{children:Object(v.jsx)("h5",{children:Object(v.jsx)("div",{style:{display:"flex",justifyContent:"end"},children:Object(v.jsx)("strong",{children:localStorage.getItem("nome")})})})}),Object(v.jsx)(x.a,{children:Object(v.jsx)("div",{style:{display:"flex",justifyContent:"end",marginTop:"-13px"},children:Object(v.jsx)("h6",{children:localStorage.getItem("email")})})})]})})}),Object(v.jsx)(x.a,{sm:"1"})]})]}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"4",children:Object(v.jsxs)(d.a,{className:"Card",style:{marginLeft:"30px"},children:[Object(v.jsxs)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px"},children:[Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"8",children:Object(v.jsx)(p.a,{id:"search",name:"search",type:"text",placeholder:"Nome da Sala ...",onChange:function(e){return O(e.target.value)}})}),Object(v.jsx)(x.a,{sm:"4",children:Object(v.jsx)(p.a,{id:"search",name:"search",type:"password",placeholder:"Senha",onChange:function(e){return I(e.target.value)}})})]}),Object(v.jsx)("br",{}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"8",children:Object(v.jsx)(p.a,{id:"search",name:"search",type:"textarea",style:{height:70},placeholder:"Descri\xe7\xe3o",onChange:function(e){return G(e.target.value)}})}),Object(v.jsx)(x.a,{sm:"4",children:Object(v.jsx)(b.a,{color:"danger",style:{height:70},onClick:function(){var e={nome:n,senha:z,descricao:F};""!==n&&""!==F||f.b.error("Usuario e Descri\xe7\xe3o devem ser preenchidos !"),u.post("sala/cadastrar",e).then((function(e){M.push("/Sala")}))},block:!0,children:"Criar Sala"})}),Object(v.jsx)(x.a,{sm:"12"})]})]}),Object(v.jsxs)(h.a,{style:{padding:"10px",marginTop:"-50px"},children:[Object(v.jsx)("br",{}),D]})]})}),Object(v.jsxs)(x.a,{sm:"8",children:[Object(v.jsxs)(d.a,{className:"Card",style:{marginTop:"45px"},children:[Object(v.jsx)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px",marginLeft:"10px"},children:Object(v.jsx)("h4",{children:Object(v.jsx)("strong",{children:" Entenda como jogar ? "})})}),Object(v.jsxs)(h.a,{style:{display:"flex",justifyContent:"center"},children:[Object(v.jsx)(y.a,{videoId:"amiNCKwzh7s",opts:T}),Object(v.jsx)("br",{})]})]}),Object(v.jsx)("br",{}),Object(v.jsxs)(d.a,{className:"Card",style:{marginTop:"5px"},children:[Object(v.jsx)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px",marginLeft:"10px"},children:Object(v.jsx)("h3",{children:Object(v.jsx)("strong",{children:" Galeria de Players "})})}),Object(v.jsx)(h.a,{children:Object(v.jsx)("div",{className:"slide-container",children:Object(v.jsx)(w.Slide,{children:L.map((function(e,t){return Object(v.jsx)("div",{style:{padding:"40px",marginTop:"-30px"},className:"each-slide",children:Object(v.jsx)("div",{style:{backgroundImage:"url("+e.img+")",backgroundSize:"cover",overflow:"hidden",height:"250px",padding:"400px"},children:Object(v.jsx)("span",{style:{fontFamily:"fantasy",textTransform:"uppercase",fontSize:"2.5rem",color:"black",fontWeight:"bold",marginTop:"30px",marginLeft:"-390px"},children:e.descricao})})},t)}))})})})]})]})]})]})},z=s(205),I=function(){var e=c.a.useState(""),t=Object(l.a)(e,2),s=t[0],a=t[1],i=c.a.useState(""),r=Object(l.a)(i,2),n=r[0],O=r[1],y=c.a.useState(""),S=Object(l.a)(y,2),C=S[0],k=S[1],N=c.a.useState(""),w=Object(l.a)(N,2),T=w[0],L=w[1],R=c.a.useState(""),I=Object(l.a)(R,2),A=I[0],_=I[1],q=c.a.useState(!1),P=Object(l.a)(q,2),E=P[0],W=P[1],F=Object(o.e)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{id:"container",children:Object(v.jsx)(f.a,{theme:"dark"})}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)("img",{style:{position:"absolute",marginTop:"-35px",width:"150px"},src:g})}),Object(v.jsx)(d.a,{className:"BarrSup",style:{background:"#4e2779",height:"60px",boxShadow:"5px 5px 5px #000",marginLeft:"-20px"},children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"7"}),Object(v.jsx)(x.a,{sm:"5",children:Object(v.jsx)("div",{style:{marginTop:"12px",marginRight:"10px"},children:Object(v.jsx)(j.a,{children:Object(v.jsx)(x.a,{sm:"12"})})})})]})}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"3"}),Object(v.jsx)(x.a,{sm:"6",children:Object(v.jsxs)(d.a,{className:"Card",children:[Object(v.jsx)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px 0px 0px 10px",marginLeft:"10px"},children:Object(v.jsx)("h4",{children:Object(v.jsx)("strong",{children:" Cadastro: "})})}),Object(v.jsxs)(h.a,{style:{padding:"0px 20px 20px 20px"},children:[Object(v.jsx)("br",{}),Object(v.jsx)(p.a,{className:"form-control",type:"text",name:"nome",id:"nome",placeholder:"Nome",onChange:function(e){return O(e.target.value)}}),Object(v.jsx)("p",{}),Object(v.jsx)(p.a,{className:"form-control",type:"text",name:"nick",id:"nick",placeholder:"Nick do Usu\xe1rio",onChange:function(e){return a(e.target.value)}}),Object(v.jsx)("p",{}),Object(v.jsx)(p.a,{className:"form-control",type:"text",name:"email",id:"email",placeholder:"Email",onChange:function(e){return k(e.target.value)}}),Object(v.jsx)("p",{}),Object(v.jsx)(p.a,{className:"form-control",type:"password",name:"senha",id:"senha",placeholder:"Senha",onChange:function(e){return L(e.target.value)}}),Object(v.jsx)("p",{}),Object(v.jsx)(p.a,{className:"form-control",type:"password",name:"confirmaSenha",id:"confirmaSenha",placeholder:"Confirmar Senha",onChange:function(e){return _(e.target.value)}}),Object(v.jsx)("p",{}),Object(v.jsx)(p.a,{className:"form-control",readOnly:"readOnly",type:"textarea",value:"Bem-vindo \xe0 RPN Games! Nossa pol\xedtica de privacidade explica quais informa\xe7\xf5es a RPN Games coleta quando voc\xea visita ou usa os Servi\xe7os da RPN, bem como as formas como podemos us\xe1-las ou compartilh\xe1-las. Estamos apenas descrevendo nossas pr\xf3prias pr\xe1ticas \u2013 esta pol\xedtica n\xe3o se aplica a terceiros que n\xe3o controlamos e nem fazem parte de nosso grupo, inclusive outras empresas com as quais voc\xea possa interagir nos Servi\xe7os da RPN ou por meio deles (consulte Sites e Servi\xe7os de Terceiros), A RPN Games, Inc. est\xe1 sediada em Los Angeles. A RPN Games, Inc. e suas subsidi\xe1rias fazem parte de um grupo global de empresas afiliadas de jogos, com escrit\xf3rios e opera\xe7\xf5es em todo o mundo (consulte Processamento Internacional de Dados).Quando dizemos \u201cRPN Games\u201d (ou coisas semelhantes como \u201cn\xf3s\u201d ou \u201cnos\u201d), estamos nos referindo \xe0 pessoa jur\xeddica RPN Games ou, quando aplic\xe1vel, \xe0s empresas que controlam e s\xe3o respons\xe1veis por suas informa\xe7\xf5es (consulte Fale Conosco para saber quem \xe9). Quando dizemos Servi\xe7os da RPN, queremos dizer quaisquer jogos, sites, aplicativos e servi\xe7os vinculados a esta pol\xedtica, independentemente de como voc\xea os acessa, utiliza ou se envolve conosco, inclusive por meio de dispositivos m\xf3veis ou offline, como por telefone. O uso que voc\xea fizer dos Servi\xe7os da RPN tamb\xe9m est\xe1 sujeito aos Termos de Servi\xe7o em sua regi\xe3o (inclusive suas disposi\xe7\xf5es sobre limita\xe7\xf5es de indeniza\xe7\xe3o por danos, resolu\xe7\xe3o de conflitos e aplica\xe7\xe3o da lei regente). Leia esta pol\xedtica na \xedntegra a fim de garantir que voc\xea a compreenda. Voc\xea tamb\xe9m deve ler os Termos de Servi\xe7o com aten\xe7\xe3o, e certificar-se de ter entendido e concordado com eles antes de utilizar os Servi\xe7os da RPN. Recomendamos que voc\xea use os recursos interativos desta pol\xedtica para gui\xe1-lo. Elaboramos resumos para identificar rapidamente os principais assuntos discutidos em v\xe1rias se\xe7\xf5es. Contudo, esses resumos destinam-se apenas a simplificar as coisas, sendo que a pol\xedtica deve ser lida completamente, pois ela se sobrep\xf5e em caso de ambiguidade ou conflitos (n\xe3o deixe de ler com aten\xe7\xe3o a coisa toda!). . Clique nos links Saiba Mais para obter mais detalhes sobre t\xf3picos espec\xedficos que lhe interessam. Para percorrer as se\xe7\xf5es, use os links Voltar ao In\xedcio e o \xcdndice abaixo. Em caso de d\xfavidas quanto a alguma parte da pol\xedtica, envie suas perguntas atrav\xe9s do Fale Conosco.",rows:"10",cols:"60",style:{height:"150px"}}),Object(v.jsx)("p",{}),Object(v.jsx)(z.a,{from:"check",children:Object(v.jsxs)("span",{style:{color:"#fff"},children:["Li e Concordo com os termos: _"," "]})}),Object(v.jsx)(p.a,{type:"checkbox",name:"chek",id:"check",onClick:function(){return W(!E)}}),Object(v.jsx)("p",{}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(b.a,{color:"danger",size:"lg",disabled:!1===E?"disabled":"",onClick:function(){return function(){if(T!==A)f.b.error("As senhas n\xe3o conferem!");else if(""!==n&&""!==s&&""!==C&&""!==T&&""!==A){var e={nick:s,nome:n,email:C,senha:T};u.post("/usuario/cadastrar",e).then((function(e){f.b.success(e.data.mensagem),F.push("/")}))}else f.b.error("Preencha todos os campos!")}()},children:"Finalizar"})})]})]})}),Object(v.jsx)(x.a,{sm:"3"})]})]})},A=s(206),_=s(207),q=s(208),P=s(209),E=s(210),W=s.p+"static/media/ribbonmedium.c607faac.png",F=s.p+"static/media/map.fa680e4a.png",G=s.p+"static/media/layerssmall.50049769.png",M=s.p+"static/media/headerskull.11a266c5.png",D=s.p+"static/media/d20_1.25e80e14.gif",B=s.p+"static/media/d20_2.5ef25cd1.gif",V=s.p+"static/media/d20_3.0f5c9fa1.gif",U=s.p+"static/media/d20_4.36d4f117.gif",J=s.p+"static/media/d20_5.481a6460.gif",H=s.p+"static/media/d20_6.f6cb43f4.gif",Q=s.p+"static/media/d20_7.1011c534.gif",K=s.p+"static/media/d20_8.51e15cf2.gif",X=s.p+"static/media/d20_9.7c1c1b0d.gif",Y=s.p+"static/media/d20_10.8e4cc1fb.gif",Z=s.p+"static/media/d20_11.fbd38d15.gif",$=s.p+"static/media/d20_12.6a0d3cd2.gif",ee=s.p+"static/media/d20_13.4a03d7e3.gif",te=s.p+"static/media/d20_14.23ba7998.gif",se=s.p+"static/media/d20_15.06d2b34e.gif",ae=s.p+"static/media/d20_16.1653fb03.gif",ce=s.p+"static/media/d20_17.329f02bb.gif",ie=s.p+"static/media/d20_18.59e52a75.gif",re=s.p+"static/media/d20_19.bbb9eb73.gif",ne=s.p+"static/media/d20_20.e849e247.gif",oe=function(e){switch(console.log(e),e.valor){case 1:return Object(v.jsx)("img",{src:D,alt:"d20"});case 2:return Object(v.jsx)("img",{src:B,alt:"d20"});case 3:return Object(v.jsx)("img",{src:V,alt:"d20"});case 4:return Object(v.jsx)("img",{src:U,alt:"d20"});case 5:return Object(v.jsx)("img",{src:J,alt:"d20"});case 6:return Object(v.jsx)("img",{src:H,alt:"d20"});case 7:return Object(v.jsx)("img",{src:Q,alt:"d20"});case 8:return Object(v.jsx)("img",{src:K,alt:"d20"});case 9:return Object(v.jsx)("img",{src:X,alt:"d20"});case 10:return Object(v.jsx)("img",{src:Y,alt:"d20"});case 11:return Object(v.jsx)("img",{src:Z,alt:"d20"});case 12:return Object(v.jsx)("img",{src:$,alt:"d20"});case 13:return Object(v.jsx)("img",{src:ee,alt:"d20"});case 14:return Object(v.jsx)("img",{src:te,alt:"d20"});case 15:return Object(v.jsx)("img",{src:se,alt:"d20"});case 16:return Object(v.jsx)("img",{src:ae,alt:"d20"});case 17:return Object(v.jsx)("img",{src:ce,alt:"d20"});case 18:return Object(v.jsx)("img",{src:ie,alt:"d20"});case 19:return Object(v.jsx)("img",{src:re,alt:"d20"});case 20:return Object(v.jsx)("img",{src:ne,alt:"d20"});default:return Object(v.jsx)("img",{src:D,alt:"d20"})}},le=s.p+"static/media/d20.92c667d1.png",de=s(211),je=function(){var e=Object(a.useState)("1"),t=Object(l.a)(e,2),s=t[0],c=t[1],i=function(e){s!==e&&c(e)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(A.a,{tabs:!0,children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(q.a,{active:"1"===s,onClick:function(){i("1")},children:Object(v.jsx)("span",{style:{color:"#000",cursor:"poiter"},children:"Atributos"})})}),Object(v.jsx)(_.a,{children:Object(v.jsx)(q.a,{active:"2"===s,onClick:function(){i("2")},children:Object(v.jsx)("span",{style:{color:"#000"},children:" Per\xedcias"})})}),Object(v.jsx)(_.a,{children:Object(v.jsx)(q.a,{active:"3"===s,onClick:function(){i("3")},children:Object(v.jsx)("span",{style:{color:"#000"},children:"Ataques e Magias"})})}),Object(v.jsx)(_.a,{children:Object(v.jsx)(q.a,{active:"4"===s,onClick:function(){i("4")},children:Object(v.jsx)("span",{style:{color:"#000"},children:" Equipamentos"})})}),Object(v.jsx)(_.a,{children:Object(v.jsx)(q.a,{active:"5"===s,onClick:function(){i("5")},children:Object(v.jsx)("span",{style:{color:"#000"},children:"Caracteristicas"})})})]}),Object(v.jsxs)(P.a,{className:"py-50",activeTab:s,children:[Object(v.jsxs)(E.a,{tabId:"1",children:[Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)("img",{src:M,style:{width:"60%",height:"50%"}})}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsxs)(j.a,{children:[Object(v.jsxs)(x.a,{sm:"4",children:[Object(v.jsx)("span",{style:{fontSize:"9px",position:"absolute",marginLeft:"60px",marginTop:"9px"},children:"FOR\xc7A"}),Object(v.jsx)(p.a,{type:"text",style:{fontSize:"30px",width:"40px",border:"none",borderRadius:"50px",position:"absolute",marginTop:"50px",marginLeft:"55px"}}),Object(v.jsx)("img",{style:{width:"150px"},src:G})]}),Object(v.jsxs)(x.a,{sm:"4",children:[Object(v.jsx)("span",{style:{fontSize:"9px",position:"absolute",marginLeft:"52px",marginTop:"9px"},children:"DESTREZA"}),Object(v.jsx)(p.a,{type:"text",style:{fontSize:"30px",width:"40px",border:"none",borderRadius:"50px",position:"absolute",marginTop:"50px",marginLeft:"55px"}}),Object(v.jsx)("img",{style:{width:"150px"},src:G})]}),Object(v.jsxs)(x.a,{sm:"4",children:[Object(v.jsx)("span",{style:{fontSize:"9px",position:"absolute",marginLeft:"40px",marginTop:"9px"},children:"CONSTITUI\xc7\xc3O"}),Object(v.jsx)(p.a,{type:"text",style:{fontSize:"30px",width:"40px",border:"none",borderRadius:"50px",position:"absolute",marginTop:"50px",marginLeft:"55px"}}),Object(v.jsx)("img",{style:{width:"150px"},src:G})]})]})})," ",Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsxs)(j.a,{children:[Object(v.jsxs)(x.a,{sm:"4",children:[Object(v.jsx)("span",{style:{fontSize:"9px",position:"absolute",marginLeft:"43px",marginTop:"9px"},children:"INTELIGENCIA"}),Object(v.jsx)(p.a,{type:"text",style:{fontSize:"30px",width:"40px",border:"none",borderRadius:"50px",position:"absolute",marginTop:"50px",marginLeft:"55px"}}),Object(v.jsx)("img",{style:{width:"150px"},src:G})]}),Object(v.jsxs)(x.a,{sm:"4",children:[Object(v.jsx)("span",{style:{fontSize:"9px",position:"absolute",marginLeft:"47px",marginTop:"9px"},children:"SABEDORIA"}),Object(v.jsx)(p.a,{type:"text",style:{fontSize:"30px",width:"40px",border:"none",borderRadius:"50px",position:"absolute",marginTop:"50px",marginLeft:"55px"}}),Object(v.jsx)("img",{style:{width:"150px"},src:G})]}),Object(v.jsxs)(x.a,{sm:"4",children:[Object(v.jsx)("span",{style:{fontSize:"9px",position:"absolute",marginLeft:"54px",marginTop:"9px"},children:"CARISMA"}),Object(v.jsx)(p.a,{type:"text",style:{fontSize:"30px",width:"40px",border:"none",borderRadius:"50px",position:"absolute",marginTop:"50px",marginLeft:"55px"}}),Object(v.jsx)("img",{style:{width:"150px"},src:G})]})]})})]}),Object(v.jsx)(E.a,{tabId:"2"}),Object(v.jsx)(E.a,{tabId:"3"})]})]})},xe=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(l.a)(i,2),n=r[0],o=r[1],h=Object(a.useState)([]),O=Object(l.a)(h,2),f=O[0],y=O[1],S=Object(a.useState)(""),C=Object(l.a)(S,2),k=C[0],w=C[1],T=Object(a.useState)(!0),L=Object(l.a)(T,2),R=L[0],I=L[1],A=Object(a.useState)(0),_=Object(l.a)(A,2),q=_[0],P=_[1],E=Object(a.useState)(Math.floor(20*Math.random())+1),G=Object(l.a)(E,2),M=G[0],D=G[1];Object(a.useEffect)((function(){u.get("/chat/idsala/"+localStorage.getItem("idSala")).then((function(e){P(e.data.length),q!==e.data.length&&y(e.data)})),console.log(f)}),[R]),setTimeout((function(){I(!R)}),5e3);var B=f.map((function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("span",{children:[e.nomepers,": ",e.texto]},e._id),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"left"},children:Object(v.jsx)("img",{style:{position:"absolute",marginTop:"-35px",width:"130px",zIndex:999},src:g})}),Object(v.jsxs)(d.a,{className:"BarrSup",style:{background:"#4e2779",height:"60px",boxShadow:"5px 5px 5px #000",marginLeft:"-20px"},children:[Object(v.jsx)("div",{className:"Avatar",children:Object(v.jsx)(N.a,{size:"90",round:!0,style:{boxShadow:"5px 5px 5px black"},"facebook-id":"invalidfacebookusername",src:"https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"})}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"9"}),Object(v.jsx)(x.a,{sm:"2",children:Object(v.jsx)("div",{style:{display:"flex",justifyContent:"end",marginTop:"5px",color:"#fff"},children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(x.a,{children:Object(v.jsx)("h5",{children:Object(v.jsx)("div",{style:{display:"flex",justifyContent:"end"},children:Object(v.jsx)("strong",{children:localStorage.getItem("nome")})})})}),Object(v.jsx)(x.a,{children:Object(v.jsx)("div",{style:{display:"flex",justifyContent:"end",marginTop:"-13px"},children:Object(v.jsx)("h6",{children:localStorage.getItem("email")})})})]})})}),Object(v.jsx)(x.a,{sm:"1"})]})]}),Object(v.jsx)(j.a,{children:Object(v.jsxs)(x.a,{sm:"12",children:[Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"right"},children:[Object(v.jsx)(b.a,{title:"ADICIONAR PERSSONAGEM",color:"danger",style:{marginTop:"15px",marginRight:"10px",boxShadow:"5px 5px 5px black",zIndex:9999,borderRadius:"40px",width:"40px",height:"40px"},children:Object(v.jsx)(de.a,{style:{marginTop:"5px"},size:"16px"})}),Object(v.jsxs)(p.a,{onChange:function(e){return localStorage.setItem("NomePersonagem",e.target.value)},style:{marginTop:"35px",marginRight:"90px",zIndex:9999,fontSize:"25px",width:"210px",height:"40px",fontFamily:"fantasy",border:"none",background:"rgba(255, 255, 255, 0.7)"},type:"select",children:[Object(v.jsx)("option",{value:"Lord Genesis",style:{textAlign:"center"},children:"Lord Genesis"}),Object(v.jsx)("option",{value:"VoldMort",style:{textAlign:"center"},children:"VoldMort"})]}),Object(v.jsx)("img",{style:{position:"absolute",zIndex:9998,marginTop:"-28px"},src:W})]}),Object(v.jsx)(d.a,{className:"Card",style:{marginTop:"-40px",marginLeft:"20px"},children:Object(v.jsx)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px"},children:Object(v.jsx)("div",{style:{border:"1px solid #000",borderRadius:"8px",background:"#fff"},children:Object(v.jsx)("div",{style:{padding:"10px 280px 10px 10px"},children:Object(v.jsxs)(j.a,{children:[Object(v.jsxs)(x.a,{sm:"3",children:[Object(v.jsx)(z.a,{for:"classe",style:{fontWeight:"bold",color:"#000"},children:"Classe de N\xedvel:"}),Object(v.jsx)(p.a,{type:"text",name:"classe",id:"classe",className:"form-control"})]}),Object(v.jsxs)(x.a,{sm:"3",children:[Object(v.jsx)(z.a,{for:"classe",style:{fontWeight:"bold",color:"#000"},children:"Antecedente:"}),Object(v.jsx)(p.a,{type:"text",name:"classe",id:"classe",className:"form-control"})]}),Object(v.jsxs)(x.a,{sm:"3",children:[Object(v.jsx)(z.a,{for:"classe",style:{fontWeight:"bold",color:"#000"},children:"Ra\xe7a:"}),Object(v.jsx)(p.a,{type:"text",name:"classe",id:"classe",className:"form-control"})]}),Object(v.jsxs)(x.a,{sm:"3",children:[Object(v.jsx)(z.a,{for:"classe",style:{fontWeight:"bold",color:"#000"},children:"Pontos XP:"}),Object(v.jsx)(p.a,{type:"text",name:"classe",id:"classe",className:"form-control"})]})]})})})})})]})}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"7",children:Object(v.jsx)(d.a,{className:"Card",style:{marginTop:"30px",marginLeft:"18px"},children:Object(v.jsx)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px"},children:Object(v.jsx)("div",{style:{border:"1px solid #000",borderRadius:"8px",background:"#fff",color:"#000",height:"500px"},children:Object(v.jsx)(je,{})})})})}),Object(v.jsxs)(x.a,{sm:"5",children:[Object(v.jsx)(d.a,{className:"Card",style:{marginTop:"30px",marginLeft:"-30px"},children:Object(v.jsxs)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px",marginLeft:"10px"},children:[Object(v.jsxs)("div",{style:{visibility:!1!==s?"":"hidden",border:"1px solid #000",borderRadius:"25px",background:"#222",position:"absolute",zIndex:9999},children:[Object(v.jsx)(oe,{valor:M}),Object(v.jsx)("br",{}),Object(v.jsx)(b.a,{style:{marginLeft:"65px"},color:"danger",onClick:function(){c(!s),D(Math.floor(20*Math.random())+1),function(){var e={idsala:localStorage.getItem("idSala"),texto:"Resultado rolagem de dado: "+M,nomepers:localStorage.getItem("NomePersonagem"),idusuario:localStorage.getItem("id"),datahora:null};u.post("/chat/cadastrar",e).then((function(e){console.log(e.data),w("")}))}()},children:"Fechar"})]}),Object(v.jsxs)("div",{style:{visibility:!1!==n?"":"hidden",border:"1px solid #000",borderRadius:"25px",background:"#222",position:"absolute",zIndex:9999,marginLeft:"-500px"},children:[Object(v.jsx)(b.a,{style:{position:"absolute"},color:"danger",onClick:function(){return o(!n)},children:"Fechar"}),Object(v.jsx)("img",{style:{borderRadius:"15px"},src:F}),Object(v.jsx)("br",{})]}),Object(v.jsx)("img",{onClick:function(){return c(!s)},style:{width:"120px",borderRadius:"15px"},src:le}),Object(v.jsx)("img",{onClick:function(){return o(!n)},style:{height:"116px",borderRadius:"15px",marginLeft:"32px"},src:F})]})}),Object(v.jsx)("br",{}),Object(v.jsx)(d.a,{className:"Card",style:{marginTop:"30px",marginLeft:"-30px"},children:Object(v.jsx)(m.a,{style:{color:"#fff",fontWeight:"bold",padding:"10px",marginLeft:"10px",marginTop:"-30px"},children:Object(v.jsxs)("div",{style:{border:"1px solid #000",borderRadius:"8px",background:"#fff",color:"#000",height:"345px",marginLeft:"-8px"},children:[Object(v.jsx)("div",{style:{height:"289px",padding:"15px",whiteSpace:"normal",transformOrigin:"50% 50%",transform:"rotate(180deg)",overflowY:"auto",direction:"rtl",textAlign:"left"},children:Object(v.jsx)("div",{style:{marginTop:"20px",float:"left",width:"100%",transform:"rotate(180deg)"},children:B})}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(x.a,{sm:"10",children:Object(v.jsx)(p.a,{type:"textarea",value:k,placeholder:"Escreva aqui ...",onChange:function(e){return w(e.target.value)}})}),Object(v.jsx)(x.a,{sm:"2",children:Object(v.jsx)(b.a,{disabled:""===k,block:!0,style:{height:"53px",marginLeft:"-28px"},size:"sm",color:"danger",onClick:function(){return function(){var e={idsala:localStorage.getItem("idSala"),texto:k,nomepers:localStorage.getItem("NomePersonagem"),idusuario:localStorage.getItem("id"),datahora:null};u.post("/chat/cadastrar",e).then((function(e){console.log(e.data),w("")}))}()},children:"Enviar"})})]})]})})})]})]})]})},pe=function(){return Object(v.jsx)(n.a,{children:Object(v.jsxs)(n.b,{children:[Object(v.jsx)(o.a,{path:"/",exact:!0,component:S}),Object(v.jsx)(o.a,{path:"/Hall",component:R}),Object(v.jsx)(o.a,{path:"/Cadastro",component:I}),Object(v.jsx)(o.a,{path:"/Sala",component:xe})]})})};var be=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(pe,{})})};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(be,{})}),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.523aa7ac.chunk.js.map