import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import React from "react";
import { Divider, Button, Input, Radio, Form, Space, Card, Spin } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import styles from '../ombt/banco_questoes/page.module.css';

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
    // Função para validar a resposta
    const validateAnswer = (qId, correctAnswer) => {
        if (answers[qId] == null) return;
        if (answers[qId] === correctAnswer) {
            alert("Resposta correta. Parabéns! ;)");
        } else {
            alert("Resposta errada! :(");
        }
    };


    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {
                questoes && questoes.length > 0 ? (
                    questoes.map((q) => (
                        <Card key={q.id} title={"Questão " + (questoes.indexOf(q) + 1) + " - " + q.dificuldade + " - "  + (q.titulo || "Sem título")} size="small">
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
                                onClick={() => validateAnswer(q.id, q.correta)}
                            >
                                Validar resposta
                            </Button>

                            <Text style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end", fontSize: "10px" }}>
                                Questão elaborada por {q.elaborador}.
                            </Text>
                        </Card>
                    ))
                ) : (
                    <Text>Carregando questões <Spin /></Text>
                )
            }
        </Space>
    );
}