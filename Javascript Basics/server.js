// recieve http requests
const http = require('http')

const server = http.createServer(function(request,response){
if(request.url === '/'){
    // homepage
    response.writeHead(200, {'Content-Type' : 'text/html'})
    response.write('hello my fantasy world, your in Azeroth now')
    response.end
}
})

server.listen(8080)



// respond to the request

// render some html