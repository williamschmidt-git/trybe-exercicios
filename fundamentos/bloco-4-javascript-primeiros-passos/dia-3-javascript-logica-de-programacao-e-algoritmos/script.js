let n = 5;
let asterisco = "";

if(n > 1){
    for(row = 0; row < n; row += 1){
        for(spaces = n - 1; spaces > row; spaces -= 1){
            asterisco += " ";
        }
        for(column = 0; column <= row  - (n - 3); column += 1){
            asterisco += "*";
        }
        for(column = 0; column < row - (n - 3); column += 1){
            asterisco += "*";
        }
        asterisco += "\n";
    }

    // for (row = 0; row <= n; row += 1){
    //     for(esquerda = 0; esquerda <= row; esquerda += 2){
    //         asterisco += "-";
    //     }
        
    //     for (column = 0; column < row; column += 1){
    //         for(piramide = 1; piramide < column; piramide += 1){
    //             asterisco += "*";
    //         } 
    //     }

    //     asterisco += "\n";
    // }

    // for(row = 0; row < n; row += 1){
    //     for(spaces = n - 1; spaces > row; spaces -= 2){
    //         asterisco += "-";
    //     }
    // }
}

console.log(asterisco);