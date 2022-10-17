
// Mostrar resposta de Validação no Input

class ValidaView {
    mostrarValid(inputId, validation) {
        $(inputId).attr("class", `form-control is-${validation}`)
    }

}
 
