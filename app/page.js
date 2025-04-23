'use client';

import { useState, useEffect } from 'react';
import { Layout, Typography, Button, Card, Avatar, Space, Table } from 'antd';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';
import Felinx from "./embt/imgs/felinx.jpg";


const { Text, Title } = Typography;
const { Header, Content } = Layout;


const notaTableData = [

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
        Olá! Seja bem-vindx ao <i>BDTech</i>!<br />
        Eu sou <b>Felinx</b>, assistente do BDT.<br /><br />
        Estou por dentro de tudo sobre a <span style={{ color: "#b45f06", fontWeight: "bold" }}>EMBT</span>!<br />
        Nesse exato momento, está acontecendo a aplicação do primeiro dia <span style={{ color: "#b45f06", fontWeight: "bold" }}>EMBT<i style={{ fontWeight: "normal", color: "gray" }}>2025</i></span>!<br /><br />
        Tá afim de fazer? 😏<br />
      </Text>
    ),
    options: [
      { label: 'Bora!', nextId: 'credenciais' },
      { label: 'Tô afim não...', nextId: 'ignorar' },
    ]
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






  notas: {
    message: (
      <div>
        <Text>Olha aí suas notas parciais da EMBT, campeão!</Text>
        <div style={{ marginTop: 16 }}>
          <Table
            dataSource={notaTableData}
            columns={notaTableColumns}
            pagination={false}
            size="small"
            bordered
          />
        </div>
      </div>
    ),
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

  useEffect(() => {
    const step = botFlow[currentStep];
    if (step) {
      setIsTyping(true);

      const typingDelay = setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', message: step.message, step }]);
        setIsTyping(false);
      }, 2000);

      return () => clearTimeout(typingDelay);
    }
  }, [currentStep]);

  const handleOptionClick = (label, nextId) => {
    setMessages(prev => [...prev, { sender: 'user', message: label }]);
    setTimeout(() => setCurrentStep(nextId), 500);
  };

  return (
    <Layout>
      <Content style={{ padding: 24 }}>
        {messages.map((msg, idx) => (

          <ChatMessage key={idx} sender={msg.sender} message={msg.message}>
            {msg.sender === 'bot' && msg.step?.options && (
              <Space wrap>
                {msg.step.options.map((opt, i) => (
                  <Button key={i} onClick={() => handleOptionClick(opt.label, opt.nextId)}>{opt.label}</Button>
                ))}
              </Space>

            )}

            {msg.sender === 'bot' && msg.step?.icons && (
              <Space wrap>
                {msg.step.icons.map((opt, i) => (
                  <Button key={i} icon={opt.icon} onClick={() => handleOptionClick(opt.label, opt.nextId)} />
                ))}
              </Space>
            )}

          </ChatMessage>
        ))}

        {isTyping && (
          <ChatMessage sender="bot" message={
            <div style={{ fontStyle: 'italic', opacity: 0.7 }}>
              Digitando<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
            </div>
          } />
        )}
      </Content>
    </Layout>
  );
}