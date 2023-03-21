import { Router } from "express";
import cartManager from "../service/cartManager.js";

const cartRouter = Router();

const carts = new cartManager

cartRouter.post("/", async(req,res) =>{
    res.send(await carts.addCarts())

});

cartRouter.get ("/", async (req,res) => {
    res.send(await carts.readCarts())
});

cartRouter.get ("/:cid", async (req,res) => {
    const  cid  = req.params.cid;

    const cartFound = await carts.getCartsById(cid);
    if (cartFound) res.send(cartFound)
    else res.send({message: "Error. Cart doesn't found."})
});

cartRouter.post("/:cid/products/:pid", async (req,res) =>{
    const cid = req.params.cid
    const pid = req.params.pid
    res.send(await carts.addProductToCart(cid,pid))

})


export default cartRouter