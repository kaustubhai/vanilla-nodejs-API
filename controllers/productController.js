const Products = require('../model/productModel')
const { bufferToData } = require('../utils')

const getProducts = async (req, res) => {
    try {
        const products = await Products.findAll()
        if (!products || products.length === 0) {
            res.writeHead(404, { 'content-type': 'application/json' })
            res.end(JSON.stringify({ message: 'No product found' }))
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
            res.end(JSON.stringify({ message: 'No product with such ID found' }))
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

const postProducts = async (req, res) => {
    let body = await bufferToData(req)
    req.on('end', async () => {
        const obj = JSON.parse(body)
        const p = await Products.saveData(obj)
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify(p))
    })
}

const updateProduct = async (req, res, id) => {
    try {
        const product = await Products.findById(id)
        if (!product || product.length === 0) {
            res.writeHead(404, { 'content-type': 'application/json' })
            res.end(JSON.stringify({ message: 'No product with such ID found' }))
        }
        else {
            // const obj = await Products.updateData(product)
            // res.writeHead(200, { 'content-type': 'application/json' })
            // res.end(JSON.stringify(obj))
            
            let body = await bufferToData(req)
            req.on('end', async () => {
                const obj = JSON.parse(body)
                const p = await Products.updateData(obj, id)
                res.writeHead(200, { 'content-type': 'application/json' })
                res.end(JSON.stringify(p))
            })
        }
    }
    catch (e) {
        console.log(e)
    }
}

const deleteProduct = async (req, res, id) => {
    try {
        const product = await Products.findById(id)
        if (!product || product.length === 0) {
            res.writeHead(404, { 'content-type': 'application/json' })
            res.end(JSON.stringify({ message: 'No product with such ID found' }))
        }
        else {
            const obj = await Products.deleteData(id)
            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(obj))
        }
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {
    getProducts, getProduct, postProducts, updateProduct, deleteProduct
}