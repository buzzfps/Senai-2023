DROP DATABASE IF EXISTS bonificacao;
CREATE DATABASE bonificacao CHARSET=UTF8 COLLATE utf8_general_ci;
USE bonificacao;

CREATE TABLE funcionarios(
    matricula INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_completo VARCHAR(100) NOT NULL,
    data_admissao date not null,
    salario float (6,2) NOT NULL,
    data_pagto date NOT NULL,
    desempenho float NOT NULL,
    bonificacao float (6,2) NOT NULL
);
