// let userInfo = document.querySelector ("#user_info")
// let userD = document.querySelector ("#user")
// let links = document.querySelector (".links")

// if (localStorage.getItem("username")){
//     links.remove()
//     userInfo.style.display ="block"
//     userD.innerHTML = localStorage.getItem("username")
// }




// var logOutBtn = document.querySelector("#logout")

// logOutBtn.addEventListener("click", function(){


//     localStorage.clear()

//     setTimeout(()=>{

//         window.location = "login.html"

//     }, 1000)


// })











// // ----------------------- the products list --------------------



// var allProducts = document.querySelector(".products")

// var products = [


//     {
//         id:1,
//         title: "oppo reno 7",
//         color: "black",
//         imageUrl : "./img/11.png"
//     },
//     {
//         id:2,
//         title: "i phone 13",
//         color: "red",
//         imageUrl : "./img/5.png"
//     },
//     {
//         id:3,
//         title: "watch32",
//         color: "blue",
//         imageUrl : "./img/9.png"
//     }

// ]



// function drawItems (){

//     var y = products.map((item) => {


//         return ` 
        
//         <div class="one">

//         <img src="${item.imageUrl}" alt="">


//         <div class="product_item_desc">
//           <h2>${item.title}</h2>
//           <p>the new mobile from oppo company 6-2022</p>
//           <span>color : ${item.color}</span>
//       </div>

//       <div class="product_item_action">
//         <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
//         <i class="far fa-heart fav"></i>
//        </div>


//       </div>

//         `
//     }  )

//     allProducts.innerHTML = y;


// }

// drawItems ()


// let cartProductDiv = document.querySelector(".carts_products div")

// var badge = document.querySelector('.badge');

// var addedItem = [];



//     if(localStorage.getItem=("username")){

//         function addToCart(id){

//             let choosenItem = products.find((item) => item.id === id );
//             cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`
            
        
//             var addedItem=[...addedItem , choosenItem]

//             localStorage.setItem("productsInCart" ,JSON.stringify(addedItem) )


//             var cartProductsLenth = document.querySelectorAll(".carts_products div p")
        
//             badge.style.display="block"
//             badge.innerHTML = cartProductsLenth.length;
//         }
//     }

//     else {
//         window.location ="login.html"
//     }



// let shoppingCartIcon = document.querySelector(".shopping_cart")
// let cartsProducts = document.querySelector(".carts_products")
// shoppingCartIcon.addEventListener("click", opencart)

// function opencart(){
//      if(cartProductDiv.innerHTML !=""){
//          if(cartsProducts.style.display=="block"){
//             cartsProducts.style.display="none"
//          }else {
//             cartsProducts.style.display="block"
//          }
//      } 
// }










// // ----------------------- the products list --------------------





// Data representing products with name, image, category, and price
const productsData = [
  { name: 'Macbook Air 13', image: './img/2.png', category: 'Laptops', price: 899.99 },
  { name: 'HUAWEI MateBook D 15', image: './img/3.png', category: 'Laptops', price: 449.99 },
  { name: 'Lenovo IdeaPad 5', image: './img/4.png', category: 'Laptops', price: 279.99 },
  { name: 'iPhone 14 Pro Max', image: './img/5.png', category: 'Mobiles', price: 1099.99 },
  { name: 'Samsung Galaxy S23 Ultra', image: './img/6.png', category: 'Mobiles', price: 999.99 },
  { name: 'Honor 90', image: './img/7.png', category: 'Mobiles', price: 579.99 },
  { name: 'PlayStation 5', image: './img/8.png', category: 'Gaming', price: 1040.99 },
  { name: 'Xbox Series X', image: './img/9.png', category: 'Gaming', price: 1000.99 },
  { name: 'Gaming chair', image: './img/10.png', category: 'Accessories', price: 399.99 },
  { name: 'Apple Watch Series 9', image: './img/11.png', category: 'Accessories', price: 199.99 },
  { name: 'Samsung Galaxy Tab A9+', image: './img/12.png', category: 'Tablets', price: 219.99 },
  { name: 'Apple iPad Pro 2022', image: './img/13.png', category: 'Tablets', price: 1022.99 },
  { name: 'Apple iPad Air 5', image: './img/14.png', category: 'Tablets', price: 1219.99 },
  { name: 'Ninebot KickScooter Max', image: './img/15.png', category: 'Electric Scooters', price: 924.99 },
  { name: 'Switch, Electric Scooter', image: './img/16.png', category: 'Electric Scooters', price: 815.99 },
];










// Function to create HTML elements for each product    // دالة لإنشاء عناصر HTML لكل منتج
function createProductElement(product) {
  // Create a new <div> element to represent the product   // إنشاء عنصر <div> جديد لتمثيل المنتج
  const productElement = document.createElement('div');

  // Set the CSS class of the product element to 'product'    // تعيين فئة CSS لعنصر المنتج إلى 'product'
  productElement.className = 'product';

  // Set the inner HTML of the product element using a template string    // تعيين HTML الداخلي لعنصر المنتج باستخدام سلسلة نموذج
  productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="description">
      <h5 class="card-title text-left">${product.name}</h5>
      <div class="but">
        <button class="add-to-cart-button" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        <p>Price: $${product.price}</p>
      </div>
      <div class="hear">
        <i class="fas fa-heart he" data-product="${product.name}" onclick="addToFavorites('${product.name}')"></i>
      </div>
    </div>
  `;

  // Return the created product element   // إرجاع عنصر المنتج الذي تم إنشاؤه
  return productElement;
}










// Function to render products to the products container  // دالة لعرض المنتجات في حاوية المنتجات
function renderProducts(products) {
  // Get the products container element by its ID    // الحصول على عنصر حاوية المنتجات بواسطة معرفه
  const productsContainer = document.getElementById('products-container');

  // Clear the existing content inside the products container    // مسح المحتوى الحالي داخل حاوية المنتجات
  productsContainer.innerHTML = '';

  // Iterate over each product and render it by creating a product element    // تكرار على كل منتج وعرضه من خلال إنشاء عنصر المنتج
  products.forEach(product => {
    const productElement = createProductElement(product);

    // Append the created product element to the products container   // إلحاق عنصر المنتج الذي تم إنشاؤه بحاوية المنتجات
    productsContainer.appendChild(productElement);
  });
}










// Function to render category buttons  // دالة لعرض أزرار الفئات
function renderCategories(categories) {
  // Get the categories container element by its ID  // الحصول على عنصر حاوية الفئات بواسطة معرفه
  const categoriesContainer = document.getElementById('categories');

  // Clear the existing content inside the categories container    // مسح المحتوى الحالي داخل حاوية الفئات
  categoriesContainer.innerHTML = '';

  // Iterate over each category and create a button element for it   // تكرار على كل فئة وإنشاء زر لها
  categories.forEach(category => {
    const categoryElement = document.createElement('button');

    // Set the CSS class of the category button to 'category'   // تعيين فئة CSS لزر الفئة إلى 'category'
    categoryElement.className = 'category';

    // Set the text content of the category button to the category name      // تعيين محتوى النص لزر الفئة إلى اسم الفئة
    categoryElement.textContent = category;

    // Add a click event listener to filter products by the selected category     // إضافة مستمع لحدث النقر لتصفية المنتجات حسب الفئة المحددة
    categoryElement.addEventListener('click', () => filterByCategory(category));

    // Append the created category button to the categories container      // إلحاق زر الفئة الذي تم إنشاؤه بحاوية الفئات
    categoriesContainer.appendChild(categoryElement);
  });
}










// Function to filter products by category  // دالة لتصفية المنتجات حسب الفئة
function filterByCategory(category) {
  // Check if the selected category is 'All'; if true, display all products   // التحقق مما إذا كانت الفئة المحددة هي 'All' إذا كانت القيمة صحيحة، فعرض جميع المنتجات
  const filteredProducts = (category === 'All') ? productsData : productsData.filter(product => product.category === category);

  // Render the filtered products    // عرض المنتجات المُصفاة
  renderProducts(filteredProducts);
}










// Function to search products based on the input query  // دالة للبحث عن المنتجات استنادًا إلى الاستعلام المدخل
function searchProducts() {
  // Get the search input value and convert it to lowercase    // الحصول على قيمة مدخل البحث وتحويلها إلى حالة الأحرف الصغيرة
  const searchQuery = document.getElementById('search-input').value.toLowerCase();

  // Filter products based on the search query  // تصفية المنتجات استنادًا إلى استعلام البحث
  const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(searchQuery));

  // Render the filtered products   // عرض المنتجات المُصفاة
  renderProducts(filteredProducts);
}










// Function to clear the search input and display all products  // دالة لمسح مدخل البحث وعرض جميع المنتجات
function clearSearch() {
  // Set the search input value to an empty string    // تعيين قيمة مدخل البحث إلى سلسلة فارغة
  document.getElementById('search-input').value = '';

  // Render all products    // عرض جميع المنتجات
  renderProducts(productsData);
}










// Retrieve items from local storage or use an empty array if not present  // استرجاع العناصر من التخزين المحلي أو استخدام مصفوفة فارغة إذا لم يكن هناك شيء موجود
var addItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [];




// Function to handle adding a product to the cart  // دالة للتعامل مع إضافة منتج إلى السلة
function addToCart(productName, productPrice) {

  if (!localStorage.getItem('username')) {
       // If username is not present, redirect to another page   // إذا كان اسم المستخدم غير موجود، قم بتوجيه المستخدم إلى صفحة أخرى
    window.location = 'regiester.html'; // Replace 'register.html' with the actual URL of your registration page  // قم بتغيير 'register.html' بعنوان URL الفعلي لصفحة التسجيل
  }

  // Find the chosen item in the products data  // العثور على العنصر المختار في بيانات المنتجات
  var chosenItem = productsData.find((product) => product.name === productName);

  // Check if the item is already in the cart  // التحقق مما إذا كان العنصر موجود بالفعل في السلة
  var existingItemIndex = addItem.findIndex((item) => item.name === productName);

  if (existingItemIndex !== -1) {
    // If the item is already in the cart, update its quantity  // إذا كان العنصر موجود بالفعل في السلة، قم بتحديث كميته
    addItem[existingItemIndex].quantity += 1;
  } else {
    // If the item is not in the cart, add it with quantity 1  // إذا كان العنصر غير موجود في السلة، قم بإضافته مع كمية 1
    chosenItem.quantity = 1;
    addItem.push(chosenItem);
  }

  // Save the 'addItem' array to local storage  // حفظ مصفوفة 'addItem' في التخزين المحلي
  localStorage.setItem("productsInCart", JSON.stringify(addItem));

  // Update the cart count in the UI  // تحديث عدد العناصر في السلة في واجهة المستخدم
  updateCartCount();

  // Update the cart display  // تحديث عرض السلة
  updateCartDisplay(productPrice);
}










// Function to delete a product from the cart  // دالة لحذف منتج من السلة
function deleteProduct(productName, productPrice) {
  // Remove the product from the 'productsInCart' localStorage   // قم بإزالة المنتج من localStorage 'productsInCart'
  removeProductFromCart(productName);

  // Update the cart count in the UI  // قم بتحديث عدد العناصر في السلة في واجهة المستخدم
  updateCartCount();

  // Update the cart display  // قم بتحديث عرض السلة
  updateCartDisplay(productPrice);

  // Save the cart to local storage  // قم بحفظ حالة السلة في التخزين المحلي
  saveCartToLocalStorage();
}










// Function to remove a product from 'productsInCart' localStorage  // دالة لإزالة منتج من localStorage 'productsInCart'
function removeProductFromCart(productName) {

  // Remove the corresponding cart-brand element  // قم بإزالة عنصر cart-brand المقابل
  removeCartBrandElement(productName);
  
// Retrieve the current 'productsInCart' from localStorage  // استرجاع 'productsInCart' الحالي من التخزين المحلي
addItem = addItem.filter(item => item.name !== productName);

// Save the updated 'productsInCart' back to localStorage  // حفظ 'productsInCart' المحدثة مرة أخرى في التخزين المحلي
localStorage.setItem('productsInCart', JSON.stringify(addItem));

// Remove the corresponding cart-brand element  // إزالة عنصر cart-brand المقابل
removeCartBrandElement(productName);
}










// Function to remove the cart-brand element for a specific product  // دالة لإزالة عنصر cart-brand المقابل لمنتج محدد
function removeCartBrandElement(productName) {
  // Get the cart product element with the given product name  // احصل على عنصر المنتج في السلة باسم المنتج المعطى
  const cartProductElements = document.querySelectorAll('.cart-brand .brand-name');

  // Iterate over each cart product element and find the one matching the product name   // قم بتكرار كل عنصر من عناصر المنتج في السلة والبحث عن العنصر الذي يتطابق مع اسم المنتج
  cartProductElements.forEach((element) => {
    if (element.textContent === productName) {

      // Remove the parent cart-brand element if found  // قم بإزالة عنصر cart-brand الأم إذا تم العثور عليه
      const cartBrandElement = element.closest('.cart-brand');
      if (cartBrandElement) {
        cartBrandElement.remove();
      }
    }
  });
}











// Function to save the cart to local storage  // دالة لحفظ حالة السلة في التخزين المحلي
function saveCartToLocalStorage() {
  // Save the 'addItem' array to local storage
  localStorage.setItem("productsInCart", JSON.stringify(addItem));
}









// Function to update the cart count in the UI  // دالة لتحديث عدد العناصر في السلة في واجهة المستخدم
function updateCartCount() {
  // Calculate the total quantity of items in the cart  // حساب الكمية الإجمالية للعناصر في السلة
  const totalQuantity = addItem.reduce((total, product) => total + (product.quantity || 1), 0);

  // Update the badge element with the total quantity  // تحديث عنصر الشارة بالكمية الإجمالية
  document.querySelector('.badge').innerHTML = totalQuantity;

  // Display the badge
  document.querySelector('.badge').style.display = totalQuantity > 0 ? "block" : "none";
}









// Function to update the cart display  // دالة لتحديث عرض السلة
function updateCartDisplay(productPrice) {
  // Get the cart section and cart products elements by their IDs   // الحصول على عنصر السلة وعناصر المنتجات في السلة بواسطة معرفاتها
  const cartSection = document.querySelector('.carts_products');
  const cartProducts = document.getElementById('cart-products');

  // Clear the existing content inside the cart products container  // مسح المحتوى الحالي داخل حاوية منتجات السلة
  cartProducts.innerHTML = '';

  // Iterate over each product in the cart  // تكرار كل منتج في السلة
  for (const { name, quantity } of addItem) {
    // Create a new div element to represent the cart product  // إنشاء عنصر div جديد لتمثيل منتج السلة
    const productElement = document.createElement('div');

    // Set the CSS class of the cart product element to 'cart-product'   // تعيين الفئة النمطية لعنصر منتج السلة إلى 'cart-product'
    productElement.className = 'cart-product';

    // Set the inner HTML of the cart product element with quantity    // تعيين HTML الداخلي لعنصر منتج السلة مع الكمية
    productElement.innerHTML = `
      <div class="cart-brand">
        <span class="brand-name">${name}</span>
        <div class="quantity-control">
          <button class="quantity-button low" onclick="deleteProduct('${name}', ${productPrice})"><i class="fas fa-trash"></i></button>
          <span class="quantity">${quantity}</span>
        </div>
      </div>
    `;

    // Append the created cart product element to the cart products container  // إلحاق عنصر منتج السلة الذي تم إنشاءه بحاوية منتجات السلة
    cartProducts.appendChild(productElement);
  }

  // Display the cart section    // عرض قسم السلة
  cartSection.style.display = 'block';
}










// Load cart information and update badge and display when the page loads  // تحميل معلومات السلة وتحديث الشارة والعرض عند تحميل الصفحة
window.addEventListener('load', function () {
    // Load cart information from local storage
    addItem = JSON.parse(localStorage.getItem('productsInCart')) || [];

  // Update badge and cart display  // تحديث الشارة وعرض السلة
  updateCartCount();
  updateCartDisplay();
});









// Initial rendering of categories and products  // عرض أولي للفئات والمنتجات
renderCategories(['Laptops', 'Mobiles', 'Gaming', 'Tablets', 'Electric Scooters', 'Accessories']);
renderProducts(productsData);

// Event listener for the search button  // مستمع حدث النقر لزر البحث
document.getElementById('search-button').addEventListener('click', searchProducts);

// Event listener for the search input  // مستمع حدث الإدخال لمدخل البحث
document.getElementById('search-input').addEventListener('input', function () {

  // Get the trimmed lowercase value of the search input    // الحصول على قيمة مدخل البحث بعد إزالة الفراغات وتحويلها إلى حالة صغيرة
  const searchQuery = this.value.trim().toLowerCase();

  // Check if the search query is an empty string   // التحقق مما إذا كانت استعلام البحث فارغة
  if (searchQuery === '') {

    // Clear the search and render all products    // مسح البحث وعرض كل المنتجات
    clearSearch();
  } else {

    // Search and render products based on the input query    // البحث وعرض المنتجات
    searchProducts();
  }
});










// Event listener for the shopping cart icon  // Event listener لزر سلة التسوق
document.querySelector('.fa-shopping-cart').addEventListener('click', () => {
  // Get the cart section element   // الحصول على عنصر قسم السلة
  const cartSection = document.querySelector('.carts_products');

  // Toggle the display of the cart section   // تبديل عرض قسم السلة
  cartSection.style.display = (cartSection.style.display === 'block') ? 'none' : 'block';
});










// Array to store favorite products  // مصفوفة لتخزين المنتجات المفضلة
var fovaritee = [];

// Function to handle adding a product to favorites  // دالة لإضافة منتج إلى المفضلة
function addToFavorites(productName) {

  // Find the chosen item in the products data  // البحث عن العنصر المختار في بيانات المنتجات
  var choosenItemm = productsData.find((product) => product.name === productName);

  if (choosenItemm) {

    // Check if the product is already in favorites  // التحقق مما إذا كان العنصر المختار موجودًا بالفعل في المفضلة
    var isAlreadyFavorite = fovaritee.some((product) => product.name === productName);

    // If the product is not already in favorites, add it  // إذا لم يكن المنتج موجودًا بالفعل في المفضلة، قم بإضافته
    if (!isAlreadyFavorite) {
      fovaritee = [...fovaritee, choosenItemm];
      localStorage.setItem('fov', JSON.stringify(fovaritee));



      if (!localStorage.getItem('username')) {
        // If username is not present, redirect to another page   // إذا كان اسم المستخدم غير موجود، قم بتوجيه المستخدم إلى صفحة أخرى
     window.location = 'regiester.html'; // Replace 'register.html' with the actual URL of your registration page  // قم بتغيير 'register.html' بعنوان URL الفعلي لصفحة التسجيل
   }
  else{
      // Change the color of the clicked favorite icon to red  // تغيير لون أيقونة الإعجاب المنقرة إلى اللون الأحمر
      var favoriteIcon = document.querySelector(`[data-product="${productName}"]`);
      if (favoriteIcon) {
        favoriteIcon.style.color = 'red';
      }
  } 
    }
  }
}




// Load favorites from local storage when the page loads  // تحميل المفضلة من التخزين المحلي عند تحميل الصفحة
window.addEventListener('load', function () {
  fovaritee = JSON.parse(localStorage.getItem('fov')) || [];
  
  // Set the color of the favorite icons based on the loaded favorites  // تعيين لون أيقونات الإعجاب استنادًا إلى المفضلة المحملة
  fovaritee.forEach((favoriteProduct) => {
    var favoriteIcon = document.querySelector(`[data-product="${favoriteProduct.name}"]`);
    if (favoriteIcon) {
      favoriteIcon.style.color = 'red';
    }
  });
});

