console.log("SORU 3")
for (let i = 2; i <= 1000; i++) {
    let total = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            total = total + j;
        }
    }
    if (total == i) {
       console.log(i)
    }
}