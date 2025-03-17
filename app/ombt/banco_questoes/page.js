'use client'
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import RegistroQuestao from '../../components/RegistroQuestao';

import { Divider, Button, Carousel } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

//COMPONENTES
import ListarQuestoes from "@/app/components/ListarQuestoes";

//IMAGENS
import { OMBT_Logo } from "../../imgs/logo-ombt.png";

//ICONES
import { PlusOutlined } from "@ant-design/icons";



const contentStyle = {
    height: '40px',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    background: 'orange',
};

const dificuldades = [
    { value: "ext_faceis", label: "Extremamente fáceis" },
    { value: "muito_faceis", label: "Muito fáceis" },
    { value: "faceis", label: "Fáceis" },
    { value: "normais", label: "Normais" },
    { value: "dificeis", label: "Difíceis" },
    { value: "muito_dificeis", label: "Muito difíceis" },
    { value: "ext_dificeis", label: "Extremamente difíceis" },
];



export default function Banco_Questoes() {


    const [questoes, setQuestoes] = useState([]);
    const [selectDificuldade, setSelectDificuldade] = useState("ext_faceis");

    const fetchQuestoes = async () => {
        const response = await fetch(`/api/questoes/${selectDificuldade}`);
        const dados = await response.json();
        setQuestoes(dados);
    }

    useEffect(() => {
        fetchQuestoes();
    }, [selectDificuldade])




    return (
        <div className="content">
            <Title level={3}>Banco de Questões da OMBT</Title>
            <Button href="./banco_questoes/registro">
                <PlusOutlined />
                ENVIAR NOVA QUESTÃO
            </Button>


            <div className={styles.Questoes}>
                <Carousel
                    arrows
                    infinite={false}
                    afterChange={(index) => setSelectDificuldade(dificuldades[index].value)}
                >
                    {dificuldades.map((item) => (
                        <div key={item.value}>
                            <h3 style={contentStyle}>{item.label}</h3>
                        </div>
                    ))}
                </Carousel>
                
                <ListarQuestoes questoes={questoes} selectDificuldade={selectDificuldade} />
            </div>
        </div>
    )
}