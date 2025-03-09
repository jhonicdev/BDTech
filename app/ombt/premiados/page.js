'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

import { Divider, Button } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

import { Table, Modal } from 'antd';

//IMAGENS
import { OMBT_Logo } from "../../imgs/logo-ombt.png";

//ICONES
import { FileTextOutlined, InfoCircleOutlined } from "@ant-design/icons";


export default function Materiais() {
    const [modalAberto, setModalAberto] = useState(null);

    const abrirModal = (id) => setModalAberto(id);
    const fecharModal = () => setModalAberto(null);

    const columns = [
        { title: "Nome do aluno", dataIndex: "nome", key: "nome" },
        { title: "Nota obtida na última fase", dataIndex: "nota", key: "nota" },
        { title: "Premiação obtida", dataIndex: "premiacao", key: "premiacao" },
    ];

    const Premiados_4OMBT = [
        { key: "1", nome: "PABLO", nota: 111, premiacao: "Medalha de Prata" }
    ];
    const Premiados_3OMBT = [
        { key: "1", nome: "PABLO E. LEMENTAR", nota: "4,5", premiacao: "Medalha de Bronze" },
        { key: "2", nome: "JONAS", nota: "Não realizada", premiacao: "Certificado de participação" },
        { key: "3", nome: "JP", nota: "Não realizada", premiacao: "Certificado de participação" },
    ];
    const Premiados_2OMBT = [
        { key: "1", nome: "PABLO", nota: "40,25", premiacao: "Medalha de Ouro" },
        { key: "2", nome: "JONAS", nota: "8,75", premiacao: "Menção Honrosa" }
    ]
    const Premiados_1OMBT = [
        { key: "1", nome: "PABLO", nota: "50", premiacao: "Medalha de Prata" }
    ]

    return (
        <div className="content">
            <div className={styles["Materiais-Ano"]}>
                <Title level={2}>4ª OMBT 2025 | NÍVEL A
                    <InfoCircleOutlined onClick={() => abrirModal("4OMBT")} style={{ marginLeft: "20px" }} />
                </Title>
                <Divider />
                <Table dataSource={Premiados_4OMBT} columns={columns} />
            </div>

            <div className={styles["Materiais-Ano"]}>
                <Title level={2}>3ª OMBT 2024 | NÍVEL T
                    <InfoCircleOutlined onClick={() => abrirModal("3OMBT")} style={{ marginLeft: "20px" }} />
                </Title>
                <Divider />
                <Table dataSource={Premiados_3OMBT} columns={columns} />
            </div>

            <div className={styles["Materiais-Ano"]}>
                <Title level={2}>2ª OMBT 2023 | NÍVEL T
                    <InfoCircleOutlined onClick={() => abrirModal("2OMBT")} style={{ marginLeft: "20px" }} />
                </Title>
                <Divider />
                <Table dataSource={Premiados_2OMBT} columns={columns} />
            </div>

            <div className={styles["Materiais-Ano"]}>
                <Title level={2}>1ª OMBT 2023 | NÍVEL A
                    <InfoCircleOutlined onClick={() => abrirModal("1OMBT")} style={{ marginLeft: "20px" }} />
                </Title>
                <Divider />
                <Table dataSource={Premiados_1OMBT} columns={columns} />
            </div>





            <Modal title="Pontuações mínimas para cada premiação" open={modalAberto === "4OMBT"} onOk={fecharModal} onCancel={fecharModal}>
                <p>Medalha de Ouro: <strong>113 pontos</strong></p>
                <p>Medalha de Prata: <strong>86 pontos</strong></p>
                <p>Medalha de Bronze: <strong>59 pontos</strong></p>
                <p>Menção Honrosa: <strong>33 pontos</strong></p>
                <a target="_blank" href="https://drive.google.com/file/d/1al-wi9zaiNj5zNUmTk4jdIPdo85Sspry/view?usp=sharing">Acessar Lista de Premiados em PDF</a>
                <p style={{ marginTop: "10px" }}>Nessa prova, a nota máxima foi de <strong>33 pontos</strong>.</p>
            </Modal>

            <Modal title="Pontuações mínimas para cada premiação" open={modalAberto === "3OMBT"} onOk={fecharModal} onCancel={fecharModal}>
                <p>Medalha de Ouro: <strong>8,5 pontos</strong></p>
                <p>Medalha de Prata: <strong>6,5 pontos</strong></p>
                <p>Medalha de Bronze: <strong>3 pontos</strong></p>
                <p>Menção Honrosa: <strong>1,5 pontos</strong></p>
                <p style={{ marginTop: "10px" }}>Nessa prova, a nota máxima foi de <strong>10 pontos</strong>.</p>
            </Modal>

            <Modal title="Pontuações mínimas para cada premiação" open={modalAberto === "2OMBT"} onOk={fecharModal} onCancel={fecharModal}>
                <p>Medalha de Ouro: <strong>40 pontos</strong></p>
                <p>Medalha de Prata: <strong>30 pontos</strong></p>
                <p>Medalha de Bronze: <strong>20 pontos</strong></p>
                <p>Menção Honrosa: <strong>2 pontos</strong></p>
                <p style={{ marginTop: "10px" }}>Nessa prova, a nota máxima foi de <strong>100 pontos</strong>.</p>
            </Modal>

            <Modal title="Pontuações mínimas para cada premiação" open={modalAberto === "1OMBT"} onOk={fecharModal} onCancel={fecharModal}>
                <p>Medalha de Ouro: <strong>75 pontos</strong></p>
                <p>Medalha de Prata: <strong>50 pontos</strong></p>
                <p>Medalha de Bronze: <strong>25 pontos</strong></p>
                <p>Menção Honrosa: <strong>10 pontos</strong></p>
                <p style={{ marginTop: "10px" }}>Nessa prova, a nota máxima foi de <strong>100 pontos</strong>.</p>
            </Modal>
        </div>
    );
}
