const http=require('http')

const url = process.argv[2];

http.get(url,(response)=>{
    response.on('err',()=>console.log('err'));
    response.setEncoding('utf8');
    response.on('data',(data)=>console.log(data));
})