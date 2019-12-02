// This is a JavaScript file
$(document).ready(function(){
    retornaProdutos();
});

function retornaProdutos(){

    $.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/listarProdutos.php",
        processData: false,
        contentType: false,
        success: function(data){
            let objJsonProdutos = JSON.parse(data);
            let contadorProdutos = 0;
            let htmlListarProdutos = '';      
            while (contadorProdutos < objJsonProdutos.length){

                htmlListarProdutos += `
                    <div class="col-xs-5 box">
                        <div class="row box1">
                            <label for="" >${objJsonProdutos[contadorProdutos].nm_produto}</label>
                        </div>
                        <div class="row">
                            <input type="number" class="form-control" id="quantidade" placeholder="quantidade">
                        </div>
                        <div class="row">
                            <button class="btn-block" id="btnAdicionar" onclick="insertRequest(${objJsonProdutos[contadorProdutos].cd_produto})">ADICIONAR</button>
                        </div>
                    </div>`;
                    contadorProdutos++
            } 

            document.querySelector("#listaProduto").innerHTML += htmlListarProdutos;
        }, 
        error: function (request, status, error) {
            navigator.notification.alert(request.responseText);
        }
    });
}

function insertRequest(code){

    var parametros = {
        "objAmount": $("#quantidade").val(),
        "objProductCode": $(code).val(),
        "codeUser": "objCodeUser = "+localStorage.getItem("codigoUser"),
        "codeCommand": "objCodeCommand = "+localStorage.getItem("codigoComanda"),  
    }

    $.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/insertRequests.php",
        data: parametros,
        processData: false,
        contentType: false,
        success: function(data){
            navigator.notification.alert("produto adicionado com sucesso");
            window.location.href = "pedidos.html";
        },
        error: function(data){
            navigator.notification.alert("erro ao adicionar o produto");
        }
    });
}
