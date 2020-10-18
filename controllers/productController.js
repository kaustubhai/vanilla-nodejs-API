const Products = require('../model/productModel')

const getProducts = async (req, res) => {
    try {
        const product = await Products.findAll()
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify(product))
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {
    getProducts
}