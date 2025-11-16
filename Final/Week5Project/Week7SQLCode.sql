CREATE TABLE Customers (
    id INT PRIMARY KEY,
    name TEXT,
    membership_level TEXT
);

CREATE TABLE Rentals (
    id INT PRIMARY KEY,
    customer_id INT,
    movie_title TEXT,
    rental_price REAL,
    FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

INSERT INTO Customers (id, name, membership_level) VALUES
(1, 'Elijah Carter', 'Regular'),
(2, 'Simone Rossi', 'Regular'),
(3, 'Caleb Kim', 'Regular'),
(4, 'Isabella Zhang', 'Premium'),
(5, 'Jonah Wallace', 'Premium');

INSERT INTO Rentals (id, customer_id, movie_title, rental_price) VALUES
(1, 1, 'Inception', 2.99),
(2, 2, 'The Matrix', 1.99),
(3, 3, 'Interstellar', 2.49),
(4, 4, 'The Prestige', 1.79),
(5, 5, 'Tenet', 3.99);

SELECT * FROM Customers;

SELECT * FROM Rentals;

SELECT name, membership_level FROM Customers;

SELECT movie_title, rental_price FROM Rentals;

SELECT 
    c.id AS customer_id,
    c.name,
    c.membership_level,
    r.id AS rental_id,
    r.movie_title,
    r.rental_price
FROM Customers c
JOIN Rentals r ON c.id = r.customer_id;