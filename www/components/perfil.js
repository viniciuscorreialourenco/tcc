// This is a JavaScript file

$(document).ready(function() {
    $.ajax({
        method:"POST",
        url:"https://sistemaquiosque.000webhostapp.com/comandaTCC/src/listarUmPerfil.php",
        data:"id="+localStorage.getItem("codigoUser"),
        dataType:"json",
        success: function(data){
            $("#nome").text(data.pessoa.usuario);
            $("#email").text(data.pessoa.email);
            $("#numeroTel").text(data.pessoa.celular);
        }, 
        error: function (data) {
            navigator.notification.alert("erro");
        }
    });
});