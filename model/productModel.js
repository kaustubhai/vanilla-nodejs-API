const products = require('../data/products.json')
const { writeToFile } = require('../utils')

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

const saveData = (obj) => {
    return new Promise((resolve, reject) => {
        obj = {id: products.length+1, ...obj}
        products.push(obj)
        console.log(products)
        writeToFile('./data/products.json', products)
        resolve(obj)
    })
}

module.exports = {
    findAll,
    findById,
    saveData
}