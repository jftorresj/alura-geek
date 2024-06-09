const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const deleteProducts = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
    }).catch((err) => console.log(err));
}; 

export const servicesProducts = {
    productList, createProducts, deleteProducts
};