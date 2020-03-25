const http=require('http');
const bl = require ('bl');
const concat=require ('concat-stream')

const url = process.argv[2];
let rst="";


http.get(url,(response)=>{

    response.on('error',(err)=>console.log(err));
    response.on('data',(data)=>{
         rst+=data.toString()
        });
    response.on('end',()=>{console.log(rst.length),
                            console.log(rst)});
                            
    /* with bl module */
    // response.pipe(bl((err,data)=>{
    //     if(err) return console.error(err) ;
    //     data=data.toString()
    //     console.log(data.length)
    //     console.log(data)
    // }))

    /* with stream-concat module */
    // response.pipe(concat((data)=>{
    //     console.log(data.toString().length);
    //     console.log(data.toString());
    // }))


})