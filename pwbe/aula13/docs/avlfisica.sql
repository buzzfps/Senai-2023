DROP DATABASE IF EXISTS avlfisica;
CREATE DATABASE avlfisica CHARSET=UTF8 COLLATE utf8_general_ci;
USE avlfisica;

CREATE TABLE paciente(
    id INT NOT NULL,
    nome VARCHAR (100) NOT NULL,
    nasc DATE NOT NULL,
    peso DECIMAL (5,2) NOT NULL,
    alt DECIMAL (5,2) NOT NULL,
    idade INT,
    imc INT,
    diagnostico VARCHAR (100)
);

INSERT INTO paciente VALUES
("", "Jair Rodrigues", "1981-01-03", 85.5, 1.75,"","",""),
("", "Marieta Severo", "1995-03-04", 44.3, 1.55,"","",""),
("", "Karina Silva", "2002-05-13", 88, 1.73,"","",""),
("", "Solange Nascimento", "2005-12-01", 95, 1.58,"","",""),
("", "Marcos Pontes", "2001-12-03", 60, 1.98,"","","")