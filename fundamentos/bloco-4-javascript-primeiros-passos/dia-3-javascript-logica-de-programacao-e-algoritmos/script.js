const n = 5;

let asterisco = "";

for(linha = 0; linha < n; linha += 1){
    asterisco += "*";
    for(coluna = 0; coluna < n; coluna += 1){
        asterisco += "\n";
    }
}

console.log(asterisco);