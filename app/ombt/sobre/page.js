import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

import { Divider, Button } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

//IMAGENS
import { OMBT_Logo } from "../../imgs/logo-ombt.png";

//ICONES
import { FileTextOutlined } from "@ant-design/icons";

export default function Sobre_OMBT() {
  return (
    <div className="content">
        <Text>
        A fictícia Olimpíada de Matemática do Bonde do Tigrão (OMBT) tem, por finalidade principal, ampliar o interesse e o intelecto no âmbito matemático, além de aumentar a interação dos integrantes no grupo do BDT.
        </Text>
        <p></p>
        <Text>
            <strong>Elaborada por </strong><i>jonataspereira0712@gmail.com</i>
        </Text>
        <p></p>
        <Text>
            <strong>Outras referências: </strong>
            <span>
                IMO (International Mathematical Olympiad),
                ITA (Instituto Tecnológico de Aeronáutica),
                OBM (Olimpíada Brasileira de Matemática),
                OBMEP (Olimpíada Brasileira de Matemática das Escolas Públicas e Privadas),
                OPM (Olimpíada Paraibana de Matemática),
                CANGURU (Canguru de Matemática),
                MANDACARU (Olimpíada Mandacaru de Matemática),
                OMIF (Olimpíada de Matemática das Instituições Federais),
                OIM (Olimpíada Itabirana de Matemática),
                ENEM (Exame Nacional do Ensino Médio),
                UFAJ (Universidade Federal do Algodão de Jandaíra)
            </span>
        </Text>
    </div>
  )
}