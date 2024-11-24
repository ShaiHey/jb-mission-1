function collectData() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = document.getElementById("productCategory").value;
    const productImage = document.getElementById("productImage").value;

    return {
        productName: productName,
        productPrice: productPrice,
        productCategory: productCategory,
        productImage: productImage
    }
}

function generateNewHTML(data) {
    const newHTMLine = `
    <tr>
        <th>${data.productName}</th>
        <th>${data.productPrice}</th>
        <th>${data.productCategory}</th>
        <th><img src="${data.productImage}"></th>
    </tr>
    `
    return newHTMLine
}

function insertNewHTML(newHTML) {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML += newHTML;
}

function clearForm() {
    const formProduct = document.getElementById("formProduct");
    const productName = document.getElementById("productName");
    formProduct.reset();
    productName.focus();
}

function addProduct(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateNewHTML(data);
    insertNewHTML(newHTML);
    clearForm();
}