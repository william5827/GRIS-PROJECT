CREATE DATABASE grisproject;
	
USE grisproject;

select * from usuario;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE	,
	senha VARCHAR(50)
);