//actions.js
var fn = {
    init: function(){
        var x = false;
        if(!x){
            window.location.href = '#reg';
        }
        document.addEventListener('deviceready',fn.device,false);
    },
    device: function(){
        $('#regSend').click(fn.registro);
    },
    registro: function(){
        var nombre = $('#regName').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        if(nombre != '' && mail != '' && tel != ''){
            //Enviar Datos al Servidor
        }else{
            alert("Todos los campos son requeridos");
        }
    }
};
$(fn.init);