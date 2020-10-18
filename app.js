const http = require('http')
const products = require('./data/products.json')
const controller = require('./controllers/productController')

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        controller.getProducts(req, res)
    }
    else {
        res.writeHead(404, { 'content-type': 'application/json' })
        res.end(JSON.stringify({message: 'Invalid URL. Go Back'}))
    }
})

const port = process.env.PORT || 3000

server.listen(port, () => console.log(`Server is up on port ${port}`))