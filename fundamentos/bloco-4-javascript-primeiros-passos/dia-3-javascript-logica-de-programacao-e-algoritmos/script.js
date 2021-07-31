let n = 5;
let asterisco = "";

if(n > 5){
    for(altura = 0; altura < n; altura += 1){
        for(linha = 0; linha < altura; linha += 1){
            asterisco += "*";
        }
        console.log(asterisco);
    }
}