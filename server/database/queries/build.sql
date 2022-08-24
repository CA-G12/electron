BEGIN;

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS seller CASCADE;


CREATE TABLE seller (
    seller_id SERIAL PRIMARY KEY,
    seller_name VARCHAR(255) NOT NULL,
    seller_img TEXT NOT NULL,
    website TEXT NOT NULL,
    location VARCHAR(255) NOT NULL
);

INSERT INTO seller (seller_name, seller_img, website, location) VALUES 
('Apple', 'https://1000logos.net/wp-content/uploads/2016/10/Apple_logo_grey.png', 'apple.com', 'USA'),
('ASUS', 'https://dlcdnimgs.asus.com/websites/global/Sno/79183.jpg', 'asus.com', 'USA'),
('EPSON', 'https://logos-world.net/wp-content/uploads/2020/12/Epson-Logo.png', 'epson.com', 'USA'),
('Virmee', 'https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/299722045_554057209876102_6080128492287545851_n.png?_nc_cat=111&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=znOe-aTxQ9UAX_P8Y4V&_nc_ht=scontent.fjrs10-1.fna&oh=00_AT82NTL6niEZIyL41Dz86PJXAGXfCDXnTktmke2Eyf5svA&oe=630B4952', 'virmee.com', 'CHINA'),
('MSI', 'https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo.png', 'msi.com', 'USA');

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY, 
    product_title VARCHAR(255) NOT NULL, 
    product_img TEXT NOT NULL, 
    category VARCHAR(255) NOT NULL, 
    price INTEGER NOT NULL , 
    seller_id INTEGER NOT NULL
);

INSERT INTO products (product_title, product_img, category, price, seller_id) VALUES 
('Apple Watch Series 5', 'https://i5.walmartimages.com/asr/426a2064-739c-49fa-848c-0df3e38a365e.13ec05999b999ff6a7d896b6561fed8b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Watch', 149, 1),
('Apple 10.2-inch iPad', 'https://i5.walmartimages.com/asr/86cda84e-4f55-4ffa-954e-9ca5ae27b723.8a72a9690e1951f535eed412cc9e5fc3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Ipad', 299, 1),
('ASUS Core ROG Strix Scar Laptop', 'https://i5.walmartimages.com/asr/01b11b01-54a6-426f-9009-e79d3def96ba.2e1c972951cef0cfafda66139d191e04.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Laptop', 1399, 2),
('Epson Expression Home Printer', 'https://i5.walmartimages.com/asr/a1e72e07-c525-45b9-a40a-0f9630f99f56_1.f4d8b0c17a102dae59da29d814bdbaf3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Printer', 70, 3),
('Virmee VT3 Plus Smart Watch', 'https://i5.walmartimages.com/asr/0ec57912-cc35-4dde-aaa4-47b820a8efc5.989d762818c4ebaea25942b0e00b2fc3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Watch', 20, 4),
('Apple 10.9-inch iPad ', 'https://i5.walmartimages.com/asr/58b1df79-47e0-41fb-bc7b-73a486b42165.eeb9b216e7850b21810cb0ce3ab657f4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Ipad', 560, 1),
('Apple Watch Series 7', 'https://i5.walmartimages.com/asr/db631f9d-1023-4c2b-9f0a-be326ec58039.6d2a602eb91031bbb04b164d916625e3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Watch', 370, 1),
('MSI GF63 Thin Laptop', 'https://i5.walmartimages.com/asr/6dd952b3-a2f0-49de-8598-fc0dce24c4ce.7ab6e5b54e52d8fdbdb91a9c9d85bbf3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 'Laptop', 750, 5);


COMMIT; 