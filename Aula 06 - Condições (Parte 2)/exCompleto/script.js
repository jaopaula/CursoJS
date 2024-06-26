function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = (`Agora são ${hora} horas.`)

    if(hora >= 0 && hora < 12){
        edc.innerHTML = ('Bom Dia')
        img.src = "fotomanha.jpg"
        document.body.style.background = '#ff443b'

    }else if (hora >= 12 && hora < 18){
        edc.innerHTML = ('Boa Tarde')
        img.src = "fototarde.jpg"
        document.body.style.background = '#e0882f'
        
    }else{
        edc.innerHTML = ('Boa Noite')
        img.src = "fotonoite.jpg"
        document.body.style.background = '#00030a'
    }
    

}