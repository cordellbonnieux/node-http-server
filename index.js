const http = require('http')
const fs = require('fs')
require('dotenv').config({ path: './info.env'})

const port = process.env.PORT

const server = http.createServer((req, res) => {
    let file = null
    switch(req.url) {
        case '/': file = 'index.html'
            break
        case '/contact-me': file = 'contact-me.html'
            break
        case '/about': file = 'about.html'
            break
        default: file = '404.html'      
    }
    fs.readFile(file, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})