let productsData = [
  {
    "productname": "iPhone 16 Pro Max",
    "category": "Flagship Pro",
    "price": 1199,
    "imageurls": ["https://images.unsplash.com/photo-1632661595063-7fd61b8eef74?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 16 Pro",
    "category": "Flagship Pro",
    "price": 999,
    "imageurls": ["https://images.unsplash.com/photo-1727996193555-0fa3fd9ee5d1?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 16 Plus",
    "category": "Flagship Plus",
    "price": 899,
    "imageurls": ["https://images.unsplash.com/photo-1727838921086-7e9d733ac1bf?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 16",
    "category": "Flagship Standard",
    "price": 799,
    "imageurls": ["https://images.unsplash.com/photo-1688775324670-feebeed95bca?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 15 Pro Max",
    "category": "Pro Max",
    "price": 1099,
    "imageurls": ["https://images.unsplash.com/photo-1723673608766-841cf1d7e374?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 15 Pro",
    "category": "Pro",
    "price": 899,
    "imageurls": ["https://images.unsplash.com/photo-1691929820515-276cf7e7e528?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 15 Plus",
    "category": "Plus",
    "price": 799,
    "imageurls": ["https://images.unsplash.com/photo-1696463148460-eee9e9f60d49?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 15",
    "category": "Standard",
    "price": 699,
    "imageurls": ["https://images.unsplash.com/photo-1727838916482-7e9d733ac1bf?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 14 Pro Max",
    "category": "Pro Max",
    "price": 999,
    "imageurls": ["https://images.unsplash.com/photo-1664478546384-839152e0f701?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 14 Pro",
    "category": "Pro",
    "price": 849,
    "imageurls": ["https://images.unsplash.com/photo-1661963516320-34d708951e5e?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 14 Plus",
    "category": "Plus",
    "price": 749,
    "imageurls": ["https://images.unsplash.com/photo-1661974358075-2707fd951216?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 14",
    "category": "Standard",
    "price": 649,
    "imageurls": ["https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 13 Pro Max",
    "category": "Pro Max",
    "price": 899,
    "imageurls": ["https://images.unsplash.com/photo-1640900695278-1be771a07767?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 13 Pro",
    "category": "Pro",
    "price": 749,
    "imageurls": ["https://images.unsplash.com/photo-1640480959409-9e9e39183b36?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 13",
    "category": "Standard",
    "price": 599,
    "imageurls": ["https://images.unsplash.com/photo-1661963516320-34d708951e5e?w=800&fit=crop"]
  },
  {
    "productname": "iPhone SE (2022)",
    "category": "Budget",
    "price": 429,
    "imageurls": ["https://images.unsplash.com/photo-1585312289810-08a09a51674e?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 12 Pro Max",
    "category": "Pro Max",
    "price": 799,
    "imageurls": ["https://images.unsplash.com/photo-1602183987859-0bf6c6302e8b?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 12 Pro",
    "category": "Pro",
    "price": 699,
    "imageurls": ["https://images.unsplash.com/photo-1602829961351-1eb698e5d635?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 12",
    "category": "Standard",
    "price": 549,
    "imageurls": ["https://images.unsplash.com/photo-1592899677059-766a92908c3f?w=800&fit=crop"]
  },
  {
    "productname": "iPhone 11",
    "category": "Value",
    "price": 449,
    "imageurls": ["https://images.unsplash.com/photo-1592899677059-766a92908c3f?w=800&fit=crop"]
  }
];
let allProducts =""
productsData.forEach(function(elem , index){
  console.log(elem);
  allProducts+= `<div class="product-card">
                <div class="img"><img src=${elem.imageurls[0]} alt=""></div>
                <div class="content">
                    <h3>Name:  <span>${elem.productname}</span></h3>
                    <h3>Categories  <span>${elem.category}</span>:</h3>
                    <h3>Price: <span> ${elem.price}</span></h3>
                </div>
                <div class="btns">
                    <button id = ${index}>Remove</button>
                    <button id = ${index}>Add to Cart</button>
                </div>
            </div>`
})

let section = document.querySelector("section");
section.innerHTML = allProducts

section.addEventListener('click',function(dets){
  if(!dets.target.id){
    return;
    
  }


  let clickedCard = productsData.find(function(elem,index){
    return index == dets.target.id;
  });
  console.log(clickedCard);
  let cardsData=[];
  cardsData.push(clickedCard)
  console.log("cards array->",cardsData);
});  

let cartScreen = document.querySelector('.cart-screen');
let home = document.querySelector('#home');
let cart = document.querySelector('#cart');
cart.addEventListener('click',function(){
  cartScreen.style.display = "initial";
})

home.addEventListener('click',function(){
  cartScreen.style.display = "none";
})

function renderUi(){
  
let cartsUi="";
cardsData.forEach(function(elem , index){
  cartsUi+=`<div class="product-card">
                <div class="img"><img src=${elem.imageurls[0]} alt=""></div>
                <div class="content">
                    <h3>Name:  <span>${elem.productname}</span></h3>
                    <h3>Categories  <span>${elem.category}</span>:</h3>
                    <h3>Price: <span> ${elem.price}</span></h3>
                </div>
                <div class="btns">
                    <button id = ${index}>Remove</button>
                    <button id = ${index}>Add to Cart</button>
                </div>
            </div>`
})
cartScreen.innerHTML = cartsUi;
}

renderUi();