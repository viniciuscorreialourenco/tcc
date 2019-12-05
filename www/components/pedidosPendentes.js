$(document).ready(function(){
    returnsPendingRequests();
});

function returnsPendingRequests(){
    let parametros = {
        "codeUser": localStorage.getItem("codigoUser")
    };

    $.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/listRequests.php",
        data: parametros,
        success: function(data){
            
            let obj = JSON.parse(data);
            document.querySelector("#pendente").innerHTML += `
                <div class="col-xs-6 box">
                    <div class="row">
                        <div class="col-xs-6">
                            <label for="">${obj.nm_produto}</label>
                        </div>
                        <div class="col-xs-6">
                            <label for="" id="notime">${obj.qtd_pedido}</label><br>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6">
                            <label for="">${obj.tp_pedido}</label>
                        </div>
                        <div class="col-xs-6">
                            <label for="" id="notime">${obj.vl_produto}</label><br>
                        </div>
                    </div>
                </div>
            `;
        },
        error: function(data){
            navigator.notification.alert("erro ao adicionar o produto");
        }
    });
}
