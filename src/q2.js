console.log("SORU 2")
function friendNumbers(num1, num2) {
    let total1=0;
    let total2=0;
    for(let i=1;i<num1;i++){
        if(num1%i == 0){
            total1 = total1 + i;
        }
    }
    for(let i=1;i<num2;i++){
        if(num2%i == 0){
            total2 = total2 + i;
        }
      }
    if(total1 == num2 && total2 == num1){
        console.log("Girilen sayilar arkadasdir");
    }
    else{
        console.log("Girilen sayilar arkadas degildir");
    }
    
}
friendNumbers(220,284)