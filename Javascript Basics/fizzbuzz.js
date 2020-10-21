function fizzbuzz(n){
    if (n%3==0 && n%5 == 0){
        console.log('fizzbuzz')
    }
    if (n%3 == 0 && n%5 != 0){
        console.log('fizz')
    }
    if (n%5 == 0 && n%3 != 0){
        console.log('buzz')
    }
    if (n%5 != 0 && n%3 != 0){
        console.log('its not divisible by either')
    }
}

fizzbuzz(15)
fizzbuzz(9)
fizzbuzz(20)
fizzbuzz(19)

function fizzer(n) {
    for(var i=0; i<=n.length; i++){
        if (n[i] % 3 == 0 && n[i] % 5 == 0){
            n[i] = 'fizzbuzz';
        }
        if (n[i] % 3 == 0 && n[i] % 5 != 0){
            n[i] = 'fizz';
        }
        if (n[i] % 3 == 0 && n[i] % 5 == 0){
            n[i] = 'buzz';
        }
    }
    console.log(n); 
    return n//0
}
var something = fizzer([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1])
var x = something.toString()
console.log(something)


