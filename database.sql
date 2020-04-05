CREATE DATABASE IF NOT EXISTS customer;
USE customer;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	username varchar(255),
	email varchar(255),
	password varchar(255),
	PRIMARY KEY (id)
);
