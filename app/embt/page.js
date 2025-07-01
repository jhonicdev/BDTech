'use client'

import React, { useState } from "react";
import { Button, Modal, Input, Typography } from "antd";
import Embt2025 from "../components/embt2025-1dia";
import NotasEmbt2025 from "../components/notas-embt2025";

const { Text } = Typography;

export default function EMBT() {
  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);
  const [usuarioId, setUsuarioId] = useState("Usuário desconhecido");
  const [usuarioNome, setUsuarioNome] = useState("Usuário desconhecido");
  const [usuarioRespostas1dia, setUsuarioRespostas1dia] = useState([]);
  const [usuarioRespostas2dia, setUsuarioRespostas2dia] = useState([]);
  const [usuarioNotaLinguagens, setUsuarioNotaLinguagens] = useState([]);
  const [usuarioNotaHumanas, setUsuarioNotaHumanas] = useState([]);
  const [usuarioNotaNatureza, setUsuarioNotaNatureza] = useState([]);
  const [usuarioNotaMatematica, setUsuarioNotaMatematica] = useState([]);
  const [usuarioNotaRedacao, setUsuarioNotaRedacao] = useState([]);
  const [erroLogin, setErroLogin] = useState("");

  const fetchUsuario = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, senha }),
      });

      if (!response.ok) {
        throw new Error("Usuário ou senha inválidos");
      }

      const data = await response.json();

      if (data.length > 0) {
        setUsuarioId(data[0].id);
        setUsuarioNome(data[0].nome);
        setUsuarioRespostas1dia(data[0].respostas_embt2025dia1);
        setUsuarioRespostas2dia(data[0].respostas_embt2025dia2);
        setUsuarioNotaLinguagens(data[0].nota_linguagens);
        setUsuarioNotaHumanas(data[0].nota_humanas);
        setUsuarioNotaNatureza(data[0].nota_natureza);
        setUsuarioNotaMatematica(data[0].nota_matematica);
        setUsuarioNotaRedacao(data[0].nota_redacao);
        setLogado(true);
        setErroLogin("");
      } else {
        setErroLogin("Usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setErroLogin("Erro ao tentar login.");
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    await fetchUsuario();
  };

  return (
    <div className="content">
      {logado ? (
        /*<Embt2025 idUsuario={usuarioId} nomeUsuario={usuarioNome} respostas1dia={usuarioRespostas1dia} />
        <NotasEmbt2025 
          idUsuario={usuarioId} nomeUsuario={usuarioNome} respostas1dia={usuarioRespostas1dia} respostas2dia={usuarioRespostas2dia}
          notaLinguagens={usuarioNotaLinguagens} notaHumanas={usuarioNotaHumanas} notaNatureza={usuarioNotaNatureza} notaMatematica={usuarioNotaMatematica} notaRedacao={usuarioNotaRedacao}
        />*/
        <>Indisponível!</>
      ) : (
        <Modal
          title="Login"
          open={!logado}
          footer={null}
          closable={false}
          centered
        >
          <form onSubmit={onLogin}>
            <Input
              placeholder="Usuário"
              maxLength={10}
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            <Input.Password
              placeholder="Senha"
              maxLength={100}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            {erroLogin && (
              <Text type="danger" style={{ display: "block", marginBottom: 10 }}>
                {erroLogin}
              </Text>
            )}
            <Button type="primary" htmlType="submit" block>
              Acessar
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
}
