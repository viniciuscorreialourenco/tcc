
let urlId = window.location.search.split("=");
let codigo = urlId[1];

var parametros = {
    "codigo":codigo 
}
console.log(parametros.codigo);

$.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/listRequests.php",
        data: parametros.codigo,
        success: function(data){
            console.log(data);
            let obj = JSON.parse(data);
            document.querySelector("#pedido").innerHTML += `
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
            `;
        },
        error: function(data){
            navigator.notification.alert("erro ao adicionar o produto");
        }
    });