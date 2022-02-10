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

async function exercicio1Call(){
    try { //TRY CATCH É PARA FUNCOES SINCRONAS, O ASYNCAWAIT 'TRANSFORMA' NUM CICLO Q RESPEITA A ORDEM
        const result = await exercicio1(getRandomNumber(), getRandomNumber(), getRandomNumber())
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

exercicio1Call();