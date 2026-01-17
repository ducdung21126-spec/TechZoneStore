let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartList = document.getElementById("cart-list");

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartList.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p class="price">${item.price.toLocaleString()}đ</p>

          <div class="quantity">
            <button onclick="changeQty(${index}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>
        <span class="remove" onclick="removeItem(${index})">Xóa</span>
      </div>
    `;
  });

  document.getElementById("total-price").innerText =
    "Tổng: " + total.toLocaleString() + "đ";
}

function changeQty(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
