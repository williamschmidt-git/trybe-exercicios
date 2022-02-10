const exercicio1 = (...num) => {
    const type = num.every((e) => typeof e === 'number')
    const promise = new Promise ((resolve, reject) => {
        if(!type) reject(new Error("Insira apenas números"))
        
        const resultado = (num[0] + num[1]) * num[2]
        if(resultado < 50){
            reject(new Error("Valor muito baixo"))
        }
        resolve(resultado)
    })

    return promise;
}

exercicio1(10, 10, 3);