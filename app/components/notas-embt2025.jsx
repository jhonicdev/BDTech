'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, Radio, Space, Typography, Modal, Button, message, Tag, Input, Table, Layout, AutoComplete } from "antd";
import styles from "../ombt/banco_questoes/page.module.css";
import { FilePdfOutlined, EditOutlined, FileSearchOutlined } from "@ant-design/icons";
import Wolfo from "../imgs/wolfo.jpg";
import pIcon from "../imgs/p.jpg";
import jpIcon from "../imgs/jp.jpg";


const { Content } = Layout;
const { Text, Title } = Typography;

const TituloCard = {
  padding: "8px 16px",
  margin: 0,
};














export default function Embt2025({ idUsuario, nomeUsuario, emailUsuario, respostas1dia, respostas2dia, notaLinguagens = 0, notaHumanas = 0, notaNatureza = 0, notaMatematica = 0, notaRedacao = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVistaPedagogicaOpen, setIsVistaPedagogicaOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showVistaPedagogica = () => {
    setIsVistaPedagogicaOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleVistaPedagogicaOk = () => {
    setIsVistaPedagogicaOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleVistaPedagogicaCancel = () => {
    setIsVistaPedagogicaOpen(false);
  };


  const [userIcon, setUserIcon] = useState("");




  function ChatMessage({ sender, message, children }) {
    const isUser = sender === 'user';

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: isUser ? 'flex-end' : 'flex-start',
          marginBottom: 12,
        }}
      >
        {isUser ? (
          // Usuário: mensagem à direita, ícone mais à direita ainda
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
            <Card style={{ backgroundColor: '#ffd782', marginRight: 8 }}>
              {message}
              {children && <div style={{ marginTop: 10 }}>{children}</div>}
            </Card>
            <div
              style={{
                width: 64,
                height: 64,
                minWidth: 64,
                borderRadius: '50%',
                backgroundImage: `url(${userIcon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid #b45f06',
                boxShadow: '0 0 15px #b45f06',
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
          </div>
        ) : (
          // Bot: ícone à esquerda, mensagem à direita
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <div
              style={{
                width: 64,
                height: 64,
                minWidth: 64,
                borderRadius: '50%',
                backgroundImage: `url(${Wolfo.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid #b45f06',
                boxShadow: '0 0 15px #b45f06',
                animation: 'pulse 1.5s ease-in-out infinite',
                marginRight: 8,
              }}
            />
            <Card style={{ backgroundColor: '#fff' }}>
              {message}
              {children && <div style={{ marginTop: 10 }}>{children}</div>}
            </Card>
          </div>
        )}
      </div>
    );
  }




  const gabarito1dia = "DCBDCBCCCDCDEBCEAADCAAAECBCDAEDEDAEBADBC" + "DDBAAACBBEBECDCEECCDADDCCBACCACDDDADABDB" + "EEEDBDEDDABECCECBCEEEADCEDCDCADEBCBAECBA";
  // "DCBDCBCCCDCDEBCEAADCAAAECBCDAEDEDAEBADBCDDBAAACBBEBECDCEECCDADDCCBACCACDDDADABDBEEEDBDEDDABECCECBCEEEADCEDCDCADEBCBAECBA"







  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('start');
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [hasShownStep, setHasShownStep] = useState({});

  useEffect(() => {
    const step = botFlow[currentStep];

    if (step && !hasShownStep[currentStep]) {
      setIsTyping(true);

      const typingDelay = setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', message: step.message, step }]);
        setHasShownStep(prev => ({ ...prev, [currentStep]: true }));
        setIsTyping(false);

        // ⏭️ Se houver nextId automático, avance para ele depois de um pequeno delay
        if (step.nextId) {
          setTimeout(() => {
            setCurrentStep(step.nextId);
          }, 1000); // ou 1500ms, como preferir
        }

      }, 1500);

      return () => clearTimeout(typingDelay);
    }

    if (idUsuario == "Pablo") setUserIcon(pIcon.src);
    if (idUsuario == "JoaoPaulo") setUserIcon(jpIcon.src);

    

    

  }, [currentStep, hasShownStep, userIcon, idUsuario]);


  const handleOptionClick = (label, nextId) => {
    setMessages(prev => [...prev, { sender: 'user', message: label }]);
    setTimeout(() => setCurrentStep(nextId), 500);
  };





  let acertosLinguagens = 0;
  let acertosHumanas = 0;
  let acertosNatureza = 0;
  let discrepanciaLinguagens = [
    5.9, 5.3, 6.8, 6.1, 6.3,
    6.0, 5.1, 6.2, 6.6, 5.7,
    6.0, 6.1, 5.4, 5.8, 6.6,
    6.1, 5.9, 6.4, 6.1, 6.0,
    6.1, 5.8, 5.9, 5.9, 6.6,
    5.2, 6.2, 5.9, 6.1, 6.3,
    6.2, 6.4, 5.6, 6.0, 7.1,
    5.8, 6.6, 6.2, 6.1, 7.2,
  ];
  let discrepanciaHumanas = [
    6.0, 7.0, 6.9, 5.9, 6.5,
    6.8, 6.3, 5.6, 6.9, 6.1,
    6.4, 6.8, 7.3, 6.8, 6.3,
    6.0, 6.2, 6.3, 5.9, 6.8,
    6.5, 6.4, 6.9, 7.0, 6.5,
    6.2, 6.6, 6.3, 6.5, 6.2,
    6.9, 6.5, 6.9, 6.4, 6.5,
    6.6, 5.7, 5.9, 6.9, 6.0,
  ];
  let discrepanciaNatureza = [
    7.1, 6.9, 6.7, 7.0, 7.4,
    6.3, 7.3, 6.1, 7.1, 6.9,
    7.1, 7.5, 7.4, 5.9, 6.3,
    6.8, 7.1, 6.9, 7.4, 7.9,
    7.3, 6.2, 7.5, 7.7, 7.9,
    6.3, 6.9, 6.7, 7.1, 6.7,
    7.2, 7.5, 7.0, 8.3, 7.1,
    7.1, 7.2, 7.1, 7.2, 8.0,
  ];



  let acLinguagens = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let acHumanas = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let acNatureza = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  if (respostas1dia && respostas2dia) {
    for (let i = 0; i < 40; i++) {
      if ((respostas1dia?.[i] || "").toUpperCase() === gabarito1dia[i]) {
        acertosLinguagens++;
        acLinguagens[i] = 1;
      }
    }

    for (let i = 40; i < 80; i++) {
      if ((respostas1dia?.[i] || "").toUpperCase() === gabarito1dia[i]) {
        acertosHumanas++;
        acHumanas[i - 40] = 1;
      }
    }
    
    for (let i = 80; i < 120; i++) {
      if ((respostas1dia?.[i] || "").toUpperCase() === gabarito1dia[i]) {
        acertosNatureza++;
        acNatureza[i - 80] = 1;
      }
    }
  }


  function calcularCoerenciaTRI(dificuldades, respostas) {
    const n = dificuldades.length;
    let totalCoerencia = 0;
    let totalPares = 0;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        // determinando qual é a mais fácil
        let idxFacil, idxDificil;
        if (dificuldades[i] < dificuldades[j]) {
          idxFacil = i;
          idxDificil = j;
        } else if (dificuldades[i] > dificuldades[j]) {
          idxFacil = j;
          idxDificil = i;
        } else {
          continue; // mesmo nível de dificuldade/anulações, não avaliamos
        }

        const respFacil = respostas[idxFacil];
        const respDificil = respostas[idxDificil];

        let coerenciaPar = 0;

        if (respFacil === 1 && respDificil === 1) {
          coerenciaPar = 1.0;
        } else if (respFacil === 1 && respDificil === 0) {
          coerenciaPar = 0.9;
        } else if (respFacil === 0 && respDificil === 1) {
          coerenciaPar = 0.4;
        } else if (respFacil === 0 && respDificil === 0) {
          coerenciaPar = 0.0;
        }

        totalCoerencia += coerenciaPar;
        totalPares++;
      }
    }

    const coerenciaFinal = totalPares === 0 ? 1 : totalCoerencia / totalPares;

    return Number(coerenciaFinal.toFixed(3));
  }


  function calcularNota(discrepanciasArea, acArea, acertos, coerencia) {
    if (acertos === 0) {
      return "0";  // ou outro valor padrão que você quiser
    }

    let base = 0;

    let media = (discrepanciasArea.reduce((acc, val) => acc + val, 0)) / discrepanciasArea.length;

    for (let d of discrepanciasArea) {
      base += d * 1.15;
    }

    let notaCoerencia = 0;
    for (let i in acArea) {
      if (acArea[i] === 1 && discrepanciasArea[i] !== undefined) {
        notaCoerencia += (discrepanciasArea[i]) * (coerencia * 35 / acertos + 0.01);
      }
    }

    // console.log(media, base, notaCoerencia, acertos * media)

    notaCoerencia += acertos * media;


    return (base + notaCoerencia).toFixed(1);
  }


  notaLinguagens = calcularNota(discrepanciaLinguagens, acLinguagens, acertosLinguagens, calcularCoerenciaTRI(discrepanciaLinguagens, acLinguagens)).replace('.', ',');
  notaHumanas = calcularNota(discrepanciaHumanas, acHumanas, acertosHumanas, calcularCoerenciaTRI(discrepanciaHumanas, acHumanas)).replace('.', ',');
  notaNatureza = calcularNota(discrepanciaNatureza, acNatureza, acertosNatureza, calcularCoerenciaTRI(discrepanciaNatureza, acNatureza)).replace('.', ',');
  notaMatematica = 0

  const notaTableData = [
    {
      key: '1',
      area: 'Linguagens, Códigos e suas Tecnologias',
      nota: notaLinguagens || "Indisponível",
      situacao: notaLinguagens == 0 ? "Em aberto" : "Enviada",
    },
    {
      key: '2',
      area: 'Ciências Humanas e suas Tecnologias',
      nota: notaHumanas || "Indisponível",
      situacao: notaHumanas == 0 ? "Em aberto" : "Enviada",
    },
    {
      key: '3',
      area: 'Ciências da Natureza e suas Tecnologias',
      nota: notaNatureza || 0,
      situacao: notaNatureza == 0 ? "Em aberto" : "Enviada",
    },
    {
      key: '4',
      area: 'Matemática e suas Tecnologias',
      nota: typeof(notaMatematica) == String ? notaMatematica : "?",
      situacao: notaMatematica == 0 ? "Em aberto" : "Em aberto",
    },
    {
      key: '5',
      area: 'Redação',
      nota: notaRedacao == "" ? notaRedacao :  "?",
      situacao: notaRedacao == "" ? "Em aberto" : "Em aberto",
    },
  ];
  const notaTableColumns = [
    {
      title: 'Área de Conhecimento',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Nota',
      dataIndex: 'nota',
      key: 'nota',
    },
    {
      title: 'Situação',
      dataIndex: 'situacao',
      key: 'situacao',
    },
  ];

  const botFlow = {
    start: {
      message: (
        <Text>
          Eai, {nomeUsuario}!<br />
          Eu sou <b>Wolfo</b>. <br /><br />
          Acho que Felinx me falou um pouco sobre você... Ouvi dizer que você é muito inteligente!<br />
          Você acabou de fazer a <span style={{ color: "#b45f06", fontWeight: "bold" }}>EMBT<i style={{ fontWeight: "normal", color: "gray" }}>2025</i></span>, né?<br />
        </Text>
      ),
      options: [
        { label: 'Sim!', nextId: 'conversa1' },
        { label: 'Não.', nextId: 'end' },
      ]
    },
    conversa1: {
      message: (
        <Text>
          Ah, que legal! 😃<br /><br />
          O que achou da prova?
        </Text>
      ),
      options: [
        { label: 'Gostei bastante!', nextId: 'gostou' },
        { label: 'Não gostei tanto...', nextId: 'naoGostou' },
      ]
    },
    gostou: {
      message: (
        <Text>
          Show! 😎<br /><br />
          Você acha que se saiu bem?
        </Text>
      ),
      options: [
        { label: 'Sim!', nextId: 'achaQueSeSaiuBem' },
        { label: 'Não...', nextId: 'achaQueNaoSeSaiuBem' },
      ]
    },
    naoGostou: {
      message: (
        <Text>
          É, me disseram que a prova estava um tanto complicada... 🤯<br /><br />
          Bem, mas uma coisa é a prova e outra é o desempenho.<br /><br />
          Você acha que se saiu bem?
        </Text>
      ),
      options: [
        { label: 'Sim!', nextId: 'achaQueSeSaiuBem' },
        { label: 'Não...', nextId: 'achaQueNaoSeSaiuBem' },
      ]
    },
    achaQueSeSaiuBem: {
      message: (
        <Text>
          Nossa! 😯<br /><br />
          Então acho que você lacrou muito, dyva.
        </Text>
      ),
      options: [
        { label: 'Valeu! O esforço de hoje é o resultado de amanhã.', nextId: 'conversa3' }
      ]
    },
    achaQueNaoSeSaiuBem: {
      message: (
        <Text>
          Que pena! 🫤<br /><br />
          Coisas ruins acontecem às vezes mesmo...
        </Text>
      ),
      options: [
        { label: 'Verdade... Mesmo assim, não estou triste, pois cada fracasso ensina ao homem aquilo que ele precisava aprender.', nextId: 'conversa3' }
      ]
    },
    conversa3: {
      message: (
        <Text>
          Você simplesmente AR-RA-SOU com essa frase! 💫📍<br /><br />
          Mas... E se eu dissesse que eu tenho acesso ao seu desempenho? 👀<br />
        </Text>
      ),
      options: [
        { label: '👀...', nextId: 'conversa4' },
      ]
    },
    conversa4: {
      message: (
        <Text>
          Quer obter seu desempenho?<br />
        </Text>
      ),
      options: [
        { label: 'Quero!', nextId: 'conversa5' },
      ]
    },
    conversa5: {
      message: (
        <Text>
          Tem certeza??<br />
        </Text>
      ),
      options: [
        { label: 'Sim!', nextId: 'conversa6' },
      ]
    },
    conversa6: {
      message: (
        <Text>
          Certeza absoluta??? 👀<br />
        </Text>
      ),
      options: [
        { label: 'mostra logo essa porra', nextId: 'conversa7' },
      ]
    },
    conversa7: {
      message: (
        <Text>
          nossa, seu grosso<br />
        </Text>
      ),
      options: [
        { label: 'vou te mostrar o que é grosso', nextId: 'conversa8' },
      ]
    },
    conversa8: {
      message: (
        <Text>
          vai tomar no seu cu então<br />
        </Text>
      ),
      nextId: 'conversa9'
    },
     conversa9: {
      message: (
        <Text>
          seu arrombado do caralho<br />
        </Text>
      ),
      nextId: 'conversa10'
    },
    conversa10: {
      message: (
        <Text>
          brincadeirinhaaakk<br />
        </Text>
      ),
      nextId: 'conversa11'
    },
    conversa11: {
      message: (
        <Text>
          não quero ser demitidx<br />
        </Text>
      ),
      nextId: 'conversa12'
    },
    conversa12: {
      message: (
        <Text>
          nothing beats a jet2 holiday<br />
        </Text>
      ),
      nextId: 'notas'
    },
    



    end: {
      message: (
        <Text>
          Acho que me confundi, então...<br /><br />
          Foi mal! 😶‍🌫️
        </Text>
      )
    },
    notas: {
      message: [
        (
          <div>
            <Text>
              PEGAAA aí o seu desempenho na <span style={{ color: "#b45f06", fontWeight: "bold" }}>EMBT<i style={{ fontWeight: "normal", color: "gray" }}>2025</i></span>, campeão!
            </Text><br />
            <Text>Você tem talento, hein? PARABÉNS! 🧡💪</Text>

            <div style={{ marginTop: 16 }}>
              <div style={{ width: "100%", marginBottom: "20px" }}>
                <span style={{ fontWeight: "bold" }}>NOME DO PARTICIPANTE:&nbsp;</span>{nomeUsuario.toUpperCase()}<br/>
                <span style={{ fontWeight: "bold" }}>E-MAIL:&nbsp;</span>{emailUsuario}
              </div>
              <Table
                dataSource={notaTableData}
                columns={notaTableColumns}
                pagination={false}
                size="small"
                bordered
              />

              <br /><br />
              <Button type="primary" onClick={showModal}>
                <EditOutlined /> SEU GABARITO
              </Button>
              <br /><br />
              <Button type="primary">
                <FilePdfOutlined /> ACESSAR REDAÇÃO
              </Button>
              <br /><br />
              <Button type="primary" onClick={showVistaPedagogica}>
                <FileSearchOutlined /> VISTA PEDAGÓGICA
              </Button>
            </div>
          </div>
        ),

      ],
    },
  };



  return (
    <>
      {/*notaLinguagens && notaHumanas && notaRedacao*/ true ? (
        <div
          style={{
            width: '100%',
            margin: '0 auto', // Centralizando o chat horizontalmente
            backgroundColor: '#fff',
            padding: '32px 16px',
            boxSizing: 'border-box',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombras para dar destaque
          }}
        >
          <Layout style={{ width: '100%' }}>






            <Modal
              title={<Text>📝 SEU GABARITO NA <span style={{ color: "#b45f06", fontWeight: "bold" }}>EMBT<i style={{ fontWeight: "normal", color: "gray" }}>2025</i></span></Text>}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={800}
              footer={null}
            >
              <Card>
                <Title level={5}>
                  {acertosLinguagens}/40 - Linguagens, Códigos e suas Tecnologias
                </Title>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
                  {[...Array(40)].map((_, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ fontSize: "12px" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span
                        style={{
                          width: 40,
                          textAlign: "center",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          backgroundColor: respostas1dia[i]?.toUpperCase() === gabarito1dia[i] ? "#d4edda" : "#f8d7da",
                          borderRadius: 4,
                          padding: "2px 4px",
                        }}
                      >
                        {respostas1dia[i] || ""}
                      </span>
                    </div>
                  ))}
                </div>

                <Title level={5}>
                  {acertosHumanas}/40 - Ciências Humanas e suas Tecnologias
                </Title>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
                  {[...Array(40)].map((_, i) => (
                    <div key={i + 40} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ fontSize: "12px" }}>{String(i + 41).padStart(2, "0")}</span>
                      <span
                        style={{
                          width: 40,
                          textAlign: "center",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          backgroundColor: respostas1dia[i + 40]?.toUpperCase() === gabarito1dia[i + 40] ? "#d4edda" : "#f8d7da",
                          borderRadius: 4,
                          padding: "2px 4px",
                        }}
                      >
                        {respostas1dia[i + 40] || ""}
                      </span>
                    </div>
                  ))}
                </div>

                <Title level={5}>
                  {acertosNatureza}/40 - Ciências da Natureza e suas Tecnologias
                </Title>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {[...Array(40)].map((_, i) => (
                    <div key={i + 80} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ fontSize: "12px" }}>{String(i + 81).padStart(2, "0")}</span>
                      <span
                        style={{
                          width: 40,
                          textAlign: "center",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          backgroundColor: respostas1dia[i + 80]?.toUpperCase() === gabarito1dia[i + 80] ? "#d4edda" : "#f8d7da",
                          borderRadius: 4,
                          padding: "2px 4px",
                        }}
                      >
                        {respostas1dia[i + 80] || ""}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

            </Modal>


            <Modal
              title={<Text>VISTA PEDAGÓGICA DA <span style={{ color: "#b45f06", fontWeight: "bold" }}>EMBT<i style={{ fontWeight: "normal", color: "gray" }}>2025</i></span></Text>}
              open={isVistaPedagogicaOpen}
              onOk={handleVistaPedagogicaOk}
              onCancel={handleVistaPedagogicaCancel}
              width={800}
              footer={null}
            >
              <Text>Com base nos parâmetros de elaboração e avaliação da <span style={{ color: "#b45f06", fontWeight: "bold" }}>EMBT<i style={{ fontWeight: "normal", color: "gray" }}>2025</i></span>, a comissão estabeleceu que:</Text>
              <br />
              <Text>👉 com <span style={{ fontWeight: "bold" }}>{acertosLinguagens} acertos</span>, na prova de Linguagens, Códigos e suas Tecnologias, você obteve uma coerência de <b>{(calcularCoerenciaTRI(discrepanciaLinguagens, acLinguagens) * 100).toFixed(1)}%</b> em suas respostas.</Text>
              <br />
              <Text>👉 com <span style={{ fontWeight: "bold" }}>{acertosHumanas} acertos</span>, na prova de Ciências Humanas e suas Tecnologias, você obteve uma coerência de <b>{(calcularCoerenciaTRI(discrepanciaHumanas, acHumanas) * 100).toFixed(1)}%</b> em suas respostas.</Text>
              <br />
              <Text>👉 com <span style={{ fontWeight: "bold" }}>{acertosNatureza} acertos</span>, na prova de Ciências da Natureza e suas Tecnologias, você obteve uma coerência de <b>{(calcularCoerenciaTRI(discrepanciaNatureza, acNatureza) * 100).toFixed(1)}%</b> em suas respostas.</Text>

            </Modal>


            <Content style={{ padding: 16, width: '100%' }}>
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} sender={msg.sender} message={msg.message}>
                  {msg.sender === 'bot' && msg.step?.options && (
                    <Space wrap>
                      {msg.step.options.map((opt, i) => (
                              <Button key={i} onClick={() => handleOptionClick(opt.label, opt.nextId)}>
                                {opt.label}
                              </Button>
                        ))}
                    </Space>
                  )}
                </ChatMessage>
              ))}

              {isTyping && (
                <ChatMessage
                  sender="bot"
                  message={
                    <div style={{ fontStyle: 'italic', opacity: 0.7 }}>
                      Digitando<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
                    </div>
                  }
                />
              )}
            </Content>
          </Layout>
        </div>

      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Title level={3}>Peraí que a bosta da plataforma tá carregando... ⏳</Title>
        </div>
      )
      }

    </>
  );
}