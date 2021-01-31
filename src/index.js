const Sensor    =   require('./models/Iot')
const express   = require('express');
const socketIO    = require('socket.io');
const path      = require('path');
const app=  express();
require('./database');
 
//settings
app.set('port', process.env.PORT || 4000)

//static files
app.use(express.static(path.join(__dirname, 'public' )))

//listen
const server = app.listen(app.get('port'),()=>{
    console.log('server ON')
});

//socket
io=socketIO(server); 
//se conecta al servidor 
    io.on('connection',async socket=>{
        //console.log('Usuario Conectado',socket)
        const topic="msg1"
        let mensajes= await Sensor.find({}).sort({$natural:-1}).limit(1);
        console.log('log ',mensajes[0].name)
        console.log('log2 ',mensajes)
        socket.emit('datos', mensajes[0].name);
    
    })


