
CREATE DATABASE olympia_dev;
CREATE TABLE olympia_dev.olympians (id SERIAL PRIMARY KEY, name STRING, description STRING);
CREATE TABLE olympia_dev.coliseums (id SERIAL PRIMARY KEY, name STRING, description STRING);
CREATE TABLE olympia_dev.rulebooks (id SERIAL PRIMARY KEY, name STRING, point_types STRING);
CREATE TABLE olympia_dev.olympian_stats (
    id SERIAL PRIMARY KEY,
    fk_olympian_id INT NOT NULL REFERENCES olympia_dev.olympians (id),
    fk_coliseum_id INT NOT NULL REFERENCES olympia_dev.coliseums (id),
    fk_gametype_id INT NOT NULL REFERENCES olympia_dev.rulebooks (id),
    stat_object STRING,
    match_count INT
);
CREATE TABLE olympia_dev.matches (
    id SERIAL PRIMARY KEY,
    fk_coliseum_id INT NOT NULL REFERENCES olympia_dev.coliseums (id),
    fk_gametype_id INT NOT NULL REFERENCES olympia_dev.rulebooks (id),
    match_object STRING
);
CREATE TABLE olympia_dev.coliseum_stats (
    id SERIAL PRIMARY KEY,
    fk_coliseum_id INT NOT NULL REFERENCES olympia_dev.coliseums (id),
    fk_gametype_id INT NOT NULL REFERENCES olympia_dev.rulebooks (id),
    stat_object STRING,
    match_count INT
);

TRUNCATE TABLE olympia_dev.coliseum_stats;
TRUNCATE TABLE olympia_dev.matches;
TRUNCATE TABLE olympia_dev.olympian_stats;
