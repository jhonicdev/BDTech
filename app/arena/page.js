import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

import { Divider, Button } from "antd";
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

//IMAGENS
import { BDT_Arena } from "../imgs/bdt-arena.png";

//ICONES
import { FileTextOutlined } from "@ant-design/icons";

export default function Arena_BDT() {
  return (
    <div className="content">
        <Text>
            Prepare-se! Algo grandioso está por vir...
        </Text>
    </div>
  )
}