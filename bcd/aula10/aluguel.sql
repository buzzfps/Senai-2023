DROP DATABASE IF EXISTS aluguel;
CREATE DATABASE aluguel CHARSET=UTF8 COLLATE utf8_general_ci;
USE aluguel;

CREATE TABLE clientes(
    cpf VARCHAR (15) NOT NULL PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    endereco VARCHAR (100) NOT NULL,
    telefone VARCHAR (13) NOT NULL
);

CREATE TABLE telefones(
    cpf VARCHAR (15) NOT NULL,
    telefone VARCHAR (13) NOT NULL,
    foreign key (cpf) references clientes(cpf)
);

CREATE TABLE carros(
    placa VARCHAR (8) NOT NULL PRIMARY KEY,
    modelo VARCHAR (30) NOT NULL,
    marca VARCHAR (30) NOT NULL,
    ano VARCHAR (4) NOT NULL
);

CREATE TABLE aluguel(
    id_aluguel INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR (15) NOT NULL,
    placa VARCHAR (8) NOT NULL,
    aluguel DATE NOT NULL,
    devolucao DATE NOT NULL,
    diaria DECIMAL (5,2) NOT NULL,
    valor DECIMAL (5,2) NOT NULL,
    observacao VARCHAR (255) NOT NULL,
    foreign key (cpf) references clientes(cpf),
    foreign key (placa) references carros(placa)
);

LOAD DATA INFILE 'E:/gabrielzontabatista2des/senai2023/bcd/aula10/cliente.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/senai2023/bcd/aula10/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/senai2023/bcd/aula10/carro.csv'
INTO TABLE carros
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/senai2023/bcd/aula10/aluguel.csv'
INTO TABLE aluguel
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;