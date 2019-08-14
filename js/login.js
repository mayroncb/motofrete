$(document).ready(function(){


    $("#btn-entrar").click(function(){

        var form = {
            login: $('#login').val(),
            senha: $('#password').val(),
        }
        $.post("login.php", form, function(res){
            if (res == "ok") {
                window.localStorage.setItem("logado", true);
                window.location.href = "/motofrete/index.html";
            } else {
                // exibe msg de erro.
            }
            
        });

    });

});