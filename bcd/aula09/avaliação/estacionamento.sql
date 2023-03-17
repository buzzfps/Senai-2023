DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento CHARSET=UTF8 COLLATE utf8_general_ci;
USE estacionamento;

CREATE TABLE clientes(
    cpf_cliente VARCHAR(11) NOT NULL AUTO_INCREMENT,
    nome_cliente VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    placa INT(7), NOT NULL,
    telefones VARCHAR(15) NOT NULL
);

CREATE TABLE carro(
    placa VARCHAR(8) PRIMARY KEY NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    marca VARCHAR(30),
    cor VARCHAR(30)
    id_vaga INT(2) NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (id_vaga) REFERENCES vaga (id_vaga)
);

CREATE TABLE vaga(
    PRIMARY KEY (id_vaga)
    tipo_vaga VARCHAR(30),
    valor_vaga FLOAT(10),
);

CREATE TABLE estacionamento(
    cpf_cliente VARCHAR(11),
    id_estacionamento int(3),
    placa INT (7) NOT NULL
);