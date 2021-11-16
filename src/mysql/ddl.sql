CREATE DATABASE IF NOT EXISTS cadastroTeste;
USE cadastroTeste;

CREATE TABLE IF NOT EXISTS cliente (
   ID MEDIUMINT NOT NULL AUTO_INCREMENT,
   NOME VARCHAR(60),
   EMAIL VARCHAR(60),
   CPF VARCHAR(11),
   NUMERO VARCHAR(11),
   SENHA VARCHAR(30),

   PRIMARY KEY(ID)
);
