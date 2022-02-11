const fs = require('fs').promises;

const file = 'simpsons.json';

//exe4
fs.readFile(file, 'utf-8')
    .then((data) => {
        return JSON.parse(data);
    }).then((result) => {
        result.map((e) => console.log(`${e.id} - ${e.name}`))
    })


