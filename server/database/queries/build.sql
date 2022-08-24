BEGIN;

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS seller CASCADE;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    img TEXT NOT NULL, 
    category VARCHAR(255) NOT NULL, 
    price INTEGER NOT NULL 
);

INSERT INTO products (title, img, category, price) VALUES 
('Apple Watch Series 5', 'https://i5.walmartimages.com/asr/426a2064-739c-49fa-848c-0df3e38a365e.13ec05999b999ff6a7d896b6561fed8b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'watch', 149),
('Apple 10.2-inch iPad', 'https://i5.walmartimages.com/asr/86cda84e-4f55-4ffa-954e-9ca5ae27b723.8a72a9690e1951f535eed412cc9e5fc3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'ipad', 299),
('ASUS Core ROG Strix Scar Laptop', 'https://i5.walmartimages.com/asr/01b11b01-54a6-426f-9009-e79d3def96ba.2e1c972951cef0cfafda66139d191e04.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'laptop', 1399),
('Epson Expression Home Printer', 'https://i5.walmartimages.com/asr/a1e72e07-c525-45b9-a40a-0f9630f99f56_1.f4d8b0c17a102dae59da29d814bdbaf3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'printer', 70),
('Virmee VT3 Plus Smart Watch', 'https://i5.walmartimages.com/asr/0ec57912-cc35-4dde-aaa4-47b820a8efc5.989d762818c4ebaea25942b0e00b2fc3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'watch', 20),
('Apple 10.9-inch iPad ', 'https://i5.walmartimages.com/asr/58b1df79-47e0-41fb-bc7b-73a486b42165.eeb9b216e7850b21810cb0ce3ab657f4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'ipad', 560),
('Apple Watch Series 7', 'https://i5.walmartimages.com/asr/db631f9d-1023-4c2b-9f0a-be326ec58039.6d2a602eb91031bbb04b164d916625e3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'watch', 370),
('MSI GF63 Thin Laptop', 'https://i5.walmartimages.com/asr/6dd952b3-a2f0-49de-8598-fc0dce24c4ce.7ab6e5b54e52d8fdbdb91a9c9d85bbf3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'laptop', 750);


CREATE TABLE seller (
    seller_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    website TEXT NOT NULL,
    lociton VARCHAR(255) NOT NULL
);

INSERT INTO seller (name, website, lociton) VALUES 
('Apple', 'apple.com', 'USA'), ('HP', 'hp.com', 'USA');


COMMIT; 