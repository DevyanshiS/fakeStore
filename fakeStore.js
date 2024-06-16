"use strict";

/* NEWSLETTER POPUP */
window.onload=function(){
    setTimeout(()=>{document.querySelector(".newsLetter").style.display="block"},2000);
};

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".newsLetter").style.display="none";
});

document.querySelector(".sub").addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".newsLetter").style.display="none";
});

document.querySelector(".nl").addEventListener("click",function(){
    document.querySelector(".newsLetter").style.display="block";
});


document.querySelector(".top").addEventListener("click",function(){
    window.scrollTo(0,0);
});



document.querySelector(".mc").addEventListener("click", function(){
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const menClothing = data.filter(item => item.category === "men's clothing");
            const container = document.createElement('div');
            container.classList.add("container");
            const clothingContainer = document.createElement('div');
            clothingContainer.classList.add("clothingContainer");

            container.innerHTML = `
                <h1>Men's Clothing</h1>
                <img src="imgs/menclothing.jpeg" alt="Men's Clothing">
            `;

            menClothing.forEach(item => {
                const clothingItem = document.createElement('div');
                clothingItem.classList.add('clothing-item');
                clothingItem.classList.add('col-6');
                clothingItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="itemDetails">
                        <h3>$ ${item.price}</h3>
                        <h3>${item.title}</h3>
                        <p class="ratings"><span class="fa-solid fa-star"></span> ${item.rating.rate}</p>
                        <p>(${item.rating.count} reviews)<p>
                        <p class="itemDesc">${item.description}</p>
                        <button><span class="fa-solid fa-cart-shopping"></span></button>
                    </div>
                `;
                clothingContainer.appendChild(clothingItem);
            });

            container.appendChild(clothingContainer);

            // Open a new tab with the clothing items
            const newTab = window.open("", "_blank");
            newTab.document.body.appendChild(container);

            newTab.document.head.innerHTML = `
                <title>Men's Clothing</title>
                <link rel="stylesheet" href="items.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" 
                integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" 
                referrerpolicy="no-referrer" />
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});


document.querySelector(".wc").addEventListener("click", function(){
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const womenClothing = data.filter(item => item.category === "women's clothing");
            const container = document.createElement('div');
            container.classList.add("container");
            const clothingContainer = document.createElement('div');
            clothingContainer.classList.add("clothingContainer");

            container.innerHTML = `
                <h1>Women's Clothing</h1>
                <img src="imgs/womenclothing.avif" alt="Women's Clothing">
            `;

            womenClothing.forEach(item => {
                const clothingItem = document.createElement('div');
                clothingItem.classList.add('clothing-item');
                clothingItem.classList.add('col-6');
                clothingItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="itemDetails">
                        <h3>$ ${item.price}</h3>
                        <h3>${item.title}</h3>
                        <p class="ratings"><span class="fa-solid fa-star"></span> ${item.rating.rate}</p>
                        <p>(${item.rating.count} reviews)<p>
                        <p class="itemDesc">${item.description}</p>
                        <button><span class="fa-solid fa-cart-shopping"></span></button>
                    </div>
                `;
                clothingContainer.appendChild(clothingItem);
            });

            container.appendChild(clothingContainer);

            // Open a new tab with the clothing items
            const newTab = window.open("", "_blank");
            newTab.document.body.appendChild(container);

            newTab.document.head.innerHTML = `
                <title>Women's Clothing</title>
                <link rel="stylesheet" href="items.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" 
                integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" 
                referrerpolicy="no-referrer" />
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});


document.querySelector(".ele").addEventListener("click", function(){
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const ele = data.filter(item => item.category === "electronics");
            const container = document.createElement('div');
            container.classList.add("container");
            const clothingContainer = document.createElement('div');
            clothingContainer.classList.add("clothingContainer");

            container.innerHTML = `
                <h1>Electronics</h1>
                <img src="imgs/electronics1.jpeg" alt="Electronics">
            `;

            ele.forEach(item => {
                const clothingItem = document.createElement('div');
                clothingItem.classList.add('clothing-item');
                clothingItem.classList.add('col-6');
                clothingItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="itemDetails">
                        <h3>$ ${item.price}</h3>
                        <h3>${item.title}</h3>
                        <p class="ratings"><span class="fa-solid fa-star"></span> ${item.rating.rate}</p>
                        <p>(${item.rating.count} reviews)<p>
                        <p class="itemDesc">${item.description}</p>
                        <button><span class="fa-solid fa-cart-shopping"></span></button>
                    </div>
                `;
                clothingContainer.appendChild(clothingItem);
            });

            container.appendChild(clothingContainer);

            // Open a new tab with the clothing items
            const newTab = window.open("", "_blank");
            newTab.document.body.appendChild(container);

            newTab.document.head.innerHTML = `
                <title>Electronics</title>
                <link rel="stylesheet" href="items.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" 
                integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" 
                referrerpolicy="no-referrer" />
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});



document.querySelector(".jewl").addEventListener("click", function(){
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const jewe = data.filter(item => item.category === "jewelery");
            const container = document.createElement('div');
            container.classList.add("container");
            const clothingContainer = document.createElement('div');
            clothingContainer.classList.add("clothingContainer");

            container.innerHTML = `
                <h1>Jewellery</h1>
                <img src="imgs/jewellery.avif" alt="Jewellery">
            `;

            jewe.forEach(item => {
                const clothingItem = document.createElement('div');
                clothingItem.classList.add('clothing-item');
                clothingItem.classList.add('col-6');
                clothingItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="itemDetails">
                        <h3>$ ${item.price}</h3>
                        <h3>${item.title}</h3>
                        <p class="ratings"><span class="fa-solid fa-star"></span> ${item.rating.rate}</p>
                        <p>(${item.rating.count} reviews)<p>
                        <p class="itemDesc">${item.description}</p>
                        <button><span class="fa-solid fa-cart-shopping"></span></button>
                    </div>
                `;
                clothingContainer.appendChild(clothingItem);
            });

            container.appendChild(clothingContainer);

            // Open a new tab with the clothing items
            const newTab = window.open("", "_blank");
            newTab.document.body.appendChild(container);

            newTab.document.head.innerHTML = `
                <title>Jewellery</title>
                <link rel="stylesheet" href="items.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" 
                integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" 
                referrerpolicy="no-referrer" />
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});
