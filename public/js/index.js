// const cardSection = document.querySelector('.cards-section');

// data.forEach(element => {
//     const card = document.createElement('div');
//     const image = document.createElement('div');
//     const imgContainer = document.createElement('div');
//     const productImg = document.createElement('img');
//     const sticker = document.createElement('div');
//     const details = document.createElement('div');
//     const productCategory = document.createElement('div');
//     const productTitle = document.createElement('div');
//     const priceStars = document.createElement('div');
//     const price = document.createElement('div');
//     const stars = document.createElement('div');
//     const star1 = document.createElement('i');
//     const star2 = document.createElement('i');
//     const star3 = document.createElement('i');
//     const star4 = document.createElement('i');
//     const star5 = document.createElement('i');

//     card.classList.add('card');
//     image.classList.add('image');
//     imgContainer.classList.add('img-container');
//     productImg.classList.add('product-img');
//     sticker.classList.add('sticker');
//     details.classList.add('details');
//     productCategory.classList.add('product-category');
//     productTitle.classList.add('product-title');
//     priceStars.classList.add('price-stars');
//     price.classList.add('price');
//     stars.classList.add('stars');

//     star1.classList.add('fa-solid','fa-star');
//     star2.classList.add('fa-solid','fa-star');
//     star3.classList.add('fa-solid','fa-star');
//     star4.classList.add('fa-solid','fa-star');
//     star5.classList.add('fa-solid','fa-star-half-stroke');

//     productImg.src = element.img;
//     productCategory.textContent = element.category;
//     productTitle.textContent = element.title;
//     price.textContent = "$ " + element.price;

//     imgContainer.appendChild(productImg);
//     image.appendChild(imgContainer);
//     image.appendChild(sticker);

//     stars.appendChild(star1);
//     stars.appendChild(star2);
//     stars.appendChild(star3);
//     stars.appendChild(star4);
//     stars.appendChild(star5);

//     priceStars.appendChild(price);
//     priceStars.appendChild(stars);

//     details.appendChild(productCategory);
//     details.appendChild(productTitle);
//     details.appendChild(priceStars);

//     card.appendChild(image);
//     card.appendChild(details);

//     cardSection.appendChild(card);
// })