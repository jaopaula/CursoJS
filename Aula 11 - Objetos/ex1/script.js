let amigo = {nome:'José', 
    sexo:'M', 
    peso:60.0, 
    engordar(p){
        console.log('Engordou')
        this.peso +=p
    }}

amigo.engordar(5.0)
console.group(`O ${amigo.nome} pesa ${amigo.peso}Kg`)