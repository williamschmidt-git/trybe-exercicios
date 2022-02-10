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

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
}
exercicio1(getRandomNumber(), getRandomNumber(), '1')
.then(result => console.log(`O resultado é: ${result}`))
.catch(err => console.log(`erro: ${err.message}`))

module.exp