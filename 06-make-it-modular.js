
const mymodule = require('./mymodule')
const dir=process.argv[2];
const extension=process.argv[3];

mymodule(dir,extension,(err,listFiltred)=>{
    if(err){return console.error(err)};
    
    listFiltred.forEach(element => {
        console.log(element)
    });
})
