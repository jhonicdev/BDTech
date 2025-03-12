import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import React from "react";
import { Divider, Button, Input, Radio, Form, Checkbox } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import styles from '../ombt/banco_questoes/page.module.css';


const { TextArea } = Input;

//ICONES
import { CheckCircleOutlined } from "@ant-design/icons";


export default function RegistroQuestao({ onAddQuestao }) {


    function formatarDataComHifen(data) {
        const date = new Date(data);

        const dia = date.getDate().toString().padStart(2, '0');
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const ano = date.getFullYear();

        const dataFormatada = `${ano}-${mes}-${dia}`;

        return dataFormatada;
    }


    const [titulo, setTitulo] = useState('');
    const [enunciado, setEnunciado] = useState('');
    const [imagem, setImagem] = useState('');
    const [dataRegistro, setDataRegistro] = useState(formatarDataComHifen(Date.now()));
    const [alternativaA, setAlternativaA] = useState('');
    const [alternativaB, setAlternativaB] = useState('');
    const [alternativaC, setAlternativaC] = useState('');
    const [alternativaD, setAlternativaD] = useState('');
    const [alternativaE, setAlternativaE] = useState('');
    const [disciplina, setDisciplina] = useState('Matemática');
    const [conteudos, setConteudos] = useState([]);
    const [dificuldade, setDificuldade] = useState('');
    const [habilidade, setHabilidade] = useState('0');
    const [dissertativa, setDissertativa] = useState(false);
    const [correta, setCorreta] = useState('');
    const [elaborador, setElaborador] = useState('Autor desconhecido');
    const [ativa, setAtiva] = useState(false);


    const opcoesConteudo = [
        "Álgebra",
        "Análise combinatória",
        "Aritmética",
        "Contagem",
        "Funções",
        "Geometria espacial",
        "Geometria plana",
        "Gráficos",
        "Múltiplos e divisores",
        "Paridade",
        "Probabilidade",
        "Raciocínio lógico",
        "Razão e proporção",
        "Sequências e progressões",
        "Outro",
    ];



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando questão:", {
            titulo,
            enunciado,
            imagem,
            alternativaA,
            alternativaB,
            alternativaC,
            alternativaD,
            alternativaE,
            disciplina,
            conteudos,
            dificuldade,
            habilidade,
            dissertativa,
            correta,
            dataRegistro,
            elaborador,
            ativa
        });

        onAddQuestao({
            titulo,
            enunciado,
            imagem,
            alternativaA,
            alternativaB,
            alternativaC,
            alternativaD,
            alternativaE,
            disciplina,
            conteudos,
            dificuldade,
            habilidade,
            dissertativa,
            correta,
            dataRegistro,
            elaborador,
            ativa
        })

    }






    return (
        <form onSubmit={handleSubmit}>
            <Title level={3}>Contribua para o Banco de Questões da OMBT! 😎</Title>

            <Input maxLength="100" style={{ fontSize: "17px", fontWeight: "bolder", marginTop: "30px" }} placeholder="Título da questão (opcional)" variant="borderless" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <TextArea rows={4} placeholder="Enunciado da questão" value={enunciado} onChange={(e) => setEnunciado(e.target.value)} />
            <Text style={{ color: "red" }}>*Infelizmente, ainda não é permitido anexar imagens nas questões. :\</Text>

            <div style={{ marginTop: "50px" }}>
                <p>
                    <Text>Selecione a alternativa que for a <strong>correta</strong>.</Text>
                </p>
                <Radio.Group
                    value={correta}
                    onChange={
                        (e) => {
                            setCorreta(e.target.value)
                        }
                    }
                    className={styles.Alternativas}
                >
                    <p className={styles.Alternativa}>
                        <Radio value="A" style={{fontWeight: "bold"}} />
                        <TextArea rows={1} placeholder="Enunciado da alternativa" className={styles.TextArea} value={alternativaA} onChange={(e) => setAlternativaA(e.target.value)} />
                    </p>
                    <p className={styles.Alternativa}>
                        <Radio value="B" style={{fontWeight: "bold"}} />
                        <TextArea rows={1} placeholder="Enunciado da alternativa" className={styles.TextArea} value={alternativaB} onChange={(e) => setAlternativaB(e.target.value)} />
                    </p>
                    <p className={styles.Alternativa}>
                        <Radio value="C" style={{fontWeight: "bold"}} />
                        <TextArea rows={1} placeholder="Enunciado da alternativa" className={styles.TextArea} value={alternativaC} onChange={(e) => setAlternativaC(e.target.value)} />
                    </p>
                    <p className={styles.Alternativa}>
                        <Radio value="D" style={{fontWeight: "bold"}} />
                        <TextArea rows={1} placeholder="Enunciado da alternativa" className={styles.TextArea} value={alternativaD} onChange={(e) => setAlternativaD(e.target.value)} />
                    </p>
                    <p className={styles.Alternativa}>
                        <Radio value="E" style={{fontWeight: "bold"}} />
                        <TextArea rows={1} placeholder="Enunciado da alternativa" className={styles.TextArea} value={alternativaE} onChange={(e) => setAlternativaE(e.target.value)} />
                    </p>
                </Radio.Group>
            </div>

            <div style={{ marginTop: "50px" }}>
                <Form layout="vertical">
                    <Form.Item label="Quais são os principais conteúdos abordados nessa questão?">
                    <Checkbox.Group
                        options={opcoesConteudo.map((opcao) => ({
                            label: opcao,
                            value: opcao,
                            disabled: opcao === "Gráficos", // Desabilita a opção "Gráficos"
                        }))}
                        value={conteudos}
                        onChange={setConteudos}
                        />
                    </Form.Item>
                </Form>
            </div>

            <div style={{ marginTop: "50px" }}>
                <Form layout="vertical">
                    <Form.Item label="Qual das categorias abaixo melhor define a dificuldade dessa questão?">
                        <Radio.Group value={dificuldade} onChange={(e) => setDificuldade(e.target.value)}>
                            <Radio.Button value="Extremamente fácil">Extremamente fácil</Radio.Button>
                            <Radio.Button value="Muito fácil">Muito fácil</Radio.Button>
                            <Radio.Button value="Fácil">Fácil</Radio.Button>
                            <Radio.Button value="Normal">Normal</Radio.Button>
                            <Radio.Button value="Difícil">Difícil</Radio.Button>
                            <Radio.Button value="Muito difícil">Muito difícil</Radio.Button>
                            <Radio.Button value="Extremamente difícil">Extremamente difícil</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </div>

            <div style={{ marginTop: "50px" }}>
                <Text>Quem elaborou essa questão?</Text>
                <Input placeholder="Elaborador da questão" variant="underlined" value={elaborador} onChange={(e) => setElaborador(e.target.value)} />
            </div>

            <div style={{ marginTop: "50px" }}>
                <button type='submit'>
                    <Button className={styles.BotaoEnviar}>Enviar questão para análise</Button>
                </button>
            </div>
            
            
            

        </form>
    )
}