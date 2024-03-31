import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModels.js';

// @desc Fetch all peoducts
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({});
    // throw new Error('Some error')
    res.json(products)
})

const getProductById = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){

        return res.json(product)
    }else{

        res.status(404);
        throw new Error(` Resourse not found `)
    }
})

export{ getProducts, getProductById} ;