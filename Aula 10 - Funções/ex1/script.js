function parimpar(n){
    if (n % 2 == 0){
        console.log('Par')
        return 'Par'
    }else{
        console.log('Impar')
        return 'Impar'
    }
}

console.log(`O seu número é `+ parimpar(10))