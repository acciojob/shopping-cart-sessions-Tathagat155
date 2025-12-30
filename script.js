// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
  let cartStorage=JSON.parse(sessionStorage.getItem("cartList"))||[]
// DOM elements
const productList = document.getElementById("product-list");
const cartList=document.getElementById("cart-list")
const clearbtn=document.getElementById("clear-cart-btn")
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart(){
	cartList.innerHTML="";
	for(let product of cartStorage){
	 const li = document.createElement("li");
	 li.innerHTML = `${product.Pname} - $${product.Pprice}`
     cartList.appendChild(li)
}
}

// Add item to cart
function addToCart(productId) {
	const product=products.find(p=>p.id===productId);
	const productname=product.name;
	const productprice=product.price;
	cartStorage.push({
		Pname:productname,
		Pprice:productprice
	})
	sessionStorage.setItem("cartList",JSON.stringify(cartStorage));
	renderCart()
}

// Remove item from cart
clearbtn.addEventListener("click",removeFromCart)
function removeFromCart() {
	cartStorage=[];
	sessionStorage.removeItem("cartList")
	clearCart()
}

// Clear cart
function clearCart() {
	renderCart()
}

// Initial render
renderProducts();
renderCart();
