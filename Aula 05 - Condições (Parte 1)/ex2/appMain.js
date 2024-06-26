function calcular(){
    var txtv = window.document.querySelector('input#txtvel');
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${vel} Km/h`

    if (vel > 60){
        res.innerHTML += ('<p>Você foi Multado!</p>')
    }
}

