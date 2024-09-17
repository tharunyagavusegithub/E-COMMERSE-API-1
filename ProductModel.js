const mongoose = require('mongoose');

const productSchema= mongoose.Schema(
    {
        name:String,
        price:String,
        description:String,
        ratings:String,
        images: [
            {
                Image:String
            }
        ],
        category:String,
        seller:String,
        stock:String,
        numOfReviews:String,
        createdAt:Date
    }
);
const productModel=  mongoose.model('product',productSchema);
module.exports = productModel;