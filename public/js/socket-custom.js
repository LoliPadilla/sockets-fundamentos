var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function () {
    console.log('Perdimos connexion con el servidor');

});

socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});

socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});
