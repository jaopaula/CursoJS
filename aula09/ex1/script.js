let num = [5,4,3,2,1,0]
num.length = 5 //tamanho máximo de elementos
num.sort()//ordena
num.push(55) //cria e coloca no último slot automaticamente
num[6]= 10 //colocou no slot desejado (6, que foi criado por ele mesmo)
console.log (`Nosso vetor contém: ${num}`)
console.log (`Quantidade vetores: ${num.length}`)
console.log (`Vetor primeiro slot: ${num[1]}`)
