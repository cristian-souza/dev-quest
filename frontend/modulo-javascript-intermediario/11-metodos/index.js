let usuario = {
    nome: 'Cristian',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluido!')
    }
}

usuario.excluir()