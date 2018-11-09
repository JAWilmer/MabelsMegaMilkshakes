USE shake_db;

INSERT INTO shakes
    (name, devoured)
VALUES
    ('Triple Chocolate Lava Cake', true),
    ('Caramel Corn', true),
    ('Fluffernutter', true),
    ('Lemon Meringue', false),
    ('Funfetti Birthday Cake', false),
    ('Cherry Bomb', false);



SELECT
    *
FROM shakes;