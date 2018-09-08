DROP DATABASE IF EXISTS testdrive;
CREATE DATABASE testdrive;

USE testdrive; 
CREATE TABLE Drivers (
  id VARCHAR(11) NOT NULL,
<<<<<<< HEAD
  userName VARCHAR(45) NOT NULL,
=======
>>>>>>> e1bc75ebc63d65e9e9648a61a555431e638e7822
  fullName VARCHAR(45) NOT NULL,
  password VARCHAR(11) NOT NULL,
  phone INT(10) NOT NULL,
  company VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Cars (
  id VARCHAR(17) NOT NULL,
  year INTEGER(4) NOT NULL,
  model VARCHAR(45) NOT NULL, 
  make VARCHAR(45) NOT NULL,
  engine VARCHAR(10) NULL,
  gasType VARCHAR (10)NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE Drive (
  id INT(10) NOT NULL AUTO_INCREMENT, 
  driverLicense VARCHAR(11) NOT NULL, 
  vinNum VARCHAR(17) NOT NULL, 
  date DATE NOT NULL,
  odometer INTEGER(10) NOT NULL,
  gasPerGallon DECIMAL(2,2) NOT NULL, 
  totalCost DECIMAL(4,2) NULL, 
  PRIMARY KEY (id),
  FOREIGN KEY (driverLicense) REFERENCES Drivers(id),
  FOREIGN KEY (vinNum) REFERENCES Cars (id)
);