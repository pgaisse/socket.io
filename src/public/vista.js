const socket = io()

// obteniendo elementos DOM
let $id= $("#id");
let $name=$("#name");
let $status=$("#status");
let $value=$("#value");
let $topic=$("#topic");
let $description=$("#description");

socket.on('datos', data=>{
    console.log(data)
    $description.append(data);


})