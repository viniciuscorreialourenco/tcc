$(document).ready(function(){
let parametros = {
"codeUser": localStorage.getItem("codigoUser")
};
$.ajax({
        method: "post",
        url: "https://sistemaquiosque.000webhostapp.com/comandaTCC/src/listRequests.php",
        data: parametros,
        success: function(data){

            let obj = JSON.parse(data);

            document.querySelector("#pendente").innerHTML +=`
                <div class="col-xs-7">
                    <label for="">${obj[0].nm_produto}</label><br>
                    <label for="">${obj[0].qtd_pedido} ${obj[0].tp_produto}</label>   
                </div>  
            `;
        }
});
});