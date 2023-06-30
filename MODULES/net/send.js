const net = require('fs')

const server = net.createServer(function(socket){
    socket.end("My new messege is here ")
})

//is used to handle run time error
server.on("error",(err)=>{
    if(err) throw err;
});
server.listen(()=>{
    let address = server.address()
    console.log(`server port %`,address); //ipv6
});