const fs = require('fs').promises;
const { readFile } = require('fs/promises');
const readline = require('readline');

function question(message) {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(message, (answer) => {
            rl.close()
            resolve(answer);
        });
    });
}

async function start() {
    const fileName = await(question('Digite o caminho: '))

    try {
        const fileContent = await readFile(fileName, 'utf-8');
        console.log(fileContent)
    } catch (error) {
        console.log('arquivo inexistente')
    }
}
start()