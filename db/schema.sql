DROP DATABASE IF EXISTS shake_db;

CREATE DATABASE shake_db;
USE shake_db;

CREATE TABLE shakes
(
	id int NOT NULL
	AUTO_INCREMENT PRIMARY KEY,
	name varchar
	(255) NOT NULL,
	devoured BOOLEAN DEFAULT false);
