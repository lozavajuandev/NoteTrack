CREATE DATABASE tasksdb

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255)
)