// Get the 'productsInCart' data from local storage  // احصل على بيانات 'productsInCart' من التخزين المحلي
var productsInCart = localStorage.getItem('productsInCart');

// Get the HTML element that represents all products in the cart  // احصل على عنصر HTML الذي يُمثل جميع المنتجات في السلة
var allProducts = document.querySelector("#products-container");

// Get the HTML element that represents the total price of all products in the cart  // احصل على عنصر HTML الذي يُمثل السعر الإجمالي لجميع المنتجات في السلة
var totalPriceContainer = document.querySelector("#total-price-container");






// Check if there are products in the cart (localStorage)  // تحقق مما إذا كانت هناك منتجات في السلة (في localStorage)
if (productsInCart) {
  // Parse the JSON data to get an array of products in the cart   // قم بتحليل البيانات JSON للحصول على مصفوفة من المنتجات في السلة
  var cartItems = JSON.parse(productsInCart);

  // Draw the cart by rendering the products in the HTML    // رسم السلة عن طريق عرض المنتجات في HTML
  drawCart(cartItems);
}









// Function to draw the products in the cart  // دالة لرسم المنتجات في السلة
function drawCart(productsData) {
  // Merge duplicate products in the cart and get an array of unique products  // دمج المنتجات المكررة في السلة والحصول على مصفوفة من المنتجات الفريدة
  var mergedCart = mergeDuplicateProducts(productsData);

  // Create HTML for each product in the cart  // قم بإنشاء HTML لكل منتج في السلة
  var cartHTML = mergedCart.map((product) => {
    return `
      <div class="one">
        <img src="${product.image}" alt="${product.name}">
        <div class="description1">
          <h5 class="card-title text-left">${product.name}</h5>
          <p>Price: $${product.price}</p>
          <div class="quantity">
            <button class="cart-button low" onclick="updateQuantity('${product.name}', -1)">-</button>
            <span>${product.quantity}</span>
            <button class="cart-button add" onclick="updateQuantity('${product.name}', 1)">+</button>
          </div>
          <div class="but">
            <button class="add-to-cart-button" onclick="removeFromCart('${product.name}')">Remove</button>
          </div>
        </div>
      </div>`;
  });

  // Set the inner HTML of the products container with the generated HTML   // قم بتعيين HTML الداخلي لحاوية المنتجات بالHTML المُولد
  allProducts.innerHTML = cartHTML.join('');

  // Calculate the total price of all products in the cart   // حساب السعر الإجمالي لجميع المنتجات في السلة
  var totalPrice = mergedCart.reduce((total, product) => {
    var productTotal = product.price * product.quantity;

    // Add the product total to the running total (ignoring NaN values)    // أضف إجمالي المنتج إلى الإجمالي الجاري (تجاهل قيم NaN)
    return isNaN(productTotal) ? total : total + productTotal;
  }, 0);

  // Display the total price in the HTML   // عرض السعر الإجمالي في الHTML
  if (mergedCart.length > 0) {
    totalPriceContainer.innerHTML = `<div class="total-price">Total Price: ${totalPrice.toFixed(2)}$</div>`;
  } else {
    totalPriceContainer.innerHTML = ''; // hide total price when no products  // إخفاء السعر الإجمالي عند عدم وجود منتجات
  }
}










// Function to merge duplicate products in the cart  // دالة لدمج المنتجات المكررة في السلة
function mergeDuplicateProducts(cartItems) {
  var mergedCart = [];

  cartItems.forEach((product) => {
    var existingProduct = mergedCart.find(item => item.name === product.name);

    if (existingProduct) {

      // If the product already exists, update its quantity     // إذا كان المنتج موجودًا بالفعل ، قم بتحديث كميته
      existingProduct.quantity += product.quantity || 1;
    } else {

      // If the product doesn't exist, add it to the merged cart   // إذا كان المنتج غير موجود ، قم بإضافته إلى السلة المدمجة
      mergedCart.push({
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: product.quantity || 1
      });
    }
  });

  return mergedCart;
}









// Function to update quantity of a product in the cart  // دالة لتحديث كمية منتج في السلة
function updateQuantity(productName, change) {

  // Retrieve cart items from local storage  // استرجاع عناصر السلة من التخزين المحلي
  var cartItems = JSON.parse(localStorage.getItem('productsInCart'));

   // Find the index of the product in the cart   // العثور على فهرس المنتج في السلة
  var productIndex = cartItems.findIndex(item => item.name === productName);

    // If the product is found in the cart  // إذا تم العثور على المنتج في السلة
  if (productIndex !== -1) {

     // Update the quantity based on the provided change   // تحديث الكمية استنادًا إلى التغيير المقدم
    cartItems[productIndex].quantity = (cartItems[productIndex].quantity || 1) + change;

      // If the quantity becomes less than 1, remove the product from the cart   // إذا أصبحت الكمية أقل من 1، قم بإزالة المنتج من السلة
    if (cartItems[productIndex].quantity < 1) {
      removeFromCart(productName);
    } else {

       // Save the changes to local storage and redraw the cart   // حفظ التغييرات في التخزين المحلي وإعادة رسم السلة
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      drawCart(cartItems);
    }
  }
}





// Function to remove a product from the cart  // دالة لإزالة منتج من السلة
function removeFromCart(productName) {

  // Retrieve cart items from local storage   // استرجاع عناصر السلة من التخزين المحلي
  var cartItems = JSON.parse(localStorage.getItem('productsInCart'));

  // Update the cart by removing the specified product  // تحديث السلة بإزالة المنتج المحدد
  var updatedCart = cartItems.filter(item => item.name !== productName);

   // Save the changes to local storage and redraw the cart  // حفظ التغييرات في التخزين المحلي وإعادة رسم السلة
  localStorage.setItem('productsInCart', JSON.stringify(updatedCart));
  drawCart(updatedCart);
}




// --------------------------------------------------------






// Get the 'fov' (favorites) data from local storage 
var favoritesContainer = document.getElementById('favorites-container');
var favoriteProducts = localStorage.getItem('fov');

// Check if there are favorite products (localStorage)  // تحقق مما إذا كانت هناك منتجات مفضلة (في localStorage)
if (favoriteProducts) {

  // Parse the JSON data to get an array of favorite products   // قم بتحليل البيانات JSON للحصول على مصفوفة من المنتجات المفضلة
  var cartItemsFov = JSON.parse(favoriteProducts);

  // Display the favorite products by rendering them in the HTML    // عرض المنتجات المفضلة عند تحميل الصفحة
  displayFavoriteProducts(cartItemsFov);
}











// Function to display favorite products  // دالة لعرض المنتجات المفضلة
function displayFavoriteProducts(favoriteProducts) {
  // Create HTML for each favorite product  // قم بإنشاء HTML لكل منتج مفضل
  var favoritesHTML = favoriteProducts.map((product) => {
    return `
      <div class="one1">
        <img src="${product.image}" alt="${product.name}">
        <div class="description2">
          <h5 class="card-title text-left">${product.name}</h5>
          <i class="fas fa-heart" onclick="removeFromFavorites('${product.name}')"></i>
        </div>
      </div>`;
  });

  // Set the inner HTML of the favorites container with the generated HTML  // قم بتعيين HTML الداخلي لحاوية المفضلات بالHTML المُولد
  favoritesContainer.innerHTML = favoritesHTML.join('');
}










// Function to remove a product from favorites  // دالة لإزالة منتج من المفضلات
function removeFromFavorites(productName) {
  // Get the favorite products from local storage  // احصل على المنتجات المفضلة من التخزين المحلي
  var favoriteProducts = JSON.parse(localStorage.getItem('fov'));

  // Filter out the removed product from the favorite products  // فيلترة المنتج المزال من عناصر المفضلات
  var updatedFavorites = favoriteProducts.filter(item => item.name !== productName);

  // Update local storage with the modified favorite products  // قم بتحديث التخزين المحلي بعناصر المفضلات المعدلة
  localStorage.setItem('fov', JSON.stringify(updatedFavorites));
  
  // Display the updated favorite products    // عرض المفضلات المحدثة
  displayFavoriteProducts(updatedFavorites);
}
