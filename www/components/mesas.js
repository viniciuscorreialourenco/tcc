// This is a JavaScript file
$(document).ready(function(){
    $.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/adminTCC/public/php_action/listarMesa.php",
        processData: false,
        contentType: false,
        success: function(data){
            let objJsonMesa = JSON.parse(data);
            let contadorMesa = 0;
            let htmlListarMesas = '';      
            while (contadorMesa < objJsonMesa.length){

                htmlListarMesas += `
                    <div class="col-xs-5 box">
                        <div class="row box1">
                            <label for="">Mesa ${objJsonMesa[contadorMesa].nrMesa}</label>
                        </div>
                        <div class="row box1">
                             <a href="comandas.html"><button id="entra">ENTRAR</button></a>
                        </div>
                    </div>`;
                    contadorMesa++
            } 
                document.querySelector("#mesas").innerHTML += htmlListarMesas;
        }, 
        error: function (request, status, error) {
            navigator.notification.alert(request.responseText);
        }
    });
});

