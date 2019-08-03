//listagem de entregas

// $().ready(function()){
// $(function()){
$(document).ready(function () {

    carregaListagem();

    $(".ordenar").click(function(ev){
        ev.preventDefault();
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

        carregaListagem(campo);

    }) // fim do ordenar

});// fim do ready

function carregaListagem(coluna)
{
    // evita o bug de quando não tem nenhuma coluna selecionada.
    if (coluna == undefined)
    {
        coluna = "";
    }

    $.getJSON('/model/entregas_listagem.php'+coluna, function (dados) {

        $("#listagem-entregas tbody").empty();

        dados.forEach(function (item, index) {

            var tr = '<tr>'
                + '<td>' + item.id + '</td>'
                + '<td>' + item.data_cadastro + '</td>'
                + '<td>' + item.status + '</td>'
                + '<td>' + item.data_modificado + '</td>'
                + '<td>' + item.entregador + '</td>'
                + '</tr>';

            $("#listagem-entregas tbody").append(tr);


        }); // fim do foreach


    }); // fim do getJson
}