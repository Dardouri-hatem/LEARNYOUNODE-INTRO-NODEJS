const http = require ('http');
const async = require ('async')
const bl = require('bl');
const urls = process.argv.slice(2);


async.eachSeries(urls,(url,callback)=>{
http.get(url,response=>{
   response.pipe(bl((err,data)=>{
       if(err) return callback(err);
       console.log(data.toString());
       callback();
    }))
})})