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
        // dataType: 'json',
        success: function(data){
            // var itemlista = "";
            // $.each(data.livros,function(i,dados){
            //   itemlista += `
            //         <div class="col-xs-5 box">
            //             <div class="row box1">
            //                 <label for="" ></label>
            //             </div>
            //             <div class="row">
            //                 <input type="number" class="form-control" id="quantidade" placeholder="quantidade">
            //             </div>
            //             <div class="row">
            //                 <button class="btn-block" id="btnAdicionar" onclick=" var codigo = ${objJsonProdutos[contadorProdutos].cd_produto}; insertRequest(codigo); ">ADICIONAR</button>
            //             </div>
            //         </div>;`
            // });
            // $("#lista").html(itemlista);
           
        }, 
        error: function (request, status, error) {
            navigator.notification.alert(request.responseText);
        }
    });
}

function insertRequest(code){
    alert(code+" - "+localStorage.getItem("codigoUser")+" - "+localStorage.getItem("codigoComanda")+" - "+$("#quantidade").val());
    var parametros = {
        "objAmount": $("#quantidade").val(),
        "objProductCode": $(code).val(),
        "codeUser": localStorage.getItem("codigoUser"),
        "codeCommand": localStorage.getItem("codigoComanda"),  
    }

    $.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/insertRequests.php",
        data: parametros,
        success: function(data){
            navigator.notification.alert("produto adicionado com sucesso");
            window.location.href = "pedidos.html";
        },
        error: function(data){
            navigator.notification.alert("erro ao adicionar o produto");
        }
    });
}
