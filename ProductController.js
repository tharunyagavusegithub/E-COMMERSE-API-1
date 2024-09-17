const productModel=require('../models/ProductModel');





//get product API-/api/v1/products:id

exports.getProducts = async (resq,res,next) =>{
    const products= await productModel.find({});

    res.json({
        success:true,
        products
    
    })

}
//get Singleproduct api-api/v1/product:id
exports.getSingleProduct = async (req,res,next) =>{
    try{
        const productID = await productModel.findById(req.params.id);

        res.json({
            productID
        })
    }
    catch(err){
        res.json({
            message:"Internal Server error"
        })
    }
}