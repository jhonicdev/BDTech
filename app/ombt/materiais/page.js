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

export default function Materiais() {
  return (
    <div className="content">
      <div className={styles["Materiais-Ano"]}>
        <Title level={2}>4ª OMBT 2025 | NÍVEL A | 22/12/24-28/12/24</Title>
        <Divider/>
        <section className={styles["Provas-Gabaritos"]}>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1abcuIYZk0t4CsHIc087eYDtY2-UF_eMY/view?usp=drive_link">
                <FileTextOutlined />
                <Title level={5} strong>PROVA</Title>
                <Text style={{color: "blue"}}>NÍVEL A</Text>
                <Text italic>Fase Única</Text> 
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1hXI5APDZh29aVKZwYxYbENa9N7bRv8i8/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>SOLUÇÃO</Title>
                <Text style={{color: "blue"}}>NÍVEL A</Text>
                <Text italic>Fase Única</Text>
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1UfhThd0xIAybQuNZt-QluWJFvqod2fmy/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>PAUTA DE CORREÇÃO</Title>
                <Text style={{color: "blue"}}>NÍVEL A</Text>
                <Text italic>Fase Única</Text>
            </a>
        </section>
      </div>

      <div className={styles["Materiais-Ano"]}>
        <Title level={2}>3ª OMBT 2024 | NÍVEL T | 15/06/24-13/07/24</Title>
        <Divider/>
        <section className={styles["Provas-Gabaritos"]}>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1jiW8F135QjXxWRTtjizOIK8WxAW5mLze/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5} strong>PROVA</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Primeira Fase</Text> 
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1HJfswc6TkhjyecW4VsvTWbFcEDG7zJvT/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>SOLUÇÃO</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Primeira Fase</Text>
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1dmo0ipomiLsUgjgRMaJVP9ID7zu1GESn/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5} strong>PROVA</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Segunda Fase</Text> 
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1lKN_p9lsmDUT_VH14G6TiHbtlYIYQF9S/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>SOLUÇÃO</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Segunda Fase</Text>
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1Ao7UMR150__RYn2wxBkKHKjYbgUHs9vB/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5} strong>PROVA</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Terceira Fase</Text> 
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1okFSwZerhb6Iud9Mjs1mLSUGcUsZmHG-/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>SOLUÇÃO</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Terceira Fase</Text>
            </a>
        </section>
      </div>

      <div className={styles["Materiais-Ano"]}>
        <Title level={2}>2ª OMBT 2023 | NÍVEL T | 18/11/23-20/01/24</Title>
        <Divider/>
        <section className={styles["Provas-Gabaritos"]}>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1m1abK3ZA_-DARF7_xaYt0_bpTzNncjUc/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5} strong>PROVA</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Primeira Fase</Text> 
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1Vpqd9RE3K5T5xofkXEopMc3qiYIaPRfd/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>SOLUÇÃO</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Primeira Fase</Text>
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1MldVDlBldhansEGbRN8cJlvPTA1gTXF5/view?usp=drivesdk">
                <FileTextOutlined />
                <Title level={5} strong>PROVA</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Segunda Fase</Text> 
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1-TCWf-t5eerOUcM1xTaTE_nLmw0b4DEP/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>SOLUÇÃO</Title>
                <Text style={{color: "rgb(158, 103, 0)"}}>NÍVEL T</Text>
                <Text italic>Segunda Fase</Text>
            </a>
        </section>
      </div>

      <div className={styles["Materiais-Ano"]}>
        <Title level={2}>1ª OMBT 2023 | NÍVEL A | 10/07/23-29/07/23</Title>
        <Divider/>
        <section className={styles["Provas-Gabaritos"]}>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/19cGxbHZPc_jiKMNyJpdVGSbl_0cp0LEE/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5} strong>PROVA</Title>
                <Text style={{color: "blue"}}>NÍVEL A</Text>
                <Text italic>Primeira Fase</Text> 
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1RFPwT-dt_6lDsLbhmRvJ_FwycBSueyQ7/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>SOLUÇÃO</Title>
                <Text style={{color: "blue"}}>NÍVEL A</Text>
                <Text italic>Primeira Fase</Text>
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1C2Jcdj-g0-qmAeyCUbBdNg4VGTsWcUiP/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5} strong>PROVA</Title>
                <Text style={{color: "blue"}}>NÍVEL A</Text>
                <Text italic>Segunda Fase</Text> 
            </a>
            <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1E4zGa6pldhtie8qUoqyfAG-sPvB17v3j/view?usp=sharing">
                <FileTextOutlined />
                <Title level={5}>SOLUÇÃO</Title>
                <Text style={{color: "blue"}}>NÍVEL A</Text>
                <Text italic>Segunda Fase</Text>
            </a>
        </section>
      </div>
    </div>
  );
}
