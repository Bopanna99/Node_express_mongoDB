const net = require('net')

const client = net.connect({ port:16575}, ()=>{
    console.log('connected to server')
})

//data event
client.on("data",(output)=>{
    console.log('output =',output.toString())
});

//end event
client.on('end', ()=> {
    console.log('server disconnected')
})