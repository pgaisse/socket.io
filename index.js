const express   = require('express');
const socketIO    = require('socket.io');
const path      = require('path');
const app=  express();
 
//settings
app.set('port', process.env.PORT || 4000)

//static files
app.use(express.static(path.join(__dirname, 'src/public' )))

//listen
const server = app.listen(app.get('port'),()=>{
    console.log('server ON')
});

//socket
io=socketIO(server);
//se conecta al servidor 
io.on('connection',()=>{
    console.log('Usuario Conectado')
})