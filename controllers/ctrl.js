const Product = require('../models/product.js');
const ctrl = {

    //get all products
    getProducts: async (req, res) => {
        const products = await Product.find();
        res.status(200).json({
            data: {
                products: products
            }
        })
    },

    //add product
    addProduct: async (req, res) => {
        const product = await Product.create({ name: req.body.name, quantity: req.body.quantity })
        res.status(200).json({
            data: {
                products: product
            }
        })
    },

    //delete product
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        await Product.findByIdAndDelete({ _id: id });
        res.status(200).json({
            message: "successfully deleted"
        })
    },

    //update product
    updateProduct: async (req, res) => {
        const id = req.params.id;
        const quantity = req.query.number;
        const product = await Product.findByIdAndUpdate({ _id: id }, { quantity: quantity }, { new: true });
        res.status(200).json({
            data: {
                product: product,
            },
            message: "successfully updated",

        })
    }
}

module.exports = ctrl;