const fs = require('fs')
const path= require ('path')

fs.readdir(process.argv[2],(err,list)=>{
    if(err){
        throw err
    }else{


    const str=list.forEach((file)=> (path.extname(file)==='.'+process.argv[3])?console.log(file):null)    
    console.log(str)
    }
})

