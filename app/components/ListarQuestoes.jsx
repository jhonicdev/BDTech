import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import React from "react";
import { Divider, Button, Input, Radio, Form, Space, Card, Spin, Tag } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import styles from '../ombt/banco_questoes/page.module.css';
import formatarData from './FormatarData';
import validarAlternativa from './ValidarAlternativa'

// ICONES
import { CheckCircleOutlined } from "@ant-design/icons";


const { TextArea } = Input;

export default function ListarQuestoes({ questoes }) {
    const [answers, setAnswers] = useState({}); // Armazenamento das respostas selecionadas

    // Função para lidar com a seleção de resposta
    const handleAnswerChange = (qId, value) => {
        setAnswers({
            ...answers,
            [qId]: value,
        });
    };


    const corDificuldade = (dificuldade) => {
        switch (dificuldade) {
            case "Extremamente fácil":
                return "#006400";
            case "Muito fácil":
                return "#00b400";
            case "Fácil":
                return "#00dc00";
            case "Difícil":
                return "#c44d4d";
            case "Muito difícil":
                return "#bb0b0b";
            case "Extremamente difícil":
                return "#800000";
            default:
                return "yellow";
        }
            
    }
    


    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {
                questoes && questoes.length > 0 ? (
                    questoes.map((q) => (
                        <Card key={q.id} title={(q.titulo || "Sem título")} size="small"
                            extra={
                                <span  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',   // Faz as tags se moverem para a linha seguinte quando necessário
                                    gap: '3px',         // Define um pequeno espaçamento entre as tags
                                    maxWidth: '100%'    // Garante que o conteúdo se ajuste no espaço disponível
                                }}>
                                    {
                                        q.conteudos.replace(/[{}"]/g, "").split(",").map(c => {
                                            return <Tag color="gray" key={c}>{c}</Tag>
                                        })
                                    }
                                    
                                    <Tag color={corDificuldade(q.dificuldade)}>{q.dificuldade}</Tag>
                                </span>
                                
                            }
                        >

                            <Text>{q.enunciado}</Text>
                            

                            <Radio.Group
                                value={answers[q.id] || null}
                                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                                className={styles.Alternativas} style={{ marginTop: "20px" }}
                            >
                                <p className={styles.Alternativa}>
                                    <Radio value="A" style={{ fontWeight: "bold" }} />
                                    <Text>{q.alternativa_a}</Text>
                                </p>
                                <p className={styles.Alternativa}>
                                    <Radio value="B" style={{ fontWeight: "bold" }} />
                                    <Text>{q.alternativa_b}</Text>
                                </p>
                                <p className={styles.Alternativa}>
                                    <Radio value="C" style={{ fontWeight: "bold" }} />
                                    <Text>{q.alternativa_c}</Text>
                                </p>
                                <p className={styles.Alternativa}>
                                    <Radio value="D" style={{ fontWeight: "bold" }} />
                                    <Text>{q.alternativa_d}</Text>
                                </p>
                                <p className={styles.Alternativa}>
                                    <Radio value="E" style={{ fontWeight: "bold" }} />
                                    <Text>{q.alternativa_e}</Text>
                                </p>
                            </Radio.Group>

                            <Button
                                style={{ marginTop: "20px" }}
                                onClick={() => validarAlternativa(answers, q.id, q.correta)}
                            >
                                Validar resposta
                            </Button>

                            <Text style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end", fontSize: "10px" }}>
                                Questão elaborada por {q.elaborador}. Enviada em {formatarData(q.data_registro)}.
                            </Text>
                        </Card>
                    ))
                ) : (
                    <Spin />
                )
            }
        </Space>
    );
}