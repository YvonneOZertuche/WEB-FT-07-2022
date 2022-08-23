-- CREATE TABLE restaurant(
--   id serial primary key,
--   Name varchar,
--   Distance integer,
--   Stars char(5),
--   Category varchar,
--   Favorite_dish varchar,
--   Takeout BOOLEAN,
--   Last_time_you_ate_there DATE
-- );

-- INSERT INTO restaurant VALUES 
-- (DEFAULT, 'olvie garden', 10, 3, 'italian', 'baked ziti', 'Y', '2022-08-01');
-- (DEFAULT, 'New York Pizza', 15, 5, 'italian', 'Pizza', 'Y', '2021-08-01'),
-- (DEFAULT, 'Mexican Manhattan', 20, 5, 'San Antonio Mexican', 'Enchiladas', 'Y', '2020-08-18');
-- (DEFAULT, 'Siam Cuisine', 18, 5, 'Thai', 'Phad King', 'N', '2022-07-18');
-- (DEFAULT, 'Smokey Moes', 5,4, 'Barbecue', 'brisket', 'N', '2022-06-18');
-- (DEFAULT, 'Popeyes', 8, 3, 'Fried Chicken', 'Strips', 'N', '2022-06-10');
-- (DEFAULT, 'Moon Tower', 12, 4, 'Chinese', 'Beef and Broccoli', 'N', '2022-08-18'),
-- (DEFAULT, 'Franklins Barbecue', 30, 4, 'BBQ', 'Brisket', 'Y', '2022-08-18'),
-- (DEFAULT, 'Franklins Barbecue', 30, 4, 'BBQ', 'Brisket', 'Y', '2022-08-18'),


-- DELETE FROM restaurant WHERE id = 3;

-- SELECT Favorite_dish FROM restaurant WHERE stars = '5';

-- SELECT id FROM restaurant WHERE name = 'Moon Tower';

-- UPDATE restaurant SET category = 'BBQ' WHERE name = 'Smokey Moes';

-- SELECT name FROM restaurant WHERE category = 'BBQ';

-- SELECT name FROM restaurant WHERE takeout = 'Y';

-- SELECT * FROM restaurant WHERE takeout = 'Y' and category = 'BBQ';

-- SELECT * FROM restaurant WHERE distance < 10;

-- SELECT * FROM restaurant ORDER BY distance DESC LIMIT 2;

-- SELECT * FROM restaurant ORDER BY distance ASC LIMIT 2;

-- SELECT * FROM restaurant ORDER BY stars ASC LIMIT 2;

-- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;

-- SELECT COUNT(*)FROM restaurant GROUP BY category;

-- SELECT * FROM restaurant ORDER BY distance < 10, stars LIMIT 2;

-- SELECT MAX(stars) FROM restaurant GROUP BY category;

-- GET THE AVERAGE STARS PER RESTAURANT BY CATEGORY

-- SELECT AVG(stars) FROM restaurant GROUP BY category;

-- ALTER TABLE restaurant
-- ALTER COLUMN stars TYPE integer USING stars::integer;