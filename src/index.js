import express from "express";
import productRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js"




const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded( {extended : true}));

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter); 

app.get("/", (req, res) => {
    res.send("Welcome to my server created with Express.");
})




app.listen(PORT, ()  => {
    console.log(`Express server running on local host : ${PORT}.`);
});

