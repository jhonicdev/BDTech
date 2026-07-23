"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Input, Typography, Space, Progress, Statistic, Row, Col } from "antd";
import { RollbackOutlined, PlayCircleOutlined, TrophyOutlined, ThunderboltOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./page.module.css";

const { Title, Text } = Typography;

export default function MestreDoCalculo() {
  const [gameState, setGameState] = useState("idle"); // idle, playing, finished
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [question, setQuestion] = useState({ a: 0, b: 0, op: "+", ans: 0 });
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null); // 'correct', 'wrong'
  
  const inputRef = useRef(null);
  const INITIAL_TIME = 60;

  const generateQuestion = () => {
    const ops = ["+", "-", "*"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, ans;

    if (op === "*") {
      a = Math.floor(Math.random() * 10) + 2;
      b = Math.floor(Math.random() * 10) + 2;
      ans = a * b;
    } else {
      a = Math.floor(Math.random() * 90) + 10;
      b = Math.floor(Math.random() * 90) + 10;
      if (op === "-" && a < b) [a, b] = [b, a];
      ans = op === "+" ? a + b : a - b;
    }

    setQuestion({ a, b, op, ans });
    setUserAnswer("");
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(INITIAL_TIME);
    setGameState("playing");
    generateQuestion();
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  useEffect(() => {
    let timer;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("finished");
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (gameState !== "playing" || userAnswer === "") return;

    if (parseInt(userAnswer) === question.ans) {
      setScore(prev => prev + 10);
      setFeedback("correct");
      generateQuestion();
    } else {
      setFeedback("wrong");
      setUserAnswer("");
    }
    
    setTimeout(() => setFeedback(null), 500);
  };

  return (
    <div className="content">
      <div className={styles.container}>
        <Title level={2}>Mestre do Cálculo</Title>
        <Text type="secondary">Resolva o máximo de problemas que puder em {INITIAL_TIME} segundos!</Text>

        <Card className={styles.gameCard}>
          {gameState === "idle" && (
            <div className={styles.screen}>
              <ThunderboltOutlined className={styles.iconLarge} />
              <Button type="primary" size="large" icon={<PlayCircleOutlined />} onClick={startGame}>
                Iniciar Desafio
              </Button>
              <Link href="/arena"><Button type="text">Voltar</Button></Link>
            </div>
          )}

          {gameState === "playing" && (
            <div className={styles.playArea}>
              <div className={styles.header}>
                <Statistic title="Score" value={score} prefix={<TrophyOutlined />} />
                <div className={styles.timer}>
                  <Progress 
                    type="circle" 
                    percent={(timeLeft / INITIAL_TIME) * 100} 
                    format={() => `${timeLeft}s`} 
                    size={60}
                    status={timeLeft < 10 ? "exception" : "normal"}
                  />
                </div>
              </div>

              <div className={`${styles.questionBox} ${feedback ? styles[feedback] : ""}`}>
                <Text className={styles.questionText}>
                  {question.a} {question.op === "*" ? "×" : question.op} {question.b} =
                </Text>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                  ref={inputRef}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="?"
                  size="large"
                  type="number"
                  className={styles.input}
                />
                <Button type="primary" size="large" block onClick={handleSubmit} className={styles.submitBtn}>
                  Responder
                </Button>
              </form>
            </div>
          )}

          {gameState === "finished" && (
            <div className={styles.screen}>
              <TrophyOutlined className={styles.iconLarge} style={{ color: "#faad14" }} />
              <Title level={3}>Tempo Esgotado!</Title>
              <Statistic title="Pontuação Final" value={score} />
              <Space style={{ marginTop: 20 }}>
                <Button type="primary" onClick={startGame}>Jogar Novamente</Button>
                <Link href="/arena"><Button icon={<RollbackOutlined />}>Sair</Button></Link>
              </Space>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}