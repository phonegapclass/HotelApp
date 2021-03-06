var db = {
    crearDB: function(){
        var obj = window.openDatabase("hotel", "1.0", "Hotel Demo", 200000);
        return obj;
    },
    //--------------------PENDIENTES------------------
    agregarPendientes: function(th,ha,pr,di){
        db.th = th;
        db.ha = ha;
        db.pr = pr;
        db.di = di;
        db.crearDB().transaction(db.tablaPendientes,db.error,db.exitoPendientes);
    },
    tablaPendientes: function(tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS pendientes (id unique, th, ha, pr, di)");
        tx.executeSql("INSERT INTO pendientes (th, ha, pr, di) VALUES ('" + db.th + "', '" + db.ha + "', '" + db.pr + "', '" + db.di + "')");
    },
    exitoPendientes: function(){
        $.mobile.loading( 'hide' );
        navigator.notification.alert('Reserva en espera de conexión',null,'Guardado','Aceptar');
    },
    leerPendientes: function(){
        db.crearDB().transaction(db.selectPendientes,db.error);
    },
    selectPendientes: function(tx){
        tx.executeSql("SELECT * FROM pendientes",[],db.resultadosPendientes,null);
    },
    resultadosPendientes: function(tx,res){
        var cant = res.rows.length;
        if(cant>0){
            for(var i = 0;i < cant;i++){
                var th = res.rows.item(i).th;
                var ha = res.rows.item(i).ha;
                var pr = res.rows.item(i).pr;
                var di = res.rows.item(i).di;
                
                fn.enviarReserva(th,ha,pr,di);
                tx.executeSql("DELETE FROM pendientes WHERE id='" + res.rows.item(i).id + "'");
            }
        }
    },
    //-------------------HISTORIAL---------------------
    agregarHistorial: function(th,ha,pr,di){
        db.th = th;
        db.ha = ha;
        db.pr = pr;
        db.di = di;
        db.crearDB().transaction(db.tablaHistorial,db.error,db.exitoHistorial);
    },
    tablaHistorial: function(tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS historial (id unique, th, ha, pr, di)");
        tx.executeSql("INSERT INTO historial (th, ha, pr, di) VALUES ('" + db.th + "', '" + db.ha + "', '" + db.pr + "', '" + db.di + "')");
    },
    exitoHistorial: function(){
        $.mobile.loading( 'hide' );
        navigator.notification.alert('Se ha registrado su reserva',null,'Reserva Exitosa','Aceptar');
    },
    leerHistorial: function(){
        db.crearDB().transaction(db.selectHistorial,db.error);
    },
    selectHistorial: function(tx){
        tx.executeSql("SELECT * FROM pendientes",[],db.resultadosHistorial,null);
    },
    resultadosHistorial: function(tx,res){
        var cant = res.rows.length;
        var ret = '<tr><td colspan="4">No hay registros guardados en Historial</td></tr>';
        if(cant>0){
            ret = '';
            for(var i = 0;i < cant;i++){
                var th = res.rows.item(i).th;
                var ha = res.rows.item(i).ha;
                var pr = res.rows.item(i).pr;
                var di = res.rows.item(i).di;
                
                ret += '<tr><td>'+th+'</td><td>'+ha+'</td><td>'+pr+'</td><td>'+di+'</td></tr>';
            }
        }
        $('#showHist').html(ret);
    },
    //-------------------ERROR---------------------
    error: function(err){
        $.mobile.loading( 'hide' );
        alert('Error: '+err.code);
    }
}