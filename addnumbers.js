let sum = 0;
let num = 1;

while (num <= 100) {

    sum += num;
    console.log("sum"+" = "+sum);

    if (sum >= 100 || num === 100) { // Breaks when sum reaches or exceeds 100
        break;
    }
    
    num++;
}

