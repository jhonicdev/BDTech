import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

import { Divider, Button } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

//IMAGENS
import { OMBT_Logo } from "../imgs/logo-ombt.png";

//ICONES
import { FileTextOutlined } from "@ant-design/icons";

export default function EMBT() {
  return (
    <div className="content">
        <Text>
            O <span style={{color: "darkblue"}}>EMBT</span> é um simulado do Exame Nacional do Ensino Médio (ENEM) e tem como fito o auxílio dos membros do BDT em sua árdua jornada de estudos.
            <strong> Ainda não há previsão de data para sua aplicação.</strong> No entanto, assim que essa data for definida, ela será avisada no grupo, junto às instruções necessárias para realização do simulado.
        </Text>
        <div></div>
        <Text>
            Esse será um simulado elaborado com muito carinho e dedicação destinado apenas a vocês, que desejam e precisam de ajuda para superar os desafios estudantis. Aguarde, pois, em breve, mais informações serão dadas! ;D
        </Text>
        
    </div>
  )
}