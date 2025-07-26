// components/LoginModal.jsx
'use client'

import React from "react";
import { Modal, Input, Typography, Button } from "antd";

const { Text } = Typography;

export default function LoginModal({
    visible,
    id,
    setId,
    senha,
    setSenha,
    erroLogin,
    onLogin
}) {
    return (
        <Modal
            title="Login"
            open={visible}
            footer={null}
            closable={false}
            centered
        >
            <form onSubmit={onLogin}>
                <Input
                    placeholder="Usuário"
                    maxLength={10}
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    style={{ marginBottom: 10 }}
                />
                <Input.Password
                    placeholder="Senha"
                    maxLength={100}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    style={{ marginBottom: 10 }}
                />
                {erroLogin && (
                    <Text type="danger" style={{ display: "block", marginBottom: 10 }}>
                        {erroLogin}
                    </Text>
                )}
                <Button type="primary" htmlType="submit" block>
                    Acessar
                </Button>
            </form>
        </Modal>
    );
}
