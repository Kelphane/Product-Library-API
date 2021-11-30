const express = require("express");
const repoContext = require("./repository/repository-wrapper");

const app = express();

app.listen(3000, function() {
    console.log("Server Started. Listening on Port 3000");
});

app.get("/", (req, res) => {
    return res.send("Hello World!");
});

app.get('/api/products', (req, res) => {
    const products = repoContext.products.findAllProducts();
    return res.send(products);
});

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const products = repoContext.products.findProductById(id);
    return products;
});

