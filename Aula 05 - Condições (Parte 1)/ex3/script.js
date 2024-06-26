function clicar(){
    var show = window.document.getElementById('txt')
    var pais = String(show.value.trim())
    var results = window.document.getElementById('resultado')

    if(pais.toLowerCase() === 'brasil') {
        results.textContent = ('Você é brasileiro')
    } else {
        results.textContent = ('Você é esrangeiro')
    }
}