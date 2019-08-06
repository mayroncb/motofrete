//listagem de entregas

// $().ready(function()){
// $(function()){
$(document).ready(function () {

    carregaListagem();

    $(".ordenar").click(function(ev){
        ev.preventDefault(); // modifica o comportamento padrão do elemento.

        // remove as setas adicionadas em outras colunas.
        $(".ordenar span").empty();

        var campo = $(ev.target).attr("href");
        var ord = $(ev.target).attr("ord");

        if (ord == "asc") {
            var seta = '<span>&#8615;</span>';
            $(ev.target).attr("ord", "desc");
        } else {
            var seta = '<span>&#8613;</span>';
            $(ev.target).attr("ord", "asc");
        }
        
        $(ev.target).children("span").remove();
        
        $(ev.target).append(seta);

        carregaListagem(campo, ord);

    }) // fim do click

    $("#sel-status").change(function(){
        var valor = $(this).val();

        var filtro = {
            coluna: "status",
            valor: valor
        };

        carregaListagem(null, null, filtro);

    }); // fim do change

});// fim do ready

function carregaListagem(coluna, ord, filtro)
{
    // evita o bug de quando não tem nenhuma coluna selecionada.
    var coluna = (coluna == undefined)? "": coluna;
    
    //var ordem = (ord != undefined)? "&ord="+ord : "";
    
    var json = {
        ordem: ord,
        filtro: filtro 
    };

    $.getJSON('/model/entregas_listagem.php' + coluna, json, function (dados) {

        $("#listagem-entregas tbody").empty();

        dados.forEach(function (item, index) {

            var tr = '<tr>'
                + '<td>' + item.id + '</td>'
                + '<td>' + item.data_cadastro + '</td>'
                + '<td>' + item.status + '</td>'
                + '<td>' + item.data_modificado + '</td>'
                + '<td>' + item.nome + '</td>'
                + '</tr>';

            $("#listagem-entregas tbody").append(tr);


        }); // fim do foreach


    }); // fim do getJson
}

function filtragem (){
    
}