DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola CHARSET=UTF8 COLLATE utf8_general_ci;
USE escola;

CREATE TABLE professores(
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    especialidade varchar(100) NOT NULL
)
CREATE TABLE aluno(
    ra varchar(10) NOT NULL PRIMARY KEY,
    nome varchar(100) NOT NULL,
    nascto DATE NOT NULL,
    id_turma integer NOT NULL
)
CREATE TABLE turma(
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    abreviacao varchar(10) NOT NULL
)

alter table aluno add foreign key (id_turma) references turma(id)

CREATE TABLE leciona(
    id_prof integer NOT NULL,
    id_turma integer NOT NULL,
    foreign key (id_prof) references professores(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (id_turma) references turma(id)
    ON DELETE CASCADE ON UPDATE CASCADE
)