class CepView {

    mostraReq(obj) {
        $('#estado').val(obj.estado)
        $("#cidade").val(obj.cidade)
        $("#bairro").val(obj.bairro)
        $("#rua").val(obj.rua)
    }
}