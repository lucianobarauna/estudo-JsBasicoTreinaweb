var form = document.forms[0];

var usuarios = [
	{
		nome: 'TreinaWeb',
		login: 'treinaweb',
		senha: '123456'
	},
	{
		nome: 'Joao',
		login: 'joao',
		senha: 'joao123'
	}
];

var validarUsuario = function(login, senha){
    for (var index in usuarios) {
        var usuario = usuarios[index];
        if(usuario.login === login && usuario.senha === senha) { return true; }
    }
    return false;
}

var mostrarMensagem = function(tipo){    
    var message = document.getElementById(tipo);
    message.style.display = "block";
    
    var limparMensagem = setTimeout(function(){
        message.style.display = "none";
        clearInterval(tempoDeVisibilidade);
    },5000);
    
    var tempoDeVisibilidade = setTimeout(limparMensagem,5000);
    
}


form.addEventListener('submit', function(event){
    event.preventDefault();
    var login = document.getElementById('txtLogin').value;
    var senha = document.getElementById('txtPassword').value;
    
    if(validarUsuario(login, senha)){
        mostrarMensagem('success');
    } else {
        mostrarMensagem('error');
    }



});