/*
\c restaurantv2

CREATE TABLE restaurant (
    name VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    category VARCHAR NOT NULL,
    id SERIAL PRIMARY KEY
);

CREATE TABLE reviewer (
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    karma INT CHECK(karma >= 0 AND karma <= 7),
    id SERIAL PRIMARY KEY
);

CREATE TABLE review (
    reviewer INT NOT NULL REFERENCES reviewer(id),
    stars INT CHECK(stars >= 1 AND stars <= 5),
    title VARCHAR NOT NULL, 
    review TEXT NOT NULL,
    restaurant_id INT NOT NULL REFERENCES restaurant(id),
    id SERIAL PRIMARY KEY
    
);

INSERT INTO restaurant VALUES ('The Original Ninfa''s on Navigation', 'north', 'Mexican');
INSERT INTO restaurant VALUES ('El Tiempo Cantina', 'south', 'Mexican');
INSERT INTO restaurant VALUES ('Villa Arcos', 'east', 'Mexican');
INSERT INTO restaurant VALUES ('Moon Tower Inn', 'west', 'American');
INSERT INTO restaurant VALUES ('Champ Burger', 'north', 'American');
INSERT INTO restaurant VALUES ('Andes Cafe', 'south', 'South American');
INSERT INTO restaurant VALUES ('Tout Suite', 'west', 'cafe');
INSERT INTO restaurant VALUES ('Alamo Tamale & Taco', 'south', 'Mexican');
INSERT INTO restaurant VALUES ('PERFECT FIVE STARS', 'south', 'Infinite');
INSERT INTO restaurant VALUES ('FAKE BBQ PROBS CALI', 'east', 'BBQ');

INSERT INTO reviewer VALUES ('Al', 'al@al.com', 4);
INSERT INTO reviewer VALUES ('Bo', 'bo@bo.net', 2);
INSERT INTO reviewer VALUES ('Ce', 'ce@ce.org', 3);
INSERT INTO reviewer VALUES ('Dee', 'dee@dee.com', 1);
INSERT INTO reviewer VALUES ('Efef', 'efef@efef.com', 6);

INSERT INTO review VALUES (4, 4, 'just great', 'the BBQ is perfect from FAKE BBQ', 10);
INSERT INTO review VALUES (3, 3, 'so so ', 'the food is so so so so', 4);
INSERT INTO review VALUES (1, 1, 'second', 'this second review is terrible', 3);
INSERT INTO review VALUES (2, 4, 'third', 'this third review is terrible', 6);
INSERT INTO review VALUES (3, 3, 'fourth', 'this fourth review is terrible', 7);
INSERT INTO review VALUES (4, 2, 'fifth', 'this fifth review is terrible', 8);
INSERT INTO review VALUES (5, 1, 'sixth', 'this sixth review is terrible', 8);
INSERT INTO review VALUES (1, 5, 'seventh', 'this seventh review is terrible', 2);
INSERT INTO review VALUES (2, 4, 'eighth', 'this eighth review is terrible', 5);
INSERT INTO review VALUES (3, 3, 'ninth', 'this ninth review is terrible', 2);
INSERT INTO review VALUES (4, 2, 'tenth', 'this tenth review is terrible', 1);
INSERT INTO review VALUES (5, 1, 'eleventh', 'this eleventh review is terrible', 10);
INSERT INTO review VALUES (1, 5, 'twelveth', 'this twelveth review is terrible', 9);
INSERT INTO review VALUES (2, 4, 'thirteenth', 'this thirteenth review is terrible', 2);
INSERT INTO review VALUES (3, 4, 'fourteenth', 'this fourteenth review is terrible', 3);
INSERT INTO review VALUES (4, 3, 'fifteenth', 'this fifteenth review is terrible', 4);
INSERT INTO review VALUES (5, 2, 'sixteenth', 'this sixteenth review is terrible', 5);
*/

--1. List all the reviews for a given restaurant given a specific restaurant ID
SELECT * FROM review WHERE restaurant_id=5;

/*
SELECT * FROM restaurant
LEFT OUTER JOIN review
ON restaurant.id = review.restaurant_id
WHERE restaurant.id=2;
*/

--2. List all the reviews for a given restaurant. given a specific restaurant name.
SELECT * FROM review, restaurant WHERE review.restaurant_id = restaurant.id AND restaurant.name ILIKE '%ill%';
/*
SELECT * FROM restaurant
LEFT OUTER JOIN review
ON restaurant.id = review.restaurant_id
WHERE restaurant.name ILIKE '%illa A%';
*/