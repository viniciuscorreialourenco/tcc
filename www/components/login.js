// This is a JavaScript file

//entrar no sistema em login
$(document).ready(function(){
    $(document).on("click", "#entrar", function(){
        var form_data = new FormData();
        form_data.append("senha",$("#senha").val());
        form_data.append("usuario",$("#usuario").val());

        if(usuario == "" || senha == ""){
            navigator.notification.alert("Por favor preencha os campos de usuario e senha");
        } else {
            $.ajax({
                method: "post",
                url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/login.php",
                data: form_data,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function(data){
                    navigator.notification.alert(data);
                    window.location.href = "menu.html";
                }, 
                error: function(data){
                    navigator.notification.alert(data);
                }
            });
        }
    });
});

