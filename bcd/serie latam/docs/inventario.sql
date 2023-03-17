DROP DATABASE IF EXISTS serieA;
CREATE DATABASE serieA CHARSET=UTF8 COLLATE utf8_general_ci;
USE serieA;

CREATE TABLE times(
    id varchar(5) not null primary key,
    nome varchar(50) not null,
    descricao varchar(255)
);

INSERT INTO times VALUES
('i001','Furia','Art, Drop, Saffe, Kscerato, Yuri'),
('i002','CASE','h0nda, snowzin, estilega, idk, fns'),
('i003','MEGAZORD','togs, pepe, cidz, pessegão, thpp'),
('i004','Fluxo','history, felps, Vsm, lucaozy, nqz'),
('i005','mibr','hen1, turtle, exit, brnzan, fer'),
('i006','pronetada','buzz, thigas, hellzik1, f1nable, freudxyz');