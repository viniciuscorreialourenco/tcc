//entrar no sistema em login
$(document).ready(function(){
    $(document).on("click", "#entrar", function(){
        var form_data = new FormData();
        var usuario = $("#usuario").val();
        var senha = $("#senha").val();
        form_data.append("usuarioPHP", usuario);
        form_data.append("senhaPHP", senha);

        $.ajax({
            method: "post",
            url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/login.php",
            data: form_data,
            processData: false,
            contentType: false,
            success: function(data){
                let objJsonUsuario = JSON.parse(data);
                console.log(objJsonUsuario);
                if(objJsonUsuario.usuario == usuario && objJsonUsuario.senha == senha){
                    window.location.href = "menu.html";
                    localStorage.setItem("codigoUser", objJsonUsuario.codigoUsuario);
                } else if(usuario == "" && senha == "") {
                    alert(data);
                    alert("Por favor preencha os campos usuario e senha");
                } else if(objJsonUsuario.usuario != usuario && objJsonUsuario.senha != senha){
                    alert("usuario e/ou senha incorretos");
                }
            }, 
            error: function (request, status, error) {
                navigator.notification.alert(request.responseText);
            }
        });
    });
});
