"use client";

import React, { useState, useEffect } from "react";
import { Button, Card, Typography, Space, Modal, Tag, Radio } from "antd";
import { RollbackOutlined, ReloadOutlined, RobotOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./page.module.css";

const { Title, Text } = Typography;

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
    [0, 4, 8], [2, 4, 6],             // Diagonais
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
};

// Função para encontrar jogada de vitória ou bloqueio imediato (Dificuldade Média)
const findSmartMove = (squares, player) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    const vals = [squares[a], squares[b], squares[c]];
    const playerCount = vals.filter(v => v === player).length;
    const nullCount = vals.filter(v => v === null).length;
    if (playerCount === 2 && nullCount === 1) {
      if (squares[a] === null) return a;
      if (squares[b] === null) return b;
      if (squares[c] === null) return c;
    }
  }
  return null;
};

// Algoritmo Minimax para a dificuldade Impossível
const minimax = (tempBoard, depth, isMaximizing) => {
  const winner = calculateWinner(tempBoard)?.winner;
  if (winner === "O") return 10 - depth;
  if (winner === "X") return depth - 10;
  if (!tempBoard.includes(null)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (tempBoard[i] === null) {
        tempBoard[i] = "O";
        const score = minimax(tempBoard, depth + 1, false);
        tempBoard[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (tempBoard[i] === null) {
        tempBoard[i] = "X";
        const score = minimax(tempBoard, depth + 1, true);
        tempBoard[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

const getBestMove = (currentBoard) => {
  let bestScore = -Infinity;
  let move = -1;
  const tempBoard = [...currentBoard];
  for (let i = 0; i < 9; i++) {
    if (tempBoard[i] === null) {
      tempBoard[i] = "O";
      const score = minimax(tempBoard, 0, false);
      tempBoard[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

export default function JogoDaVelha() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [difficulty, setDifficulty] = useState("Fácil");

  const result = calculateWinner(board);
  const isDraw = !result && !board.includes(null);

  // Lógica do Felinx (O)
  useEffect(() => {
    if (!isXNext && !result && !isDraw) {
      const timer = setTimeout(() => {
        makeFelinxMove();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, result, isDraw, difficulty]);

  const makeFelinxMove = () => {
    const availableMoves = board.map((val, idx) => (val === null ? idx : null)).filter((val) => val !== null);
    if (availableMoves.length === 0) return;

    let move;
    const winMove = findSmartMove(board, "O");
    const blockMove = findSmartMove(board, "X");

    if (difficulty === "Fácil") {
      move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    } else if (difficulty === "Médio") {
      // Tenta vencer, se não, tenta bloquear, se não, aleatório
      move = winMove ?? blockMove ?? availableMoves[Math.floor(Math.random() * availableMoves.length)];
    } else if (difficulty === "Difícil") {
      // 70% de chance de jogada perfeita, 30% de jogada média
      move = Math.random() < 0.7 
        ? getBestMove(board) 
        : (winMove ?? blockMove ?? availableMoves[Math.floor(Math.random() * availableMoves.length)]);
    } else {
      // Impossível: 100% Minimax
      move = getBestMove(board);
    }
    
    const newBoard = [...board];
    newBoard[move] = "O";
    setBoard(newBoard);
    setIsXNext(true);
  };

  const handleClick = (i) => {
    if (result || board[i] || !isXNext) return;

    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);
    setIsXNext(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (i) => {
    const isWinnerSquare = result?.line.includes(i);
    return (
      <button
        className={`${styles.square} ${board[i] === "X" ? styles.x : styles.o} ${isWinnerSquare ? styles.winner : ""}`}
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };

  return (
    <div className="content">
      <div className={styles.container}>
        <Space direction="vertical" align="center" style={{ width: '100%', marginBottom: 20 }}>
          <Title level={2}>Jogo da Velha BDT</Title>
          <div className={styles.players}>
            <Tag color={isXNext && !result && !isDraw ? "blue" : "default"} icon={<UserOutlined />}>Você (X)</Tag>
            <Text strong>VS</Text>
            <Tag color={!isXNext && !result && !isDraw ? "green" : "default"} icon={<RobotOutlined />}>Felinx (O)</Tag>
          </div>
        </Space>

        <div style={{ marginBottom: 20 }}>
          <Radio.Group value={difficulty} onChange={(e) => setDifficulty(e.target.value)} size="middle" buttonStyle="solid">
            <Radio.Button value="Fácil">Fácil</Radio.Button>
            <Radio.Button value="Médio">Médio</Radio.Button>
            <Radio.Button value="Difícil">Difícil</Radio.Button>
            <Radio.Button value="Impossível">Impossível</Radio.Button>
          </Radio.Group>
        </div>

        <Card className={styles.gameCard}>
          <div className={styles.status}>
            {result ? (
              <Text type={result.winner === "X" ? "success" : "danger"} strong size="large">
                {result.winner === "X" ? "🎉 Você venceu!" : "🤖 Felinx venceu!"}
              </Text>
            ) : isDraw ? (
              <Text strong>🤝 Empate!</Text>
            ) : (
              <Text secondary>{isXNext ? "Sua vez de jogar..." : "Felinx está pensando..."}</Text>
            )}
          </div>

          <div className={styles.board}>
            <div className={styles.row}>
              {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
            </div>
            <div className={styles.row}>
              {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
            </div>
            <div className={styles.row}>
              {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
            </div>
          </div>

          <div className={styles.actions}>
            <Button icon={<ReloadOutlined />} onClick={resetGame} type="dashed">
              Reiniciar
            </Button>
            <Link href="/arena">
              <Button icon={<RollbackOutlined />}>Sair</Button>
            </Link>
          </div>
        </Card>

        {(result || isDraw) && (
          <Modal
            title="Fim de Partida"
            open={true}
            footer={[
              <Button key="reset" type="primary" onClick={resetGame}>Jogar Novamente</Button>,
              <Link href="/arena" key="exit"><Button>Voltar para Arena</Button></Link>
            ]}
            closable={false}
          >
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <Title level={4}>
                {result?.winner === "X" ? "Excelente jogada!" : result?.winner === "O" ? "Felinx foi mais astuto!" : "Um empate digno!"}
              </Title>
              <Text>
                {result?.winner === "X" ? "Você demonstrou ótimo raciocínio lógico." : "Tente observar melhor os padrões do Felinx na próxima."}
              </Text>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}