const n = 5;

let asterisco = "";

if(n > 1){
    for(height = 1; height < n; height += 1){
        for(spaces = n - 1; spaces >= height; spaces -= 1){
            asterisco += " ";
        }

        for(line = 0; line <= height; line += 1){
            asterisco += "*";
        }
        asterisco = "\n"
    }

    // for(line = 0; line < n; line += 1){
    //     for(i = 0; i < n; i += 1){
    //         asterisco += "*";
    //     }
    //     asterisco += "\n"; 
    // }
}



console.log(asterisco);