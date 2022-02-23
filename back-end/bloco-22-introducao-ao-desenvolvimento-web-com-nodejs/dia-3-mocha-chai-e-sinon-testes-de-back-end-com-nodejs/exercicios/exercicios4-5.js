const fs = require('fs');

const writeFile = () => {

    const newWfile = fs.writeFileSync('arquivo.txt', 'vqv time')


    return 'ok';
}

module.exports = {
    writeFile
}