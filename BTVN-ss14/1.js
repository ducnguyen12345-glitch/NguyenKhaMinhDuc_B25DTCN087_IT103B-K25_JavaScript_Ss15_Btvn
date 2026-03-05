const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò La", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Li Xi", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
//bài 1
let ulProductList= document.getElementById("product-list");

products.forEach((product) => {
    let divProduct = document.createElement("div");

    divProduct.classList.add("product");

    divProduct.innerText = `${product.name}: ${product.price}đ`;

    ulProductList.appendChild(divProduct);
});


//bài 2
const form = document.getElementById("product-form");

const inputProductName = document.getElementById("product-name");
const inputProductPrice = document.getElementById("product-price");

form.addEventListener("submit", event => {
    event.preventDefault();

    let name = inputProductName.value;
    let price = inputProductPrice.value;

    const newProduct = {id: products.length + 1, name, price};
    products.push(newProduct);

    const li = document.createElement("li");
    li.classList.add("product-item");

    li.innerHTML = `${newProduct.name}: ${newProduct.price}đ
                    <button class="delete-btn">Xóa</button>`;

    ulProductList.appendChild(li);

    inputProductName.value = "";
    inputProductPrice.value = "";
});

// bài 3
