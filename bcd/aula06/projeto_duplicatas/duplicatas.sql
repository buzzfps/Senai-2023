DROP DATABASE IF EXISTS duplicatas;
CREATE DATABASE duplicatas CHARSET=UTF8 COLLATE utf8_general_ci;
USE duplicatas;

CREATE TABLE clientes(
    id int (10) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR (100) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    uf VARCHAR(2) NOT NULL
);
CREATE TABLE telefones(
    id_cliente VARCHAR (10) NOT NULL,
    tipo VARCHAR (20) NOT NULL,
    numero VARCHAR (14) NOT NULL
);
CREATE TABLE duplicatas(
    id_cliente int (10) NOT NULL,
    n_parcela VARCHAR(2) NOT NULL,
    data_com DATE NOT NULL,
    vencimento DATE NOT NULL,
    pagamento DATE,
    valor decimal (5,2),
    diferenca decimal (5,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_duplicatas/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_duplicatas/duplicatas.csv'
INTO TABLE duplicatas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_duplicatas/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;