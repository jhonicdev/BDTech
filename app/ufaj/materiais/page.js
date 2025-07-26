import React from "react";
import styles from "./page.module.css";
import { Collapse, Divider, Tag } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { FileTextOutlined } from "@ant-design/icons";
import Image from "next/image";
import UFAJ_Logo from "../../imgs/logo-ufaj.png";

const { Panel } = Collapse;

export default function Materiais() {
    const items = [
        {
            key: "1",
            label: (
                <Text style={{ fontWeight: "bold" }}>
                    Vestibular UFAJ&nbsp;&nbsp;&nbsp;<Tag style={{ color: "orange" }}>2025</Tag>
                </Text>
            ),
            children: (
                <section className={styles["Provas-Gabaritos"]}>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://forms.gle/Yc2LEWY7zBT84CRC8">
                        <FileTextOutlined style={{ color: "orange" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text italic>Primeira Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://youtu.be/ZMFX84cZpPM?si=th0a48lQwpbHUCY9">
                        <FileTextOutlined style={{ color: "orange" }} />
                        <Title level={5}>SOLUÇÃO</Title>
                        <Text italic>Primeira Fase</Text>
                    </a>
                </section>
            ),
        },
    ];

    return (
        <div className="content">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <p style={{ textAlign: "center" }}>
                    🚨🚨🚨🚨🚨<br />
                    É com muito prazer que a reitoria da UFAJ anuncia que a 1º fase do <b>#vestUFAJ</b> está disponível!<br />
                    Desejamos a tod@s uma ótima prova e #vemserUFAJ! 💛🧡🤍<br />
                </p>
            </div>
            <br/>
            <Collapse items={items} accordion />

            

        </div>
    );
}
