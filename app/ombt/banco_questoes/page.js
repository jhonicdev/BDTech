'use client'
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import RegistroQuestao from '../../components/RegistroQuestao';

import { Divider, Button } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

//COMPONENTES
import ListarQuestoes from "@/app/components/ListarQuestoes";

//IMAGENS
import { OMBT_Logo } from "../../imgs/logo-ombt.png";

//ICONES
import { PlusOutlined } from "@ant-design/icons";






export default function Banco_Questoes() {


    const [questoes, setQuestoes] = useState([]);

    const fetchQuestoes = async () => {
        const response = await fetch('/api/questoes');
        const dados = await response.json();
        setQuestoes(dados);
    }

    useEffect(() => {
        fetchQuestoes();
    }, [])




    return (
        <div className="content">   
            <Title level={3}>Questões validadas pela comissão do Banco de Questões</Title>
            <Button href="./banco_questoes/registro">
                <PlusOutlined />
                ENVIAR NOVA QUESTÃO
            </Button>

            <div className={styles.Questoes}>
                
                <ListarQuestoes questoes={questoes} />
            </div>
        </div>
    )
}