const fs = require ('fs')

str=fs.readFile(process.argv[2],'utf8',(err,data)=>{
    if(err){
        console.log('err.message')
   
}else  { 
    const str=data.toString().split('\n').length
    console.log(str-1);}
   
})
