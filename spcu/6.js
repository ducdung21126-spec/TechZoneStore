function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
        id: 14,
        name: "Iphone 14 256GB Pro max",
        price: 15500000,
        image: "anh/anh 02 (3).png",
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