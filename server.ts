import http, {IncomingMessage, ServerResponse} from 'http';

const listener = (request:IncomingMessage, response:ServerResponse) => {
    response.writeHead(200, {'Content-Type': 'plain/html'})
    response.end('<h1>Hola mundo</h1>');
}

const server = http.createServer(listener)

server.listen(3000, () => {
    console.log('listening on port 3000')
})