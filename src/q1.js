console.log("SORU 1")
let checker = false
function findPrime(number) {
       for (let index = 2; index < number; index++) {
           if(number%index == 0){
               checker = true
               break;
           }
       }
        if(checker == false){
            console.log("Girdiginiz sayi asaldir")
        }
        else{
            console.log("Girdiginiz sayi asal degildir")
        }
    }
        findPrime(4)
