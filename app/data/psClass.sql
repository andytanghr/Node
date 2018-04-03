CREATE DATABASE campus;

\c campus;

CREATE TABLE student (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR,
    github VARCHAR,
    points INTEGER DEFAULT 0,
    start_date DATE,
    graduated BOOLEAN DEFAULT FALSE
);

INSERT INTO student VALUES (DEFAULT, 'Paul', 'pizzapanther', 6, '2017-04-17', FALSE);
