function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
        id: 14,
        name: "Samsung Galaxy S25 ultr",
        price: 25300000,
        image: "anh/m.png",
        quantity: 1
    };

    let found = cart.find(item => item.id === product.id);

    if (found) {
        found.quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm sản phẩm vào giỏ hàng!");
}
