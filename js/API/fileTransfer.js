//fileTransfer.js
var myTransfer = {
    subido: function(r){
        alert('p3: ' + r.response);
        if(r.response == '1'){
            alert('p4');
            navigator.notification.alert("Se ha registrado correctamente",function(){
                window.location.href = '#home';
                //Asignar Registro Local
                alert('p5');
            },"Felicidades","Aceptar");
        }
    },
    /*error: function(err){
        navigator.notification.alert("Error: "+err.code,null,"Error","Aceptar");
    },
    opciones: new FileUploadOptions(),
    ft: new FileTransfer()*/
};

myTransfer.opciones.fileKey = "foto";
myTransfer.opciones.fileName = "Carlos";
myTransfer.opciones.mimeType = "image/jpeg";
myTransfer.opciones.params = {value1: 'Text',value2: 'param'};