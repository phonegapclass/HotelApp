//actions.js
var fn = {
    init: function(){
        document.addEventListener('deviceready',fn.device,false);
    },
    device: function(){
        var x = false;
        if(!x){
            window.location.href = '#reg';
        }
        $('#regSend').click(fn.registro);
    },
    registro: function(){
        var nombre = $('#regName').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        if(nombre != '' && mail != '' && tel != ''){
            //Enviar Datos al Servidor
        }else{
            navigator.notification.alert("Todos los campos son requeridos",null,'hola','bye');
        }
    }
};
$(fn.init);