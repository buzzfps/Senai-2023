DROP DATABASE IF EXISTS onibus;
CREATE DATABASE onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE onibus;

CREATE TABLE motorista (
    cpf VARCHAR(14) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);
CREATE TABLE telefone (
    cpf_motorista VARCHAR(14) NOT NULL,
    numero VARCHAR(15) NOT NULL,
	FOREIGN KEY (cpf_motorista) REFERENCES motorista(cpf)
);
CREATE TABLE linha (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    descricao TEXT NOT NULL 
);
CREATE TABLE horario (
    id_linha VARCHAR(10) NOT NULL,
    horario TIME NOT NULL,
	FOREIGN KEY (id_linha) REFERENCES linha(id)
);
CREATE TABLE dirige (
    cpf_motorista VARCHAR(14) NOT NULL,
    id_linha VARCHAR(10) NOT NULL,
    FOREIGN KEY (cpf_motorista) REFERENCES motorista(cpf),
    FOREIGN KEY (id_linha) REFERENCES linha(id)
);

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_onibus/motorista.csv'
INTO TABLE motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_onibus/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_onibus/linha.csv'
INTO TABLE linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_onibus/horario.csv'
INTO TABLE horario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/gabrielzontabatista2des/BCD/aula06/projeto_onibus/dirige.csv'
INTO TABLE dirige
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

	
	
	
	
	
	
