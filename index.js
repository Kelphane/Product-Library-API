const express = require("express");
const repoContext = require("./repository/repository-wrapper");

const app = express();

app.listen(3000, function() {
    console.log("Server Started. Listening on Port 3000");
});

app.get('/', () => {return console.log("Hello World!");});

app.get('/api/products', (req, res) => {
    const products = repoContext.products.findAllProducts();
    return res.send(products);
});

