-- Comando para criar um banco de dados:
CREATE DATABASE myBD;

-- Comando para entrar em um banco de dados: 
USE myBD;

-- Comando para excluir um banco de dados:
DROP DATABASE myBD;

-- Tornando o banco apenas para visualização: 
ALTER DATABASE myDB READ ONLY = 1 OU 0;

-- Criando uma tabela no banco de dados:
CREATE TABLE employyes (
    employyes_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(5,2),
    hire_date DATE
);

-- Comando para selecionar as tabela de um banco de dados, retornando todos os campos do tabela criada:
SELECT * FROM employyes;

--Comando para renomear uma tabela:
RENAME TABLE employyes TO employees; 

--Comando para deletar uma tabela:
DROP TABLE employees;

--Comando para adicionar uma campo na tabela:
ALTER TABLE employees ADD phone_number VARCHAR(15);

-- Comando para alterar o nome do campo de um tabela:
ALTER TABLE employees RENAME COLUMN phone_number to phone;

-- Comando para modificar um campo de uma tabela:
 ALTER TABLE employees MODIFY COLUMN email VARCHAR(100);

 -- Comando para modificar a posição dele na tabela:
  ALTER TABLE employees MODIFY COLUMN email VARCHAR(100) AFTER last_name;

-- Comando para modificar a posição de um campo na tabela e deixar ela em primeiro
ALTER TABLE employees MODIFY email VARCHAR(100) FIRST;