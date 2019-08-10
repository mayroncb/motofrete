$(document).ready(function(){

        $('#valor').mask("#.##0,00", {reverse: true});

        $('#btn-salvar').click(function(){

            var valor = $('#valor').val();

            var form = {
                valor:  valor.replace('.', '').replace(',', '.'),
                entregador: $('#sel-entregador').val(),
                endereco: $('#endereco').val(),

            };

            $.post('entregas_cadastro.php', form, function(res){

            }); // fim do post

        }); // fim do click

});