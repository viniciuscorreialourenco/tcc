// This is a JavaScript file
$(document).on("click", "salvarComanda", function(){
    let nomeCliente = document.querySelector("#nomeCliente");

    $.ajax({
        url:'https://sistemaquiosque.000webhostapp.com/comandaTCC/src/comanda.php',
        type:'POST',
        data: {objNomeCliente: nomeCliente.value},
        success: (data) => {
            if(data == 1){
                navigator.notification.alert("Comanda cadastrada com sucesso");      
                retornaComandas();
            } else {
                alert('Falha ao Cadastrar a nova comanda');
            }            
        }
    });
});

$(document).ready(function(){
    retornaComandas();
});

function retornaComandas(){
    $.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/listarComanda.php",
        processData: false,
        contentType: false,
        success: function(data){
            let objJsonCliente = JSON.parse(data);
            let contadorComanda = 0;
            let htmlListarComandas = '';      
            while (contadorComanda < objJsonCliente.length){

                htmlListarComandas += `
                    <div class="col-xs-6 box">
                        <div class="col-xs-7">
                            <label for="">${objJsonCliente[contadorComanda].nm_cliente}</label><br>                           
                        </div>

                        <div class="col-xs-5">
                            <a href="produtos.html"><button class="btn-success btn-block">ABRIR</button></a>
                        </div>   
                    </div>`;
                    contadorComanda++
            } 

            document.querySelector("#comandas").innerHTML += htmlListarComandas;
        }, 
        error: function (request, status, error) {
            navigator.notification.alert(request.responseText);
        }
    });
}
