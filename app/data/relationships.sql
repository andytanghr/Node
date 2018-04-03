CREATE TABLE author (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE article (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    author_id INTEGER REFERENCES author (id)
)
/* REFERENCES aka foreign key, i.e. foreign to the current table. It means that author_id cannot add to article table unless there's an id from the author table */
/* to maintain integrity of article table by forcing linking relationship, aka a reference to another table */
