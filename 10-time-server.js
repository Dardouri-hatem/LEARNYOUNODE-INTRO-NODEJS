const net = require('net')
const moment=require('moment')
const port =process.argv[2]

// function zeroFill (i) {
//     return (i < 10 ? '0' : '') + i
//   }

const server = net.createServer(socket=>{
    // let date=new Date();
    const date =(moment().format('YYYY-MM-DD hh:mm'))
    socket.write(date)
    // console.log(date.getFullYear()+ zeroFill(date.getMonth()+1)+ zeroFill(date.getDate())+ zeroFill(moment(date).hour())+':'+  zeroFill(moment(date).minute()))
    socket.end('\n');

}).listen(port)
