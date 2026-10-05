const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.json({ message: "Shopping Cart API is running" });
});

app.get("/products", async (req, res) => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        res.json(data.products);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products" });
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
            return res.status(404).json({ message: "Product not found" });
        }

        const product = await response.json();

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch product" });
    }
});


app.get("/products/search", async (req, res) => {
    try {
        const { q } = req.query;

        const response = await fetch(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`
        );

        const data = await response.json();

        res.json(data.products);
    } catch (error) {
        res.status(500).json({ message: "Failed to search products" });
    }
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});