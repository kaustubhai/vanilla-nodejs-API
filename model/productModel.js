const products = require('../data/products.json')

const findAll = () => {
    return (new Promise((resolve, reject) => {
        resolve(products)
    }))
}

const findById = (id) => {
    const product = products.filter((p) => p.id === id)
    if (product)
        return (new Promise((resolve, reject) => {
            resolve(product)
        }))
}

module.exports = {
    findAll,
    findById
}