import React from "react";
import styles from "./page.module.css";
import { Collapse, Divider, Tag } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { FileTextOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export default function Materiais() {
    const items = [
        {
            key: "1",
            label: (
                <Text style={{ fontWeight: "bold" }}>
                    4ª OMBT 2025&nbsp;&nbsp;&nbsp;<Tag style={{ color: "blue" }}>NÍVEL A</Tag><Tag>22/12/24 a 28/12/24</Tag>
                </Text>
            ),
            children: (
                <section className={styles["Provas-Gabaritos"]}>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1abcuIYZk0t4CsHIc087eYDtY2-UF_eMY/view?usp=drive_link">
                        <FileTextOutlined style={{ color: "blue" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text style={{ color: "blue" }}>NÍVEL A</Text>
                        <Text italic>Fase Única</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1hXI5APDZh29aVKZwYxYbENa9N7bRv8i8/view?usp=sharing">
                        <FileTextOutlined style={{ color: "blue" }} />
                        <Title level={5}>SOLUÇÃO</Title>
                        <Text style={{ color: "blue" }}>NÍVEL A</Text>
                        <Text italic>Fase Única</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1UfhThd0xIAybQuNZt-QluWJFvqod2fmy/view?usp=sharing">
                        <FileTextOutlined style={{ color: "blue" }} />
                        <Title level={5}>PAUTA DE CORREÇÃO</Title>
                        <Text style={{ color: "blue" }}>NÍVEL A</Text>
                        <Text italic>Fase Única</Text>
                    </a>
                </section>
            ),
        },
        {
            key: "2",
            label: (
                <Text style={{ fontWeight: "bold" }}>
                    3ª OMBT 2024&nbsp;&nbsp;&nbsp;<Tag style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Tag><Tag>15/06/24 a 13/07/24</Tag>
                </Text>
            ),
            children: (
                <section className={styles["Provas-Gabaritos"]}>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1jiW8F135QjXxWRTtjizOIK8WxAW5mLze/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Primeira Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1HJfswc6TkhjyecW4VsvTWbFcEDG7zJvT/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5}>SOLUÇÃO</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Primeira Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1dmo0ipomiLsUgjgRMaJVP9ID7zu1GESn/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Segunda Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1lKN_p9lsmDUT_VH14G6TiHbtlYIYQF9S/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5}>SOLUÇÃO</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Segunda Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1Ao7UMR150__RYn2wxBkKHKjYbgUHs9vB/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Terceira Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1okFSwZerhb6Iud9Mjs1mLSUGcUsZmHG-/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5}>SOLUÇÃO</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Terceira Fase</Text>
                    </a>
                </section>
            ),
        },
        {
            key: "3",
            label: (
                <Text style={{ fontWeight: "bold" }}>
                    2ª OMBT 2023&nbsp;&nbsp;&nbsp;<Tag style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Tag><Tag>18/11/23 a 20/01/24</Tag>
                </Text>
            ),
            children: (
                <section className={styles["Provas-Gabaritos"]}>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1m1abK3ZA_-DARF7_xaYt0_bpTzNncjUc/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Primeira Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1Vpqd9RE3K5T5xofkXEopMc3qiYIaPRfd/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5}>GABARITO</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Primeira Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1MldVDlBldhansEGbRN8cJlvPTA1gTXF5/view?usp=drivesdk">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Segunda Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1-TCWf-t5eerOUcM1xTaTE_nLmw0b4DEP/view?usp=sharing">
                        <FileTextOutlined style={{ color: "rgb(158, 103, 0)" }} />
                        <Title level={5}>SOLUÇÃO</Title>
                        <Text style={{ color: "rgb(158, 103, 0)" }}>NÍVEL T</Text>
                        <Text italic>Segunda Fase</Text>
                    </a>
                </section>
            ),
        },
        {
            key: "4",
            label: (
                <Text style={{ fontWeight: "bold" }}>
                    1ª OMBT 2023&nbsp;&nbsp;&nbsp;<Tag style={{ color: "blue" }}>NÍVEL A</Tag><Tag>10/07/23 a 29/07/23</Tag>
                </Text>
            ),
            children: (
                <section className={styles["Provas-Gabaritos"]}>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/19cGxbHZPc_jiKMNyJpdVGSbl_0cp0LEE/view?usp=sharing">
                        <FileTextOutlined style={{ color: "blue" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text style={{ color: "blue" }}>NÍVEL A</Text>
                        <Text italic>Primeira Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1RFPwT-dt_6lDsLbhmRvJ_FwycBSueyQ7/view?usp=sharing">
                        <FileTextOutlined style={{ color: "blue" }} />
                        <Title level={5}>SOLUÇÃO</Title>
                        <Text style={{ color: "blue" }}>NÍVEL A</Text>
                        <Text italic>Primeira Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1C2Jcdj-g0-qmAeyCUbBdNg4VGTsWcUiP/view?usp=sharing">
                        <FileTextOutlined style={{ color: "blue" }} />
                        <Title level={5} strong>PROVA</Title>
                        <Text style={{ color: "blue" }}>NÍVEL A</Text>
                        <Text italic>Segunda Fase</Text>
                    </a>
                    <a className={styles["Prova-Gabarito"]} target="_blank" href="https://drive.google.com/file/d/1E4zGa6pldhtie8qUoqyfAG-sPvB17v3j/view?usp=sharing">
                        <FileTextOutlined style={{ color: "blue" }} />
                        <Title level={5}>SOLUÇÃO</Title>
                        <Text style={{ color: "blue" }}>NÍVEL A</Text>
                        <Text italic>Segunda Fase</Text>
                    </a>
                </section>
            ),
        },
    ];

    return (
        <div className="content">
            <Collapse items={items} accordion />
        </div>
    );
}
