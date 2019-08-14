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

    $("#sel-status, #sel-responsavel").change(function(){
        var valor = $(this).val();

        var filtro = {
            coluna: $(this).attr('coluna'),
            valor: valor
        };

        carregaListagem(null, null, filtro);

    }); // fim do change

        // Carrega os responsaveis
        $.getJSON("responsavel_listagem.php", function(dados){

            dados.forEach(function(item, idx) {

                var opt = '<option value="'+ item.id +'">'+ item.nome +'</option>';

                $("#sel-responsavel, #sel-entregador, #sel-alteracao-entregador").append(opt);

            }); // fim do foreach

        }); //fim do getJson

        // cria o calendario
        $('#dt-cadastro, #dt-alteracao').datepicker({
            format: "dd/mm/yyyy",
            endDate: "today",
            clearBtn: true,
            language: "pt-BR"
        });

        $("#dt-cadastro").change(function(){
            var data = $(this).val();

            var dt = data.split("/");
            var nova = dt[2] + "-" + dt[1] + "-" + dt[0];

            var filtro = {
                coluna: "data_cadastro",
                valor: nova
            }; 

            carregaListagem(null, null, filtro);

        });

        $("#listagem-entregas").on('click', '.btn-alterar', function(){
                $('#modal-alterar').modal('show');
                
                var id = $(this).attr('entrega');
                $("#id_entrega").val(id);

                $.getJSON('entregas_exibir.php?id='+id, function(res){
                    $('#sel-alteracao-status').val(res.status);
                    $('#sel-alteracao-entregador').val(res.entregador);
                });

        }); // fim do on

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

    $.getJSON('entregas_listagem.php' + coluna, json, function (dados) {

        $("#listagem-entregas tbody").empty();

        dados.forEach(function (item, index) {

            var dtCadastro = new Date(item.data_cadastro);
            var dtCadastroFormatado = dtCadastro.getDate() + "/" + dtCadastro.getMonth() + '/' + dtCadastro.getFullYear();
            
            var tr = '<tr>'
                + '<td>' + item.id + '</td>'
                + '<td>' + dtCadastroFormatado + '</td>'
                + '<td>' + item.status + '</td>'
                + '<td>' + item.data_modificado + '</td>'
                + '<td>' + item.nome + '</td>'
                +'<td> <button type="button" class="btn btn-secondary btn-alterar" entrega="'+ item.id +'">Alterar</button> </td>'
                + '</tr>';

            $("#listagem-entregas tbody").append(tr);


        }); // fim do foreach


    }); // fim do getJson
}

function filtragem (){
    
}