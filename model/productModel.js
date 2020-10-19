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
        obj = {id: JSON.stringify(products.length+1), ...obj}
        products.push(obj)
        writeToFile('./data/products.json', products)
        resolve(obj)
    })
}

const updateData = (obj, id) => {
    return new Promise((resolve, reject) => {
        temp = products.findIndex((p) => id === p.id)
        const toReplace = {
            id,
            name: obj.name || products[temp].name,
            description: obj.description || products[temp].description,
            price: obj.price || products[temp].price
        }
        products[temp] = toReplace;
        writeToFile('./data/products.json', products)
        resolve(toReplace)
    })
}

const deleteData = (id) => {
    return new Promise((resolve, reject) => {
        temp = products.findIndex((p) => id === p.id)
        const obj = products.slice(temp, temp+1)
        const finalArray = products.filter((p) => p.id !== id.toString())
        writeToFile('./data/products.json', finalArray)
        resolve(obj)
    })
}

module.exports = {
    findAll,
    findById,
    saveData,
    updateData,
    deleteData
}