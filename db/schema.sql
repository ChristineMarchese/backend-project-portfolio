DROP DATABASE IF EXISTS cats_dev;
CREATE DATABASE cats_dev;

\c cats_dev;

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    cat_id INT,
    gender TEXT,
    age TEXT,
    is_available BOOLEAN NOT NULL,
    cost NUMERIC,
    description TEXT
);

