DROP DATABASE IF EXISTS restaurante;
CREATE DATABASE restaurante CHARSET=UTF8 COLLATE utf8_general_ci;
USE restaurante;

CREATE TABLE cliente(
    id INT auto_increment NOT NULL primary key,
    nome VARCHAR (255) NOT NULL,
    telefone VARCHAR (12) NOT NULL,
    email VARCHAR (255) NOT NULL,
    senha VARCHAR (255) NOT NULL
);
CREATE TABLE categoria(
    id INT  auto_increment PRIMARY KEY NOT NULL,
    nome VARCHAR (255) NOT NULL
);
CREATE TABLE restaurante(
    id INT auto_increment PRIMARY KEY NOT NULL,
    nome VARCHAR (255) NOT NULL,
    categoriaid INT NOT NULL,
    endereco VARCHAR (255) NOT NULL
);
CREATE TABLE cardapio(
    id INT auto_increment primary key,
    restauranteid int NOT NULL,
    descricao VARCHAR (255) NOT NULL,
    valor DECIMAL (5,2) NOT NULL
);
CREATE TABLE avaliacao(
    restauranteid INT NOT NULL,
    clienteid INT NOT NULL,
    data DATE NOT NULL,
    nota INT NOT NULL,
    descricao VARCHAR (255),
    FOREIGN KEY (restauranteid) REFERENCES restaurante (id),
    FOREIGN KEY (clienteid) REFERENCES cliente (id)
);

INSERT INTO categoria VALUES
("", "pastel"),
("", "hamburger"),
("", "esfirra"),
("", "churros")

INSERT INTO restaurante VALUES
("", "TakoKunaVara Pastelaria", 1, "Parque aliança"),
("", "Bem Comido", 2, "Rua Aquino"),
("", "Mal Comido", 3, "Rua Jacinto"),
("", "Mais ou Menos Comido", 4, "Rua Rego")

INSERT INTO cardapio VALUES
("", 1, "Pastel de Flango", 12.90),
("", 2, "X-Rato", 23.50),
("", 3, "Esfirra de Carne", 35.90),
("", 4, "Churros de Choco", 5.00)