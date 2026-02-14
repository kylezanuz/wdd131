document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    productSelect.selectedIndex = 0;

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const lastMod = document.getElementById("lastModified");
    if (lastMod) {
        lastMod.textContent = document.lastModified;
    }
});
