DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria CHARSET=UTF8 COLLATE utf8_general_ci;
USE pizzaria;

DROP TABLE IF EXISTS item_pedido;
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS pizza;

CREATE TABLE cliente(
cliente_id INT(5) PRIMARY KEY AUTO_INCREMENT,
telefone VARCHAR(10),
nome VARCHAR(30),
logradouro VARCHAR(30),
numero DECIMAL(5,0),
complemento VARCHAR(30),
bairro VARCHAR(30),
referencia VARCHAR(30)
);

CREATE TABLE pizza (
PRIMARY KEY (pizza_id),
pizza_id INTEGER AUTO_INCREMENT,
nome VARCHAR(30),
descricao VARCHAR(30),
valor DECIMAL(4,2)
);

CREATE TABLE pedido (
pedido_id INTEGER AUTO_INCREMENT,
cliente_id INTEGER,
data DATETIME,
valor DECIMAL(4,2),
PRIMARY KEY (pedido_id),
FOREIGN KEY (cliente_id) REFERENCES cliente (cliente_id)
);

CREATE TABLE item_pedido (
pedido_id INTEGER,
pizza_id INTEGER,
quantidade DECIMAL(2,0),
valor DECIMAL(5,2),
FOREIGN KEY (pizza_id) REFERENCES Pizza (pizza_id),
FOREIGN KEY (pedido_id) REFERENCES Pedido (pedido_id)
);