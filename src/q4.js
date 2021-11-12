console.log("SORU 4")
for(let i=2;i<=1000;i++){
    let checker = false;
    for(let j=2;j<i;j++){
        if(i%j == 0){
            checker = true;
            break;
        }
    }
    if(checker == false){
        console.log(i)
    }
}