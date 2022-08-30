-- CREATE TABLE restaurant(
--   id integer,
--   name varchar,
--   address varchar,
--   category varchar
-- )

-- CREATE TABLE reviewer(
--   id integer,
--   name varchar,
--   email varchar,
--   karma_between_0_to_7  integer NOT NULL
-- )

CREATE TABLE review(
  id integer,
  reviewer_id varchar UNIQUE,
  stars_1_to_5  integer,
  title varchar,
  review text,
  restaurant_id integer
)