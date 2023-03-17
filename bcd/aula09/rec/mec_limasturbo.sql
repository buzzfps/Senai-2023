DROP DATABASE IF EXISTS mec_limasturbo;
CREATE DATABASE mec_limasturbo CHARSET=UTF8 COLLATE utf8_general_ci;
USE mec_limasturbo;

CREATE TABLE funcionarios(
    matricula INT (5) PRIMARY KEY NOT NULL,
    funcionario VARCHAR (255) NOT NULL,
    telefone VARCHAR (50) NOT NULL
);
CREATE TABLE carros(
    placa VARCHAR (8) PRIMARY KEY NOT NULL,
    modelo VARCHAR (50) NOT NULL,
    marca VARCHAR (50) NOT NULL,
    ano INT (4) NOT NULL
);
CREATE TABLE manutencao(
    placa_carro VARCHAR (8) NOT NULL,
    matricula_funcionario INT (5) NOT NULL,
    inicio_manutencao DATE NOT NULL,
    fim_manutencao DATE NOT NULL,
    descricao VARCHAR (255) NOT NULL,
    FOREIGN KEY (matricula_funcionario) REFERENCES funcionarios(matricula),
    FOREIGN KEY (placa_carro) REFERENCES carros(placa)
);

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula09/rec/funcionarios.csv'
INTO TABLE funcionarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula09/rec/carros.csv'
INTO TABLE carros
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula09/rec/manutencao.csv'
INTO TABLE manutencao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
