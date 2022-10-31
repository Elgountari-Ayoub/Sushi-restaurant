// Humburger Menu
let links = document.getElementById("links-menu");
let hamburger_menu = document.getElementById("hamburger-icon");

hamburger_menu.addEventListener("click", function () {
  links.classList.toggle("show-links-menu");
});

// PRODUCTS CART
// let shop_prod_list_icon = document.getElementById("shop-prod-list-icon");
// let shoping_products = document.getElementById("shoping-products");

// shop_prod_list_icon.addEventListener("click", function () {
//   shoping_products.classList.toggle("show-shoping-products");
// });

let shop_prod_list_icon = document.getElementById("shop-prod-list-icon");
let shoping_products = document.getElementById("shoping-products");
function toggleShopCart() {
  shop_prod_list_icon.addEventListener("click", function () {
    shoping_products.classList.toggle("show-shoping-products");
  });
}
toggleShopCart();

// SHOW THE ADD_DISH_ICON WHENE HOVER ON THE DISH_CARD_SELL_ICON
let icon = document.getElementsByClassName("icon dish-card-sell-icon");
// console.log(icon.length);
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("mouseover", function () {
    icon[i].src = "assets/media/images/icons/add-dish-icon.svg";
  });
  icon[i].addEventListener("mouseleave", function () {
    icon[i].src = "assets/media/images/icons/shop-card-icon.svg";
  });
}

//FILTER THE DISHES BASED ON THE SELECTED OPTION
var dish_options = document.getElementById("dishes-categories");
var dishes = document.getElementsByClassName("dish-card");

dish_options.addEventListener("change", (e) => {
  let selected_dish = e.target.value;
  for (const dish of dishes) {
    if (selected_dish == "all") {
      dish.classList.remove("hide");
    } else if (dish.className.includes(selected_dish)) {
      dish.classList.remove("hide");
    } else {
      dish.classList.add("hide");
    }
  }
});

// THE REMOVE PRODUCT CART ITEM BTN
function removeProductCart() {
  var remove_btns = document.getElementsByClassName("remove-btn");
  for (let i = 0; i < remove_btns.length; i++) {
    let remove_btn = remove_btns[i];
    remove_btn.addEventListener("click", (e) => {
      let remove_btn_clicked = e.target;
      console.log(remove_btn_clicked);
      remove_btn_clicked.parentElement.remove();
    });
  }
}
removeProductCart();
// TOTAL BTN IMPLEMENTATION
let totalBtn = document.querySelector(".total-calc");
totalBtn.addEventListener("click", updateTotal);

// UPDATE THE TOTAL
function updateTotal() {
  let productCartEle = document.getElementsByClassName("shoping-product");
  // console.log(productCartEle);
  let total = 0;
  for (const prodCart of productCartEle) {
    let priceEle = prodCart.querySelector(".product-price");
    let price = parseFloat(priceEle.innerText.replace("$", ""));
    // console.log(price);
    let qteEle = prodCart.querySelector(".product-number");
    let qte = qteEle.value;
    console.log(qte);
    total += price * qte;
  }
  let totalEle = document.getElementsByClassName("total-calc")[0];
  let totalText = totalEle.getElementsByClassName("total-text")[0];
  totalText.innerText = "$" + total;
}

// ADD A DIDH ITEM TO PRODUCTS CART
let dish_item = {
  imgSrc: "",
  title: "",
  qte: 0,
  price: 0,
};
let add_btns = document.getElementsByClassName("dish-card-sell-icon");
for (const add_btn of add_btns) {
  add_btn.addEventListener("click", (e) => {
    clicked_btn = e.target;
    let dish_container = clicked_btn.parentElement.parentElement;
    let price = dish_container
      .getElementsByClassName("dish-card-price")[0]
      .innerText.replace("$", "");
    let img = dish_container.getElementsByClassName("dish-card-img")[0].src;
    let title =
      dish_container.getElementsByClassName("dish-card-title")[0].innerText;

    dish_item.imgSrc = img;
    dish_item.title = title;
    dish_item.qte = 1;
    dish_item.price = price;

    let cartItems = document.getElementsByClassName("shoping-products")[0];
    let cartItemTitles = cartItems.getElementsByClassName("dish-card-title");
    console.log(cartItems);

    for (let i = 0; i < cartItemTitles.length; i++) {
      if (cartItemTitles[i].innerText == dish_item.title) {
        alert("Alredy existe ..");
        return;
      }
    }
    // console.log(cartItemTitles.length);

    let cartItem = document.createElement("div");
    let cartItemContent = `
    <div class="shoping-product">
    <img
      src="${dish_item.imgSrc}"
      alt="${dish_item.title}"
      class="product-img"
    />
    <div class="product-details">
      <p class="product-name dish-card-title">${dish_item.title}</p>
      <p>
        <input type="number" class="product-number" min="1" value="${dish_item.qte}" />x -
        <span class="product-price">$${dish_item.price}</span>
      </p>
    </div>
    <button class="btn remove-btn" on">X</button>
  </div>
    `;
    cartItem.innerHTML = cartItemContent;
    // cartItem.classList.add("shoping-product");
    cartItems.prepend(cartItem);
    removeProductCart();
    // console.log(cartItems.childNodes.length);
    let shop_prod_list_icon = document.getElementById("shop-prod-list-icon");
    let shoping_products = document.getElementById("shoping-products");
    shoping_products.classList.add("show-shoping-products");
  });
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// USELESS CODE
{
  // Element.addEventListener("click", function () {});
  // window.addEventListener("mouseup", function (event) {
  //   if (event.target != links && event.target.parentNode != links) {
  //     // Place your output
  //     links.classList.remove("show-links-menu");
  //     shoping_products.classList.remove(".show-shoping-products");
  //   }
  // });
}

// Toggle (SHOW && HIDE) the nav menu

{
  // let currentPosition = window.getComputedStyle(links).position;
  // if (currentPosition == "absolute") {
  //   links.classList.add("show-links-menu");
  //   console.log(window.getComputedStyle(links).position);
  // } else {
  //   links.classList.remove("show-links-menu");
  //   console.log(window.getComputedStyle(links).position);
  // }
}

// Toggle (SHOW && HIDE) the shoping products list
{
  // let currentPosition = window.getComputedStyle(shoping_products).position;
  // if (currentPosition == "absolute") {
  //   shoping_products.classList.add(".show-shoping-products");
  //   console.log(currentPosition);
  // } else {
  //   shoping_products.classList.remove(".show-shoping-products");
  //   console.log(currentPosition);
  // }
}

{
  // const onClickOutside = (element, callback) => {
  //   document.addEventListener("click", (e) => {
  //     if (!element.contains(e.target)) callback();
  //   });
  // };
  // onClickOutside("#my-element", () => console.log("Hello"));
  // // Will log 'Hello' whenever the user clicks outside of #my-element
  // //////////////////////
  // let shop_dish_icon = document.getElementsByClassName(
  //   "icon dish-card-sell-icon"
  // );
  // shop_dish_icon[0].addEventListener("hover", function () {
  //   shop_dish_icon[0].src = "assets/media/images/icons/add-dish-icon.svg";
  // });
}
