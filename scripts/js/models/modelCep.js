class CepModel {
    constructor() {
        this.estado = '';
        this.cidade = '';
        this.rua = '';
        this.bairro = '';
        this.cep = $('#cep');
    }
    

    reqCep() {        
        const requisicao = new XMLHttpRequest()

        requisicao.addEventListener('load', () => {
            try {
                if (requisicao.status == 200) {
                    const dados = this._processaResposta(requisicao.responseText)
                    if (dados.erro == 'true') {
                        $('#cep').attr('class','form-control is-error')
                        throw new Error('Cep não encontrado')
                    }
                    $('#cep').attr('class','form-control is-success')
                    this._att(dados)
                }
            } catch(erro){
                console.error(erro)
            }
        })
        requisicao.open('GET', `https://viacep.com.br/ws/${this.cep.val()}/json/`, false)
        requisicao.send()
    }

    _processaResposta(respostaString) {
        const resposta = JSON.parse(respostaString)
        return resposta
    }

    _att(dados) {
        this.estado = dados.uf
        this.cidade = dados.localidade
        this.bairro = dados.bairro
        this.rua = dados.logradouro
    }

}