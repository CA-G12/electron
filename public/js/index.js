const cardSection = document.querySelector('.cards-section');
const xButton = document.querySelector('.x');
const xButton2 = document.querySelector('.x2');
const addProductsButton = document.querySelector('#addproductsbutton');
const form = document.querySelector(".form");
const deleteButton = document.querySelector('.product-details-delete');

const popup = document.querySelector('.product-popup');
const productsDetailsImage = document.querySelector('.product-details-image');
const productsDetailsTitle = document.querySelector('.product-details-title');
const productsDetailsPrice = document.querySelector('.product-details-price');

const sellerDetailsImage = document.querySelector('.seller-details-image');
const sellerDetailsTitle = document.querySelector('.seller-details-title');
const sellerDetailsWebsite = document.querySelector('.seller-details-website');
const sellerDetailsLocation = document.querySelector('.seller-details-location');
const sellerDetailsid = document.querySelector('.seller-details-id');


addProductsButton.addEventListener("click",()=>{
    form.style.display = "block";
})

xButton2.addEventListener("click",()=>{
    form.style.display = "none";
})

const renderPopUpData = (element) => {
    productsDetailsImage.src = element.product_img;
    productsDetailsTitle.textContent = element.product_title;
    productsDetailsPrice.textContent = "$ " + element.price;

    sellerDetailsImage.src = element.seller_img;
    sellerDetailsTitle.textContent = element.seller_name;
    sellerDetailsWebsite.textContent = element.website;
    sellerDetailsLocation.textContent = element.location;
    sellerDetailsid.textContent = "Seller id: " + element.seller_id;

    deleteButton.addEventListener("click", () => {
        fetch(`/delete-product/product_id=${element.product_id}`)
        .then(window.location.href = '/');
    })    
    
}

const renderData = (data) => {
    data.forEach((element, index) => {
        const card = document.createElement('div');
        const image = document.createElement('div');
        const imgContainer = document.createElement('div');
        const productImg = document.createElement('img');
        const sticker = document.createElement('div');
        const details = document.createElement('div');
        const productCategory = document.createElement('div');
        const productTitle = document.createElement('div');
        const priceStars = document.createElement('div');
        const price = document.createElement('div');
        const stars = document.createElement('div');
        const star1 = document.createElement('i');
        const star2 = document.createElement('i');
        const star3 = document.createElement('i');
        const star4 = document.createElement('i');
        const star5 = document.createElement('i');
    
        card.classList.add('card');
        image.classList.add('image');
        imgContainer.classList.add('img-container');
        productImg.classList.add('product-img');
        sticker.classList.add('sticker');
        details.classList.add('details');
        productCategory.classList.add('product-category');
        productTitle.classList.add('product-title');
        priceStars.classList.add('price-stars');
        price.classList.add('price');
        stars.classList.add('stars');
    
        star1.classList.add('fa-solid','fa-star');
        star2.classList.add('fa-solid','fa-star');
        star3.classList.add('fa-solid','fa-star');
        star4.classList.add('fa-solid','fa-star');
        star5.classList.add('fa-solid','fa-star-half-stroke');
    
        productImg.src = element.product_img;
        productCategory.textContent = element.category;
        productTitle.textContent = element.product_title;
        price.textContent = "$ " + element.price;
        
        if (index < 3) {
            sticker.textContent = 'New';
            sticker.style.backgroundColor = '#27A9C1'
        } else {
            sticker.textContent = 'Sale';
            sticker.style.backgroundColor = '#78C655'
        }
    
        imgContainer.appendChild(productImg);
        image.appendChild(imgContainer);
        image.appendChild(sticker);
    
        stars.appendChild(star1);
        stars.appendChild(star2);
        stars.appendChild(star3);
        stars.appendChild(star4);
        stars.appendChild(star5);
    
        priceStars.appendChild(price);
        priceStars.appendChild(stars);
    
        details.appendChild(productCategory);
        details.appendChild(productTitle);
        details.appendChild(priceStars);

        card.addEventListener('click', () => {
            popup.style.display = 'flex';
            renderPopUpData(element);
        })
    
        card.appendChild(image);
        card.appendChild(details);
            
        cardSection.appendChild(card);
    })
}

xButton.addEventListener('click', () => {
    popup.style.display = 'none';
})

fetch('/products-data')
.then(response => response.json(response))
.then(response => renderData(response))
