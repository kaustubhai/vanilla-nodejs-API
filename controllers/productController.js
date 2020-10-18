const Products = require('../model/productModel')

const getProducts = async (req, res) => {
    try {
        const products = await Products.findAll()
        if (!products || products.length === 0) {
            res.writeHead(404, { 'content-type': 'application/json' })
            res.end(JSON.stringify({ message: 'Invalid URL. Go Back' }))
        }
        else {
            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(products))
        }
    }
    catch (e) {
        console.log(e)
    }
}

const getProduct = async (req, res, id) => {
    try {
        const product = await Products.findById(id)
        if (!product || product.length === 0) {
            res.writeHead(404, { 'content-type': 'application/json' })
            res.end(JSON.stringify({ message: 'Invalid URL. Go Back' }))
        }
        else {
            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {
    getProducts, getProduct
}