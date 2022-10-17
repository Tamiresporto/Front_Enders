class CepController {
    passaCep() {
        const validacao = new CepModel($('#cep').val())
        const mostra = new CepView()
        validacao.reqCep() 
        mostra.mostraReq(validacao)
    }
}

const controller = new CepController()
$('#buscaCep').click((e) => {
    e.preventDefault()
    controller.passaCep()
})