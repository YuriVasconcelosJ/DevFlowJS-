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
    employee_id INT,
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

-- Comando para excluir uma coluna:
ALTER TABLE employees DROP COLUMN email;

-- Comando para popular adicionar linhas em uma coluna:
INSERT INTO employees VALUES (1, "Eugene", "Krabs", 25.50, "2023-01-02");

-- Comando para poplar adicionar múltiplas linhas em uma coluna:
INSERT INTO employees VALUES (2, "Squidward", "Tentacles", 15.00, "2023-01-03"),
                             (3,"Spomgebob", "Squarepants", 12.50, "2023-01-04"),
                             (4, "Patrick", "Star", 12.50, "2023-01-05") ,
                             (5, "Sandy", "Cheeks", 17.25, "2023-01-06");

-- Comando para popular apenas campos selecionados:
INSERT INTO employees (employee_id, first_name, last_name) VALUES (6, "Sheldon", "Plankton");

-- Comando para verificar todos as colunas de uma tabela:
SELECT * FROM employees;

-- Comando para selecionar campos especificos de uma tabela:
SELECT first_name, last_name FROM employees;

-- Podemos escolher a ordem de exibição:
SELECT last_name, first_name FROM employees;

-- Condicional WHERE serve para filtrar dados específicos de um campo:
SELECT * FROM employees WHERE employee_id = 1;

-- Podemos adicionar condição com AND ou OR:
SELECT * FROM employees WHERE hourly_pay > 20 AND last_name = 'Silva';
SELECT * FROM employees WHERE first_name = 'João' OR first_name = 'Maria';

-- Comando para retornar onde hire_date é null:
SELECT * FROM employees WHERE hire_date IS NULL;

-- Comando para retornar o primeiro nome da tabela employees em que a condição seja aceita:
SELECT first_name FROM employees WHERE hire_date IS NULL;

-- Comando para atualizar um determinado campo 
UPDATE employees SET hourly_pay = 10.25 WHERE employee_id = 6;

-- SEMPRE UTILIZE WHERE PARA NÃO ATUALIZAR TODOS OS CAMPOS
-- O SET serve para dizer quais colunas queremos modificar:
UPDATE employees SET hourly_pay= 35.00 WHERE employee_id = 1;
UPDATE employees SET hourly_pay = 10.50, hire_date = "2023-01-07" WHERE employee_id =6

-- Comando para deletar um campo
DELETE FROM employees WHERE employee_id = 6;
SELECT * employees;

-- Métodos para add data de hj, hora de hj e data e hora junto
CREATE TABLE test(
  my_date DATE,
  my_time TIME,
  my_datetime DATETIME
);

INSERT INTO test VALUES (CURRENT_DATE(), CURRENT_TIME(), NOW());

SELECT * FROM employees
DROP TABLE test;

-- Restrição UNIQUE serve para garantir que os valores sejam unicos

CREATE TABLE products (
  product_id INT,
  product_name VARCHAR(25) UNIQUE,
  price DECIMAL(4,2)
)

ALTER TABLE products ADD CONSTRAINT UNIQUE(product_name);