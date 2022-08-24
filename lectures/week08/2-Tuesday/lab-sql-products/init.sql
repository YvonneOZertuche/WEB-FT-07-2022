
-- CREATE TABLE author(
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );


-- CREATE TABLE articles(
--     id SERIAL PRIMARY KEY, 
--     title varchar(150),
--     author_id integer REFERENCES author(id)
-- );




-- INSERT INTO author VALUES
-- (DEFAULT, 'Jose'),
-- (DEFAULT, 'Mike'),
-- (DEFAULT, 'Brandon'),
-- (DEFAULT, 'Andrena'),
-- (DEFAULT, 'Destiny'),
-- (DEFAULT, 'Rio'),
-- (DEFAULT, 'Q'),
-- (DEFAULT, 'Jason M.'),
-- (DEFAULT, 'Bodgan'),
-- (DEFAULT, 'Jennifer'),
-- (DEFAULT, 'Layne'),
-- (DEFAULT, 'Lorenzo'),
-- (DEFAULT, 'Cook'),
-- (DEFAULT, 'Victoria'),
-- (DEFAULT, 'Giselle'),
-- (DEFAULT, 'Carol'),
-- (DEFAULT, 'Jason H.'),
-- (DEFAULT, 'Jim'),
-- (DEFAULT, 'Anjunique'),
-- (DEFAULT, 'Jacob'),
-- (DEFAULT, 'Matt'),
-- (DEFAULT, 'Jake');


-- INSERT INTO articles VALUES 
-- (DEFAULT, 'JS Prototypes', 1), 
-- (DEFAULT, 'JS Promises', 3),
-- (DEFAULT, 'Express Routes', 10),
-- (DEFAULT, 'Styling with Bootstrap', 4),
-- (DEFAULT, 'API calls with Google Maps', 3),
-- (DEFAULT, 'Python RPG Game', 7),
-- (DEFAULT, 'Object Oriented Programming in JS', 7),
-- (DEFAULT, 'Nested For Loops', 7),
-- (DEFAULT, 'Preparing for Technical Interviews', 1),
-- (DEFAULT, 'Why I went to a coding camp', 1),
-- (DEFAULT, 'Coding in Romanian', 2),
-- (DEFAULT, 'Fizz Buzz - The Solution', 9),
-- (DEFAULT, 'Recursive Fibonacci with Memoization', 11),
-- (DEFAULT, 'Merge Sort', 15);

-- INSERT INTO articles VALUES 
-- (DEFAULT, 'JS Prototypes', 7);


-- DELETE FROM articles;
-- DELETE FROM author;

-- CREATE TABLE groups (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR
-- );

-- CREATE TABLE member (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR
-- );

-- CREATE TABLE membership (
--   id SERIAL PRIMARY KEY,
--   team_id INTEGER REFERENCES groups (id),
--   member_id INTEGER REFERENCES member (id)
-- );

-- INSERT INTO groups VALUES
-- (DEFAULT, 'Atlanta Javascript Meetup');
-- (DEFAULT, 'PyLadies'),
-- (DEFAULT, 'Girl Develop It'),
-- (DEFAULT, 'Atlanta Web Design Group');

-- INSERT INTO member VALUES
-- (DEFAULT, 'Alfie'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Tarek'),
-- (DEFAULT, 'Kevin'),
-- (DEFAULT, 'Glen'),
-- (DEFAULT, 'David'),
-- (DEFAULT, 'Ollie'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Sabrina'),
-- (DEFAULT, 'Garrett'),
-- (DEFAULT, 'Jeroen'),
-- (DEFAULT, 'Deron');

-- INSERT INTO membership VALUES
-- (DEFAULT, 4, 4),
-- (DEFAULT, 1, 5),
-- (DEFAULT, 1, 6),
-- (DEFAULT, 1, 10),
-- (DEFAULT, 2, 1),
-- (DEFAULT, 2, 5),
-- (DEFAULT, 2, 6),
-- (DEFAULT, 2, 10),
-- (DEFAULT, 3, 8),
-- (DEFAULT, 3, 9),
-- (DEFAULT, 3, 10),
-- (DEFAULT, 3, 12),
-- (DEFAULT, 4, 1),
-- (DEFAULT, 4, 3),
-- (DEFAULT, 4, 7),
-- (DEFAULT, 4, 8);

SELECT *
FROM 
  groups
INNER JOIN
  membership
ON 
  groups.id = group_id
INNER JOIN
  member 
ON
  member.id = member_id;    
