import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

import { Divider, Button, Card, Row, Col, Tag } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import Meta from 'antd/lib/card/Meta';

// ICONES
import { RocketOutlined, TrophyOutlined, PlayCircleOutlined } from "@ant-design/icons";

const JOGOS = [
  {
    id: "logica-bdt",
    titulo: "Mestre do Cálculo",
    descricao: "Resolva problemas matemáticos contra o relógio.",
    categoria: "Lógica",
    cor: "purple",
    path: "/arena/mestre_calculo"
  },
  {
    id: "velha-bdt",
    titulo: "Jogo da Velha BDT",
    descricao: "Desafie Felinx em uma partida clássica.",
    categoria: "Casual",
    cor: "green",
    path: "/arena/velha"
  },
  {
    id: "quiz-2025",
    titulo: "Desafio EMBT 2025",
    descricao: "Teste seus conhecimentos com as questões da EMBT!",
    categoria: "Simulado",
    cor: "blue",
    path: "/ombt/simulado" // Exemplo de rota
  },
];

export default function Arena_BDT() {
  return (
    <div className="content">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title level={2}>
          <RocketOutlined /> Arena BDT
        </Title>
        <Text type="secondary">
          Escolha seu desafio e suba no ranking da Arena BDT!
        </Text>
      </div>

      <Divider orientation="center">Jogos Disponíveis</Divider>

      <Row gutter={[16, 24]}>
        {JOGOS.map((jogo) => (
          <Col xs={24} sm={12} lg={8} key={jogo.id}>
            <Card
              hoverable
              cover={
                <div style={{ height: '140px', background: `var(--ant-primary-1)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <PlayCircleOutlined style={{ fontSize: '48px', color: jogo.cor === 'blue' ? '#1890ff' : jogo.cor }} />
                </div>
              }
              actions={[
                <Link href={jogo.path} key="play">
                  <Button type="primary" icon={<PlayCircleOutlined />}>Jogar Agora</Button>
                </Link>
              ]}
            >
              <Tag color={jogo.cor}>{jogo.categoria}</Tag>
              <Meta title={jogo.titulo} description={jogo.descricao} style={{ marginTop: '10px' }} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}