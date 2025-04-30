CREATE DATABASE Banco;
USE Banco;
CREATE TABLE Pessoal (
    Matricula INT,
    Nome VARCHAR(50),
    Nascimento DATE,
    Sexo CHAR(1),
    Salario MONEY
);

ALTER TABLE Pessoal ADD Observacao VARCHAR(200);
ALTER TABLE Pessoal ALTER COLUMN Observacao VARCHAR (150);
ALTER TABLE Pessoal DROP COLUMN Observacao;
DROP TABLE Pessoal;

CREATE DATABASE Bd;
USE BD;
CREATE TABLE Departamento (
    Numero INT,
    Nome VARCHAR(50),
    Local VARCHAR(20),
    Orcamento DECIMAL(12,2)
);
SELECT * FROM Departamento;
INSERT INTO Departamento (Numero, Nome, Local, Orcamento) VALUES (70, 'Producao', 'Recife', 1000);
SELECT * FROM Departamento;

UPDATE Departamento SET Nome = 'Pessoal' WHERE Nome = 'Producao';
SELECT * FROM Departamento;

DELETE FROM Departamento WHERE Nome = 'Pessoal'; 

INSERT INTO Departamento (Numero, Nome, Local, Orcamento) VALUES 
( 10, 'Produção', 'Recife', 15000 ),
( 20, 'Contábil', 'Olinda', 30000 ),
( 30, 'Contábil', 'Olinda', 40000 ),
( 40, 'Contábil', 'Recife', 50000);

UPDATE Departamento SET Nome = 'Estoque' WHERE Nome = 'Contábil' AND Orcamento >= 35000;
DELETE FROM Departamento WHERE Local = 'Recife' OR Orcamento >= 40000;