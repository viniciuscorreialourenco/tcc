// This is a JavaScript file
$(document).ready(function(){
    retornaProdutos();

    document.getElementById("btnAdicionar").addEventListener("click", function(){
        let options = document.querySelector("#produtoEscolha").children;

        [...options].forEach(option => {
            if(option.selected == true){
                insertRequest(option.value);
            }
        });

    });

    insertRequest();
});

function retornaProdutos(){

    var itemLista = "";

    // invoncando método pra chamar o ajax
    $.ajax({
        type: "post",
        url:"https://sistemaquiosque.000webhostapp.com/comandaTCC/src/listarProdutos.php", 
        dataType:'json',
        success: function(data){    
            $.each(data.products, function(i, dados){
                itemLista+="<option value='"+dados.codigoProduto+"'>"+dados.nomeProduto+"</option>";
            });
            $("#produtoEscolha").html(itemLista);
        },
        error: function(data){
            navigator.notification.alert(data);
        }
    }); 
}

function insertRequest(code){
    // alert(code+" - "+localStorage.getItem("codigoUser")+" - "+localStorage.getItem("codigoComanda")+" - "+$("#quantidade").val());
    var parametros = {
        "objAmount": $("#quantidade").val(),
        "objProductCode": code,
        "codeUser": localStorage.getItem("codigoUser"),
        "codeCommand": localStorage.getItem("codigoComanda"),  
    }

    $.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/insertRequests.php",
        data: parametros,
        success: function(data){
           
            let obj = JSON.parse(data);
            document.querySelector("#pedido").innerHTML += `
            <div class="row">
                <div id="pedido" class="col-xs-6 box">
                    <div class="row">
                        <div class="col-xs-6">
                            <label for="">${obj[0].nm_produto}</label>
                        </div>
                        <div class="col-xs-6">
                            <label for="" id="notime">${obj[0].qtd_pedido}</label><br>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6">
                            <label for="">${obj[0].tp_produto}</label>
                        </div>
                        <div class="col-xs-6">
                            <label for="" id="notime">${obj[0].vl_produto}</label><br>
                        </div>
                    </div>
                </div>
            </div>`;
           // navigator.notification.alert("produto adicionado com sucesso");
           // window.location.href = "pedidos.html?id=" + localStorage.getItem("codigoComanda");
        },
        error: function(data){
            navigator.notification.alert("erro ao adicionar o produto");
        }
    });
}
