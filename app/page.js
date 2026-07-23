'use client';

import { useState, useEffect } from 'react';
import { Layout, Typography, Button, Card, Avatar, Space, Table, FloatButton } from 'antd';
import { MessageOutlined, CloseOutlined } from '@ant-design/icons';
import Image from "next/image";
import Felinx from "./imgs/felinx.jpg";


import Aniversariante from "./imgs/jaaj-hiperfocado.jpg";


const { Text, Title } = Typography;
const { Header, Content } = Layout;

const today = new Date();
const isJardielBirthday =
  today.getDate() === 22 &&
  today.getMonth() === 6;





const botFlow = {
  start: {
    message: (
      <Text>
        Olá! Seja bem-vindx ao <i>BDTech</i>!<br />
        Eu sou <b>Felinx</b>, assistente do BDT.<br />
        Eu te ajudo a ficar por dentro de tudo que está acontecendo no BDT!<br /><br />
        <span style={{ color: "red" }}>Infelizmente, estou em período de manutenção e não vou conseguir te atender no momento... :(</span>
        <br />
      </Text>
    )
  },
  credenciais: {
    message: (
      <Text>
        Assim que eu gosto! 💪<br /><br />
        Você recebeu um e-mail informando as suas credenciais para acessar a prova?
      </Text>
    ),
    options: [
      { label: 'Sim!', nextId: 'end' },
      { label: 'Ainda não.', nextId: 'credenciaisN' },
    ]
  },
  credenciaisN: {
    message: (
      <Text>
        Estranho... 🤨<br /><br />
        Entre em contato com o administrador do BDT e o informe sobre a sua situação.
      </Text>
    )
  },
  ignorar: {
    message: (
      <Text>
        Tudo bem, dyva... 💔<br /><br />
        Então fica para a próxima.
      </Text>
    )
  },
  end: {
    message: (
      <Text>
        Show de bola! 😁<br /><br />
        Para acessar a prova, basta clicar na aba <span style={{ color: "#b45f06", fontWeight: "bold" }}>EMBT<i style={{ fontWeight: "normal", color: "gray" }}>2025</i></span>, na parte superior da tela.<br /><br />
        Ou, se preferir, posso te encaminhar para lá se você clicar <a href="/embt" style={{ color: "#b45f06" }}>aqui</a>.
      </Text>
    )
  },
};

function ChatMessage({ sender, message, children }) {
  const isUser = sender === 'user';
  return (
    <div style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginBottom: 12 }}>
      {!isUser && <div
        style={{
          width: 64,
          height: 64,
          minWidth: 64,
          borderRadius: '50%',
          backgroundImage: `url(${Felinx.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginRight: 8,
          border: '1px solid #b45f06',
          boxShadow: '0 0 15px #b45f06',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />}
      <Card
        style={{ maxWidth: 400, backgroundColor: isUser ? '#ffd782' : '#fff' }}
      >
        {message}
        {children && <div style={{ marginTop: 10 }}>{children}</div>}
      </Card>
    </div>
  );
}

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('start');
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [hasShownStep, setHasShownStep] = useState({});

  useEffect(() => {
    if (!isChatOpen) return;

    const step = botFlow[currentStep];

    if (step && !hasShownStep[currentStep]) {
      setIsTyping(true);

      const typingDelay = setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', message: step.message, step }]);
        setHasShownStep(prev => ({ ...prev, [currentStep]: true })); // marca como "já mostrado"
        setIsTyping(false);
      }, 2000);

      return () => clearTimeout(typingDelay);
    }
  }, [currentStep, isChatOpen, hasShownStep]);



  const handleOptionClick = (label, nextId) => {
    setMessages(prev => [...prev, { sender: 'user', message: label }]);
    setTimeout(() => setCurrentStep(nextId), 500);
  };

  return (
    <>

      {
        isJardielBirthday && (
          <div
            style={{
              position: "fixed",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2000,
              textAlign: "center",
              background: "#fff8e1",
              padding: "16px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,.2)",
            }}
          >
            <Image
              src={Aniversariante}
              alt="Aniversariante"
              width={250}
              height={250}
              className="birthday-photo"
            />

            <Title level={3} style={{ marginTop: 12 }}>
              🎉 para beins 🎂
            </Title>

            <Text>
              muitos anos de p- vida 🥳
            </Text>
          </div>
        )}







      {/* Botão flutuante para abrir/fechar o chat */}
      <div
        onClick={() => setIsChatOpen(prev => !prev)}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundImage: `url(${Felinx.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1px solid #b45f06',
          boxShadow: '0 0 12px #b45f06',
          animation: 'pulse 1.5s ease-in-out infinite',
          cursor: 'pointer',
          zIndex: 1100,
        }}
      />

      {/* Janela do chat */}

      {isChatOpen && (
        <div
          className="chat-window"
          style={{
            position: 'fixed',
            bottom: 90,
            right: 24,
            width: '100%',
            maxWidth: 400,
            maxHeight: '80vh',
            overflow: 'auto',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            borderRadius: 8,
            backgroundColor: '#fff',
            padding: '16px',
            boxSizing: 'border-box',
          }}
        >
          <Layout>
            <Content style={{ padding: 16 }}>
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
      )}
    </>
  );
}