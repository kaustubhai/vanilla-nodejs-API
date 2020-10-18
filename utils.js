const fs = require('fs')
const { resolve } = require('path')

const writeToFile = (fileName, content) => {
    fs.writeFileSync(fileName, JSON.stringify(content), (err) => {
        if (err)
            return console.log(err)
    })
}

const bufferToData = (req) => {
    try {
        return new Promise((resolve, reject) => {
            let body = ''
            req.on('data', (chunk) => {
                body = body + chunk.toString()
                resolve(body)
            })
        })
    }
    catch (e) {
        console.log(e)
    }}

module.exports = {
    writeToFile, bufferToData
}