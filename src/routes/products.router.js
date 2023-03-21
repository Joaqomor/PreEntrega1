import { Router } from "express";
import productManager from "../service/productManager.js";

const productRouter = Router();

const product = new productManager(); 



productRouter.get("/", async (req,res) =>{
    res.send(await product.getProducts())
})

productRouter.get("/:pid", async (req, res) => {
    const  pid  = req.params.pid;

    const productFound = await product.getProductsById(pid);
    if (productFound) res.send(productFound)
    else res.send({message: "Error. Product doesn't found"})
});


productRouter.post("/", async (req,res) => {
    let newProduct = req.body
    res.send(await product.addProducts(newProduct))
}); 

productRouter.delete("/:pid", async (req,res) => {
        const pid  = req.params.pid;
        const deletedProduct = await product.deleteProductById(pid);

        if (deletedProduct) res.send({message: "The product was delete"})
        else res.send({message: "Error. The product wasn't delete"})
});

productRouter.put('/:pid', async (req, res) => {
    const pid = req.params.pid;
    const updateValues = req.body;
    res.send(await product.updateProducts(pid, updateValues))

});



export default productRouter
