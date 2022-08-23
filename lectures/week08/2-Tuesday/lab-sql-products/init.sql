
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


DELETE FROM articles;
DELETE FROM author;