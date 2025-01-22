
document.addEventListener('DOMContentLoaded', function() {
    const productList = [
        {
            "id": 1,
            "image": "assets/image1.svg",
            "name": "Встраиваемый светильник Markt",
            "price": 5060,
            "salePrice": 3490,
            "isOnSale": true
        },
        {
            "id": 2,
            "image": "assets/image2.svg",
            "name": "Линейный светильник ARG",
            "price": 6700,
            "isOnSale": false
        },
        {
            "id": 3,
            "image": "assets/image3.svg",
            "name": "Светодиодный светильник",
            "price": 6060,
            "salePrice": 5060,
            "isOnSale": true
        },
        {
            "id": 4,
            "image": "assets/image4.svg",
            "name": "Встраиваемый светильник Markt",
            "price": 3490,
            "isOnSale": false
        },
        {
            "id": 5,
            "image": "assets/image5.svg",
            "name": "Линейный светильник ARG",
            "price": 6060,
            "salePrice": 6700,
            "isOnSale": true
        },
        {
            "id": 6,
            "image": "assets/image6.svg",
            "name": "Сведодиодный светильник",
            "price": 5060,
            "isOnSale": false
        },
        {
            "id": 7,
            "image": "assets/image7.svg",
            "name": "Встраиваемый светильник Markt",
            "price": 6060,
            "salePrice": 3490,
            "isOnSale": true
        },
        {
            "id": 8,
            "image": "assets/image8.svg",
            "name": "Линейный светильник ARG",
            "price": 6700,
            "isOnSale": false
        }
    ];
    

    const productListContainer = document.getElementById('product-list');

    if (productListContainer) {
        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.style.position = 'relative';

            if (product.isOnSale) {
                const saleBadge = document.createElement('div');
                saleBadge.classList.add('sale-badge');
                saleBadge.textContent = 'Акция';
                productCard.appendChild(saleBadge);
            }

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            productCard.appendChild(productImage);

            const productName = document.createElement('div');
            productName.classList.add('product-name');
            productName.textContent = product.name;
            productCard.appendChild(productName);

            const productPrices = document.createElement('div');
            productPrices.classList.add('product-prices');
            productCard.appendChild(productPrices);

            if (product.isOnSale) {
                const salePrice = document.createElement('div');
                salePrice.classList.add('sale-price');
                salePrice.textContent = product.salePrice;
                productPrices.appendChild(salePrice);

                const rubIcon = document.createElement('img');
                rubIcon.src = 'assets/₽_orange.svg'; 
                rubIcon.alt = 'Ruble';
                rubIcon.classList.add('rubIcon');
                productPrices.appendChild(rubIcon);

                const isOnSaleProductPrice = document.createElement('div');
                isOnSaleProductPrice.classList.add('is-OnSale-product-price');
                isOnSaleProductPrice.textContent = product.price;
                productPrices.appendChild(isOnSaleProductPrice);
    
                const rubIcon2 = document.createElement('img');
                rubIcon2.src = 'assets/₽_grey.svg'; 
                rubIcon2.alt = 'Ruble';
                rubIcon2.classList.add('rubIcon');
                productPrices.appendChild(rubIcon2);
            } else {
                const productPrice = document.createElement('div');
                productPrice.classList.add('product-price');
                productPrice.textContent = product.price;
                productPrices.appendChild(productPrice);
    
                const rubIcon = document.createElement('img');
                rubIcon.src = 'assets/₽_black.svg'; 
                rubIcon.alt = 'Ruble';
                rubIcon.classList.add('rubIcon');
                productPrices.appendChild(rubIcon);
            }

            const greyRectangle = document.createElement('div');
            greyRectangle.classList.add('grey-rectangle');
            productCard.appendChild(greyRectangle);

            const detailsButton = document.createElement('button');
            detailsButton.classList.add('details-button');
            detailsButton.textContent = 'Подробнее';
            greyRectangle.appendChild(detailsButton);

            productListContainer.appendChild(productCard);
        });
    } else {
        console.error('Product list container not found');
    }
});
