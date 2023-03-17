DROP DATABASE IF EXISTS pedidos;
CREATE DATABASE pedidos CHARSET=UTF8 COLLATE utf8_general_ci;
USE pedidos;

CREATE TABLE cliente(
    id INT (10) NOT NULL PRIMARY KEY,
    cpf VARCHAR (14) NOT NULL,
    nome VARCHAR (100) NOT NULL,
    cep VARCHAR (9) NOT NULL,
    numero INT (255) NOT NULL,
    complemento VARCHAR (255) 
);
CREATE TABLE telefone(
    id_cliente INT (30) NOT NULL ,
    telefone VARCHAR (15) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);
CREATE TABLE produto(
    id INT (10) NOT NULL PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    preco DECIMAL (5,2) NOT NULL
);
CREATE TABLE entregador(
    id INT (10) NOT NULL,
    nome VARCHAR (100) NOT NULL,
    veiculo VARCHAR (50) NOT NULL
);
CREATE TABLE pedido(
    id INT (10) NOT NULL PRIMARY KEY,
    id_cliente INT (30) NOT NULL,
    id_entregador INT (30) NOT NULL,
    data_pedido DATE NOT NULL,
    hora_pedido time NOT NULL,
    hora_entrega time NOT NULL,
    hora_fim time NOT NULL,
    quantidade INT (10) NOT NULL,
    id_produto INT (10) NOT NULL,
    preco_unitario DECIMAL (5,2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);
LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_pedidos/cliente.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_pedidos/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_pedidos/pedido.csv'
INTO TABLE pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_pedidos/produto.csv'
INTO TABLE produto
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_pedidos/entregador.csv'
INTO TABLE entregador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;