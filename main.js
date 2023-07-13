
    $('#cep').mask('69900‑000', {
        placeholder: '00000‑000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#tel').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    })

    $('#form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            cep: {
                required:true
            },
            cpf: {
                required:true
            },
            tel: {
                required:true
            },
            endereço: {
                required:true
            }
        },
        messages:{
            nome: 'insira seu nome completo',
            email: 'Insira um E-mail valido',
            tel: 'Numero obrigatorio',
            cpf: 'CPF obrigatorio',
            cep: 'Seu CEP por favor',
            endereço: 'Insira um endereço valido'
        }
    })



