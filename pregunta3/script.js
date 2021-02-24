function inputRegistro(){
    var usuario = document.getElementById("user").value
    var contrasena = document.getElementById("password").value
    var cliente = document.getElementById("client").value
    var existe = document.getElementById("exist").value
    /*
    LO SIENTO NO PUDE HACER LA VERIFICACIÓN, MASTER

    for (var i = 0; i <= document.getElementById("tabla1").rows.length; i++) {
        if(usuario = document.getElementById("tabla1").cols[1].cells[i].value)
        var validacionUsuario = "si"
        else
        var validacionUsuario = "no"
     }

     if(validacionUsuario = "si")
     var existe = "EXISTE"
     else
     var existe = "NUEVO"
    */

    var txt = '<td>'+usuario+'</td><td>'+contrasena+'</td><td>'+cliente+'</td><td>'+existe+'</td>';
    document.getElementById("tabla1").insertRow(-1).innerHTML = txt;
}