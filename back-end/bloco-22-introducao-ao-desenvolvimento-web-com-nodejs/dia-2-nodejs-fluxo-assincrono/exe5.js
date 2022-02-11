const fs = require("fs").promises;

const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function createFiles(){
    
    const createFiles = strings.map((e, i) => {
        fs.writeFile(`file${i + 1}.txt`, e)
    })

    await Promise.all(createFiles)
}

createFiles()