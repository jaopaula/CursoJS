function verificar() {
    var data = new Date()  // Cria um novo objeto Date para obter a data atual
    var ano = data.getFullYear()  // Obtém o ano atual (com 4 dígitos) a partir do objeto Date
    var fAno = document.getElementById('txtano')  // Obtém o elemento do input que contém o ano de nascimento
    var res = document.getElementById('res')  // Obtém o elemento div onde o resultado será exibido

    // Verifica se o campo do ano está vazio, menor que 4 digitos ou se o valor é maior que o ano atual
    if (fAno.value.length == 0 || fAno.value.length < 4 ||fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')  // Mostra uma mensagem de erro
    } else {
        var fsex = document.getElementsByName('radsex')  // Obtém todos os elementos de radio buttons com o nome 'radsex'
        var idade = ano - Number(fAno.value)  // Calcula a idade subtraindo o ano de nascimento do ano atual
        var genero = ''  // Inicializa a variável genero como uma string vazia
        var img = document.createElement('img')  // Cria um novo elemento img
        img.setAttribute('id', 'foto')  // Define o atributo id do elemento img como 'foto'

        // Verifica se o radio button do sexo masculino está selecionado
        if (fsex[0].checked) {
            genero = 'Homem'  // Define genero como 'Homem'
            // Verifica a faixa etária e define a imagem apropriada para homens
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebeMenino.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'meninoJovem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homemAdulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'homemVelho.jpg')
            }
        // Verifica se o radio button do sexo feminino está selecionado
        } else if (fsex[1].checked) {
            genero = 'Mulher'  // Define genero como 'Mulher'
            // Verifica a faixa etária e define a imagem apropriada para mulheres
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebeMenina.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'meninaJovem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulherAdulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'mulherVelha.jpg')
            }
        }
        // Atualiza o conteúdo do elemento res com a mensagem de resultado e adiciona a imagem
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)  // Adiciona o elemento img como filho do elemento res
    }
}
