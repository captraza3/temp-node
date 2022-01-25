const http = require('http')



const server = http.createServer((req,res)=>{
    // res.write(")
    if(req.url === '/'){
        res.end("Hi check of it")    
    }
    if(req.url === '/about'){
        res.end("Hi is second url")
    }
    res.end(`
    <h1>Ooops</h1>
    <p> Its not open</p>
    <a href='/'>back</a>
    `)
    
})

server.listen(5000)