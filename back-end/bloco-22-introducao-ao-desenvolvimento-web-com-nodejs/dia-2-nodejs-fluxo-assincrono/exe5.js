const fs = require("fs").promises;

const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function createFiles(){
    
    const createFiles = strings.map((e, i) => {
        fs.writeFile(`file${i + 1}.txt`, e)
    })

    await Promise.all(createFiles)
}

const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
]

async function readFiles(){
    const fileContents = await Promise.all(
        fileNames.map((e) => fs.readFile(e, 'utf-8'))
    )

    const newFiles = fileContents.join(' ');
    await fs.writeFile('./fileAll.txt', newFiles);
}

readFiles()