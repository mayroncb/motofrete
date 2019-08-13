$(document).ready(function(){

        $('#valor').mask("#.##0,00", {reverse: true});

        $('#btn-salvar').click(function(){

            var valor = $('#valor').val();
            var endereco = $('#endereco').val();
            var cliente = $('#cliente').val(); 

            var valido = true; // flag que verifica os campos sem valor preenchido.

            $(".alert").remove();

            if (cliente == ""){
                var alert = '<div class="alert alert-danger mt-5" id="alert-index" role="alert">'
                            +'Ocorreu um problema ao cadastrar!'
                            +'</div>';

            $('.modal-body').prepend(alert);
            $('#cliente').addClass('is-invalid');
            
            return false;

            }

            if (endereco == ""){
                var alert = '<div class="alert alert-danger mt-5" id="alert-index" role="alert">'
                            +'Ocorreu um problema ao cadastrar!'
                            +'</div>';

            $('.modal-body').prepend(alert);
            $('#endereco').addClass('is-invalid');
            
            return false;

            }
                        
            if (valor == ""){
                var alert = '<div class="alert alert-danger mt-5" id="alert-index" role="alert">'
                            +'Ocorreu um problema ao cadastrar!'
                            +'</div>';

            $('.modal-body').prepend(alert);
            $('#valor').addClass('is-invalid');
            
            return false;

            }  

            var form = {
                valor:  valor.replace('.', '').replace(',', '.'),
                entregador: $('#sel-entregador').val(),
                endereco: $('#endereco').val(),

            };

            $.post('entregas_cadastro.php', form, function(res){

                if (res == "ok"){
                    $('#modal-cadastro').modal('hide');
                    var alert = '<div class="alert alert-success mt-5" id="alert-index" role="alert">'
                                +'Pedido cadastrado com sucesso!'
                                +'</div>';

                    $("main").prepend(alert);

                    carregaListagem();
                } else {
                    var alert = '<div class="alert alert-danger mt-5" id="alert-index" role="alert">'
                                +'Ocorreu um problema ao cadastrar!'
                                +'</div>';
                    $('.modal-body').prepend(alert); 
                }

            }); // fim do post

        }); // fim do click

});