//listagem de entregas

// $().ready(function()){
// $(function()){
$(document).ready(function(){

    $.getJSON('/model/entregas_listagem.php',function(dados){

        dados.forEach(function(item, index) {
            
            var tr = '<tr>'
                        +'<td>'+ item.id +'</td>'
                        +'<td>'+ item.data_cadastro +'</td>'
                        +'<td>'+ item.status +'</td>'
                        +'<td>'+ item.data_modificado +'</td>'
                        +'<td>'+ item.entregador +'</td>'
                    +'</tr>'
            $("#listagem-entregas tbody").append(tr);        
        });
    });
});