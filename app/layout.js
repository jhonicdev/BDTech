import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";
import OMBT_Logo from "./imgs/logo-ombt.png";

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

const OMBT_Menu = {
  items: [
    { key: "1", label: <a href="https://google.com" rel="noopener noreferrer">OMBT 2025</a> },
    { key: "2", label: <a href="https://youtube.com" rel="noopener noreferrer">OMBT 2024</a> },
    { key: "3", label: <a href="https://github.com" rel="noopener noreferrer">OMBT 2023</a> },
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
        <nav className="Navbar">
          <Dropdown menu={OMBT_Menu} trigger={["hover"]}>
            <Button type="primary" className="Navbar-option">
              <Image src={OMBT_Logo} className="Logo-OMBT"/> <DownOutlined />
            </Button>
          </Dropdown>
        </nav>
        {children}
      </body>
    </html>
  );
}