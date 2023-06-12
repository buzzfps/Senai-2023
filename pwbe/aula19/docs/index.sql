DROP DATABASE IF EXISTS login;
CREATE DATABASE login;
USE login;

CREATE TABLE usuario(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(80) NOT NULL,
    senha VARCHAR(80) NOT NULL,
    nascimento DATE NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone VARCHAR(100) NOT NULL
);

INSERT INTO usuario VALUES
("","twikipedia", "twikipedia@gmail.com", password("a1375780"), "2005-08-18", "62828633745", "rua aquino", "1999854355, 19276317275");