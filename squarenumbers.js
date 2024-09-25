for (let i = 1; i <= 100; i++) {

    let square = i*i;
    
    if (square % i == 0) { //break when find first square number
        console.log("First square number: " + i +" = "+ square);
        break;
    }
}

