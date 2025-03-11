'use client'
import Image from "next/image";
import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import RegistroQuestao from '../../../components/RegistroQuestao';

import { Divider, Button } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

//IMAGENS
import { OMBT_Logo } from "../../../imgs/logo-ombt.png";

//ICONES
import { FileTextOutlined } from "@ant-design/icons";








export default function RegistroQuestao_OMBT() {

  const router = useRouter();
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
  }, [])



  const addQuestao = async (questao) => {
    console.log("Enviando questão para a API:", questao);
    const response = await fetch('/api/questoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questao),
    })

    console.log("Resposta da API:", response);
    if (response.ok) {
      window.alert(`A questão foi enviada com sucesso! :)
        `);
    } else { console.error('Falha ao adicionar questão:', await response.text()); }
  }


  return (
    <div className="content">
        <RegistroQuestao onAddQuestao={addQuestao} />
        
    </div>
  )
}