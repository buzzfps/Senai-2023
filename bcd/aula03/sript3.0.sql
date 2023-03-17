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

INSERT INTO professores VALUES
(default, "Reenye", "Mobile"),
(default, "Wellington", "Banco de Dados"),
(default, "Ivo", "Matematica");

INSERT INTO turma VALUES
(null, "Desenvolvimento de Sistemas", "2DES"),
(null, "Desenvolvimento de Sistemas", "3DES"),
(null, "Eletrônica", "2EA"),
(null, "Eletrônica", "3EA");

INSERT INTO alunos VALUES
('RA01', 'Camacho', '2000-04-02', 1)
('RA02', 'Karen', '2005-05-12', 1)
('RA03', 'Cyro', '1984-08-13', 2)
('RA04', 'Beatriz', '2002-08-05', 2)
('RA05', 'Matheus Belli', '2001-10-12', 3)
('RA06', 'Rafael Tiepo', '2001-10-12', 3)
('RA07', 'Alexandre', '2001-12-12', 4)
('RA08', 'Gustavo', '2000-05-03', 4)

INSERT INTO leciona VALUES
(1,1),
(1,2),
(2,1)
(2,2)
(3,3)
(3,4)


