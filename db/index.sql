CREATE DATABASE Canestilo

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment VARCHAR,
)

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    category VARCHAR,
)

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    mail VARCHAR,
    password VARCHAR,
)
