-- INSERT INTO student VALUES (
-- 'Joy','joy@dc.com','joy@github.com',10,'F','2022-07-05',FALSE
-- );
-- INSERT INTO student VALUES
-- ('Shannon', 'Shannon@dc.com', 'Shannon@github', 10, 'F', '2022-07-05'),
-- ('Christian', 'Christian@dc.com', 'Christian@github', 10, 'M', '2022-07-05'),
-- ('Peyton', 'Peyton@dc.com', 'Peyton@github', 10, 'M', '2022-07-05'),
-- ('Nomi', 'Nomi@dc.com', 'Nomi@github', 10, 'M', '2022-07-05'),
-- ('Dan', 'Dan@dc.com', 'Dan@github', 10, 'M', '2022-07-05'),
-- ('Ryan', 'Ryan@dc.com', 'Ryan@github', 10, 'M', '2022-07-05'),
-- ('Thomas', 'Thomas@dc.com', 'Thomas@github', 10, 'M', '2022-07-05'),
-- ('Tommy', 'Tommy@dc.com', 'Tommy@github', 10, 'M', '2022-07-05'),
-- ('Austin', 'Austin@dc.com', 'Austin@github', 10, 'M', '2022-07-05'),
-- ('Joy','joy@dc.com','joy@github.com',10,'F','2022-07-05'),
-- ('Yvonne','Yvonne@dc.com','Yvonne@github.com',10,'F','2022-07-05'),
-- ('Kipp', 'Kipp@dc.com', 'Kipp@github', 10, 'M', '2022-07-05');

-- UPDATE student SET points = 20 WHERE name = 'Joy';

-- UPDATE student SET points = 15 WHERE gender = 'M';

-- UPDATE student SET gender = 'F' WHERE name = 'Yvonne';

-- DELETE FROM student WHERE name = 'Yvonne';

-- INSERT INTO student VALUES(
--   'Yvonne','Yvonne@dc.com','Yvonne@github.com', 10 ,'F','2022-07-05',FALSE
-- );


-- CREATE TABLE blogs (
--   id SERIAL NOT NULL PRIMARY KEY,
--   title varchar(150),
--   start_date DATE,
--   isVisible BOOLEAN DEFAULT FALSE
-- );

-- INSERT INTO blogs VALUES
-- (DEFAULT, 'js is awesome', '2022-08-22', TRUE),
-- (DEFAULT, 'learning node', '2022-08-22', TRUE),
-- (DEFAULT, 'installing Postgres on Macs', '2022-08-22', TRUE),
-- (DEFAULT, 'installing Postres on PCs', '2022-08-22', TRUE),
-- (DEFAULT, 'Google APIs', '2022-08-22', TRUE);

-- DELETE FROM blogs WHERE id = 5;

-- INSERT INTO blogs VALUES (DEFAULT, 'google apis', '2022-08-21');

-- DELETE FROM student;

-- SELECT COUNT(*), SUM(points), AVG(points), MAX(points), MIN(points) FROM student;

-- SELECT * FROM student ORDER BY name;

-- SELECT * FROM student ORDER BY name DESC;

-- SELECT * FROM student ORDER BY points DESC, name ASC;

-- UPDATE student SET points = 20 WHERE name = 'Yvonne';

-- UPDATE student SET points = 20 WHERE name = 'Joy';

-- SELECT * FROM student ORDER BY gender LIMIT 5;