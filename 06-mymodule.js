const fs = require('fs')
const path= require ('path')


module.exports=(directory,ext,callback)=>{

    fs.readdir(directory,'utf8',(err,list)=>{
        if(err){
            callback(err)
        }else{
            const str=list.filter((file)=> (path.extname(file)==='.'+ext))  
            callback(null,str)

        }
    })

}