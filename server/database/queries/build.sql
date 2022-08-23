BEGIN;

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS seller CASCADE;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    img TEXT NOT NULL, 
    description TEXT NOT NULL, 
    price INTEGER NOT NULL 
);

INSERT INTO products (title, img, description, price) VALUES 
('apple watch', '#', 'watch', 500), ('apple iphone', '#', 'phone', 600);

CREATE TABLE seller (
    seller_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    website TEXT NOT NULL,
    lociton VARCHAR(255) NOT NULL
);

INSERT INTO seller (name, website, lociton) VALUES 
('Apple', 'apple.com', 'USA'), ('HP', 'hp.com', 'USA');


COMMIT; 