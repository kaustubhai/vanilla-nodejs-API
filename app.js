const http = require('http')
const controller = require('./controllers/productController')

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        controller.getProducts(req, res)
    }
    else if (req.url === '/api/products' && req.method === 'POST') {
        controller.postProducts(req, res);
    }
    else if (req.url.match(/\/api\/product\/+/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        controller.getProduct(req, res, id)
    }
    else if (req.url.match(/\/api\/product\/+/) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        controller.updateProduct(req, res, id)
    }
    else if (req.url.match(/\/api\/product\/+/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3]
        controller.deleteProduct(req, res, id)
    }
    else {
        res.writeHead(404, { 'content-type': 'application/json' })
        res.end(JSON.stringify({message: 'Invalid URL. Go Back'}))
    }
})

const port = process.env.PORT || 3000

server.listen(port, () => console.log(`Server is up on port ${port}`))