\c restaurant;

INSERT INTO restaurant VALUES ('The Original Ninfa''s on Navigation', .4, 4.3, 'Mexican', 'beef fajitas', TRUE, '2018-01-01');
INSERT INTO restaurant VALUES ('El Tiempo Cantina', .4, 4.4, 'Mexican', 'beef fajitas', TRUE, '2010-01-15');
INSERT INTO restaurant VALUES ('Villa Arcos', .2, 4.6, 'Mexican', 'carne guisada', TRUE, '2018-02-01');
INSERT INTO restaurant VALUES ('Moon Tower Inn', .2, 4.5, 'American', 'hot dog', TRUE, '2018-02-06');
INSERT INTO restaurant VALUES ('Champ Burger', .3, 4.7, 'American', 'burger', TRUE, '2018-03-05');
INSERT INTO restaurant VALUES ('Andes Cafe', .6, 4.2, 'South American', 'lomo saltado', TRUE, '2018-02-18');
INSERT INTO restaurant VALUES ('Tout Suite', .9, 4.4, 'cafe', 'salted caramel peanut tart', TRUE, '2018-02-04');
INSERT INTO restaurant VALUES ('Alamo Tamale & Taco', .7, 4.5, 'Mexican', 'tamale', TRUE, '2018-03-03');
INSERT INTO restaurant VALUES ('PERFECT FIVE STARS', .5, 5.0, 'Infinite', 'infinite Waldorf', FALSE, '2018-03-14');
INSERT INTO restaurant VALUES ('FAKE BBQ PROBS CALI', 1.1, 3.0, 'BBQ', 'dry meat', FALSE, '04-01-18');

/* 
name
distance
stars
cuisine
favedish
doestakeout
lastvisited
id
*/

/* writing queries */
/* names of restaurants that have the specific name */
SELECT name FROM restaurant WHERE name='Villa Arcos';
/* names of restaurants that have case-insensitive name like %illa Arc% */
SELECT name FROM restaurant WHERE name ILIKE '%illa Arc%';
/* names of restaurants that have five stars */
SELECT name FROM restaurant WHERE stars=5;
/* fave dishes of all 5-star restaurants */
SELECT favedish FROM restaurant WHERE stars=5;
/* the id of a restaurant by specific restaurant name, e.g. 'Moon Tower Inn' */
SELECT id FROM restaurant WHERE name='Moon Tower Inn';
/* restaurants in the category of 'BBQ' */
SELECT * FROM restaurant WHERE cuisine='BBQ';
/* restaurants that do take out */
SELECT * FROM restaurant WHERE doestakeout=TRUE;
/* restaurants that do take out and is in category of 'BBQ' */
SELECT * FROM restaurant WHERE doestakeout=TRUE AND cuisine='BBQ';
/* restaurants within one mile */
SELECT * FROM restaurant WHERE distance<1;
/* restaurants you haven't eaten within the last week */
SELECT * FROM restaurant WHERE lastvisited<'2018-03-25';
/* restaurants you haven't eaten in the last month and has 4.4 stars */
SELECT * FROM restaurant WHERE lastvisited<'2018-02-01' AND stars>4.4;

/* writing aggregation and sorting queries */

/* list restaurants by closest distance */
SELECT * FROM restaurant ORDER BY distance;
/* list the top two restaurants by distance */
SELECT 2 FROM restaurant ORDER BY distance;
/* list the top two restaurants by stars */
SELECT *  FROM restaurant ORDER BY stars DESC LIMIT 2;
/* list the top two restaurants by stars where the distance is less than 1.1 miles */
SELECT * FROM restaurant ORDER BY stars DESC, distance<1.1 LIMIT 2;
/* count the number of restaurants in the database */
SELECT COUNT(id) FROM restaurant;
/* count the number of restaurants by category */
SELECT COUNT(cuisine) FROM restaurant GROUP BY cuisine;
/* get the average stars per restaurant by category */
SELECT AVG(stars) FROM restaurant GROUP BY cuisine;
/* get the max stars of a restaurant by category */
SELECT MAX(stars) FROM restaurant GROUP BY cuisine;