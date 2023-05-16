function validarDados() {

    if (document.forms.form1.elements[0].value == "" || document.forms.form1.elements[0].value.length < 11) {
        alert("É necessario preencher o campo NOME com mais de 10 caracteres.");
        document.forms.form1.elements[0].focus();
        return false;
    };

    if (document.forms.form1.elements["idEmail"].value == "" || document.forms.form1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.form1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente.");
        document.forms.form1.elements.idEmail.focus();
       return false;
    }

    if (document.forms.form1.elements.idComentario.value == "" || document.forms.form1.elements.idComentario.value.length < 20) {
        alert("É necessario preencher o campo COMENTÁRIO com mais de 20 caracteres.");
        document.getElementById("idComentario").focus();
        return false;
    }

    var opcaoSelecionada = document.querySelector('input[name="vez"]:checked');
    if (!opcaoSelecionada) {
        alert("Selecione uma opção na pesquisa!");
        return false;
    }

    return true;
}

function exibirMensagem() {
    var opcaoSelecionada = document.querySelector('input[name="vez"]:checked').value;
    if (opcaoSelecionada == "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à esta página!");
    }
}

function limparSelecao() {
    var radios = document.getElementsByName('vez');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}