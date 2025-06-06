import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined, FileAddOutlined, FileTextOutlined, InfoCircleOutlined, StarOutlined, CloudUploadOutlined, TrophyOutlined, BookOutlined, LockOutlined
} from "@ant-design/icons";
import Image from "next/image";

//LOGOS
import OMBT_Logo from "./imgs/logo-ombt.png";
import BDT_Logo from "./imgs/logo-bdt.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BDTech",
  description: "",
};

const BDT = {
  items: [
    { key: "1", label: <a href="/bdt/momentos" rel="noopener noreferrer"><StarOutlined /> Melhores momentos <LockOutlined /></a> },
    { key: "2", label: <a target="_blank" href="https://drive.google.com/drive/folders/1Z4SifPHIe9eGyJT3DtYxI8HnpjJPzjyD?usp=sharing" rel="noopener noreferrer"><CloudUploadOutlined /> Google Drive <LockOutlined /></a> },
    { key: "3", label: <a href="/bdt/sobre" rel="noopener noreferrer"><InfoCircleOutlined /> Sobre o BDT</a> },
  ],
};

const OMBT_Menu = {
  items: [
    { key: "1", label: <a href="/ombt/materiais" rel="noopener noreferrer"><FileTextOutlined /> Provas e soluções</a> },
    { key: "2", label: <a href="/ombt/premiados" rel="noopener noreferrer"><TrophyOutlined /> Premiados</a> },
    { key: "3", label: <a href="/ombt/simulado" rel="noopener noreferrer"><FileAddOutlined /> Gerar simulado</a> },
    { key: "4", label: <a href="/ombt/banco_questoes" rel="noopener noreferrer"><BookOutlined /> Banco de questões</a> },
    { key: "5", label: <a href="/ombt/sobre" rel="noopener noreferrer"><InfoCircleOutlined /> Sobre a OMBT</a> },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
            <nav className="Navbar">
            <Button href="/embt" type="primary" className="Navbar-option">
              <span style={{color: "#b45f06"}}>EMBT<i style={{fontWeight: "normal", color: "white"}}>2025</i></span> <LockOutlined />
            </Button>

            <Dropdown menu={OMBT_Menu} trigger={["hover"]} className="Navbar-option">
              <Button type="primary">
                <Image src={OMBT_Logo} className="Logo-OMBT" alt="Logo da OMBT"/>
              </Button>
            </Dropdown>

            <Dropdown menu={BDT} trigger={["hover"]} className="Navbar-option">
              <Button type="primary">
                <Image src={BDT_Logo} className="Logo-BDT" alt="Logo do BDT"/>
              </Button>
            </Dropdown>
          </nav>
        </header>
        
        {children}
      </body>
    </html>
  );
}