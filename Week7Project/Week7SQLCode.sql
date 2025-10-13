CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT,
    membership_level TEXT
);

CREATE TABLE rentals (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    movie_title TEXT,
    rental_price REAL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

INSERT INTO customers (id, name, membership_level) VALUES
(1, 'Elijah Carter', 'Regular'),
(2, 'Simone Rossi', 'Regular'),
(3, 'Caleb Kim', 'Regular'),
(4, 'Isabella Zhang', 'Premium'),
(5, 'Jonah Wallace', 'Premium');

INSERT INTO rentals (id, customer_id, movie_title, rental_price) VALUES
(1, 1, 'Star Wars Episode V: The Empire Strikes Back', 2.99),
(2, 2, 'Avengers: Endgame', 2.99),
(3, 3, 'Ready Player One', 2.49),
(4, 4, 'Sonic the Hedgehog 3 (Movie)', 2.49),
(5, 5, 'The Super Mario Bros Movie', 1.99);

SELECT * FROM customers;

SELECT * FROM rentals;

SELECT name, membership_level FROM Customers;

SELECT movie_title, rental_price FROM Rentals;

SELECT 
    c.id AS customer_id,
    c.name,
    c.membership_level,
    r.id AS rental_id,
    r.movie_title,
    r.rental_price
FROM customers c
JOIN rentals r ON c.id = r.customer_id;