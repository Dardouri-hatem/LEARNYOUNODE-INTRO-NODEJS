const http = require ('http');
const url = require('url');
const moment = require ('moment')

const port = process.argv[2];

const server = http.createServer((request,response)=>{
    let query= url.parse(request.url,true).query
    let pathname = url.parse(request.url,true).pathname
    response.writeHead(200, { 'Content-Type': 'application/json' })


    if(request.method==='GET'&& pathname=== '/api/parsetime'){
    return  response.end(JSON.stringify({
        hour : (moment(query.iso).hour()),
        minute : moment(query.iso).minute(),
        second : moment(query.iso).second()

    }))
}
    if (request.method==='GET'&& pathname=== '/api/unixtime'){
        response.end(JSON.stringify({unixtime : Number(moment(query.iso).format('x'))}))
    }
})
server.listen(port)