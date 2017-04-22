CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR (100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(200) NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(1, 'Basketball goal', 'Sporting goods', 60.00, 20);
 
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(2, 'Air Jordan XXXI', 'Shoes', 185.00, 30);
 
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(3, 'Samsung television', 'Electronics', 325.00, 12);
 
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(4,'Versace watch','Jewlery', 1795.00, 8);
 
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(5,'Ralph Lauren polo shirt', 'Mens Clothing', 35.00, 45);
 
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, 'iPhone 7 Plus', 'Electronics', 769.00, 30);